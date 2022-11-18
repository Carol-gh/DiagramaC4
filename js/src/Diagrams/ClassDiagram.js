/**
 * Adds the general palette to the sidebar.
 */
 const addClassDiagramPalette = function (sb, expand) {

  // Reusable cells
  var field = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;');
  var attributeField = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=attribute');
  var methodField = new mxCell('+ method(type): type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=method');
  var personField = new mxCell('description of person', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=attribute');//-- Intento1
  field.vertex = true;
  attributeField.vertex = true;
  methodField.vertex = true;
  personField.vertex = true;

  var divider = new mxCell('', new mxGeometry(0, 0, 40, 8), 'line;html=1;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;');
  divider.vertex = true;

  // Default tags
  var dt = 'uml static class ';

  var fns = [
		//PERSON
		sb.addEntry(dt + 'object instance', function () {
            var group = new mxCell('', new mxGeometry(0, 0, 160, 180), 'group;rounded=0;labelBackgroundColor=none;fillColor=none;fontColor=#ffffff;align=center;html=1;');
        	group.setVertex(true);
        	group.setConnectable(false);
        	group.setAttribute('c4Type', 'person');
        	var body = new mxCell('', new mxGeometry(0, 70, 160, 110), 'rounded=1;whiteSpace=wrap;html=1;labelBackgroundColor=none;fillColor=#08427b;fontColor=#ffffff;align=center;arcSize=33;strokeColor=3c7fc0;');
        	body.setParent(group);
        	body.setVertex(true);
        	body.setValue(mxUtils.createXmlDocument().createElement('object'));
        	body.setAttribute('label', '<b>name</b><div>[Person]</div><div><br></div><div>Description</div>');
        	body.setAttribute('placeholders', '1');
        	body.setAttribute('c4Name', 'name');
        	body.setAttribute('c4Type', 'body');
        	body.setAttribute('c4Description', 'Description');
        	var head = new mxCell('', new mxGeometry(40, 0, 80, 80), 'ellipse;whiteSpace=wrap;html=1;aspect=fixed;rounded=0;labelBackgroundColor=none;fillColor=#08427b;fontSize=12;fontColor=#ffffff;align=center;strokeColor=3c7fc0;');
        	head.setParent(group);
        	head.setVertex(true);
        	head.setAttribute('c4Type', 'head');
        	group.insert(head);
        	group.insert(body); // child: 0 !!
            return sb.createVertexTemplateFromCells([group], group.geometry.width, group.geometry.height, 'Person');
        }),

		//PERSON EXTERNAL
		sb.addEntry(dt + 'object instance', function () {
            var group = new mxCell('', new mxGeometry(0, 0, 160, 180), 'group;rounded=0;labelBackgroundColor=none;fillColor=none;fontColor=#ffffff;align=center;html=1;');
        	group.setVertex(true);
        	group.setConnectable(false);
        	group.setAttribute('c4Type', 'person');
        	var body = new mxCell('', new mxGeometry(0, 70, 160, 110), 'rounded=1;whiteSpace=wrap;html=1;labelBackgroundColor=none;fillColor=#999999;fontColor=#ffffff;align=center;arcSize=33;strokeColor=3c7fc0;');
        	body.setParent(group);
        	body.setVertex(true);
        	body.setValue(mxUtils.createXmlDocument().createElement('object'));
        	body.setAttribute('label', '<b>name</b><div>[Person]</div><div><br></div><div>Description</div>');
        	body.setAttribute('placeholders', '1');
        	body.setAttribute('c4Name', 'name');
        	body.setAttribute('c4Type', 'body');
        	body.setAttribute('c4Description', 'Description');
        	var head = new mxCell('', new mxGeometry(40, 0, 80, 80), 'ellipse;whiteSpace=wrap;html=1;aspect=fixed;rounded=0;labelBackgroundColor=none;fillColor=#999999;fontSize=12;fontColor=#ffffff;align=center;strokeColor=3c7fc0;');
        	head.setParent(group);
        	head.setVertex(true);
        	head.setAttribute('c4Type', 'head');
        	group.insert(head);
        	group.insert(body); // child: 0 !!
            return sb.createVertexTemplateFromCells([group], group.geometry.width, group.geometry.height, 'External Person');
        }),

		//SOFTWARE SYSTEM
        sb.addEntry(dt + 'object instance', function () {
            var cell = new mxCell(
                'Software System', new mxGeometry(0, 0, 160, 90),
                'rounded=1;whiteSpace=wrap;html=1;labelBackgroundColor=none;fillColor=#1168bd;fontColor=#ffffff;align=center;arcSize=7;strokeColor=#0f5eaa;'
			);
            cell.vertex = true;
			cell.setVertex(true);
        	cell.setValue(mxUtils.createXmlDocument().createElement('object'));
        	cell.setAttribute('label', '<b>name</b><div>[Software System]</div><div><br></div><div>Description</div>');
        	cell.setAttribute('placeholders', '1');
        	cell.setAttribute('c4Name', 'name');
        	cell.setAttribute('c4Type', 'SoftwareSystem');
        	cell.setAttribute('c4Description', 'Description');

            return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Software System');
        }),

		//SOFTWARE SYSTEM EXISTING
        sb.addEntry(dt + 'object instance', function () {
            var cell = new mxCell(
                'Software System,\nExisting System', new mxGeometry(0, 0, 160, 90),
                'rounded=1;whiteSpace=wrap;html=1;labelBackgroundColor=none;fillColor=#999999;fontColor=#ffffff;align=center;arcSize=7;strokeColor=#8a8a8a;'
            );
            cell.vertex = true;
			cell.setVertex(true);
        	cell.setValue(mxUtils.createXmlDocument().createElement('object'));
        	cell.setAttribute('label', '<b>name</b><div>[Software System]</div><div><br></div><div>Description</div>');
        	cell.setAttribute('placeholders', '1');
        	cell.setAttribute('c4Name', 'name');
        	cell.setAttribute('c4Type', 'SoftwareSystemDependency');
        	cell.setAttribute('c4Description', 'Description');
            return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Software System, Existing System');
        }),

		//CONTAINER
        sb.addEntry(dt + 'object instance', function () {
            var cell = new mxCell(
                'Container', new mxGeometry(0, 0, 160, 90),
                'rounded=1;whiteSpace=wrap;html=1;labelBackgroundColor=none;fillColor=#438dd5;fontColor=#ffffff;align=center;arcSize=6;strokeColor=#3c7fc0;'
			);

            cell.vertex = true;
            //cell.insert(attributeField.clone());
            //cell.insert(methodField.clone());
			cell.setVertex(true);
        	cell.setValue(mxUtils.createXmlDocument().createElement('object'));
        	cell.setAttribute('label', '<span><b>name</b></span><div>[Container:&nbsp;<span>technology</span><span>]</span></div><div><br></div><div>Description</div>');
        	cell.setAttribute('placeholders', '1');
        	cell.setAttribute('c4Name', 'name');
        	cell.setAttribute('c4Type', 'Container');
        	cell.setAttribute('c4Technology', 'technology');
        	cell.setAttribute('c4Description', 'Description');
            return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Container');
        }),

		//DATABASE
        sb.addEntry(dt + 'object instance', function () {
            var cell = new mxCell(
                'Database', new mxGeometry(0, 0, 160, 90),
                'shape=cylinder;whiteSpace=wrap;html=1;boundedLbl=1;rounded=0;labelBackgroundColor=none;fillColor=#438dd5;fontSize=12;fontColor=#ffffff;align=center;strokeColor=#3c7fc0;'
			);
				
            cell.vertex = true;
			cell.setVertex(true);
        	cell.setValue(mxUtils.createXmlDocument().createElement('object'));
        	cell.setAttribute('label', '<span>Database</span><div>[Container:&nbsp;technology]</div><div><br></div><div>Description</div>');
        	cell.setAttribute('placeholders', '1');
        	cell.setAttribute('c4Type', 'Database');
        	cell.setAttribute('c4Technology', 'technology');
        	cell.setAttribute('c4Description', 'Description');
            return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Data Container');
        }),

		//COMPONENT
		sb.addEntry(dt + 'object instance', function () {
            var cell = new mxCell(
                'Component', new mxGeometry(0, 0, 160, 90),
                'rounded=1;whiteSpace=wrap;html=1;labelBackgroundColor=none;fillColor=#63BEF2;fontColor=#ffffff;align=center;arcSize=6;strokeColor=#2086C9;metaEdit=1;resizable=0;points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];'
			);
            cell.vertex = true;
            cell.setVertex(true);
        	cell.setValue(mxUtils.createXmlDocument().createElement('object'));
        	cell.setAttribute('label', '<span><b>name</b></span><div>[Component:&nbsp;<span>technology</span><span>]</span></div><div><br></div><div>Description</div>');
        	cell.setAttribute('placeholders', '1');
        	cell.setAttribute('c4Name', 'name');
        	cell.setAttribute('c4Type', 'Component');
        	cell.setAttribute('c4Technology', 'technology');
        	cell.setAttribute('c4Description', 'Description');
            return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Container');
        }),

		//RELATIONSHIP
        sb.createEdgeTemplateEntry(
			'edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;entryX=0.5;entryY=0;dashed=1;jettySize=auto;orthogonalLoop=1;', 160, 0, 'Description', 'Relationship', null, 'uml generalization extend'
		),

		//SOFTWARE SYSTEM BOUNDARY
		sb.addEntry(dt + 'object instance', function () {
            var cell = new mxCell(
                '', new mxGeometry(0, 0, 160, 90),
                'rounded=1;fontSize=11;whiteSpace=wrap;html=1;dashed=1;arcSize=20;fillColor=none;strokeColor=#666666;fontColor=#333333;labelBackgroundColor=none;align=left;verticalAlign=bottom;labelBorderColor=none;spacingTop=0;spacing=10;dashPattern=8 4;metaEdit=1;rotatable=0;perimeter=rectanglePerimeter;noLabel=0;labelPadding=0;allowArrows=0;connectable=0;expand=0;recursiveResize=0;editable=1;pointerEvents=0;absoluteArcSize=1;points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];'
			);
			cell.vertex = true;
            cell.setVertex(true);
        	cell.setValue(mxUtils.createXmlDocument().createElement('object'));
        	cell.setAttribute('label', '<div style="text-align: left">System name</div><div style="text-align: left">[Software System]</div>');
        	cell.setAttribute('placeholders', '1');
        	cell.setAttribute('c4Name', 'System name');
        	cell.setAttribute('c4Type', 'ExecutionEnvironment');
        	cell.setAttribute('c4Application', 'Software System');
            return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'System Scope Boundary');
        }),
		
		//SOFTWARE SYSTEM BOUNDARY
		sb.addEntry(dt + 'object instance', function () {
            var cell = new mxCell(
                '', new mxGeometry(0, 0, 160, 90),
                'rounded=1;fontSize=11;whiteSpace=wrap;html=1;dashed=1;arcSize=20;fillColor=none;strokeColor=#666666;fontColor=#333333;labelBackgroundColor=none;align=left;verticalAlign=bottom;labelBorderColor=none;spacingTop=0;spacing=10;dashPattern=8 4;metaEdit=1;rotatable=0;perimeter=rectanglePerimeter;noLabel=0;labelPadding=0;allowArrows=0;connectable=0;expand=0;recursiveResize=0;editable=1;pointerEvents=0;absoluteArcSize=1;points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];'
			);
			cell.vertex = true;
            cell.setVertex(true);
        	cell.setValue(mxUtils.createXmlDocument().createElement('object'));
        	cell.setAttribute('label', '<div style="text-align: left">Container name</div><div style="text-align: left">[Container]</div>');
        	cell.setAttribute('placeholders', '1');
        	cell.setAttribute('c4Name', 'System name');
        	cell.setAttribute('c4Type', 'ExecutionEnvironment');
        	cell.setAttribute('c4Application', 'Software System');
            return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Container Scope Boundary');
        }),
    ];

  sb.addPaletteFunctions('classDiagram', mxResources.get('classDiagram'), expand || false, fns);
  
};

module.exports = addClassDiagramPalette;