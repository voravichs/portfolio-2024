import BentoBox from '../components/BentoBox'

/**
 * Home Page
 */
export default function Home() {
    return (
        <>
            <div className="grid grid-cols-2 gap-8 mx-16 mt-8">
                <BentoBox height={96}/>
                <BentoBox/>
                <BentoBox/>
                <BentoBox/>
                <BentoBox/>
                <BentoBox/>
            </div>
        </>
    )
}