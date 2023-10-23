export default function RouterHelper(server,router){
    server.post('/landlord/login', (req, res) => {
 
        res.status(201).json(router.db.get('posts'));
      });
}