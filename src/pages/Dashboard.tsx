import { useEffect } from 'react';
import { api } from '../services/api';
import { getAuth } from 'firebase/auth';

const Dashboard = () => {
    useEffect(() => {
        async function getTransactions() {
            const auth = getAuth();
            const user = auth.currentUser;

            if (!user) {
                console.error("Usuário não autenticado");
                return;
            }

            // Pega o token JWT do Firebase
            const token = await user.getIdToken();

            const response = await api.get('/transactions', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log(response.data);
        }

        getTransactions();
    }, []);

    return (
        <div>
            <h1>Dashboard - Em Construção</h1>
        </div>
    );
};

export default Dashboard;
