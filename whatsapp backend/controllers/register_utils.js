import { supabase, Whatsapp } from "../supabaseconf.js";




const check_regis = async (incomingMessage, recipientPhone) => {

    const { data: users, error } = await supabase
        .from('users')
        .select('id')
        .eq('phno', recipientPhone);

    console.log(users);

    if (error) {
        console.error('Error checking user:', error.message);
        return res.status(500)
    }

    if (users.length > 0) {
        // User exists, send a reply

        return true;

    }
    else {

        //User doesn't exist, ask them to register
        await Whatsapp.sendSimpleButtons({

            message: "Hey  \nYou are speaking to a Invest AI.\n You need to register first.",
            recipientPhone: recipientPhone,
            listOfButtons: [
                {
                    title: 'Register',
                    id: 'register',
                },
                

            ],
        });

        return false;
    }


}

const to_register = async (incomingMessage, typeOfMsg) => {

    
        const userinfo = incomingMessage.from;
        const { data, error } = await supabase
            .from('users')
            .insert([{ phno: userinfo.phone, name: userinfo.name}])
            .select();

        console.log(data);
        if (data) {
            await Whatsapp.sendText({
                recipientPhone: incomingMessage.from.phone,
                message: `hey  ${incomingMessage.from.name} you have been registered successfully`,
            });
        }

        return "registered";
    }





export { check_regis, to_register };
