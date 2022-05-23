const Canvas = require('canvas');
const av = {
    size: 256,
    x: 480,
    y: 170
}
const background = "https://i.imgur.com/zvWTUVu.jpeg"
const dim = {
    height: 675,
    width: 1200,
    margin: 50
}


const generateImage = async (member) => {
    let username = member.user.username;
    let discrim = member.user.discriminator;
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: false, size: av.size});


    const canvas = Canvas.createCanvas(dim.width, dim.height);
    const ctx = Canvas.getContext('2d')
    const backimg = await Canvas.loadImage(background);

    ctx.drawImage(backimg, 0, 0)
    ctx.fillStyle = "rgba(0,0,0,0.8)"
    ctx.drawRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin);
    const avimg = await Canvas.loadImage(avatarURL)}