import "./HomeSection.css"
import OpenFdaApiMainLink from "./OpenFdaApiMainLink"
import SupplementsApiMainLink from "./SupplementsApiMainLink"

export default function HomeSection() {
    return (
        <section className="home-section">
            <OpenFdaApiMainLink />
            <SupplementsApiMainLink />
        </section>
    )
}