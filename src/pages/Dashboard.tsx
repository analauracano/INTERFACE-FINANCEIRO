import { useEffect, useState } from 'react';
// import { api } from '../services/api';
import { getAuth } from 'firebase/auth';
import MonthYearSelect from '../components/MonthYearSelect';
import { getTransactionsSummary } from '../services/transactionService';
import type { TransactionSummary } from '../types/transactions';
import Card from '../components/Card';
import { ArrowUp, Wallet } from 'lucide-react'
import { formatCurrency } from '../utils/formatter';

const initialSummary: TransactionSummary = {
    totalExpenses: 0,
    totalIncomes: 0,
    totalBalance: 0,
    expensesByCategory: [],
}

const Dashboard = () => {
    const currentDate = new Date();
    const [year, setYear] = useState<number>(currentDate.getFullYear());
    const [month, setMonth] = useState(currentDate.getMonth() + 1);
    const [summary, setSummary] = useState<TransactionSummary>(initialSummary);

    useEffect(() => {
        async function loadTransactionsSummary() {
            const auth = getAuth();
            const user = auth.currentUser;

            if (!user) {
                console.error("Usuário não autenticado");
                return;
            }

            // Pega o token JWT do Firebase
            // const token = await user.getIdToken();

            const response = await getTransactionsSummary(month, year);

            // const response = await api.get('/transactions', {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // });

            setSummary(response);
        }

        loadTransactionsSummary();
    }, [month, year]);

    return (
        <div className='container-app py-6'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
                <h1 className='text-2xl font-bold mb-4 md:mb-0'>Dashboard</h1>
                <MonthYearSelect month={month} year={year} onMonthChange={setMonth} onYearChange={setYear} />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <Card 
            icon={<Wallet size={20}
            className='text-primary-500'/>}
            title='Saldo'
            hover
            glowEffect={summary.totalBalance > 0}>
                <p className={`text-2xl font-semibold mt-2
                ${summary.totalBalance > 0 ? 'text-primary-500' : 'text-red-600'}`}>
                    {formatCurrency(summary.totalBalance)}
                </p>
            </Card>

             <Card 
            icon={<ArrowUp size={20}
            className='text-primary-500'/>}
            title='Receitas'
            hover
            >
                <p className='text-2xl font-semibold mt-2 text-primary-500'
            >
                    {formatCurrency(summary.totalIncomes)}
                </p>
            </Card>

             <Card 
            icon={<Wallet size={20}
            className='text-red-700'/>}
            title='Despesas'
            hover
            >
                <p className='text-2xl font-semibold mt-2 text-red-600'>
                    {formatCurrency(summary.totalExpenses)}
                </p>
            </Card>
            </div>
        </div>
    );
};

export default Dashboard;
