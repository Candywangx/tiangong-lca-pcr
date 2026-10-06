---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.poultry-incubation-and-brooding-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 家禽孵化与育雏机械制造

## 1. 范围与适用性

制造完整电加热家禽蛋孵化器（包括孵化机及出雏机）以及电加热接触/辐射育雏器。各型号分别按加热方法、循环、翻蛋、湿度供给及所含控制/电源总成定义。强制通风自动翻蛋孵化器与低电压接触育雏器为不同配置；不假定含有对方的部件。Brinsea实例支持这些区别，不构成通用材料配方。

排除燃气育雏器、通用房间/建筑加热及通风、与孵化无关的蛋处理、家禽饲喂/饮水机械、单售零件、蛋/雏禽、孵化场/育雏服务、农场运行、生物孵化率/存活率、增重、维护及报废。不定义动物产出或供热服务参考。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.poultry-incubation-and-brooding-machinery |
| classification_refs | CPC 3.0 44193; narrower electric-appliance manufacturing scope; no mapping acceptance |
| covered_products | 完整电加热家禽孵化机/出雏机及接触/辐射育雏器，配置分别定义。 |
| excluded_products | 燃气育雏器、通用加热器/风机、单售零件及动物生产服务。 |
| representative_product | 一台加热、循环、蛋托/翻蛋及湿度配置明确的空机验收电孵化器；育雏器数据集保留实际加热板/支脚/所配电源。 |
| production_route | 接收原料/零件 → 条件性场内成形、板材制造、支架焊接及涂装 → 配置受控装配 → 出厂验收/返工 → 发运。 |
| market_state | 新制完整验收设备，无蛋/雏禽/试验水的干燥空机；所供可拆件纳入；运输包装单独记录。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造交付一台具有声明家禽蛋电孵化/出雏或电育雏功能的完整设备；生物运行不在数据集内。 |
| How much | 1 kg单一明确配置的验收合格净整机；为完整产品归一化份额，不是可独立使用的千克零件。 |
| How well | 符合已放行物料清单/图纸及型号实际验收标准，涉及所安装加热/控制、空气循环、翻蛋、湿度供给及电气安全；不以孵蛋试验或雏禽结果替代机器符合性。 |
| How long or cycle | 一个制造及验收周期；不规定使用寿命、孵化批数或育雏周数。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 家禽孵化器和育雏器 `f4726903-5715-4f8c-832b-7eeaf33d03c8` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号/修订；序列号/批次；孵化机/出雏机/育雏器；电加热方法及额定参数；自然/强制循环；手动/自动/无翻蛋；蛋托及连接件供货；加湿路线及附件；箱体/加热板材质；控制器/传感器边界；所配电源/电缆/支脚；电压；完整供货可拆件；干燥空机状态；验收标准；实测净质量M；工厂/时期；自制/外购；上游/供应方覆盖；包装排除 |

在数据集元数据或参考流备注声明全部限定信息。此宽泛公开产品身份由实际电设备配置收窄，不授权将孵化机、出雏机及育雏器作为功能等价产品合并。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_units | molding_power; fabrication_power; welding_power; coating_power; assembly_power; test_power | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 归一化前将实测kWh按3.6 MJ/kWh换算为MJ；保留能量分子单位及实际供电电压/地理。 |

称量干燥空机验收设备的M。包括供货蛋托、盖/连接件、支脚、所配可拆电源及电缆；若不在同一秤上，采用可追溯部件质量。排除蛋/雏禽、水、垫料、运输包装及外部安装农场设备。按台数统计时采集各配置实际实测净质量；不提供假定整机或部件重量。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址接收的外购原料及成品部件；供应商生产不自动纳入前景。 |
| starting_condition_role | 制造模块声明的物料/总成起点。 |
| product_classification_scope | 完整专用电家禽孵化器/出雏机及育雏器；CPC语境较全部热源路线窄。 |
| recursive_input_rule | 外购箱体/加热板/风机/控制总成须明确所含零件及上游边界；不递归重复内部材料或制造。 |
| upstream_dataset_requirement | 扩展研究另行连接相容实际供应商/材料数据集、进厂运输及废物处理，披露地理、牌号及技术；缺失供应方仍为缺口。 |
| disclosure | 报告场址/时期、自制/外购、外包制造、测试配置、包装、运输/处理覆盖及缺失；此制造模块本身不证明完整从摇篮到工厂门覆盖。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_manufacturing | foreground | 纳入实际场内接收至放行活动、可归属公用工程、损耗及返工；条件工序仅在工单表明确实发生时适用。 |  |
| boundary_configuration | complete_machine | 纳入全部供货零件，包括孵化器蛋托/连接件/盖以及育雏加热板/可调支脚/所配电源；型号说明书展示供货边界，不移用通用材质或数量。 | brinsea-ovation; brinsea-ecoglow |
| boundary_exclusions | downstream | 排除孵化/育雏运行用能、蛋/雏禽、死亡、垫料、饲料、农场周期之间清洗及动物排放；仅记录实际出厂测试负担；场址使用的试验蛋或人工载荷须另设实测具体交换。 |  |
| boundary_emissions | elementary_outputs | 按控制后实际实测物质及受纳介质记录；送处理液体为废物交换，不是水资源消耗或受纳水体排放；未知数量是缺口而不是零。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| molding | 壳体聚合物成形 | conditional | 仅在场内实际成形时纳入；外购壳体替代此工序。 | foreground_production | 每 1 kg 参考流 |
| fabrication | 金属切割、折弯及钻孔 | conditional | 仅在场内实际制造金属箱体/支架时纳入。 | foreground_production | 每 1 kg 参考流 |
| welding | 支撑架焊接 | conditional | 仅纳入实际焊接支架；其他连接路线须补独立交换。 | foreground_production | 每 1 kg 参考流 |
| coating | 金属粉末涂装 | conditional | 仅纳入实际场内表面处理路线；未涂装及外购成品件排除。 | foreground_production | 每 1 kg 参考流 |
| assembly | 配置家禽设备装配 | required | 所有产品；孵化器与育雏器实际安装部件不同。 | foreground_production | 每 1 kg 参考流 |
| acceptance | 出厂功能验收与返工 | required | 所有产品；实际放行测试方案决定相关功能及试验水使用。 | foreground_production | 每 1 kg 参考流 |
| packing | 发运保护与包装 | conditional | 仅纳入工厂实际使用的包装。 | foreground_production | 每 1 kg 参考流 |

将箱体/顶/底、保温、观察窗、蛋托、水盘盖及连接件、加热器、风机/防护罩、翻蛋机构、湿度硬件、控制/传感器、电缆及安装件核对至具体孵化器物料清单；育雏器核对加热板、支脚、电缆及所配电源。实际材质须由供应商/物料清单确认，而非图片。每项缺失实物部件、胶黏剂/化学品、废物及实测排放各补独立原子交换。外购成品件替代相应场内制造；内部转移不是外部投入。条件性缺省须有路线依据。

### 过程：壳体聚合物成形（`molding`）

仅在场内实际成形时纳入；外购壳体替代此工序。

#### 输入

##### 产品流

###### 丙烯腈-丁二烯-苯乙烯共聚物粒料（ABS） （`abs_granulate`）

仅记录场内成形实际消耗的ABS粒料；公开身份明确粒料及质量，不含供货牌号或地理限定；记录当前供应商、注塑牌号、添加剂及颜色组成；任何另加色母粒或胶黏剂需独立实测配方行；成品壳体不是树脂投入。

- 选定流： 丙烯腈-丁二烯-苯乙烯共聚物粒料（ABS） `4f197be0-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_molding`

###### 交流电 （`molding_power`）

仅在场内实际发生时计量成形、冷却及修边需求；适用于交付电压低于1千伏的电网平均电力，须明确实际地理及供应方。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_molding`

#### 输出

##### 废物流

###### 废弃ABS成形修边料 （`abs_trim`）

称量一种有记录ABS配方的外送废弃修边料；内部清洁粉碎回用属于内部循环，不再计为外购树脂或废物输出。

- 选定流： 废弃ABS成形修边料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_molding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_molding`

### 过程：金属切割、折弯及钻孔（`fabrication`）

仅在场内实际制造金属箱体/支架时纳入。

#### 输入

##### 产品流

###### 冷轧不锈钢板 （`stainless_sheet`）

仅适用于场内箱体或蛋盘制造；保留合金、厚度、下料图及扣除可复用退回后的领料；不假定通用箱体材料。

- 选定流： 冷轧不锈钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 热轧碳钢板 （`carbon_plate`）

仅在实际采用该原料制造支撑架时纳入；记录牌号、厚度及净领料；不锈钢与碳钢原料及废物分开。

- 选定流： 热轧碳钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 交流电 （`fabrication_power`）

计量切割、折弯及钻孔，以及可归属的抽风和压缩空气电量；仅适用低于1千伏的交付电网平均供电。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

#### 输出

##### 废物流

###### 工业后钢废料 （`steel_offcuts`）

仅记录实际外送的未经处理碳钢边角料/切屑；含油切屑及不锈钢组分分开；复用原料不是废物。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 未经处理不锈钢板边角料 （`stainless_offcuts`）

按实际合金称量板材边角料，与碳钢废料分开；保留去向及处理边界。

- 选定流： 未经处理不锈钢板边角料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

### 过程：支撑架焊接（`welding`）

仅纳入实际焊接支架；其他连接路线须补独立交换。

#### 输入

##### 产品流

###### 药芯焊丝 （`welding_wire`）

仅适用于有记录的机架自保护碳钢药芯焊接；其他焊法需另设牌号明确的焊丝及保护气体行；此身份不适用于不锈钢焊接。

- 选定流： 药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_welding`

###### 交流电 （`welding_power`）

计量低于1千伏电网平均供电的实际机架焊接及烟尘抽风需求；场内不制焊接件时排除此工序。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_welding`

#### 输出

##### 基本流

###### 颗粒物，粒径未特指 （`welding_pm_air`）

仅记录捕集后实测排入室外空气、粒径及空气子介质未特指的颗粒物；记录控制设施及采样覆盖；不假定每次焊接都发生此记录量；捕集粉尘属于废物。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_welding。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_welding`

### 过程：金属粉末涂装（`coating`）

仅纳入实际场内表面处理路线；未涂装及外购成品件排除。

#### 输入

##### 产品流

###### 涂料（粉末） （`powder_paint`）

仅适用于自制金属件实际粉末涂装；明确单一配方、树脂、颜色及扣除退库粉末后的消耗；不规定固化周期、材料比例或膜厚。

- 选定流： 涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 交流电 （`coating_power`）

计量实际涂装及电加热固化；此行不覆盖燃料固化炉；如采用该路线，另补实际燃料及实测物种；适用低于1千伏的交付电网平均供电。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

#### 输出

##### 废物流

###### 废弃聚酯涂装粉末 （`powder_waste`）

仅在实际废弃配方为聚酯粉末时纳入；过喷粉末与固化屑及内部回收粉末分开称量；其他配方另设行。

- 选定流： 废弃聚酯涂装粉末
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

### 过程：配置家禽设备装配（`assembly`）

所有产品；孵化器与育雏器实际安装部件不同。

#### 输入

##### 产品流

###### 成品孵化器壳体 （`cabinet`）

仅记录材质、门/顶/底及所含保温边界明确的外购完整壳体；替代同一零件的场内原料制造/成形。

- 选定流： 成品孵化器壳体
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品电阻加热模块 （`heater`）

仅记录安装孵化器电压/额定参数及放行设计对应的外购电阻加热元件；此宽泛公开外购部件身份由实际电阻加热器规范及净质量收窄，不代表完整育雏加热板；不重复已包含于供货加热板中的元件。

- 选定流： 成品电阻加热模块
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品低电压育雏加热板 （`brooder_panel`）

仅适用于接触/辐射电育雏器；记录供货密封加热板质量、电压及所含加热元件；不另计内部加热器。

- 选定流： 成品低电压育雏加热板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品孵化器循环风机总成 （`fan`）

仅在安装时纳入；保留电机/叶轮/护罩总成边界、电压及净质量；外购总成不得重复内部电机；自然对流机型排除此件。

- 选定流： 成品孵化器循环风机总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品翻蛋减速驱动 （`turner`）

仅适用于自动翻蛋孵化机；记录减速电机/驱动边界、零件号及质量；手动翻蛋设备与无翻蛋机构的出雏机排除此交换。

- 选定流： 成品翻蛋减速驱动
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品聚丙烯蛋托 （`egg_tray`）

仅在供应商/物料清单确认聚丙烯时纳入；记录托盘类型、安装数量及各净质量；不由说明书插图推断聚合物种类。

- 选定流： 成品聚丙烯蛋托
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品温度控制电子板 （`controller`）

仅在安装时纳入；明确含固件及接插件的装配板边界、质量及实际控制功能；独立传感器仅在不被包含时另计。

- 选定流： 成品温度控制电子板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品温度与相对湿度传感器模块 （`sensor`）

指一个物理装配的复合传感模块，不是两种可替换物质；记录实际零件及质量；温度与湿度传感器独立时，替换为两个实物零件行。

- 选定流： 成品温度与相对湿度传感器模块
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品育雏器市电转低电压电源 （`power_supply`）

所配电源属于验收育雏器完整供货，即使发运时拆下也纳入；保留输出电压、电缆边界及质量；不得作为外部农场设施排除。

- 选定流： 成品育雏器市电转低电压电源
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品绝缘铜线束 （`harness`）

记录一套供货线束边界、接插件、导体/绝缘规范及质量；不重复投入外购线束内铜及绝缘材料。

- 选定流： 成品绝缘铜线束
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品可调育雏器支脚 （`legs`）

每行一种明确支脚设计；采集安装数量及零件净质量、实际聚合物/金属牌号及连接；不由插图推断材质。

- 选定流： 成品可调育雏器支脚
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品聚丙烯孵化器水盘 （`water_pan`）

仅记录供应商物料清单确认的独立外购PP水盘；已计入成形底座的整体水槽不是另项投入；未包含的水盘盖/连接件须各设行。

- 选定流： 成品聚丙烯孵化器水盘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品硅橡胶门密封条 （`gasket`）

仅记录实际安装的明确硅橡胶配方及截面；记录长度及净质量；采用其他密封材质时另设材质明确的零件。

- 选定流： 成品硅橡胶门密封条
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢制六角螺栓 （`bolt`）

明确等级、镀层、安装数量及质量；实际供货螺母/垫圈若不在明确总成内，需独立原子交换。

- 选定流： 成品钢制六角螺栓
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 交流电 （`assembly_power`）

计量低于1千伏交付电网平均供电的实际装配及可归属动力工具；记录所含电缆/电子总成边界。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

### 过程：出厂功能验收与返工（`acceptance`）

所有产品；实际放行测试方案决定相关功能及试验水使用。

#### 输入

##### 产品流

###### 交流电 （`test_power`）

测量安装配置实际出厂加热/控制、循环、翻蛋及电气安全试验用电，包括失败测试及返工；不得用孵化天数或育雏周数的运行作为制造需求。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 自来水 （`test_water`）

仅记录出厂加湿/检漏试验实际加入的自来水；采集补水质量，或有实测密度及温度的体积；复用属于内部；排除农场用水。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

#### 输出

##### 产品流

###### 家禽孵化器和育雏器 （`finished_machine`）

声明电孵化器/出雏机或电育雏器配置的完整验收机器：净质量不含蛋/雏禽、垫料、工艺水及运输包装；包括供货可拆蛋托、支脚及所配电源。

- 选定流： 家禽孵化器和育雏器 `f4726903-5715-4f8c-832b-7eeaf33d03c8`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`

##### 废物流

###### 废弃孵化器加湿试验水 （`test_wastewater`）

仅记录出厂试验后实际外送处理的液体；质量及组成与自来水补水、留存水及蒸发分开计量；不假定等于水投入。

- 选定流： 废弃孵化器加湿试验水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

### 过程：发运保护与包装（`packing`）

仅纳入工厂实际使用的包装。

#### 输入

##### 产品流

###### 聚乙烯薄膜 （`film`）

仅记录实际使用的PE薄膜；记录聚合物牌号及扣退回后的净领用，与纸板及泡沫分开。

- 选定流： 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_packing`

###### 瓦楞纸板 （`board`）

仅在供货纸板符合公开原件定义的C/E/F楞及至少80%纤维时适用；记录实际再生成分及配置；其他纸板牌号另需身份；这是流匹配条件，不是强制包装规范。

- 选定流： 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_packing`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | manufacturing | 优先使用直接计量或工单领用交换。按cp_allocation，将其余共享公用工程按实测因果驱动分摊：机加工/焊接运行时间结合实测功率；成形加热器时间/负载结合实测批次需求；涂装载荷面积结合实测批次消耗；装配/试验工位时间结合实测工位需求。记录驱动覆盖，并将分摊量加排除量核对至原始表计。 |  |
| allocation_variants | product_mix | 配置或能耗不同的变型不得全部按机器台数分摊。质量或经济基准后备方法需有前景依据、不确定性敏感性及审查，不是本PCR规定的默认方法。 |  |
| allocation_scrap | steel_offcuts | 保留材料投入及单独实测的废钢输出，不自动给予避免钢生产抵扣；有关时报告废钢价格与去向；共产品分类或回收抵扣需另行声明且经审查的模型，防止重复抵扣；内部循环回收粉末不是可销售共产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每个验收配置及有可追溯覆盖的抽样序列号 | 与活动记录相同的制造时期 | 一个声明场址的验收完整供货 | 每台验收净质量 | 秤校准；干燥空机；供货电源/零件边界；可拆卸部件质量；验收签署 |
| cp_molding | molding | 本过程各原子行 | measurement | 树脂牌号/形态；领用/退回；成形/冷却kWh；修边质量；内部回用；验收零件数 | 称量各树脂投入及外送修边料；计量实际成形/冷却；核对内部回用及库存；保留实际工艺指令及零件/物料清单边界。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_fabrication | fabrication | 本过程各原子行 | measurement | 原料合金/牌号/厚度；领用/退回；零件质量；分别记录碳钢/不锈钢边角料；kWh；工单 | 称量每种原料及外送合金组分，计量工序并核对内部零件、未用退回原料及损耗；实际湿式机加工须另设切削液及废物行。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_welding | welding | 本过程各原子行 | measurement | 焊丝规范；焊丝盘领用/退回；kWh；实测颗粒物物种/介质；收集过滤废物；控制覆盖 | 采用批准的实际焊接工单及表计；适用时测量控制后室外颗粒物；清单闭合前将捕集粉尘记录为另项具体废物。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_coating | coating | 本过程各原子行 | measurement | 粉末配方；领用/退回/回收；留存涂层；废弃粉末；电固化炉kWh；工单 | 称量实际配方及外部损耗，计量涂装/固化并核对留存涂层及内部回收；任何预处理化学品、漂洗废水、液体涂料或燃料加热均须补具体行及实际记录。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_assembly | assembly | 本过程各原子行 | measurement | 配置/物料清单修订；零件号/材质；供货总成边界；安装数量；各零件质量；领用/退回；kWh | 核对接收/领用/退回零件至安装配置设备；称量各零件类型并避免总成内部重复；包括拆下供货电源/蛋托/支脚；不由图片假定聚合物牌号。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_acceptance | acceptance | 本过程各原子行 | measurement | 型号/序列号/配置；放行测试方案；测试时间；温度/控制响应；循环；翻蛋动作；湿度/检漏检查；电气安全；合格/不合格/返工；kWh；试验补水；复用/留存/移除水；废水组成；实测M | 采用签署的型号特定放行测试程序及记录验收结果；计量实际工厂用电/水，包括失败试验/返工；实际测试载荷单独记录；温控设定、测试时间及安全限值来自批准的当前前景规范，而非历史说明书饲养建议。 | kg; MJ | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_packing | packing | 本过程各原子行 | measurement | PE薄膜质量；纸板楞型/纤维/再生成分；领用/退回；序列号发运 | 称量实际每项包装件，核对退回及发运；包装排除于M；另用泡沫、木支撑及金属保护件需各设单一材料/部件行。 | kg | 每批次/工单；每次测试；按月核对 | 一个完整声明生产年，或有理由的更短完整批次；与验收数量时期一致 | 相同场址及配置；明确外包工作边界 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存核对；验收数量；排除需求；缺失记录披露 |
| cp_allocation | manufacturing | shared_demand | measurement | 公用工程总量；实测功率/负载；运行时间；涂装面积；验收配置数量；排除需求 | 尽可能分表计量；测量共用设备/炉/工位负载及因果驱动，并记录各共享交换采用该驱动的理由。 | MJ; h; m2 | 每个共用批次与每月核对 | 相同生产区间 | 该场址全部消耗产品与排除操作 | 按实测因果需求分摊总量；再汇总可归属数量 / 验收机器数量 | 分表一致性；总量闭合；驱动不确定性；敏感性；批准记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | abs_granulate; molding_power; abs_trim; stainless_sheet; carbon_plate; fabrication_power; steel_offcuts; stainless_offcuts; welding_wire; welding_power; welding_pm_air; powder_paint; coating_power; powder_waste; cabinet; heater; brooder_panel; fan; turner; egg_tray; controller; sensor; power_supply; harness; legs; water_pan; gasket; bolt; assembly_power; test_power; test_water; test_wastewater; film; board | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

应用normalize_mass前，保持单一声明配置及匹配时期。按各协议取得q_item：有效退回后的净原料/零件领用、可归属表计消耗或实测废物/排放，除以同一配置的验收机器数量。废品及返工负担由验收产出承担，不得除以全部投产数量。不同实测M的数据集只有在保留配置特定记录后才能按质量加权。单位转换及分摊在原始记录上完成，并另留计算凭据；本PCR不提供通用消耗范围、密度或排放因子。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_identity | all_flows | 匹配实际零件/材料牌号、交付状态、浓度、地理、参考属性及单位；UUID仅提供身份，不提供数量依据或供应方数据集；交换完全链接前解决空身份。 | 供应商资料；流/属性/单位记录；身份审查 |
| quality_completeness | complete_machine | 将配置物料清单全部部件、供货可拆件及电源核对至M；清点实际公用工程、化学品、每项废物及排放；缺失零件须测量，不按M残差臆造；报告覆盖及未链接供应方。 | 物料清单修订；称量表；物料平衡；缺失数据登记 |
| quality_period | production_records | 采用一个声明工厂及完整代表时期；记录型号变化、季节性、空载需求、外包及返工；量化一手覆盖与不确定性；历史产品案例不替代当前生产记录。 | 工单；验收台账；表计校准；来源限制 |
| quality_test | acceptance | 对所安装加热/控制、空气循环、翻蛋、湿度硬件及电气安全采用型号实际放行验收标准；育雏器采用自身加热板/电源符合性检查；不规定生物孵化率、存活率或任意耐久门槛。 | 签署测试方案及序列号/配置关联结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 要求1 kg参考输出、cp_mass实测M、完整电设备配置及所供可拆件、干燥空机状态及包装排除；缺失质量或验收依据不得声称数据集完整。 |  |
| validation_normalization | inventory | 每个适用的非参考行采用normalize_mass及声明协议；核对q_item与M配置/时期相同、除法方向正确且能量/体积/件数分子单位保留。 |  |
| validation_route | processes | 按工单匹配自制/外购、实际成形、金属制造、连接及涂装；原料与外购成品件、所含加热器/电机与总成及内部回收不得重复。 |  |
| validation_species | elementary_flows | 核对化石/生物源碳、NO2与NO/NOx/N2O差异、粒径、室外空气子介质及控制边界；物种或介质未知仍为缺口；废水送处理不是淡水排放。 |  |
| validation_coverage | dataset | 区分实测、计算、估算、排除、不适用及缺失数量；核对验收产出、废料、库存及分摊闭合；方法检查或投影有效不等于科学方法学批准，也不证明从摇篮到工厂门完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 用于明确配置与时期的有记录制造模块；只有建立供应商/运输/处理覆盖后方用于上游连接评价。 |
| excluded_use | 家禽孵化/育雏服务、孵化率/存活率比较、按寿命归一化声明、不同设备配置的通用等价性及无依据的完整从摇篮到工厂门声明。 |
| required_metadata | PCR标识；型号/配置/物料清单及序列号范围；实测M及干燥空机供货状态；验收标准；场址/时期；自制/外购及工艺路线；参考基准；供应方及运输；包装；分摊；数据来源；版本。 |
| required_quality_disclosure | 实测覆盖、缺失身份/供应方及数量、路线排除、来源年龄/限制、转换条件、分摊依据、排放监测缺口、不确定性及独立审查状态。 |
| update_trigger | 物料清单或配置变化；验收试验修订；供应商/工序/涂装或能源供应变化；新代表生产时期；身份或证据缺口解决。 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| brinsea-ovation | handbook | Brinsea Ovation 56 Eco说明书，AG45 US Issue 01（历史PDF元数据2016），PDF/印刷第5页Part quantities、第12页Display及第18页Cleaning up。https://www.brinsea.com/Manuals/Ovation56EcoUS.pdf | 仅支持型号特定供货顶/底、蛋托/连接件/盖及加热/翻蛋/循环架构；不采用聚合物牌号、容量、农场温湿度/翻蛋间隔、干燥时间、出厂验收门槛、质量或寿命；当前物料清单及放行程序决定数据集。 |
| brinsea-ecoglow | handbook | Brinsea EcoGlow Safety 2000说明书，HD603 US Issue 01（历史PDF元数据2019），PDF第1页供电警告、介绍及Assembly。https://www.brinsea.com/Manuals/EcoGlow2000manual.pdf | 型号特定密封低电压加热板、所配电源及可调角支脚；不将雏禽容量、农场节能、保证/寿命或通用安全试验限值移用于制造。 |
