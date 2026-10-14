---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.machined-solid-coniferous-structural-members
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 工厂节点加工的针叶实体结构梁柱

## 1. 范围与适用性

本 PCR 支持独立的二次制造边界：采购窑干、未处理、未胶合针叶实体毛坯，制成逐件对应图纸且具有构件专用卯、榫、缺口或连接孔的梁或柱，再在加工状态下进行结构验收。节点几何和验收是必要条件；仅把分等或直刨锯材称为梁柱不足以适用。毛坯属于现有适用锯材方法，仅连续纵向成型的型材属于适用型材方法。本记录增加净木材与节点切除几何、剩余截面和等级追溯、构件专用不合格品返工及加工归属，不重复原木到锯材生产。[usda-wood-handbook-2021 第6和17章；作者范围选择。]

排除阔叶材、围栏柱、圆杆、轨枕、胶合层积指接及其他工程木、防腐涂覆、组装框架及安装。该干式机械路线使用电动搬运，没有现场干燥热调湿、燃料燃烧或湿式化学清洗；实际额外路线须另行形成有证据的扩展。USDA 传统木构架说明不意味着所有重型木材均为窑干，采购干燥毛坯是明确选定路线。CPC31625 包含不同柱形及建筑梁；建筑柱覆盖范围须独立分类审查。分类叶标签不是产品身份。[unsd-cpc31625-3。]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.machined-solid-coniferous-structural-members |
| classification_refs | CPC 3.0 31625 为候选分类语境；建筑柱覆盖范围须独立审查 |
| covered_products | 采购窑干锯材制成的未组装单根针叶实体结构梁柱；必须有构件专用卯、榫、缺口或连接孔及加工后结构验收 |
| excluded_products | 没有节点加工的普通粗锯或直刨分等材；仅连续成型的型材；围栏柱、圆杆及轨枕；阔叶材；工程木、指接、胶合、防腐或涂覆产品；组装框架及安装 |
| representative_product | 构件工厂门口验收合格的干燥未处理、未组装节点加工针叶实体结构构件 |
| production_route | 采购窑干毛坯 → 检验及结构等级追溯 → 构件截切、铣削、钻孔 → 抽尘 → 加工后验收 → 包装；一个前景单元内分阶段计量 |
| market_state | 未组装且与构件图对应的独立构件；不声明安装后的承载功能或寿命 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应具有构件专用连接节点的工厂预制干燥单根针叶实体结构构件，不声称安装后的结构功能等价 |
| How much | 验收成品在交付含水率下的 1 m3 实际净实体木材体积，排除包装及几何空洞 |
| How well | 树种、预定轴压或抗弯用途、适用结构分等标准及版本与追溯、加工图及公差、剩余截面与加工后验收、实测含水率 |
| How long or cycle | 一个有记录的制造批期；不设定使用寿命或设计荷载等价 |
| reference_flow_link | `finished_member` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 建筑用木料 `73ef1fef-6aa1-43b0-8721-c8f2f1385509` |
| 参考流属性 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | 体积单位 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 树种及配比；单根未处理、未胶合、未涂覆针叶毛坯及供方窑干和等级证据；梁或柱用途；分等标准及版本、分等方法和批次追溯；图纸版本及构件编号；实际长度和截面、节点位置、孔、卯、榫及缺口尺寸与验收；关键剩余截面及加工后结构验收依据；交付含水率、取样梯度和方法及储存时间；实际净实体体积约定、几何和空洞修正及计量不确定度；需要转换时同状态实测湿干质量和密度；排除包装；场址批期、上游边界及供方体积基准核对 |

较广义建筑木料记录包含实体建筑木材或构件，没有限定为不兼容路线或材质。其常见板材尺寸是描述示例，不是通用排除条件。必需限定信息仅选取本单根针叶节点加工构件子集；UUID 不认证结构，也不定义其数量或背景基准。具体数据包须声明全部限定信息。参考数量是制造声明单位，不是安装后服务等价的功能单位。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_volume` | 参考产品 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按 cp_reference 测定验收构件实际剩余实体木材，扣除孔、卯及缺口移除量，保留实际存在的榫体。汇总各构件净体积为 Q>0。外包络体积、贸易名义尺寸、堆积空隙、包装、不合格品及件数均不是 Q。这一作者几何约定须与供方背景核对，单位同为 m3 并不足够。 |
| `moisture_basis` | 木材及余料 | 明确干基或湿基水分比例 | dimensionless | u=(m_wet-m_od)/m_od；w=(m_wet-m_od)/m_wet；w=u/(1+u)；m_od=m_wet/(1+u)；m_od>0，u>=0，0<=w<1。百分数除以 100。分别采集树种、表芯梯度及各余料状态；电测仪需适当校准并遵守原方法限制。[usda-wood-handbook-2021 第4章公式4-1/4-2及第13章。] |
| `mass_volume` | 木材换算 | 同状态质量和净实体体积 | kg; m3 | rho_u=m_wet/V_net,u；m_wet=rho_u×V_net,u，使用同树种、同含水率及同几何约定实测量。基本密度是全干质量/生材体积，不是交付湿密度。数据库次级质量系数、名义板英尺或松散体积均不是密度测量。[usda-wood-handbook-2021 第4章表4-5。] |
| `electricity_units` | machining_electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 电表 kWh×3.6 得到 MJ。净热值是已核实的数据库电力参考属性名称，不证明车间存在燃烧。匹配用户侧电压、地区和年份、供电混合及背景损失。 |
| `reference_background` | finished_member | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 建筑木料身份比限定构件更广义，没有相反路线或材质限制；它不定义净、名义或堆积体积、含水率及节点几何。绑定实际数量或供方背景结果前，取得对方参考体积定义，使用同状态实测几何和密度以及有记录的转换与 cp_reference 核对。未知兼容性保持未决，不得声称数据集完整或直接移植泛用锯材背景。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在声明的接收边界采购窑干未处理未胶合针叶锯材；干燥及林业负荷属于上游 |
| starting_condition_role | 构件工厂门到门前景 |
| product_classification_scope | 节点加工结构构件语义类别；梁柱合并范围的 CPC31625 映射未决 |
| recursive_input_rule | 供方毛坯或外包部分加工件须有状态匹配的输入及供方边界；上游负荷只继承一次，仅计量剩余前景作业 |
| upstream_dataset_requirement | 兼容的林业、采伐、锯切、窑干、来料运输、电力、润滑油、包装及废物处理数据集；保留其分配、碳、地理和时间范围 |
| disclosure | 供方及构件边界、树种、等级和图纸、电动搬运、抽尘控制、外包阶段、体积定义、遗漏及未决身份和基准；前景单独不是摇篮到大门 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_component` | 构件制造 | 纳入接收及等级追溯、构件专用截切铣削钻孔、电动搬运、抽尘、加工后检验、不合格品和返工及出厂包装。路线只使用采购干燥毛坯，不含现场干燥、热调湿、锅炉、溶剂、胶、防腐、涂覆或湿式清洗。实际新增作业须先形成有证据的路线扩展，不得无声遗漏。 | `usda-wood-handbook-2021` |
| `boundary_upstream` | 毛坯继承负荷 | 现有适用锯材方法支持供方阶段，不支持节点加工成品构件。供方干燥、锯切及运输只计一次。已经包含节点加工或安装的泛用背景不是普通毛坯输入。相同木材内部供应不得再增加一次采购负荷。 | `corrim-northern-lumber-2025` |
| `boundary_air` | 空气和捕集粉尘 | 实际控制后的排气口和无组织排放与捕集余料分开记录。EPA PTE 指南只作筛查语境及嵌套粒径定义，不采用地区锯木厂 PTE 因子、建筑围护削减值或假定零。筛查实际其他物质及工具、维护、包装废物；完整数据交付前，每种实际存在且缺失的物料或物种均须独立原子行。 | `epa-sawmill-pte-2014` |
| `boundary_carbon` | 木材碳与排除阶段 | 机械加工不产生新的林业吸收。按实测全干木材碳追踪毛坯、构件、余料及库存，上游吸收只保留一次，不给予碳中和、永久储碳或替代信用。此路线无燃烧；即使温室气体统计惯例遗漏生物源 CO2，也保留其上游 LCI 排放。排除组装、安装、使用和寿命结束；披露并评估资本及员工活动处理。 | `corrim-northern-lumber-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_machining` | 按图加工、结构验收及交付 | required | 采购窑干毛坯，无热处理或化学处理；实际阶段分开计量 | 保留原始阶段账的完整成品前景单元 | `finished_member` |

接收、加工、检验及包装合为一个前景单元，成品参考只出现一次。保留未分配阶段总量，再将每项交换除以同一验收净实体体积 Q。实物过程图与分配后环境负荷分开。返工或用于包装垫条的木材在原始阶段库存账追踪，不能同时销售废弃或作为外部采购重复收费。捕集粉尘与逸散粉尘不同。不声明实际工厂数量、经验范围、等级或能耗平均；条件行发生时采集，有证据不存在为 not_applicable，未知为未决。

### 过程：按图加工、结构验收及交付（`component_machining`）

#### 输入

##### 产品流

###### 窑干锯材（针叶材） （`sawn_stock`）

必需的单根窑干针叶材毛坯，未经防腐处理及胶合。记录供方边界、实际树种、含水率、尺寸及等级；上游锯切和干燥负荷只继承一次。

- 选定流：窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`usda-wood-handbook-2021`

###### 交流电 （`machining_electricity`）

必需的用户侧低于 1 kV 电网平均供电，覆盖截切、铣削、钻孔、搬运、抽尘、检验及包装。分阶段计量；不同电压或供电方式须另行核实身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`usda-wood-handbook-2021`

###### 木构件加工设备用石油基润滑油 （`machining_oil`）

有外购石油馏分设备润滑油补充时纳入；干式木材加工不意味着向木材施用切削液。选定身份含40.5 MJ/kg发热量限定，实际链接前须核实供方牌号、配方及背景与该限定兼容。该身份元数据不是现场用量、能量换算或假定发热量；不符的石油基牌号或合成油配方须采用其他兼容身份。分别称量新油投入与未用库存/退货，并另记在用油库存、泄漏及排出废油；不得计内部循环量或从新油投入扣减废油。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`usda-wood-handbook-2021`

###### 聚丙烯包装打包带 （`pp_strap`）

使用成品 PP 打包带时纳入；树脂、纺织捆扎绳及线束扎带是不同实物。计入随货打包带、厂内剪余及库存变化。

- 选定流：聚丙烯包装打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`corrim-northern-lumber-2025`

###### 聚乙烯薄膜 （`pe_film`）

使用成品聚乙烯包装薄膜时纳入；供方聚合物、添加剂、厚度及再生成分须与背景一致。其名称、CAS 9002-88-4及材料描述一致指向聚乙烯薄膜，而来源行李箱包分类存在矛盾，须澄清，不得宣称全部数据库元数据已核实。PET、农膜及挤出加工服务身份不能替代。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`corrim-northern-lumber-2025`

###### 未处理实木运输垫条 （`wood_spacer`）

仅有未组装实木运输垫条时纳入，不包括托盘、箱体及结构构件木材。连接前核实独立垫条身份、树种、处理状态及实际背景。

- 选定流：未处理实木运输垫条
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`corrim-northern-lumber-2025`

#### 输出

##### 产品流

###### 建筑用木料 （`finished_member`）

唯一参考输出：按构件图完成节点加工、经过加工后结构验收的未组装单根针叶实体梁或柱。较广义建筑木料身份不赋予等级或承载能力。

- 选定流：建筑用木料 `73ef1fef-6aa1-43b0-8721-c8f2f1385509`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：1 m3
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_reference`
- 来源：`usda-wood-handbook-2021`

###### 作为共产品销售的未处理针叶材加工锯屑 （`sawdust_sale`）

锯切或钻孔细屑确实可销售时纳入；记录组成、实际合同、干质量、含水率及去向。销售不能把已排入环境的物质变成产品。

- 选定流：作为共产品销售的未处理针叶材加工锯屑
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`usda-wood-handbook-2021`

###### 作为共产品销售的未处理针叶材刨花 （`shavings_sale`）

粗刨花或铣削卷屑确实可销售时纳入，与锯屑、废弃细粉及排气粉尘分开。记录干质量及去向，不预设数量或销售。

- 选定流：作为共产品销售的未处理针叶材刨花
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`usda-wood-handbook-2021`

##### 废物流

###### 废弃的未处理针叶实体木材边角料 （`offcut_waste`）

未处理、未胶合、未团聚的针叶实体木材端部截余及结构验收不合格件作为粗块状废物时纳入。广义木材边角料身份的名称及描述一致指向木工截余物，且未限定处置路线；其来源分类为团聚木废料存在矛盾，须澄清，不得宣称全部数据库元数据已核实。实际链接前须核实树种/状态、无胶或涂层、污染、含水率、接收方及供方/背景兼容性；实物材料或处置相冲突时须采用其他身份。内部返工回用、可销售共产品、捕集细粉尘及外送粗余料分别记录，同一物料只能有一个去向。

- 选定流：木材边角料 `acc22294-8e77-4784-988f-2499be3c60eb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`usda-wood-handbook-2021`

###### 捕集的未处理针叶材加工粉尘废物 （`dust_waste`）

未处理针叶材锯切、铣削或砂磨粉尘被捕集并废弃，且实际接收路线属于本木屑废物身份所覆盖的焚烧/回收时纳入。该身份包括细粉尘至小木颗粒，保留组成、污染、含水率及去向证据。填埋或不兼容处置路线须采用其他兼容废物身份。按质量kg称量捕集物且只计一次；可销售残余物、内部回用及排放颗粒物分别记录。捕集粉尘不是基本排放，外部焚烧不等于本干式机械路线的厂内燃烧。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`usda-wood-handbook-2021`

###### 废润滑油 （`oil_waste`）

使用后的石油基润滑油在产生点、处理前作为废物时纳入。身份容许废矿物或合成润滑油但不指定处置路线；实际配方及合法去向仍须采集。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`usda-wood-handbook-2021`

###### 工厂产生的废弃聚乙烯包装薄膜 （`film_waste`）

厂内 PE 薄膜剪余及拆除的来料包装为废物时纳入，排除随成品离厂的完整薄膜。记录污染状态和处理去向。

- 选定流：工厂产生的废弃聚乙烯包装薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`usda-wood-handbook-2021`

###### 工厂产生的废弃聚丙烯打包带 （`strap_waste`）

PP 打包带剪余及拆除来料打包带为废物时纳入；纯聚合物废物数量与薄膜及混合废物分开。

- 选定流：工厂产生的废弃聚丙烯打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`usda-wood-handbook-2021`

##### 基本流

###### 颗粒物 (PM2.5) （`pm25`）

实际控制后排向未特指室外空气的粒径不超过 2.5 微米颗粒部分，发生时纳入。计量排出物，不计袋内捕集粉尘。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-sawmill-pte-2014`

###### 颗粒物 (PM2.5 - PM10) （`pmcoarse`）

排向未特指室外空气的、粒径大于 2.5 且不超过 10 微米的不重叠部分，发生时纳入。长期、室内、城乡特定及校正流变体不是本身份。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-sawmill-pte-2014`

###### 颗粒物（> PM10） （`pmover10`）

排向未特指室外空气、粒径大于 10 微米部分，发生时纳入。总 PM 或嵌套 PM10 不能替代此部分；保留实际接收子介质证据。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换单位的同批期未分配总量除以验收净实体 m3 量 Q；每 1 m3 参考流。保留原始阶段总量及库存变化，实物量不乘负荷分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m3 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`epa-sawmill-pte-2014`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_ledgers` | 全部实物交换 | 保留批期原始实物流及独立的分配后环境负荷账。实物平衡及本清单分母先于分配；成品 1 m3 及共产品实物数量均不乘负荷份额。若拆分内部链接，两端的数量、状态和批期须相等。 | `corrim-northern-lumber-2025` |
| `allocation_specific` | 构件作业 | 先将独立计量的构件专用加工、验收、返工及出厂包装归属于对应构件。余料收集按实物记录。根据质量、合同及去向识别可销售共产品，不向废物分配可销售共产品负荷。供方分配与构件分配分开。 | `corrim-northern-lumber-2025` |
| `allocation_shared` | 不可分割共同负荷 | 若细分不能解决实际联合生产，须论证物理关系或另一个经审查的基准。干质量敏感性情景使用实测 D_j 及 s_j=D_j/sum(D_saleable)，sum(s_j)=1，仅用于明确识别的联合阶段；成品包装及验收仍归构件。记录替代基准及敏感性。北部针叶锯材质量分配是地区案例，不是所有构件工厂的默认值。本归因制造账不赋予避免产品信用。 | `corrim-northern-lumber-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference` | `component_machining` | 参考几何及等级 | acceptance_record | 构件编号；图纸版本；树种；分等标准版本及方法；批次；净截面及长度；榫、孔、卯、缺口几何；实测含水率梯度；验收净湿质量；净体积；不合格品；不确定度 | 按实际图纸使用校准尺寸或三维计量并扣除不重叠空洞；校准净称重；含水率取样或电测以烘干法核对；有依据的合资格加工后验收; 验收批期 Q 为各构件实际净实体体积之和，保留编号、含水率及几何；每 1 m3 参考流 | m3; kg | 每构件或批次及每次图纸变化 | 同一有记录验收生产批期 | 本构件工厂及明确追溯的供方交接 | 每 1 m3 参考流 | 图纸；等级追溯；校准；验收及不合格构件记录 |
| `cp_material` | `component_machining` | 毛坯及润滑油 | material_record | 收发及库存量；供方边界；树种；湿及全干质量；含水率和密度；尺寸及等级；润滑油产品及SDS；维护使用；库存变化；石油基润滑油牌号/配方及发热量限定兼容性；新油投入/未用退货；在用油库存；泄漏/排油 | 校准接收和发料称重及库存记录；实际树种状态取样；供方证书和SDS；维护日志; 同批期未分配净消耗除以 Q；每 1 m3 参考流 | kg | 每次接收或批次，按批期核对 | 同一有记录验收生产批期 | 本构件工厂及明确追溯的供方交接 | 每 1 m3 参考流 | 称重及库存核对；树种、等级和含水率证据 |
| `cp_energy` | `component_machining` | machining_electricity | meter_record | 起止 kWh；阶段或设备回路；运行及待机时间；抽尘风机；电动搬运；共用电表拆分；电压及混合；校准 | 校准回路或阶段电表；没有分表时使用有记录的时间功率归属并保留不确定度，不重复风机与总表负荷; 可归属未分配批期 kWh×3.6 后除以 Q；每 1 m3 参考流 | kWh; MJ | 连续或批次读数 | 同一有记录验收生产批期 | 本构件工厂及明确追溯的供方交接 | 每 1 m3 参考流 | 电表图；校准；负载及待机归属记录 |
| `cp_packaging` | `component_machining` | pp_strap; pe_film; wood_spacer | packaging_record | 各物料及规格；领用；退回；剪余；回用垫条周期；随货质量；库存；聚合物、树种及处理状态 | 分别称量成品包装组件；发票件数只能用实测单件质量换算；核对随货、回用、废弃和库存数量，不作为结构构件质量; 同批期各独立包装净消耗除以 Q；每 1 m3 参考流 | kg | 每次交付或批次 | 同一有记录验收生产批期 | 本构件工厂及明确追溯的供方交接 | 每 1 m3 参考流 | 物料清单；称重；聚合物树种及SDS；回用记录 |
| `cp_residue` | `component_machining` | 余料及废物输出 | residue_record | 各行编号；产生阶段；湿质量和含水率；干质量及碳；销售或废物状态；返工及库存变化；去向；污染；凭据 | 按独立料仓或合同校准净称重；有代表性的含水率及组成取样；库存核对和销售或废物凭据；同物料不重复去向; 实际未分配批期各独立外送总量除以 Q；每 1 m3 参考流 | kg | 每料仓或交付及批期平衡 | 同一有记录验收生产批期 | 本构件工厂及明确追溯的供方交接 | 每 1 m3 参考流 | 地磅或秤；取样；去向；合同；库存平衡 |
| `cp_air` | `component_machining` | pm25; pmcoarse; pmover10 | emission_record | 来源及排放口；控制状态；一致的 PM_total、PM10、PM2.5 定义；浓度及气体流量和参考条件；作业时长；无组织测试模型；空白样；不确定度；子介质 | 控制后有代表性的分粒径排放口测试，加同批期有证据的无组织测量或模型；气流及浓度使用同气体基准，不默认地区 PTE 因子; 实测互不重叠排出质量总量除以 Q；每 1 m3 参考流 | kg；实测浓度及流量单位 | 代表性运行控制状态及批期时长 | 同一有记录验收生产批期 | 本构件工厂及明确追溯的供方交接 | 每 1 m3 参考流 | 取样方法；校准；源、控制及活动证据；不确定度 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_volume` | 所有清单行 | a_i=T_i/Q；Q 为验收实际净实体体积，单位 m3；T_i 为同批期未分配交换总量，使用核实单位；a_i 为每 1 m3 参考流的交换。成品木材体积总量等于 Q，故归一化输出为 1 m3。 | T_i; Q; cp_reference; 对应行采集协议 | a_i | `usda-wood-handbook-2021` |
| `net_geometry` | finished_member | V_member=V_actual_outer_solid-V_removed_nonoverlap；保留实际榫体，重叠孔和切除仅扣一次。Q=sum(V_accepted_member)；按交付含水率测几何，不用名义图纸体积。 | 实测构件及节点几何; cp_reference | Q | `usda-wood-handbook-2021` |
| `electricity_conversion` | machining_electricity | T_MJ=3.6×T_kWh；a_electricity=T_MJ/Q；核对分表总量、待机及共用负载，不重复。 | T_kWh; Q; cp_energy; cp_reference | a_electricity |  |
| `wood_dry_balance` | sawn_stock; finished_member; sawdust_sale; shavings_sale; offcut_waste; dust_waste; pm25; pmcoarse; pmover10 | 各实测状态 D=m_wet/(1+u)。期初干木材加接收等于验收干输出、销售、废弃及排出木材和期末干木材加已记录其他损失。按实测不确定度评估残差。水及碳账使用各自实测水分或碳比例。木质包装另平衡；无组成证据不假定 PM 全是木材。 | cp_material; cp_reference; cp_residue; cp_air | 干物质、水及碳平衡残差 | `usda-wood-handbook-2021` |
| `particle_partition` | pm25; pmcoarse; pmover10 | T_pm25=T_PM2.5；T_pmcoarse=T_PM10-T_PM2.5；T_pmover10=T_PMtotal-T_PM10，仅在累积测量可比且差值非负时使用；a_i=T_i/Q。不再加嵌套 PM10 或总量。 | 匹配的实测 PM 总量; Q; cp_air; cp_reference | a_pm25; a_pmcoarse; a_pmover10 | `epa-sawmill-pte-2014` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_structural` | 成品构件 | 各图纸和加工记录须关联毛坯分等批次；确认切后剩余截面、节疤、裂纹及验收。毛坯强度等级本身不建立钻孔缺口节点能力；使用实际适用工程及分等依据并保留限制。不设通用等级、最小尺寸或设计荷载。 | 等级、图纸和验收档案 |
| `quality_cohort` | 全部行 | 分子与验收体积分母使用相同范围批期，计入不合格品、返工及待机负载。不得无可追溯加权和披露而混合树种、等级用途、节点几何或水分状态。 | 批期及电表账 |
| `quality_provider` | 含 UUID 行 | 身份不是完成的供方数据集。比较每个背景的路线、组成、参考数量、边界、地理时间和分配碳基准；未知兼容性保持未决，诚实报告完整性。 | 供方约定及记录比较 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | finished_member | 要求单根干燥未处理针叶构件，以及实际构件专用节点几何和可追溯加工后结构验收。单凭强度等级、名义梁名称或建筑意图不满足范围；分类或 UUID 均不是认证。 | `usda-wood-handbook-2021` |
| `validate_quantity` | 全部清单行 | 要求 Q>0 的验收净实体体积，以及唯一 finished_member 输出 1 m3。所有清单及采集基准均为每 1 m3 参考流；分子单位保留载能及物料特定单位。实际连接前核对供方体积约定。未知 UUID、基准、上游或计量均为未决，不能是零或完整。 | `usda-wood-handbook-2021` |
| `validate_balances` | 实物过程图 | 使用实测期初期末库存、接收、验收输出、余料及排出粉尘，核对干物质、水、物料碳和包装。含水率变化不产生干木材；几何切除不同于收缩。按实际计量不确定度量化差异并调查，不虚构固定容差。内部返工及余料只有一个来源和去向，不重复采购或销售。 | `usda-wood-handbook-2021` |
| `validate_particles` | pm25; pmcoarse; pmover10 | 要求相同采样点和批期、控制状态、干湿气定义及实测累积粒径切割，0<=PM2.5<=PM10<=PM_total。仅在定义一致时将 PM2.5、PM10-PM2.5、PM_total-PM10 作为互不重叠部分，不再加嵌套 PM10 或总量。只有可过滤总量不能建立含可凝结物的总量。未知粒径或介质须审查，不任意拆分或使用校正流。 | `epa-sawmill-pte-2014` |
| `validate_sources` | 完成数据包 | 保留批次、图纸、等级记录、电表、取样、SDS、供方背景范围比较、废物凭据、资料限制和不确定度。地区 PTE 或锯材调查量不能变成通用构件数量。未知毛坯厚度、含水率、等级状态或没有记录的加工不合格品阻止完整交付。 | `usda-wood-handbook-2021`; `corrim-northern-lumber-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实测及来源基准检查完成后的 secondary_dataset；background_dataset |
| downstream_use | 明确范围的建筑模型中的限定构件输入；按声明含水率的净实体 m3 |
| allowed_use | 相同单根针叶节点加工构件，等级、几何、状态及制造边界匹配 |
| excluded_use | 替代普通锯材或连续型材；阔叶或工程木；安装荷载及服务等价；完整 CPC 覆盖；未经核实的供方体积连接；遗漏实际额外路线 |
| required_metadata | 树种、分等依据及版本、图纸和验收、含水率净体积约定、换算所需密度、边界场址批期、供方负荷、全部原子行、分配方法及上游碳 |
| required_quality_disclosure | 电表及取样不确定度、代表运行状态、完整性、未决 UUID、基准及背景、遗漏和分配敏感性；不暗示已测行业平均 |
| update_trigger | 树种、等级、图纸及节点验收、供料水分体积约定、设备控制、包装化学、上游供方或分配范围变化 |

## 11. 数据源

| Source id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `usda-wood-handbook-2021` | handbook | USDA Forest Products Laboratory. Wood handbook—wood as an engineering material. FPL-GTR-282 (2021). https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | 第4章公式4-1/4-2及表4-5；第6章6-8结构材；第13章13-2含水率方法；第17章17-6木构架节点及收缩。定性身份和计量，不移植等级、密度、尺寸或数量默认值。 |
| `unsd-cpc31625-3` | official_guidance | UN Statistics Division. CPC Version 3.0, 31625 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/31625 | 官方分类包含围栏或护栏柱及建筑梁，仅用于分类范围，不是分等制造要求或建筑柱映射批准。 |
| `epa-sawmill-pte-2014` | official_guidance | Particulate Matter Potential to Emit Emission Factors for Activities at Sawmills, Excluding Boilers, Located in Pacific Northwest Indian Country (EPA Region 10, May 2014). https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf | 备忘录及附表第1页和脚注：粒径切割、余料及排除锅炉的潜在排放范围。不移植 PTE 因子或封闭车间零排放削减；保留可过滤及可凝结范围区别。 |
| `corrim-northern-lumber-2025` | literature | Life Cycle Assessment of Softwood Lumber Production – Northern Region (22 July 2025 revision). https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf | 第3.2.6节第16页及第3.3节第18页：环境负荷分割、地区锯材物理分配案例及成品包装归属。生物碳 LCI 与 GWP 口径及语境或敏感性，不默认调查含水率、得率、排放或构件加工能耗。 |
