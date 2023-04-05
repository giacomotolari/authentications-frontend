

export default async function User() {

  const dynamicData = await fetch(`https://...`, { cache: 'no-store' });



  return (
      <h1>User</h1>
    );
  }
  