/*
 
ACT problems
============
This a direct copy of the problems available in ACT's online exam [1].
[1]: http://www.actstudent.org/sampletest/
 
 
Useful Commands
===============
The following are helpful for making that port.
 
1. discussion
 
    Put correct/incorrect label on the same line as explanation
 
        find: \n^(.[^h][^2].*)
        replace: \1
 
    Tidy up
    Remove useless bits of markup
 
        find: <h2 class="i">Incorrect</h2>.*\n?
        find: <h2 class="c">Correct!</h2>
        find: ^<div><img src="http://media.actstudent.org/images/.{0,20}" .{0,30}/><a class="close-reveal-modal">&times;</a></div>
        find: <a class="close-reveal-modal">&times;</a></div>.{0,80}<div id=".{0,4}" class="reveal-modal">
        find: The correct (response|answer) is .. 
        find: (This is the correct response. |You are correct. |This is the correct answer. |You got the correct answer. )
        replace: 
 
    Clean quotes
 
        find: "
        replace: '
        
Porting Videos
==============
It schooltube is more widely used in schools.  So my videos
should be there instead.

  1. Download from youtube [1]
  2. Upload to schooltube [2]
  
  [1]: https://www.youtube.com/my_videos
  [2]: http://www.schooltube.com/video/upload/


 
*/

var test = "math";
var problems = [{
    "section": 1,
    "number": 1,
    "prompt": "A car averages 27 miles per gallon. If gas costs $4.04 per gallon, which of the following is closest to how much the gas would cost for this car to travel 2,727 typical miles?",
    "options": {"A": "$&nbsp;&nbsp;44.44",
                "B": "$109.08",
                "C": "$118.80",
                "D": "$408.04",
                "E": "$444.40"},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>If you ", "content": "<p>If you divide 2,727 miles by 27 miles per gallon you will get the number of gallons: <img src='http://media.actstudent.org/images/a1_1d.gif' /> = 101. Then, multiply the number of gallons by the cost per gallon: 101(4.04) = 408.04. This gives the cost of gas for this car to travel 2,727&nbsp;typical miles.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "D"
}, {
    "section": 1,
    "number": 2,
    "prompt": "When <i>x</i> = 3 and <i>y</i> = 5, by how much does the value of 3<i>x</i><sup>2</sup> &ndash; 2<i>y</i> exceed the value of 2<i>x</i><sup>2</sup> &ndash; 3<i>y</i> ?",
    "options": {"F": "&nbsp;&nbsp;4",
                "G": "14",
                "H": "16",
                "I": "20",
                "J": "50"},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>14 is t", "content": "<p>14 is the correct answer. When you use <i>x</i> = 3 and <i>y</i> = 5 in the given expressions, 3<i>x</i><sup>2</sup> &ndash; 2<i>y</i> = 3(3)<sup>2</sup> &ndash; 2(5) = 27 &ndash; 10 = 17 and 2<i>x</i><sup>2</sup> &ndash; 3<i>y</i> = 2(3)<sup>2</sup> &ndash; 3(5) = 18 &ndash; 15 = 3. Then subtract 3 from 17 to get 14.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",
        },
    ],},
    "answer": "G"
}, {
    "section": 1,
    "number": 3,
    "prompt": "What is the value of <i>x</i> when 2<i>x</i> + 3 = 3<i>x</i> &ndash; 4 ?",
    "options": {"A": "&nbsp;&ndash;7",
                "B": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s1_q3_answer_b.gif' alt='negative one fifth' height='25' width='20' />",
                "C": "&nbsp;&nbsp;1",
                "D": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s1_q3_answer_d.gif' alt='one fifth' height='25' width='20' />",
                "E": "&nbsp;&nbsp;7",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>You can", "content": "<p>You can solve this problem by first subtracting 2<i>x</i> from each side of the equation to get 3 = <i>x</i> &ndash; 4. Then add 4 to each side, so <i>x</i> = 7.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "E"
}, {
    "section": 1,
    "number": 4,
    "prompt": "What is the greatest common factor of 42, 126, and 210 ?",
    "options": {"F": "&nbsp;&nbsp;2",
                "G": "&nbsp;&nbsp;6",
                "H": "14",
                "J": "21",
                "K": "42",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>42 is t", "content": "<p>42 is the correct answer since it is the largest number that is a factor of all three numbers given. You can find the greatest common factor by writing out the prime factorization of all three numbers, and then taking each of the common prime factors to the lowest power that appears for that factor: 42 = 2 &times; 3 &times; 7; 126 = 2 &times; 3<sup>2</sup> &times; 7; and 210 = 2 &times; 3 &times; 5 &times; 7. So the greatest common factor is 2 &times; 3 &times; 7 = 42.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "K"
}, {
    "section": 1,
    "number": 5,
    "prompt": "Sales for a business were 3&nbsp;million dollars more the second year than the first, and sales for the third year were double the sales for the second year. If sales for the third year were 38&nbsp;million dollars, what were sales, in millions of dollars, for the first year?",
    "options": {"A": "16",
                "B": "17.5",
                "C": "20.5",
                "D": "22",
                "E": "35",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>If <i>x", "content": "<p>If <i>x</i> = sales for the first year, then <i>x</i> + 3 = sales for the second year. Since sales for the third year were double the sales for the second year, sales for the third year = 2(<i>x</i> + 3). Sales for the third year were 38, so 2(<i>x</i> + 3) = 38. To solve this equation, you could first divide each side by 2 to get <i>x</i> + 3 = 19. Then, by subtracting 3 from both sides, <i>x</i> = 16.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "A"
}, {
    "section": 1,
    "number": 6,
    "prompt": "In the figure below, ray <img src='//dl.dropboxusercontent.com/u/1131693/act/s1_q6_q1.gif' alt='EF' height='16' width='20' /> was constructed starting from rays <img src='//dl.dropboxusercontent.com/u/1131693/act/s1_q6_q2.gif' alt='ED' height='16' width='20' /> and <img src='//dl.dropboxusercontent.com/u/1131693/act/s1_q6_q3.gif' alt='EG' height='16' width='20' />. By using a compass, <i>D</i> and <i>G</i> were marked equidistant from <i>E</i> on rays <img src='//dl.dropboxusercontent.com/u/1131693/act/s1_q6_q2.gif' alt='ED' height='16' width='20' /> and <img src='//dl.dropboxusercontent.com/u/1131693/act/s1_q6_q3.gif' alt='EG' height='16' width='20' />. The compass was then used to locate a point <i>F</i>, distinct from <i>E</i>, so that <i>F</i> is equidistant from <i>D</i> and <i>G</i>. For all constructions defined by the above steps, the measures of <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>DEF</i> and <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>GEF</i>: <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/GID_6146.gif' height='90' width='108' /></div>",
    "options": {"F": "are equal.",
                "G": "are NOT equal.",
                "H": "sum to 30&deg;.",
                "J": "sum to 45&deg;.",
                "K": "sum to 60&deg;.",},
    "discussion": {"contributions": [ 
        {"type": "contribution", "id": "<p>If you ", "content": "<p>If you draw line segments <i style='text-decoration: overline;'>DF</i> and <i style='text-decoration: overline;'>FG</i>, you can show  <img src='http://media.actstudent.org/images/triangle.gif' alt='triangle' height='11' width='12' /><i>DEF</i> <img src='http://media.actstudent.org/images/equaltilde.gif' alt='is congruent to' height='9' width='9' /> <img src='http://media.actstudent.org/images/triangle.gif' alt='triangle' height='11' width='12' /><i>GEF</i> by SSS (side-side-side congruence). So, <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>DEF</i> <img src='http://media.actstudent.org/images/equaltilde.gif' alt='is congruent to' height='9' width='9' /> <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>GEF</i> because corresponding parts of congruent triangles are congruent.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/fdda0530fa814f82828f/' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "F"
}, {
    "section": 1,
    "number": 7,
    "prompt": "Abandoned mines frequently fill with water. Before an abandoned mine can be reopened, the water must be pumped out. The size of pump required depends on the depth of the mine. If pumping out a mine that is <i>D</i> feet deep requires a pump that pumps a minimum of <img src='//dl.dropboxusercontent.com/u/1131693/act/s1_q7_q1.gif' alt='D squared over 25' align='absmiddle' height='25' width='20' /> + 4<i>D</i> &ndash; 250 gallons per minute, pumping out a mine that is 150&nbsp;feet deep would require a pump that pumps a minimum of how many gallons per minute?",
    "options": {"A": "&nbsp;&nbsp;362",
                "B": "&nbsp;&nbsp;500",
                "C": "&nbsp;&nbsp;800",
                "D": "1,250",
                "E": "1,750",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>If you ", "content": "<p>If you substitute <i>D</i> with 150 in the expression, you get <img src='http://media.actstudent.org/images/a1_7d1.gif' /> + 4(150) &ndash; 250 = <img src='http://media.actstudent.org/images/a1_7d2.gif' /> + 600 &ndash; 250 = 1,250.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/da490e1d5a0441b7abe6' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "D"
}, {
    "section": 1,
    "number": 8,
    "prompt": "The length, in inches, of a box is 3 inches less than twice its width, in inches. Which of the following gives the length, <i>l</i>&nbsp;inches, in terms of the width, <i>w</i> inches, of the box?",
    "options": {"F": "<i>l</i> = <img src='//dl.dropboxusercontent.com/u/1131693/act/1_2.gif' alt='one half' align='absmiddle' height='27' width='11' /><i>w</i> + 3",
                "G": "<i>l</i> =  &nbsp;<i>w</i> + 3",
                "H": "<i>l</i> =  &nbsp;<i>w</i> &ndash; 3",
                "J": "<i>l</i> = 2<i>w</i> + 3",
                "K": "<i>l</i> = 2<i>w</i> &ndash; 3",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>Twice a", "content": "<p>Twice a number means to multiply the number by 2, and 3 less than a number means to subtract 3 from the number. Combining these, you get <i>l</i> = 2<i>w</i> &ndash; 3.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/3cd073087192455db85d' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "K"
}, {
    "section": 1,
    "number": 9,
    "prompt": "In quadrilateral <i>PQRS</i> below, sides <i style='text-decoration: overline;'>PS</i> and <i style='text-decoration: overline;'>QR</i> are parallel for what value of <i>x</i> ? <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/math_set1_9.gif' height='91' width='178' /></div>",
    "options": {"A": "158",
                "B": "132",
                "C": "120",
                "D": "110",
                "E": "&nbsp;&nbsp;70",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>The que", "content": "<p>The question states that <i style='text-decoration: overline;'>PS</i> and <i style='text-decoration: overline;'>QR</i> are parallel. If you treat <i style='text-decoration: overline;'>PQ</i> as a transversal, then <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>P</i> and <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>Q</i> are interior angles on the same side of a transversal, so their measures add up to 180&deg;. Since the measure of <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>P</i> is 70&deg;, the measure of <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>Q</i> is 180&deg; &ndash; 70&deg; = 110&deg;.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/889a639befb64350b046' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "D"
}, {
    "section": 1,
    "number": 10,
    "prompt": "How many irrational numbers are there between 1 and 6 ?",
    "options": {"F": "&nbsp;&nbsp;1",
                "G": "&nbsp;&nbsp;3",
                "H": "&nbsp;&nbsp;4",
                "J": "10",
                "K": "Infinitely many",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>1 and 6", "content": "<p>1 and 6 are real numbers and that there are an infinite number of irrational numbers between any two real numbers.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/67da58bd4cc946199914' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "K"
}, {
    "section": 1,
    "number": 11,
    "prompt": "A typical high school student consumes 67.5&nbsp;pounds of sugar per year. As part of a new nutrition plan, each member of a track team plans to lower the sugar he or she consumes by at least 20% for the coming year. Assuming each track member had consumed sugar at the level of a typical high school student and will adhere to this plan for the coming year, what is the maximum number of pounds of sugar to be consumed by each track team member in the coming year?",
    "options": {"A": "14",
                "B": "44",
                "C": "48",
                "D": "54",
                "E": "66",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>For eac", "content": "<p>For each member of the track team to consume 20% less sugar, the track member will consume 100% &ndash; 20% = 80% of the level of a typical high school student. 80% of 67.5 = 0.80(67.5) = 54.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/ffe650182dae4130b653' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "D"
}, {
    "section": 1,
    "number": 12,
    "prompt": "In the standard (<i>x</i>, <i>y</i>) coordinate plane below, 3 of the vertices of a rectangle are shown. Which of the following is the 4th vertex of the rectangle? <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/GID_6262.gif' height='149' width='173' /></div>",
    "options": {"F": "(3,&ndash;7)",
                "G": "(4,&ndash;8)",
                "H": "(5,&ndash;1)",
                "J": "(8,&ndash;3)",
                "K": "(9,&ndash;3)",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>When mo", "content": "<p>When moving from (2,1) to (&ndash;1,&ndash;1), you can go 3&nbsp;units left and 2 units down. Since you want to form a rectangle, you will need to move in the same pattern from (6,&ndash;5) to the 4th vertex. Subtract 3 from the <i>x</i>-value, and subtract 2 from the <i>y</i>-value, and you will find the point needed: (6 &ndash; 3, &ndash;5 &ndash; 2) = (3,&ndash;7).</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "F"
}, {
    "section": 2,
    "number": 1,
    "prompt": "The <i>lead</i> of a screw is the distance that the screw advances in a straight line when the screw is turned 1&nbsp;complete turn. If a screw is 2<img src='//dl.dropboxusercontent.com/u/1131693/act/1_2.gif' alt='one half' align='absmiddle' height='27' width='11' />&nbsp;inches long and has a lead of  <img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q1_q2.gif' alt='one-eighth' align='absmiddle' height='25' width='16' />&nbsp;inch, how many complete turns would get it all the way into a piece of wood?",
    "options": {"A": "&nbsp;&nbsp;5",
                "B": "10",
                "C": "15",
                "D": "20",
                "E": "25",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>20 is t", "content": "<p>20 is the correct answer. With every complete turn <img src='http://media.actstudent.org/images/s2_q1_q2.gif' alt='one-eighth' align='absmiddle' height='25' width='16' /> inch of the screw goes into the wood. So after 8 complete turns, 1 inch of the screw would be in the wood. So, <i>x</i>(<img src='http://media.actstudent.org/images/s2_q1_q2.gif' alt='one-eighth' align='absmiddle' height='25' width='16' />) = 2<img src='http://media.actstudent.org/images/1_a1.gif' alt='one-half' align='absmiddle' />. Multiplying by 8, <i>x</i> = 8(2<img src='http://media.actstudent.org/images/1_a1.gif' alt='one-half' align='absmiddle' />) = 8(<img src='http://media.actstudent.org/images/1_a.gif' alt='five-halves' align='absmiddle' />) = 20.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/389c3d70a5644ec8a721' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "D"
}, {
    "section": 2,
    "number": 2,
    "prompt": "If <i>xy</i> = 144, <i>x</i> + <i>y</i> = 30, and <i>x</i> &gt; <i>y</i>, what is the value of <i>x</i> &ndash; <i>y</i> ?",
    "options": {"F": "&nbsp;&nbsp;4",
                "G": "&nbsp;&nbsp;6",
                "H": "18",
                "J": "22",
                "K": "24",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>Solve t", "content": "<p>Solve the first equation for <i>y</i>, <i>y</i> = <img src='http://media.actstudent.org/images/144_x.gif' alt='144 over x' />. Then substitute <img src='http://media.actstudent.org/images/144_x.gif' alt='144 over x' /> for <i>y</i> in the second equation: <i>x</i> + <img src='http://media.actstudent.org/images/144_x.gif' alt='144 over x' /> = 30. Multiplying each side by <i>x</i>, <i>x</i><sup>2</sup> + 144 = 30<i>x</i>. Subtracting 30<i>x</i> from each side, <i>x</i><sup>2</sup> &ndash; 30<i>x</i> + 144 = 0. You could solve this equation by factoring: (<i>x</i> &ndash; 24)(<i>x</i> &ndash; 6) = 0, and then setting each factor equal to zero, <i>x</i> = 24 or <i>x</i> = 6. However <i>x</i> = 6 will not work (if <i>x</i> = 6 then <i>y</i> = 24, but the problem says that <i>x</i> &gt; <i>y</i>). So, <i>x</i> = 24. Putting this value of <i>x</i> back into either of the original equations, <i>y</i> = 6. Then <i>x</i> &ndash; <i>y</i> = 24 &ndash; 6 = 18.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/f7588a89ab27453dbd73' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "H"
}, {
    "section": 2,
    "number": 3,
    "prompt": "Which of the following is the sine of <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>A</i> in the right triangle below? <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/GID_1827.gif' height='168' width='83' /></div>",
    "options": {"A": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q3_answer_a.gif' alt='five over thirteen' height='25' width='16' />",
                "B": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q3_answer_b.gif' alt='five over twelve' height='25' width='16' />",
                "C": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q3_answer_c.gif' alt='twelve over thirteen' height='25' width='16' />",
                "D": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q3_answer_d.gif' alt='twelve over five' height='25' width='16' />",
                "E": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q3_answer_e.gif' alt='thirteen over five' height='25' width='16' />",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>In a ri", "content": "<p>In a right triangle, the sine of one of the acute angles is the length of the leg opposite that angle divided by the length of the hypotenuse.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/45812358800d4d0b825b' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "C"
}, {
    "section": 2,
    "number": 4,
    "prompt": "Ding&rsquo;s Diner advertised this daily lunch special: &ldquo;Choose 1 item from each column&mdash;only $4.95!&rdquo; Thus, each daily lunch special consists of a salad, a soup, a sandwich, and a drink. <table class='table'> <thead> <tr> <th scope='col'>Salads</th><th scope='col'>Soups</th><th scope='col'>Sandwiches</th><th scope='col'>Drinks</th> </tr> </thead> <tbody><tr valign='top'> <td>cole slaw<br />lettuce<br />potato</td> <td>onion<br />tomato</td> <td>meat&nbsp;loaf<br />chicken<br />hamburger<br />ham<br />tenderloin</td> <td>milk<br />cola<br />coffee<br />tea</td> </tr> </tbody> </table> How many different daily lunch specials are possible?",
    "options": {"F": "&nbsp;&nbsp;&nbsp;&nbsp;4",
                "G": "&nbsp;&nbsp;14",
                "H": "&nbsp;&nbsp;30",
                "J": "120",
                "K": "180",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>The cor", "content": "<p>The correct response is 120. By the fundamental counting principle, the number of different possible lunch specials is 3(2)(5)(4).</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "J"
}, {
    "section": 2,
    "number": 5,
    "prompt": "The volume, <i>V</i>, of the right circular cone with radius <i>r</i> and height&nbsp;<i>h</i>, shown below, can be found using the formula <i>V</i> = <img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q5_q1.gif' alt='one-third' align='absmiddle' height='25' width='16' /><img src='//dl.dropboxusercontent.com/u/1131693/act/pi.gif' alt='pi' height='11' width='11' />&nbsp;<i>r</i><sup>2</sup><i>h</i>. A cone-shaped paper cup has a volume of 142&nbsp;cubic centimeters and a height of  8.5&nbsp;centimeters. What is the radius, to the nearest  centimeter, of the paper cup? <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/GID_6206.gif' height='116' width='83' /></div>",
    "options": {"A": "&nbsp;&nbsp;2",
                "B": "&nbsp;&nbsp;4",
                "C": "&nbsp;&nbsp;8",
                "D": "12",
                "E": "16",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>Solving", "content": "<p>Solving for <i>r</i>&nbsp;:  <img src='http://media.actstudent.org/images/3v_pieh.gif' alt='3v over pie h' /> = <i>r</i><sup>2</sup>. So <i>r</i> = <img src='http://media.actstudent.org/images/sr_3v_pieh.gif' /> = <img src='http://media.actstudent.org/images/sr_3x142_85pie.gif' /> <img src='http://media.actstudent.org/images/doubletilde.gif' alt='double tilde' /> 4.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/dcfc5d8a54294f90b23b' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "B"
}, {
    "section": 2,
    "number": 6,
    "prompt": "A boat departs Port Isabelle, Texas, traveling to an oil rig. The oil rig is located 9&nbsp;miles east and 12&nbsp;miles north of the boat&rsquo;s departure point. About how many miles is the oil rig from the departure point?",
    "options": {"F": "&nbsp;&nbsp;&nbsp;&nbsp;3",
                "G": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q6_answer_g.gif' alt='square root of 63' height='11' width='23' />&nbsp;",
                "H": "&nbsp;&nbsp;15",
                "J": "&nbsp;&nbsp;21",
                "K": "225",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p style='", "content": "<p style='line-height: 30px;'>Using the Pythagorean theorem, 9<sup>2</sup> + 12<sup>2</sup> = <i>c</i><sup>2</sup>.<br /> So <i>c</i> = <span class='sq'>9<sup>2</sup> + 12<sup>2</sup></span> = <span class='sq'>81 + 144</span> = <span class='sq'>225</span> = 15.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/1e32585edd854fa1b646' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "H"
}, {
    "section": 2,
    "number": 7,
    "prompt": "In the figure below, <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>ABC</i> <img src='//dl.dropboxusercontent.com/u/1131693/act/equaltilde.gif' alt='is congruent to' height='9' width='9' /> <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>DFE</i>, <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>BAC</i> <img src='//dl.dropboxusercontent.com/u/1131693/act/equaltilde.gif' alt='is congruent to' height='9' width='9' /> <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>FDE</i>, <i>D</i>&nbsp;and <i>F</i> are on <i style='text-decoration: overline;'>AB</i>, <i style='text-decoration: overline;'>AD</i> <img src='//dl.dropboxusercontent.com/u/1131693/act/equaltilde.gif' alt='is congruent to' height='9' width='9' /> <i style='text-decoration: overline;'>FB</i>, and distances in  centimeters are as shown. What is the length of <i style='text-decoration: overline;'>AD</i>, in centimeters? <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q7.gif' /></div>",
    "options": {"A": "5",
                "B": "4",
                "C": "3",
                "D": "2",
                "E": "1",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>2 is th", "content": "<p>2 is the correct answer.  <img src='http://media.actstudent.org/images/triangle.gif' alt='triangle' height='11' width='12' /><i>DEF</i> ~ <img src='http://media.actstudent.org/images/triangle.gif' alt='triangle' height='11' width='12' /><i>ACB</i> by AA (angle-angle similarity). Then, since <i>AD</i> = <i>FB</i> and corresponding sides of similar triangles are proportional, <img src='http://media.actstudent.org/images/df_ab.gif' alt='df over ab' /> = <img src='http://media.actstudent.org/images/df_ad_df_fb.gif' alt='df over ad plus df plus fb' /> = <img src='http://media.actstudent.org/images/df_df_ad_fb.gif' alt='df over df plus ad plus fb' /> = <img src='http://media.actstudent.org/images/df_df_2ad.gif' alt='df_over df plus 2ad' /> = <img src='http://media.actstudent.org/images/12_20.gif' alt='12 over 20' />. Since you are shown that <i>DF</i> = 6, <img src='http://media.actstudent.org/images/6_6_2ad.gif' alt='6 over 6 plus 2ad' /> = <img src='http://media.actstudent.org/images/12_20.gif' alt='12 over 20' />; 6(20) = 12(6 + 2<i>AD</i>); 120 = 72 + 24<i>AD</i>; 48 = 24<i>AD</i>. Therefore, <i>AD</i> = 2.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/d614ebc40f41459d876e' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "D"
}, {
    "section": 2,
    "number": 8,
    "prompt": "Which of the following is a factor of the polynomial 2<i>x</i><sup>2</sup> &ndash; 3<i>x</i> &ndash; 5 ?",
    "options": {"F": "&nbsp;&nbsp;<i>x</i> &ndash; 1",
                "G": "2<i>x</i> &ndash; 3",
                "H": "2<i>x</i> &ndash; 5",
                "J": "2<i>x</i> + 5",
                "K": "3<i>x</i> + 5",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>2<i>x</", "content": "<p>2<i>x</i><sup>2</sup> &ndash; 3<i>x</i> &ndash; 5 = (<i>x</i> + 1)(2<i>x</i> &ndash; 5).</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/ca573bf20c0444b2a3a6' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "H"
}, {
    "section": 2,
    "number": 9,
    "prompt": "What is <i>x</i>, the second term in the geometric series  <img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q9_q1.gif' alt='1 over 4' align='absmiddle' height='25' width='16' /> + <i>x</i> + <img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q9_q2.gif' alt='1 over 36' align='absmiddle' height='25' width='16' /> + <img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q9_q3.gif' alt='1 over 108' align='absmiddle' height='25' width='20' /> + &hellip; ?<br /> (Note: In a geometric series the ratio of any term to the following term is constant.)",
    "options": {"A": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q9_answer_a.gif' alt='1 over 3' height='25' width='16' />",
                "B": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q9_answer_b.gif' alt='1 over 9' height='25' width='16' />",
                "C": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q9_answer_c.gif' alt='1 over 12' height='25' width='16' />",
                "D": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q9_answer_d.gif' alt='1 over 16' height='25' width='16' />",
                "E": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q9_answer_e.gif' alt='1 over 18' height='25' width='16' />",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>You can", "content": "<p>You can set up the proportion: <img src='http://media.actstudent.org/images/x_1_4.gif' alt='x over one fourth' /> = <img src='http://media.actstudent.org/images/1_108_1_36.gif' alt='1 over 108 over 1 over 36' /> or 4<i>x</i> = <img src='http://media.actstudent.org/images/36_108.gif' alt='36 over 108' />. Then 4<i>x</i> = <img src='http://media.actstudent.org/images/1_3.gif' alt='one third' /> or <i>x</i> = <img src='http://media.actstudent.org/images/1_12.gif' alt='one twelfth' />.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/e40836ccdf0e471f9c39' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "C"
}, {
    "section": 2,
    "number": 10,
    "prompt": "What is the slope of any line parallel to the line  9<i>x</i> + 4<i>y</i> = 7 ?",
    "options": {"F": "&nbsp;&nbsp;&ndash;9",
                "G": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q10_answer_g.gif' alt='negative 9 over 4' height='25' width='25' />",
                "H": "&nbsp;&nbsp;<img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q10_answer_h.gif' alt='9 over 7' height='25' width='16' />",
                "J": "&nbsp;&nbsp;&nbsp;7",
                "K": "&nbsp;&nbsp;&nbsp;9",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>The cor", "content": "<p>The correct answer is <img src='http://media.actstudent.org/images/s2_q10_ag.gif' alt='negative 9 over 4' height='25' width='25' />. Since 4<i>y</i> = &ndash;9<i>x</i> + 7, <i>y</i> = <img src='http://media.actstudent.org/images/s2_q10_ag.gif' alt='negative 9 over 4' height='25' width='25' /><i>x</i> + <img src='http://media.actstudent.org/images/7_4.gif' alt='seven over four' />. So the slope of this line is <img src='http://media.actstudent.org/images/s2_q10_ag.gif' alt='negative 9 over 4' height='25' width='25' />. Since parallel lines have the same slope, the slope of any parallel line must also be <img src='http://media.actstudent.org/images/s2_q10_ag.gif' alt='negative 9 over 4' height='25' width='25' />.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/221e0ff625cf4baa96c3' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "G"
}, {
    "section": 2,
    "number": 11,
    "prompt": "A DVD player with a list price of $100 is marked down 30%. If John gets an employee discount of 20% off the sale price, how much does John pay for the DVD player ?",
    "options": {"A": "$86.00",
                "B": "$77.60",
                "C": "$56.00",
                "D": "$50.00",
                "E": "$44.00",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>100(0.7", "content": "<p>100(0.70) = 70 is the amount that would be paid if the DVD was marked down 30%, but there is another discount of 20%, so the price is going to be 80% of the marked-down price. The price will be 70(0.80) = 56.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/2de9f201834541e79f69' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "C"
}, {
    "section": 2,
    "number": 12,
    "prompt": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q12_q1.gif' alt='the square root of the negative of negative 9 squared' height='11' width='35' /> = ?<br /> (Note: <i>i</i> = <img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q12_q2.gif' alt='the square root of negative 1' height='11' width='19' /> )",
    "options": {"F": "&nbsp;9<i>i</i>",
                "G": "&nbsp;9 + <i>i</i>",
                "H": "&nbsp;9 &ndash; <i>i</i>",
                "J": "&nbsp;9",
                "K": "&ndash;9",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>9<i>i</", "content": "<p>9<i>i</i> is the correct answer. <span class='sq'>-(-9)<sup>2</sup></span> = <span class='sq'>-(81)</span> = <i>i</i><span class='sq'>81</span> = 9<i>i</i>.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/68e6de2543dd4f66aab4' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "F"
},  {
    "section": 3,
    "number": 1,
    "prompt": "What is the degree measure of the acute angle formed by the hands of a 12-hour clock that reads exactly 1&nbsp;o&rsquo;clock?",
    "options": {"A": "15&deg;",
                "B": "30&deg;",
                "C": "45&deg;",
                "D": "60&deg;",
                "E": "72&deg;",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>One com", "content": "<p>One complete rotation of a clock hand is 360&deg;, and there are 12&nbsp;hourly markings on a clock. When the hands read exactly 1 o'clock, the degree measure of the angle formed by the clock hands is <img src='http://media.actstudent.org/images/1_12.gif' alt='one over twelve' /> of a complete rotation, or <img src='http://media.actstudent.org/images/1_12.gif' alt='one over twelve' />(360&deg;) = 30&deg;.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/12ef3a25097a44c28cf8' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "B"
}, {
    "section": 3,
    "number": 2,
    "prompt": "What is the probability that a number selected at random from the set {2, 3, 7, 12, 15, 22, 72, 108} will be divisible by both 2 and 3&nbsp;?",
    "options": {"F": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s3_q2_answer_f.gif' alt='1 over 4' height='25' width='16' />",
                "G": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s3_q2_answer_g.gif' alt='3 over 8' height='25' width='16' />",
                "H": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s3_q2_answer_h.gif' alt='3 over 5' height='25' width='16' />",
                "J": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s3_q2_answer_j.gif' alt='5 over 8' height='25' width='16' />",
                "K": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s3_q2_answer_k.gif' alt='7 over 8' height='25' width='16' />",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>Since 1", "content": "<p>Since 12, 72, and 108 are the only numbers in the list divisible by both 2 and 3, the probability that the number selected at random is divisible by both 2 and 3 is  <img src='http://media.actstudent.org/images/s3_q2_ag.gif' alt='3 over 8' height='25' width='16' />.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "G"
}, {
    "section": 3,
    "number": 3,
    "prompt": "A circle has a circumference of 16<img src='//dl.dropboxusercontent.com/u/1131693/act/pi.gif' alt='pi' height='11' width='11' /> feet. What is the radius of the circle, in feet?",
    "options": {"A": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s3_q3_answer_a.gif' alt='the square root of 8' height='11' width='20' />&nbsp;",
                "B": "&nbsp;&nbsp;4",
                "C": "&nbsp;&nbsp;8",
                "D": "16",
                "E": "32",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>8 is th", "content": "<p>8 is the correct answer. The formula for the circumference of a circle with radius <i>r</i> is 2<img src='http://media.actstudent.org/images/pi.gif' alt='pi' height='11' width='11' /><i>r</i>. So 2<img src='http://media.actstudent.org/images/pi.gif' alt='pi' height='11' width='11' /><i>r</i> = 16 , or <i>r</i> = 8.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/bea9241572244a3490c3' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "C"
}, {
    "section": 3,
    "number": 4,
    "prompt": "A rectangle with a perimeter of 30&nbsp;centimeters is twice as long as it is wide. What is the area of the rectangle in square centimeters?",
    "options": {"F": "&nbsp;&nbsp;&nbsp;&nbsp;15",
                "G": "&nbsp;&nbsp;&nbsp;&nbsp;50",
                "H": "&nbsp;&nbsp;200",
                "J": "3<img src='//dl.dropboxusercontent.com/u/1131693/act/s3_q4_ajk.gif' alt='the square root of 15' height='11' width='23' />",
                "K": "6<img src='//dl.dropboxusercontent.com/u/1131693/act/s3_q4_ajk.gif' alt='the square root of 15' height='11' width='23' />",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>If <i>w", "content": "<p>If <i>w</i> = width, then 2<i>w</i> = length. So, the perimeter is 2(<i>w</i> + 2<i>w</i>) = 30, and <i>w</i> = 5. Since the width is 5, the length is 2(5) = 10. Then the area is 5(10) = 50.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "G"
}, {
    "section": 3,
    "number": 5,
    "prompt": "In the standard (<i>x</i>,<i>y</i>) coordinate plane, what are the coordinates of the midpoint of a line segment whose endpoints are (&ndash;3,0) and (7,4) ?",
    "options": {"A": "(2,2)",
                "B": "(2,4)",
                "C": "(5,2)",
                "D": "(5,4)",
                "E": "(5,5)",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>(2,2) i", "content": "<p>(2,2) is the correct answer. To find the midpoint, you need to take the average of each of the coordinates, <img src='http://media.actstudent.org/images/s3_a5_a.gif' /> = (2,2).</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/d9b904c9535345cc9c07' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "A"
}, {
    "section": 3,
    "number": 6,
    "prompt": "Points <i>A</i>, <i>B</i>, <i>C</i>, and <i>D</i> are on a line such that <i>B</i> is between <i>A</i> and <i>C</i>, and <i>C</i> is between <i>B</i> and <i>D</i>. The distance from <i>A</i> to <i>B</i> is 6&nbsp;units. The distance from <i>B</i> to <i>C</i> is twice the distance from <i>A</i> to <i>B</i>, and the distance from <i>C</i> to <i>D</i> is twice the distance from <i>B</i> to <i>C</i>. What is the distance, in units, from the midpoint of <i style='text-decoration: overline;'>BC</i> to the midpoint of <i style='text-decoration: overline;'>CD</i> ?",
    "options": {"F": "18",
                "G": "14",
                "H": "12",
                "J": "&nbsp;&nbsp;9",
                "K": "&nbsp;&nbsp;6",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p> <i>BC<", "content": "<p> <i>BC</i> = 2<i>AB</i> = 2(6) = 12 and <i>CD</i> = 2<i>BC</i> = 2(12) = 24. The distance between the midpoints of <i style='text-decoration: overline;'>BC</i> and   <i style='text-decoration: overline;'>CD</i> is  <img src='http://media.actstudent.org/images/1_2.gif' alt='one half' height='27' width='11' /><i>BC</i> + <img src='http://media.actstudent.org/images/1_2.gif' alt='one half' height='27' width='11' /><i>CD</i> = <img src='http://media.actstudent.org/images/1_2.gif' alt='one half' height='27' width='11' />(12) +  <img src='http://media.actstudent.org/images/1_2.gif' alt='one half' height='27' width='11' />(24) = 18.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/bd4d7841efa2444c8ed1' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "F"
}, {
    "section": 3,
    "number": 7,
    "prompt": "Which of the following statements <i>must</i> be true whenever <i>n</i>, <i>a</i>, <i>b</i>, and <i>c</i> are positive integers such that <i>n</i> &lt; <i>a</i>, <i>c</i> &gt; <i>a</i>, and <i>b</i> &gt; <i>c</i> ?",
    "options": {"A": "&nbsp;&nbsp;<i>a</i> &lt; <i>n</i>",
                "B": "&nbsp;&nbsp;<i>b</i> &ndash; <i>n</i> &gt; <i>a</i> &ndash; <i>n</i>",
                "C": "&nbsp;&nbsp;<i>b</i> &lt; <i>n</i>",
                "D": "&nbsp;&nbsp;<i>n</i> + <i>b</i> = <i>a</i> + <i>c</i>",
                "E": "2<i>n</i> &gt; <i>a</i> + <i>b</i>",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>Since <", "content": "<p>Since <i>b</i> &gt; <i>a</i>, subtracting <i>n</i> from each side, <i>b</i> &ndash; <i>n</i> &gt; <i>a</i> &ndash; <i>n</i>, will not change the relationship between <i>b</i> and <i>a</i>.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/40adc8568d8344d1bae4' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "B"
}, {
    "section": 3,
    "number": 8,
    "prompt": "The distribution of Jamal&rsquo;s high school grades by percentage of course credits is given in the circle graph below. What is Jamal&rsquo;s grade point average if each A is worth 4&nbsp;points; each B, 3&nbsp;points; and each C, 2&nbsp;points? <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/GID_5510.gif' height='87' width='87' /></div>",
    "options": {"F": "3.0",
                "G": "3.4",
                "H": "3.6",
                "J": "3.7",
                "K": "Cannot be determined from the given information",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>This is", "content": "<p>This is the correct answer since 4(0.7) + 3(0.2) + 2(0.1) = 3.6.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/7579211695d9498c9b95' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "H"
}, {
    "section": 3,
    "number": 9,
    "prompt": "What is the difference between 1.8 and 1.<i style='text-decoration: overline; font-style: normal;'>08</i> ?<br /> (Note: A bar indicates a digit pattern that is repeated.)",
    "options": {"A": "0.7<i style='text-decoration: overline; font-style: normal;'>1</i>",
                "B": "0.<i style='text-decoration: overline; font-style: normal;'>71</i>",
                "C": "0.7<i style='text-decoration: overline; font-style: normal;'>19</i>",
                "D": "0.7<i style='text-decoration: overline; font-style: normal;'>2</i>",
                "E": "0.<i style='text-decoration: overline; font-style: normal;'>72</i>",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>The cor", "content": "<p>The correct response is 0.7<i style='text-decoration: overline; font-style: normal;'>19</i>. Take 1.<i style='text-decoration: overline; font-style: normal;'>08</i> and repeat the pattern several times, then subtract that from 1.8. 1.8 &ndash; 1.08080808 <img src='http://media.actstudent.org/images/doubletilde.gif' alt='double tilde' /> 0.7191919. Realizing that the pattern should repeat, you can conclude that 0.7<i style='text-decoration: overline; font-style: normal;'>19</i> is the correct answer.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/d82a2e042d784c3f8f1f' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "C"
}, {
    "section": 3,
    "number": 10,
    "prompt": "Which of the following equations represents the linear relationship between time, <i>t</i>, and velocity, <i>v</i>, shown in the table below? <table style='width: 50%;' class='table'> <tbody> <tr> <th class='textcenter' scope='row'><i>t</i></th> <td class='textright'>0</td> <td class='textright'>1</td> <td class='textright'>2</td> </tr> <tr> <th class='textcenter' scope='row'><i>v</i></th> <td class='textright'>120</td> <td class='textright'>152</td> <td class='textright'>184</td> </tr> </tbody> </table>",
    "options": {"F": "<i>v</i> =  &nbsp;&nbsp;32<i>t</i>",
                "G": "<i>v</i> =  &nbsp;&nbsp;32<i>t</i> + 120",
                "H": "<i>v</i> = 120<i>t</i>",
                "J": "<i>v</i> = 120<i>t</i> +  &nbsp;&nbsp;32",
                "K": "<i>v</i> = 120<i>t</i> + 120",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>A linea", "content": "<p>A linear relationship means the associated graph is a line. So, you can think of the ordered pairs (<i>t</i>,<i>v</i>) as points on the line. Since (0,120), (1,152), and (2,184) are points on the line, the slope of the line is <img src='http://media.actstudent.org/images/s3_a10_g.gif' alt='152-120 over 1-0' /> = 32. Therefore, <i>v</i> = 32<i>t</i> + <i>b</i>, where <i>b</i> is the <i>y</i>-intercept of the line. Since (0,120) is a point on the line, 120 = 32(0) + <i>b</i>, or <i>b</i> = 120. Thus, an equation for the line is <i>v</i> = 32<i>t</i> + 120.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/fee7f3721db94bd7920e' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "G"
}, {
    "section": 3,
    "number": 11,
    "prompt": "An industrial cleaner is manufactured using only the  3&nbsp;secret ingredients A, B, and C, which are mixed in the ratio of 2:3:5, respectively, by weight. How many pounds of secret ingredient B are in a 42-pound (net weight) bucket of this cleaner?",
    "options": {"A": "&nbsp;&nbsp;4.2",
                "B": "12.6",
                "C": "14.0",
                "D": "18.0",
                "E": "21.0",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>If you ", "content": "<p>If you let 3<i>x</i> be amount of secret ingredient B, you can set up the equation 2<i>x</i> + 3<i>x</i> + 5<i>x</i> = 42. Since 10<i>x</i> = 42, <i>x</i> = 4.2, and B = 3<i>x</i> = 12.6.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "B"
}, {
    "section": 3,
    "number": 12,
    "prompt": "If <i>n</i> = 8 and 16 &middot; 2<sup><i>m</i></sup> = 4<sup><i>n</i> &ndash; 8</sup>, then <i>m</i> = ?",
    "options": {"F": "&ndash;4",
                "G": "&ndash;2",
                "H": "&nbsp;&nbsp;0",
                "J": "&nbsp;&nbsp;1",
                "K": "&nbsp;&nbsp;8",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>When <i", "content": "<p>When <i>n</i> = 8, 4<sup><i>n</i> &ndash; 8</sup> = 4<sup>8 &ndash; 8</sup> = 4<sup>0</sup> = 1, and 16 &middot; 2<sup><i>m</i></sup> = 2<sup>4</sup> &middot; 2<sup><i>m</i></sup> = 2<sup>4 + <i>m</i></sup>. So, 2<sup>4 + <i>m</i></sup> = 1, and any number to the zeroth power is 1, so 4 + <i>m</i> = 0, or <i>m</i> = &ndash;4.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/01f73492e6bb4b1d9e62' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "F"
},  {
    "section": 4,
    "number": 1,
    "prompt": "In the figure below, <i>A</i>, <i>B</i>, <i>C</i>, and <i>D</i> are collinear, <i style='text-decoration: overline;'>FC</i> is parallel to <i style='text-decoration: overline;'>ED</i>, <i style='text-decoration: overline;'>BE</i> is perpendicular to <i style='text-decoration: overline;'>ED</i>, and the measures of <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>FAB</i> and <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>EBA</i> are as marked. What is the measure of <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>FCB</i> ? <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/math_set4_1.gif' height='96' width='193' /></div>",
    "options": {"A": "33&deg;",
                "B": "57&deg;",
                "C": "63&deg;",
                "D": "84&deg;",
                "E": "Cannot be determined from the given information",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>Since <", "content": "<p>Since <i style='text-decoration: overline;'>FC</i> and <i style='text-decoration: overline;'>ED</i> are two parallel line segments cut by transversal <i style='text-decoration: overline;'>BE</i>, <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>E</i> and <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>BGC</i> are corresponding angles. So, the measure of <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>BGC</i> is 90&deg;. Since <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>ABG</i> and <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>GBC</i> are supplementary angles, the measure of <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>GBC</i> = 180&deg; &ndash; 147&deg; = 33&deg;. Looking at  <img src='http://media.actstudent.org/images/triangle.gif' alt='triangle' height='11' width='12' /><i>BGC</i>, the sum of the measures of angles <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>GCB</i>, <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>BGC</i>, and <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>GBC</i> is 180&deg;. So, the measure of <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>GCB</i> + 90&deg; + 33&deg; = 180&deg;, or 180&deg; &ndash; 90&deg; &ndash; 33&deg; = 57&deg;.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/c600e19f556d463185c2' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "B"
}, {
    "section": 4,
    "number": 2,
    "prompt": "Which of the following is an equation of the circle with its center at (0,0) that passes through (3,4) in the standard (<i>x</i>,<i>y</i>) coordinate plane?",
    "options": {"F": "<i>x</i> &ndash; &nbsp;&nbsp;<i>y</i> =   &nbsp;&nbsp;&nbsp;&nbsp;1",
                "G": "<i>x</i> + &nbsp;&nbsp;<i>y</i> = &nbsp;&nbsp;25",
                "H": "<i>x</i><sup>2</sup> + <i>y</i> = &nbsp;&nbsp;25",
                "J": "<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> =   &nbsp;&nbsp;5",
                "K": "<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>The rad", "content": "<p>The radius of the circle is the distance between (0,0) and (3,4), which is <span class='sq'>(3&ndash;0)<sup>2</sup>+ (4&ndash;0)<sup>2</sup></span> = 5. An equation of a circle where (<i>h</i>,<i>k</i>) is the center and <i>r</i> is the radius is (<i>x</i> &ndash; <i>h</i>)<sup>2</sup> + (<i>y</i> &ndash; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup>. So (<i>x</i> &ndash; 0)<sup>2</sup> + (<i>y</i> &ndash; 0)<sup>2</sup> = 5<sup>2</sup> or <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/641fa455b24a4b6faa45' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "K"
}, {
    "section": 4,
    "number": 3,
    "prompt": "<p>Taher has decided to create a triangular flower bed border. He plans to use 3 pieces of rectangular lumber with lengths 4, 5, and 6&nbsp;feet, as shown in the figure below. Points <i>A</i>, <i>B</i>, and <i>C</i> are located at the corners of the flower bed. <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/math_set4_2.gif' height='100' width='154' /></div></p> <p>Taher plans to cut the 3&nbsp;pieces of lumber for the flower bed border from a single piece of lumber. Each cut takes <img src='//dl.dropboxusercontent.com/u/1131693/act/s2_q1_q2.gif' alt='one-eighth' align='absmiddle' height='25' width='16' /> inch of wood off the length of the piece of lumber. Among the following lengths, in inches, of pieces of lumber, which is the shortest piece that he can use to cut the pieces for the flower bed border?</p>",
    "options": {"A": "178",
                "B": "179",
                "C": "180",
                "D": "181",
                "E": "182",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>The num", "content": "<p>The number of inches of wood needed if there were no cuts is 4 + 5 + 6 = 15 feet, or 180 inches. However, you need to add 2(<img src='http://media.actstudent.org/images/set2/s2_q1_q2.gif' alt='one-eighth' align='absmiddle' height='25' width='16' />) for 2 cuts that are needed so that you have lumber for each of the 3 sides. Since 180 + 2(<img src='http://media.actstudent.org/images/set2/s2_q1_q2.gif' alt='one-eighth' align='absmiddle' height='25' width='16' />) = 180 + <img src='http://media.actstudent.org/images/1_4.gif' alt='one fourth' align='absmiddle' height='27' width='11' />, the minimum piece needed to construct the flower bed border including the 2&nbsp;cuts would be 181&nbsp;inches.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/b954631e67324a659913' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "D"
}, {
    "section": 4,
    "number": 4,
    "prompt": "<p>Taher has decided to create a triangular flower bed border. He plans to use 3 pieces of rectangular lumber with lengths 4, 5, and 6&nbsp;feet, as shown in the figure below. Points <i>A</i>, <i>B</i>, and <i>C</i> are located at the corners of the flower bed. <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/math_set4_2.gif' height='100' width='154' /></div></p> <p>The measure of <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>ABC</i> in the figure is <i>x</i>&deg;. Which of the following is an expression for <img src='//dl.dropboxusercontent.com/u/1131693/act/s4_q4_q1.gif' alt='beta' height='15' width='8' />&deg; ?</p>",
    "options": {"F": "&nbsp;&nbsp;<i>x</i>&deg;",
                "G": "2<i>x</i>&deg;",
                "H": "(90 + <i>x</i>)&deg;",
                "J": "(180 &ndash; <i>x</i>)&deg;",
                "K": "(180 &ndash; <img src='//dl.dropboxusercontent.com/u/1131693/act/x_2.jpg' alt='x over 2' align='absmiddle' height='27' width='14' />)&deg;",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>The ang", "content": "<p>The angles of the rectangular pieces of lumber measure 90&deg;, so the sum of the measure of the angles at  <img src='http://media.actstudent.org/images/s4_q4_q1.gif' alt='beta' height='15' width='8' /> is 360&deg;. <img src='http://media.actstudent.org/images/s4_q4_q1.gif' alt='beta' height='15' width='8' /> + 90 + <i>x</i> + 90 = 360, or <img src='http://media.actstudent.org/images/s4_q4_q1.gif' alt='beta' height='15' width='8' /> = 180 &ndash; <i>x</i>.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "J"
}, {
    "section": 4,
    "number": 5,
    "prompt": "<p>Taher has decided to create a triangular flower bed border. He plans to use 3 pieces of rectangular lumber with lengths 4, 5, and 6&nbsp;feet, as shown in the figure below. Points <i>A</i>, <i>B</i>, and <i>C</i> are located at the corners of the flower bed. <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/math_set4_2.gif' height='100' width='154' /></div></p> <p>After arranging the flower bed, Taher decides that the flower bed would look more attractive if 1 of the angles in the triangle were a right angle. He decides to place the right angle at vertex <i>A</i> and to leave the lengths of <i style='text-decoration: overline;'>AB</i> and <i style='text-decoration: overline;'>AC</i> as 4&nbsp;and 5&nbsp;feet, respectively. To the nearest 0.1&nbsp;foot, how long of a piece of lumber would he need to replace the 6-foot piece represented by <i style='text-decoration: overline;'>BC</i> ?</p>",
    "options": {"A": "3.0",
                "B": "3.3",
                "C": "6.0",
                "D": "6.4",
                "E": "7.8",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p style='", "content": "<p style='line-height: 30px;'>6.4 is the correct answer. Using the Pythagorean theorem, 4<sup>2</sup> + 5<sup>2</sup> = (<i>BC</i>)<sup>2</sup>. Then <i>BC</i> =  <span class='sq'>4<sup>2</sup> + 5<sup>2</sup></span> = <span class='sq'>41</span> <img src='http://media.actstudent.org/images/doubletilde.gif' /> 6.4.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/0dc1d99b80884dd4b93f' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "D"
}, {
    "section": 4,
    "number": 6,
    "prompt": "Which one of the following expressions has an even integer value for all integers <i>a</i> and <i>c</i> ?",
    "options": {"F": "8<i>a</i> + 2<i>ac</i>",
                "G": "3<i>a</i> + 3<i>c</i>",
                "H": "2<i>a</i> +  &nbsp;&nbsp;<i>c</i>",
                "J": "&nbsp;&nbsp;<i>a</i> + 2<i>c</i>",
                "K": "&nbsp;&nbsp;<i>ac</i> +  <i>a</i><sup>2</sup>",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>8<i>a</", "content": "<p>8<i>a</i> + 2<i>ac</i> is even because it is divisible by 2, 8<i>a</i> + 2<i>ac</i> = 2(4<i>a</i> + <i>ac</i>), and 4<i>a</i> + <i>ac</i> is an integer because <i>a</i> and <i>c</i> are integers.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/3806f23c7f89421885b4' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "F"
}, {
    "section": 4,
    "number": 7,
    "prompt": "A neighborhood recreation program serves a total of 280&nbsp;children who are either 11 years old or 12 years old. The sum of the children&rsquo;s ages is 3,238 years. How many 11-year-old children does the recreation program serve?",
    "options": {"A": "&nbsp;&nbsp;55",
                "B": "122",
                "C": "132",
                "D": "158",
                "E": "208",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>The num", "content": "<p>The number of 11-year-olds is 122. If you let <i>e</i> = number of 11-year-olds and <i>t</i> = number of 12-year-olds, then you can solve the system <i>e</i> + <i>t</i> = 280 and 11<i>e</i> + 12<i>t</i> = 3,238. Substitution, elimination, and matrices are just some of the methods you could use to solve the system. Just remember, in the end, you want to solve for <i>e</i>.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/374832f7ad104b6d88e4' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "B"
}, {
    "section": 4,
    "number": 8,
    "prompt": "The geometric figure shown below consists of a square and 4&nbsp;semicircles. The diameters of the semicircles are the sides of the square, and each diameter is 10&nbsp;centimeters long. Which of the following is the closest approximation of the total area, in square centimeters, of this geometric figure? <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/GID_5205.gif' height='123' width='123' /></div>",
    "options": {"F": "100",
                "G": "160",
                "H": "260",
                "J": "400",
                "K": "730",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>Find th", "content": "<p>Find the area of the square, the area of 4 semicircles (or the area of 2&nbsp;full circles), and add them. 10<sup>2</sup> + 2<img src='http://media.actstudent.org/images/pi.gif' alt='pi' height='11' width='11' />(5)<sup>2</sup> <img src='http://media.actstudent.org/images/doubletilde.gif' alt='double tilde' /> 257. The closest answer is 260.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/c0b522adb6bb4218b2d2' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "H"
}, {
    "section": 4,
    "number": 9,
    "prompt": "Which of the following expressions is the closest approximation to the height <i>h</i>, in feet, of the roof truss shown below? <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/math_set4_9.gif' height='55' width='218' /></div>",
    "options": {"A": "15 tan 20&deg;",
                "B": "15 sin 20&deg;",
                "C": "30 tan 20&deg;",
                "D": "30 sin 20&deg;",
                "E": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s4_q9_answer_e.gif' alt='15 over the sine of 20 degrees' height='25' width='35' />",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p><i>YZ</", "content": "<p><i>YZ</i> = <img src='http://media.actstudent.org/images/1_2.gif' alt='one half' height='27' width='11' /><i>XZ</i> =  <img src='http://media.actstudent.org/images/1_2.gif' alt='one half' height='27' width='11' />(30) = 15. So, tan 20&deg; = <img src='http://media.actstudent.org/images/h_yz.gif' alt='h over yz' /> = <img src='http://media.actstudent.org/images/h_15.gif' /> . Then, <i>h</i> = 15 tan 20&deg;.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/8464d4319aab42f490d5' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "A"
}, {
    "section": 4,
    "number": 10,
    "prompt": "Quadrilateral <i>ABCD</i> is drawn on the standard (<i>x</i>,<i>y</i>) coordinate plane as shown below, with points <i>E</i> and <i>F</i> on <i style='text-decoration: overline;'>AD</i>. Point <i>G</i> is the center of rectangle <i>BCEF</i>. How many coordinate units long is <i style='text-decoration: overline;'>AG</i> ? <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/GID_6135.gif' height='75' width='222' /></div>",
    "options": {"F": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s4_q10_answer_f.gif' alt='the square root of 10' height='11' width='23' />&nbsp;",
                "G": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s4_q10_answer_g.gif' alt='the square root of 13' height='11' width='23' />&nbsp;",
                "H": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s4_q10_answer_h.gif' alt='the square root of 85' height='11' width='23' />&nbsp;",
                "J": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s4_q10_answer_j.gif' alt='the square root of 97' height='11' width='23' />&nbsp;",
                "K": "&nbsp;&nbsp;11",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>By draw", "content": "<p>By drawing in rectangle <i>BCEF</i> and diagonal <i style='text-decoration: overline;'>BE</i>, you can find the coordinates of <i>G</i> by finding the midpoint of <i style='text-decoration: overline;'>BE</i>. So, <i>G</i> is at <img src='http://media.actstudent.org/images/s4_a10_h.gif' />, or (9,2). Using the distance formula, <i>AG</i> = <span class='sq'>(9 &ndash; 0)<sup>2</sup> + (2 &ndash; 0)<sup>2</sup></span> = <span class='sq'>81 + 4</span> = <span class='sq'>85</span>.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/4858a90671d147a18966' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "H"
}, {
    "section": 4,
    "number": 11,
    "prompt": "What is the <i>x</i>-intercept of the graph of <i>y</i> = <i>x</i><sup>2</sup> &ndash; 4<i>x</i> + 4 ?",
    "options": {"A": "&ndash;2",
                "B": "&ndash;1",
                "C": "&nbsp;&nbsp;0",
                "D": "&nbsp;&nbsp;1",
                "E": "&nbsp;&nbsp;2",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>2 is th", "content": "<p>2 is the <i>x</i>-intercept. One way to find the <i>x</i>-intercept is to replace <i>y</i> with 0, and solve for <i>x</i>. If 0 = <i>x</i><sup>2</sup> &ndash; 4<i>x</i> + 4, then (<i>x</i> &ndash; 2)<sup>2</sup> = 0, and <i>x</i> = 2. Another way of doing this problem is to look at the graph of the equation and see where the graph crosses the <i>x</i>-axis.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/410fc0bc162a4f0a9223' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "E"
}, {
    "section": 4,
    "number": 12,
    "prompt": "For all nonzero real numbers <i>p</i>, <i>t</i>, <i>x</i>, and <i>y</i> such that <img src='//dl.dropboxusercontent.com/u/1131693/act/x_y_3p_2t.jpg' alt='x over y equals 3p over 2t' align='absmiddle' height='27' width='39' />, which of the following expressions is equivalent to&nbsp;<i>t</i> ?",
    "options": {"F": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s4_q12_answer_f.gif' alt='y over 2' height='27' width='14' />",
                "G": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s4_q12_answer_g.gif' alt='3px over 2y' height='27' width='20' />",
                "H": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s4_q12_answer_h.gif' alt='6py over x' height='27' width='20' />",
                "J": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s4_q12_answer_j.gif' alt='3py over x' height='27' width='20' />",
                "K": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s4_q12_answer_k.gif' alt='3py over 2x' height='27' width='20' />",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>If you ", "content": "<p>If you cross multiply, 2<i>xt</i> = 3<i>py</i>. Then dividing each side by 2<i>x</i>, you get <i>t</i> = <img src='http://media.actstudent.org/images/s4_q12_ak.gif' alt='3py over 2x' height='25' width='20' />.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/055be1a4f0e9438ebad0' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "K"
},  {
    "section": 5,
    "number": 1,
    "prompt": "Ms. Hernandez began her math class by saying:<p><br />I'm thinking of 5 numbers such that their mean is equal to their median. If 4 of the numbers are 14, 8, 16, and 14, what is the 5th number?</p>What is the 5th number Ms. Hernandez is thinking of?",
    "options": {"A": "13",
                "B": "14",
                "C": "15",
                "D": "16",
                "E": "18",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>Since t", "content": "<p>Since there will be an odd number of terms, the median will have to be the middle number. Write out the numbers in the original set in numerical order. You will see no matter where you place the 5th term, the median will be 14. Ms.&nbsp;Hernandez said that the mean is equal to the median, so the mean is also going to be 14. If <i>x</i> = the 5th number, then the mean is 14 = <img src='http://media.actstudent.org/images/s5_a1_e.gif' />. So, 14(5) = 52 + <i>x</i>, or <i>x</i> = 18.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/a68800bd3c9345fb91f4' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "E"
}, {
    "section": 5,
    "number": 2,
    "prompt": "The graph of a certain hyperbola, <i>y</i> = <i>h</i>(<i>x</i>), is shown in the standard (<i>x</i>,<i>y</i>) coordinate plane below. <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/GID_6319.gif' height='154' width='151' /></div>Among the following graphs, which best represents <i>y</i> = &ndash;<i>h</i>(<i>x</i>) ?",
    "options": {"F": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q2_answer_f.gif' height='100' width='100' />",
                "G": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q2_answer_g.gif' height='100' width='100' />",
                "H": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q2_answer_h.gif' height='95' width='100' />",
                "J": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q2_answer_j.gif' height='100' width='98' />",
                "K": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q2_answer_k.gif' height='100' width='96' />",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p><i>y</i", "content": "<p><i>y</i> = &ndash;<i>h</i>(<i>x</i>) is an equation for the original graph reflected across the <i>x</i>-axis.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/c77d4a57dac24fd9ae83' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "F"
}, {
    "section": 5,
    "number": 3,
    "prompt": "In the figure below, <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>H</i> <img src='//dl.dropboxusercontent.com/u/1131693/act/equaltilde.gif' alt='is congruent to' height='9' width='9' /> <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>F</i>; <i>E</i>, <i>G</i>, and <i>I</i> are collinear; and <i>G</i> is the midpoint of <i style='text-decoration: overline;'>FH</i>. <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/GID_5617.gif' height='77' width='143' /></div> To prove that <i style='text-decoration: overline;'>HI</i> <img src='//dl.dropboxusercontent.com/u/1131693/act/equaltilde.gif' alt='is congruent to' height='9' width='9' /> <i style='text-decoration: overline;'>FE</i> given the conditions stated above, which of the following is a logical order for the 5&nbsp;steps in the table below? <table class='table'><thead> <tr><th scope='col'>Statement</th><th scope='col'>Reason</th></tr></thead> <tbody><tr><td>1.  <i style='text-decoration: overline;'>HG</i> <img src='//dl.dropboxusercontent.com/u/1131693/act/equaltilde.gif' alt='is congruent to' height='9' width='9' /> <i style='text-decoration: overline;'>FG</i></td><td>The midpoint of a linesegment divides the segment into 2&nbsp;congruent segments</td></tr><tr><td>2.  <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>EGF</i> <img src='//dl.dropboxusercontent.com/u/1131693/act/equaltilde.gif' alt='is congruent to' height='9' width='9' /> <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>IGH</i></td><td>Vertical angles are congruent</td></tr><tr><td>3.  <img src='//dl.dropboxusercontent.com/u/1131693/act/triangle.gif' alt='triangle' height='11' width='12' /><i>GHI</i> <img src='//dl.dropboxusercontent.com/u/1131693/act/equaltilde.gif' alt='is congruent to' height='9' width='9' /> <img src='//dl.dropboxusercontent.com/u/1131693/act/triangle.gif' alt='triangle' height='11' width='12' /><i>GFE</i></td><td>Angle-side-angle congruence       theorem</td></tr><tr><td>4.  <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>EGF</i> and <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>IGH</i> are vertical angles</td><td>Definition of vertical angles</td></tr><tr><td>5.  <i style='text-decoration: overline;'>HI</i> <img src='//dl.dropboxusercontent.com/u/1131693/act/equaltilde.gif' alt='is congruent to' height='9' width='9' /> <i style='text-decoration: overline;'>FE</i></td><td>Corresponding parts of congruent triangles are congruent</td></tr></tbody></table>",
    "options": {"A": "1, 2, 3, 4, 5",
                "B": "1, 2, 3, 5, 4",
                "C": "1, 2, 4, 3, 5",
                "D": "1, 4, 2, 3, 5",
                "E": "1, 5, 4, 2, 3",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>You nee", "content": "<p>You need to show that 2&nbsp;pairs of angles and the included sides are congruent. Once this is done, you can claim that the triangles are congruent by ASA (angle-side-angle congruence). After that, you can say  <i style='text-decoration: overline;'>HI</i> <img src='http://media.actstudent.org/images/equaltilde.gif' alt='is congruent to' height='9' width='9' /> <i style='text-decoration: overline;'>FE</i> because corresponding parts of congruent triangles are congruent.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/d9c57bdfc52d48eca46b' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "D"
}, {
    "section": 5,
    "number": 4,
    "prompt": "Each of the variables <i>t</i>, <i>w</i>, <i>x</i>, <i>y</i>, and <i>z</i> represents a different <i>positive</i> real number. Given the equations below, which of the 4&nbsp;variables <i>w</i>, <i>x</i>, <i>y</i>, and <i>z</i> necessarily has the greatest value?<p>1.23<i>w</i> = <i>t</i><br /> 1.01<i>x</i> = <i>t</i><br /> 0.99<i>y</i> = <i>t</i><br /> 0.23<i>z</i> = <i>t</i></p>",
    "options": {"F": "<i>w</i>",
                "G": "<i>x</i>",
                "H": "<i>y</i>",
                "J": "<i>z</i>",
                "K": "Cannot be determined from the given information",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>If you ", "content": "<p>If you solve each of the equations in terms of <i>t</i>, you get <i>w</i> =  <img src='http://media.actstudent.org/images/s5_a4_j1.gif' /> <img src='http://media.actstudent.org/images/doubletilde.gif' alt='double tilde' /> 0.81<i>t</i>; <i>x</i> = <img src='http://media.actstudent.org/images/s5_a4_j2.gif' /> <img src='http://media.actstudent.org/images/doubletilde.gif' alt='double tilde' /> 0.99<i>t</i>; <i>y</i> = <img src='http://media.actstudent.org/images/s5_a4_j3.gif' /> <img src='http://media.actstudent.org/images/doubletilde.gif' alt='double tilde' /> 1.01<i>t</i>; and <i>z</i> = <img src='http://media.actstudent.org/images/s5_a4_j4.gif' /> <img src='http://media.actstudent.org/images/doubletilde.gif' alt='double tilde' /> 4.35<i>t</i>. Since the value of <i>t</i> is fixed, 4.35<i>t</i> will give the largest number, so <i>z</i> will have the largest value.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "J"
}, {
    "section": 5,
    "number": 5,
    "prompt": "Which of the following is equivalent to <img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q5_q1.gif' alt='(5 over k) + ((k + 3) over (k + 5))' align='absmiddle' height='25' width='58' /> ?",
    "options": {"A": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q5_answer_a.gif' alt='(k +8) over (2k + 5)' height='25' width='39' />",
                "B": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q5_answer_b.gif' alt='(k + 8) over k(k + 5)' height='25' width='42' />",
                "C": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q5_answer_c.gif' alt='5(k + 3) over k(k + 5)' height='25' width='42' />",
                "D": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q5_answer_d.gif' alt='(k squared + 3k) over (5k + 25)' height='25' width='42' />",
                "E": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q5_answer_e.gif' alt='(k squared + 8k + 25) over k(k + 5)' height='25' width='63' />",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>To add ", "content": "<p>To add fractions, you need a common denominator. In this problem, <i>k</i>(<i>k</i> + 5) can be used as the common denominator. Then you need to convert each fraction to an equivalent fraction with the common denominator:  <img src='http://media.actstudent.org/images/5_k.gif' height='27' width='9' /> =  <img src='http://media.actstudent.org/images/5k_fr1.gif' height='27' width='38' /> and <img src='http://media.actstudent.org/images/5k_fr2.gif' height='27' width='26' /> = <img src='http://media.actstudent.org/images/5k_fr3.gif' height='27' width='38' /> . So, <img src='http://media.actstudent.org/images/5k_fr4.gif' height='27' width='38' /> + <img src='http://media.actstudent.org/images/5k_fr5.gif' height='27' width='38' /> = <img src='http://media.actstudent.org/images/5k_fr6.jpg' height='27' width='81' /> = <img src='http://media.actstudent.org/images/5k_fr7.jpg' height='27' width='58' /></p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/a2dd9782940a4477b497' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "E"
}, {
    "section": 5,
    "number": 6,
    "prompt": "In the 2 &times; 2 matrix below, <i>b</i><sub>1</sub> and <i>b</i><sub>2</sub> are the costs per pound of bok choy (Chinese greens) at Market&nbsp;1 and Market&nbsp;2, respectively; <i>r</i><sub>1</sub> and <i>r</i><sub>2</sub> are the costs per pound of rice flour at these 2&nbsp;markets, respectively. In the following matrix product, what does <i>q</i> represent? <div><img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q6_q1.gif' height='35' width='165' /></div>",
    "options": {"F": "The cost of <i>r</i><sub>1</sub> pounds of rice flour at $0.50 per pound",
                "G": "The cost of a half-pound of rice flour at Market&nbsp;1",
                "H": "The total cost of a half-pound of bok choy and a half-pound of rice flour at Market&nbsp;1",
                "J": "The total cost of a half-pound of bok choy and a half-pound of rice flour at Market&nbsp;2",
                "K": "The total cost of a half-pound of rice flour at Market 1 and a half-pound of rice flour at Market&nbsp;2",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>Using m", "content": "<p>Using matrix multiplication here: [0.5&nbsp;0.5] &middot; <img src='http://media.actstudent.org/images/s5_a6_k1.gif' /> = [0.5<i>b</i><sub>1</sub> + 0.5<i>b</i><sub>2</sub> 0.5<i>r</i><sub>1</sub> + 0.5<i>r</i><sub>2</sub>] = [<i>p</i> <i>q</i>]. Setting corresponding entries equal, 0.5<i>r</i><sub>1</sub> + 0.5<i>r</i><sub>2</sub> = <i>q</i>. Since 0.5<i>r</i><sub>1</sub> + 0.5<i>r</i><sub>2</sub> is the cost for a half pound of rice flour at Market&nbsp;1 and a half pound of rice flour at Market&nbsp;2, K is the correct response.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/af8fcd9273294723b181' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "K"
}, {
    "section": 5,
    "number": 7,
    "prompt": "The 2 diagrams below show a circle of radius 1&nbsp;inch with shaded sectors of angle <i>x</i>&deg;, for 2&nbsp;different values of <i>x</i>. <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/math_set5_7.gif' height='74' width='170' /></div> One of the following is the graph in the standard (<i>x</i>,<i>y</i>) coordinate plane of the area, <i>y</i>, of a shaded sector with angle&nbsp;<i>x</i>&deg;, for all values of <i>x</i> between 0 and 360. Which is that graph?",
    "options": {"A": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q7_answer_a.gif' height='84' width='77' />",
                "B": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q7_answer_b.gif' height='84' width='77' />",
                "C": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q7_answer_c.gif' height='84' width='77' />",
                "D": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q7_answer_d.gif' height='84' width='77' />",
                "E": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q7_answer_e.gif' height='84' width='77' />",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>The are", "content": "<p>The area of the sector of a circle with radius <i>r</i> is  <img src='http://media.actstudent.org/images/s5_a7_a.gif' /><img src='http://media.actstudent.org/images/pi.gif' alt='pi' height='11' width='11' /><i>r</i><sup>2</sup>. With <i>r</i> = 1,  <img src='http://media.actstudent.org/images/s5_a7_a.gif' /><img src='http://media.actstudent.org/images/pi.gif' alt='pi' height='11' width='11' />(1<sup>2</sup>) = <img src='http://media.actstudent.org/images/s5_a7_a.gif' /><img src='http://media.actstudent.org/images/pi.gif' alt='pi' height='11' width='11' /> = <img src='http://media.actstudent.org/images/p_360-x.gif' height='27' width='28' />. This is a linear function with positive slope since <img src='http://media.actstudent.org/images/s5_a7_a.gif' /><img src='http://media.actstudent.org/images/doubletilde.gif' alt='double tilde' />0.002777<i>x</i> &gt; 0. This means that the function will graph as a line.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/1a3672b847ce4ec0bc49' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "A"
}, {
    "section": 5,
    "number": 8,
    "prompt": "If <i>h</i>(<i>x</i>) = <i>x</i>&sup3; + <i>x</i> and <i>g</i>(<i>x</i>) = 2<i>x</i> + 3, then <i>g</i>(<i>h</i>(2)) = ?",
    "options": {"F": "&nbsp;&nbsp;7",
                "G": "10",
                "H": "17",
                "J": "19",
                "K": "23",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>The cor", "content": "<p>The correct answer is 23. <i>h</i>(2) = 2<sup>3</sup> + 2 = 10. Then <i>g</i>(<i>h</i>(2)) = <i>g</i>(10) = 2(10) + 3 = 23.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/ec46f12526b64cb5aba2' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "K"
}, {
    "section": 5,
    "number": 9,
    "prompt": "In the figure below, points <i>A</i> and <i>B</i> are on opposite banks of a small stream. Point <i>C</i> is on the same bank of the stream as point <i>B</i> and approximately 18&nbsp;meters from <i>B</i>. The measure of <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>CBA</i> is 45&deg;, and the measure of <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>BCA</i> is 60&deg;. <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/math_set5_9.gif' height='175' width='98' /></div> Which of the following expressions gives the approximate distance, in meters, between point <i>A</i> and point <i>B</i> ?<br /> (Note: For <img src='//dl.dropboxusercontent.com/u/1131693/act/triangle.gif' alt='triangle' height='11' width='12' /><i>PQR</i>, where <i>p</i>, <i>q</i>, and <i>r</i> are the lengths of the sides opposite <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>P</i>, <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>Q</i>, and <img src='//dl.dropboxusercontent.com/u/1131693/act/angle.gif' alt='angle' height='8' width='11' /><i>R</i>, respectively, <img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q9_q1.gif' height='25' width='150' />.)",
    "options": {"A": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q9_answer_a.gif' height='25' width='52' />",
                "B": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q9_answer_b.gif' height='25' width='52' />",
                "C": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q9_answer_c.gif' height='25' width='52' />",
                "D": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q9_answer_d.gif' height='25' width='52' />",
                "E": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q9_answer_e.gif' height='25' width='52' />",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>You fir", "content": "<p>You first need to find the measure of <img src='http://media.actstudent.org/images/angle.gif' alt='angle' height='8' width='11' /><i>A</i> = <br />180&deg; &ndash; 60&deg; &ndash; 45&deg; = 75&deg;. Then  <img src='http://media.actstudent.org/images/sin75_18.gif' height='27' width='32' /> = <img src='http://media.actstudent.org/images/sin60_ab.gif' height='27' width='32' /> . So, <i>AB</i> = <img src='http://media.actstudent.org/images/18sin60_sin75.gif' height='27' width='45' /> .</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/c990f4c0f98b429b9d50' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "E"
}, {
    "section": 5,
    "number": 10,
    "prompt": "Each side of the smaller square in the figure below is  <i>x</i>&nbsp;inches long, and each side of the larger square is <i>c</i>&nbsp;inches longer than a side of the smaller square. The area of the larger square is how many square inches greater than the area of the smaller square? <div class='mathfigure'><img src='https://dl.dropboxusercontent.com/u/1131693/act/GID_1834.gif' height='97' width='97' /></div>",
    "options": {"F": "<i>c</i><sup>2</sup>",
                "G": "<i>xc</i>",
                "H": "4<i>c</i>",
                "J": "(<i>x</i> + <i>c</i>)<sup>2</sup>",
                "K": "2<i>xc</i> + <i>c</i><sup>2</sup>",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>2<i>xc<", "content": "<p>2<i>xc</i> + <i>c</i><sup>2</sup> is correct. You need to subtract the area of the smaller square from the area of the larger square. The area of the larger square is (<i>x</i> + <i>c</i>)<sup>2</sup> and the area of the smaller square is <i>x</i><sup>2</sup>. So (<i>x</i> + <i>c</i>)<sup>2</sup> &ndash; <i>x</i><sup>2</sup> = <i>x</i><sup>2</sup> + 2<i>xc</i> + <i>c</i><sup>2</sup> &ndash; <i>x</i><sup>2</sup> = 2<i>xc</i> + <i>c</i><sup>2</sup>.</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/7617d0e03a8c454a8b02' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "K"
}, {
    "section": 5,
    "number": 11,
    "prompt": "A cube with edges <img src='//dl.dropboxusercontent.com/u/1131693/act/1_2.gif' alt='one half' align='absmiddle' height='27' width='11' /> inch long is shown below. What is the length, in inches, of a diagonal that runs from one corner of the cube to the opposite corner? <div class='mathfigure'><img src='//dl.dropboxusercontent.com/u/1131693/act/GID_3942.gif' height='115' width='122' /></div>",
    "options": {"A": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q11_answer_a.gif' height='25' width='16' />",
                "B": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q11_answer_b.gif' height='25' width='16' />",
                "C": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q11_answer_c.gif' height='25' width='16' />",
                "D": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q11_answer_d.gif' height='25' width='20' />",
                "E": "<img src='//dl.dropboxusercontent.com/u/1131693/act/s5_q11_answer_e.gif' height='25' width='20' />",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>The cor", "content": "<p>The correct response is E since <img src='http://media.actstudent.org/images/s5_a11_e1.gif' /> is the length of the diagonal that runs from one corner of the cube to the opposite corner. (<i>PR</i>)<sup>2</sup> = (<i>PS</i>)<sup>2</sup> + (<i>SR</i>)<sup>2</sup> = (<img src='http://media.actstudent.org/images/1_2.gif' alt='one half' height='27' width='11' />)<sup>2</sup> +  (<img src='http://media.actstudent.org/images/1_2.gif' alt='one half' height='27' width='11' />)<sup>2</sup>, (<i>XR</i>)<sup>2</sup> = (<i>PR</i>)<sup>2</sup> + (<i>XP</i>)<sup>2</sup> = (<img src='http://media.actstudent.org/images/1_2.gif' alt='one half' height='27' width='11' />)<sup>2</sup> + (<img src='http://media.actstudent.org/images/1_2.gif' alt='one half' height='27' width='11' />)<sup>2</sup> + (<img src='http://media.actstudent.org/images/1_2.gif' alt='one half' height='27' width='11' />)<sup>2</sup> =  <img src='http://media.actstudent.org/images/s5_q11_ab.gif' alt='three-fourths' height='25' width='16' />. Since (<i>XR</i>)<sup>2</sup> = <img src='http://media.actstudent.org/images/s5_q11_ab.gif' alt='three-fourths' height='25' width='16' />; <i>XR</i> = <img src='http://media.actstudent.org/images/s5_a11_e2.gif' /> = <img src='http://media.actstudent.org/images/s5_q11_ae.gif' height='25' width='20' /> .</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
        {"type": "contribution", "id": "<iframe wi", "content": "<iframe width='480' height='270' src='//www.schooltube.com/embed_force/b44c95c8e2b04cbe83c6' frameborder='0' allowfullscreen></iframe>", "user": "Ben Haley", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "E"
}, {
    "section": 5,
    "number": 12,
    "prompt": "Which of the following is equivalent to sin<img src='//dl.dropboxusercontent.com/u/1131693/act/theta.gif' alt='theta' height='11' width='9' /> csc(&ndash;<img src='//dl.dropboxusercontent.com/u/1131693/act/theta.gif' alt='theta' height='11' width='9' />) wherever sin<img src='//dl.dropboxusercontent.com/u/1131693/act/theta.gif' alt='theta' height='11' width='9' /> csc(&ndash;<img src='//dl.dropboxusercontent.com/u/1131693/act/theta.gif' alt='theta' height='11' width='9' />) is defined?",
    "options": {"F": "&ndash;1",
                "G": "&nbsp;&nbsp;1",
                "H": "&ndash;tan <img src='//dl.dropboxusercontent.com/u/1131693/act/theta.gif' alt='theta' height='11' width='9' />",
                "J": "&nbsp;&nbsp;tan <img src='//dl.dropboxusercontent.com/u/1131693/act/theta.gif' alt='theta' height='11' width='9' />",
                "K": "&ndash;sin<sup>2</sup> <img src='//dl.dropboxusercontent.com/u/1131693/act/theta.gif' alt='theta' height='11' width='9' />",},
    "discussion": {"contributions": [
        {"type": "contribution", "id": "<p>&ndash;", "content": "<p>&ndash;1 is the correct answer. csc(&ndash;<img src='http://media.actstudent.org/images/theta.gif' alt='theta' height='11' width='9' />) = &ndash;csc<img src='http://media.actstudent.org/images/theta.gif' alt='theta' height='11' width='9' /> = &ndash; <img src='http://media.actstudent.org/images/s5_a12_f.gif' />. So, sin<img src='http://media.actstudent.org/images/theta.gif' alt='theta' height='11' width='9' /> csc(&ndash;<img src='http://media.actstudent.org/images/theta.gif' alt='theta' height='11' width='9' />) = sin<img src='http://media.actstudent.org/images/theta.gif' alt='theta' height='11' width='9' />(&ndash; <img src='http://media.actstudent.org/images/s5_a12_f.gif' />) = &ndash;1 .</p>", "user": "Official ACT", "type":"contribution", "modified":"1999-12-31T23:59:59.999999Z",},
    ],},
    "answer": "F"
}, 
];
 
 
/*
Score Conversion
 
    number correct : subject score,
 
Based on [1].
 
[1]: https://dl.dropboxusercontent.com/u/1131693/act_answers.html
*/
var score_conversion = {
     0:  1,
     1:  3,
     2:  5,
     3:  7,
     4:  8,
     5:  9,
     6: 10,
     7: 11,
     8: 11,
     9: 12,
    10: 12,
    11: 13,
    12: 13,
    13: 14,
    14: 14,
    15: 14,
    16: 15,
    17: 15,
    18: 15,
    19: 15,
    20: 16,
    21: 16,
    22: 16,
    23: 17,
    24: 17,
    25: 17,
    26: 18,
    27: 18,
    28: 18,
    29: 19,
    30: 19,
    31: 20,
    32: 20,
    33: 21,
    34: 22,
    35: 22,
    36: 23,
    37: 24,
    38: 24,
    39: 24,
    40: 25,
    41: 25,
    42: 26,
    43: 26,
    44: 26,
    45: 27,
    46: 27,
    47: 27,
    48: 28,
    49: 28,
    50: 28,
    51: 29,
    52: 29,
    53: 30,
    54: 30,
    55: 31,
    56: 32,
    57: 33,
    58: 34,
    59: 35,
    60: 36,
};