import * as Yup from 'yup';

export const DataSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(1, 'Minimum length of 1')
    .required('**Required'),
  email: Yup.string()
    .email('Invalid Email')
    .required('**Required'),
  password: Yup.string()
    .min(6, 'Minimum length of 8 characters')
    .required('**Required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(6, 'Minimum length of 8 characters')
    .required('**Required'),
});
export const SignInDataSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email')
    .required('**Required'),
  password: Yup.string()
    .min(6, 'Minimum length of 8 characters')
    .required('**Required'),
});

export const signupInitialValues = {
  fullname: '',
  email: '',
  password: '',
  confirm_password: '',
};
export const signinInitialValues = {
  email: '',
  password: '',
};

export const appData = {
  bio: {
    id: '',
    fullname: '',
    email: '',
    password: '',
    avatar: '',
    occupation: '',
    isSignedIn: false,
  },
  wishList: [],
  cartList: [],
  creditCardList: [],
  orderList: [],
  addressList: [],
};

export const itemData = {
  id: '',
  images: [],
  name: '',
  price: '',
  discounted: false,
  discountPrice: '',
  colors: [], //{name: red}...
  brand: '', //Gucci, Fendi...
  sex: '', //MALE, FEMALE
  sizes: '',
  type: '', //TOPWEAR, BOTTOMWEAR...SHOE, BAG, WATCH
  category: '', //Men, Women, Kids, Others={Bags, shoes
  wished: false,
  carted: false,
  ordered: false,
  orderInfo: {
    quantity: 0,
    color: '',
    size: '',
  },
  tag: [], //{name: TShirt}, {name: Jeans}, {name: WaistCoat}
  itemsSold: '',
};

export const creditCard = {
  id: '',
  name: '',
  number: '',
  cvv: '',
  valid: '',
  type: '',
};

export const address = {
  id: '',
  mainRoad: '',
  fullAddress: '',
  town: '',
  state: '',
  mobileNumber: '',
  isDefault: false,
  isSelected: 'false',
};
