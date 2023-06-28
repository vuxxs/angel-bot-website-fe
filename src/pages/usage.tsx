import ExpandableText from "@/components/ExpandableText";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import axios from "axios";
import { GetStaticProps } from "next";
import { FC } from "react";

interface Command {
  name: string;
  description: string;
}

interface UsagePageProps {
  commands: Command[];
}

const UsagePage: FC<UsagePageProps> = ({ commands }) => {
  return (
    <Layout>
      <h1 className="text-center text-2xl font-bold mb-8 -ox">Usage</h1>
      <div className="flex flex-col items-center">
        {commands.map((command, index) =>
          command.description ? (
            <ExpandableText
              key={index}
              name={command.name}
              description={command.description}
            />
          ) : null
        )}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<UsagePageProps> = async () => {
  const { data: files } = await axios.get(
    "https://api.github.com/repos/vuxxs/angel-bot/contents/src/commands",
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`, // FIXME remove token requirement in production
      },
    }
  );

  const commands: Command[] = await Promise.all(
    files.map(async (file: any) => {
      if (file.type === "file") {
        const content = await axios.get(file.url, {
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3.raw",
          },
        });

        const nameMatch = content.data.match(/name:\s*"([^"]*)"/);
        const descriptionMatch = content.data.match(/description:\s*"([^"]*)"/);

        if (nameMatch && descriptionMatch) {
          return {
            name: nameMatch[1],
            description: descriptionMatch[1],
          };
        }
      }
    })
  );

  const commandsWithDescription = commands.filter(
    (command: Command | undefined) => command && command.description
  );

  return {
    props: {
      commands: commandsWithDescription,
    },
  };
};

export default UsagePage;
