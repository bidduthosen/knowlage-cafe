import profilePc from '../../assets/images/profile.png'
const Header = () => {
    return (
        <section className='max-w-screen-xl mx-auto bg-slate-100 px-6'>
            <div className='flex justify-between items-center py-6'>
                <h3 className='font-bold text-3xl'>Knowlage cafe</h3>
                <img src={profilePc} alt="" />
            </div>
        </section>
    );
};

export default Header;