import './MirrorCard.css'

export const MirrorCard = ({children, width='30rem', height='40rem'}) => {
    return (
        <div class="mirror-card" style={{width,height}}>
            <div class="mirror-card__content">
                {children}
            </div>
        </div>
    )
}
