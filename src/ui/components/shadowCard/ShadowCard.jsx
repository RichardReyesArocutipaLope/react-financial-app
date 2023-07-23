import './ShadowCard.css'

export const ShadowCard = ({ children, width = '30rem', height = '50rem' }) => {
    return (
        <div class="shadow-card__container" style={{ width, height }}>
            <div class="shadow-card">
                {children}
            </div>
        </div>
    )
}
