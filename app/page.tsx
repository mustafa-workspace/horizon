import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from '@/components/TotalBalanceBox';
import '@/public/src/index.css';
export default function Home() {
  const LoggedIn = {firstName: 'Adrian'}
  return (
   <>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title='Welcome'
              user={LoggedIn?.firstName || 'Guest'} 
              subtext="Access and manage your account and transcations efficiently. "
            />
            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={15035623}
            />
          </header>
        </div>
      </section>
   </>
  );
}
