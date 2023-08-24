import { supabase } from "../supabaseconf.js";



const addtodb = async (data) => {
    try {
      // Insert data into the table using Supabase client
      const { data: insertedData, error } = await supabase
        .from('users')  // Replace 'your_table_name' with your actual table name
        .upsert([{  phno }]);
  
      if (error) {
        throw error;
      }
  
      console.log('Data inserted:', insertedData);
      return insertedData;
    } catch (error) {
      console.error('Error adding data:', error.message);
      throw error;
    }
  }
  


const getfromdb = async (item,data) => {
    try {
        // Insert data into the table using Supabase client
        const { data: insertedData, error } = await supabase
        .from('users')
        .select('id')
        .eq(item, data);

        if (error) {
        throw error;
        }

        console.log('Data inserted:', insertedData);
        return insertedData;
    } catch (error) {
        console.error('Error adding data:', error.message);
        throw error;
    }
    }



  export { addtodb,getfromdb };