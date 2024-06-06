import { useDispatch } from 'react-redux';
import { Ecommerce_Router } from './Ecommerce_Router/Ecommerce_Router';
import supabase from './supabase';
import { setUser } from './slices/userSlice';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();
  const getUser = async () => {
    const { data, error } = await supabase.auth.getSession();
    if(data.session){
      dispatch(setUser(data.session.user))
    }else{
      console.log(error);
    }
  }

  useEffect(()=>{
    getUser()
  },[])

  return (
    <Ecommerce_Router />
  );
}

export default App;