export default async function requestUser(context: any) {
  try {
    const cookie = context.req.headers.cookie;
    const response = await fetch("http://localhost:3001/session", {
      headers: {
        cookie: cookie,
      },
    });

    if (!response.ok) {
      return {
        redirect: {
          destination: "/404",
          permanent: false,
        },
      };
    }

    const json = await response.json();

    return {
      props: {
        user: json.user,
        guilds: json.guilds,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
