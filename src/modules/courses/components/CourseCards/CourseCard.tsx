interface ICourseCardProps {
    image: string;
    imageColor: string;
    name: string;
}

export default function CourseCard({image, imageColor, name}: ICourseCardProps) {
    
    return (
      <div style={{'display': 'flex', 'flexFlow': 'column', 'backgroundColor': imageColor}}>
        <img style={{'height': '162px', 'margin': 'auto'}} src={image} alt={name}></img>
        <div style={{'minHeight': '48px', 'backgroundColor': 'white'}}>{name}</div>
      </div>
    );
}