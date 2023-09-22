import Card from '../components/Card'
import InlineCode from '../components/InlineCode'

export default function Code() {
  return (
    <section id="code">
      <h2 className="font-semibold mb-4">Code bites & experiments</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-28">
        <Card link="https://github.com/zhabinskiy/threejs-5" title="Chart">
          Explored the possibilities of <InlineCode>threejs</InlineCode> for
          data visualization (ongoing task at a time at Edgar Allan).
        </Card>

        <Card
          link="https://github.com/zhabinskiy/threejs-2"
          title="Physics-based drag"
        >
          Physics-based draggable objects and light sources.
        </Card>

        <Card link="https://github.com/zhabinskiy/threejs-4" title="Kangaroo">
          Tested polycount and tonemap possibilities, as well as drag controls.
        </Card>

        <Card
          link="https://github.com/zhabinskiy/threejs-3"
          title="Scroll 3D animations"
        >
          Tinkered with the on-scroll 3D animations in{' '}
          <InlineCode>react-three-fiber</InlineCode>.
        </Card>

        <Card link="https://codesandbox.io/s/ea-test-3-rnebjy" title="Room">
          Tested baked materials workflow in <InlineCode>blender</InlineCode>.
        </Card>
      </div>
    </section>
  )
}
