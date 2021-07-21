const getCustomer = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1, 
        name: 'Mosh Hamedani',
        isGold: true, 
        email: 'email'
      });
    }, 4000);
  });
}

const getTopMovies = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  });
}

const sendEmail = async (email, movies) => {
  return  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}

async function notifyCustomer() {
  const customer = await getCustomer(1);
  console.log(`Customer:`, customer);
  if (customer.isGold) {
    const movies = await getTopMovies();
    console.log('Top movies: ', movies);
    await sendEmail(customer.email, movies);
    console.log('Email sent...');
  }
}
notifyCustomer();
