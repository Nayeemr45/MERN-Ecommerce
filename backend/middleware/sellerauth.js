import jwt from 'jsonwebtoken';

const secret = 'test';

const sellerauth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);

      req.sellerId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.sellerId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default sellerauth;
