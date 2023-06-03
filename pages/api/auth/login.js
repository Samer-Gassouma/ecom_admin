

export default function Login() {

    const {username, password} = req.body;

    console.log(username, password);

    return res.status(200).json({username, password});
}