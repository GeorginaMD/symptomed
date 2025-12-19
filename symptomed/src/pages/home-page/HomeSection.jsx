import "./HomeSection.css"
import OpenFdaApiMainLink from "./OpenFdaApiMainLink"
import SupplementsApiMainLink from "./SupplementsApiMainLink"

export default function HomeSection() {
    return (
        <section className="home-section">
            
            <p>test home page</p>
            <OpenFdaApiMainLink />
            <SupplementsApiMainLink />

        </section>
    )
}