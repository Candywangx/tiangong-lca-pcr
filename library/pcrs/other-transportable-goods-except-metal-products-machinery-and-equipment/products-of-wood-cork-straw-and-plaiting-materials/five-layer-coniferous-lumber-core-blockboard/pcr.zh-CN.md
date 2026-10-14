---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.five-layer-coniferous-lumber-core-blockboard
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned

---

# PVAc 芯条胶拼及 UF 单板胶接的五层针叶木条芯板

## 1. 范围与适用性

仅适用于未涂饰室内五层板：实木针叶锯条胶拼芯、两层垂直芯条纹理的针叶横向单板、两层平行芯条纹理的针叶面/背单板。芯条用水性 PVAc 胶拼；四个单板胶接界面采用现场以干 UF 树脂、NH4Cl、水及实际使用时单独声明的木粉填料配成的热固化 UF 胶。购入锯材及单板为干燥、可直接调理的状态。工厂采用电网电力和场外交付热水热量，本路线无现场燃料燃烧。这是已界定路线，不是通用细木工板工艺。来源：`fao-farm-structures-1986`、`unido-panel-adhesives-1977`。

排除全单板胶合板、单板条侧立层积芯（laminboard）、未胶拼而用尼龙线束缚的芯条带、MDF/刨花板/空心芯、LVL、胶合木、重组装饰材、竹材、热带/非针叶外层、PF/MUF/pMDI 单板胶、防腐剂、涂层及一体化原木制单板或生锯材干燥。不同芯构或胶接路线须另做适用性判断。不转用针叶锯木或全单板胶合板调查系数。

FAO 支持实木条芯物理边界，UNIDO 支持芯条与单板采用不同胶种。UN CPC 3.0 标题区分全木片 3141 与其他/饰面 3142，但解释的纳入项互相冲突（第 139–140 页）。因此 31421 仅用于针叶外层适用语境，分类代码本身不能确立木条芯与全单板构造的区别。现有配方与证据尚未建立 31422/31423 的共享覆盖。来源：`un-cpc-notes-2025`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.five-layer-coniferous-lumber-core-blockboard |
| classification_refs | CPC 3.0 31421；针叶木条芯适用语境 |
| covered_products | 所声明路线的五层实木针叶木条芯室内板 |
| excluded_products | 第 1 节所列全单板、颗粒/纤维/空心芯、结构顺纹层积材及其他路线 |
| representative_product | 实测最终含水率下的未涂饰五层针叶木条芯板，按验收净质量 |
| production_route | PVAc 边缘胶拼；UF 单板热压胶接；外购干燥原料与热水热量 |
| market_state | 调理、裁边、砂光后的厂门板材；包装单列 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供指定芯构的未涂饰室内木芯板 |
| How much | 声明实测含水率下的 1 kg 验收板材净质量 |
| How well | 声明几何尺寸、各层树种/等级及纹理轴、胶配方、胶接验收和甲醛性能；不推定结构等级 |
| How long or cycle | 一个工厂生产与验收周期；不包含使用寿命 |
| reference_flow_link | `finished_panel` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木芯胶合板 `f7f7ecd7-5389-40e3-8900-6b543b416086` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实木锯条芯；五层；各层树种/等级/尺寸/含水率；面/芯平行、横向层/芯垂直纹理轴；芯条宽度及方向；PVAc 芯胶和 UF 单板胶的配方/固含；压力-温度-时间及组坯等待；胶接/缺陷/甲醛验收；未涂饰室内状态；工厂、期间、供应边界、电力电压及热水净热量基准；排除包装；选用钢带时的供应成分和回收/再加工路线 |

数据包须声明全部限定信息。kg 为生产声明参考，不表示不同树种/厚度板材的面积、刚度、耐久或服务等效。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | B = 同一批次/场址/期间的验收板材净质量合计，单位 kg，排除全部包装；采用 cp_output 采集。各外部交换除以 B 归一化。保留实测最终含水率，不用绝干木质量替代 B。 |
| wood_moisture | 木材实物账 | 质量 | kg | u = (m_wet - m_od) / m_od; m_od = m_wet / (1 + u)。用有代表性的密封样品和烘干称重确定干基含水率，采用 cp_materials；干基 u 与湿基分数分开。来源：usda-wood-handbook-2021。 |
| adhesive_solids | PVAc/UF 胶账 | 质量 | kg | m_s = m_supplied * s; m_ns = m_supplied * (1 - s)。采用 cp_recipe 分别测定 PVAc 胶与 UF 粉料的 s 和实际 H2O 含量；m_ns 是非固体余量，不自动等于水。树脂、固化剂、填料与添加水分开，报告检测条件及非水挥发物。供应态固体不是守恒的固化树脂质量；不设通用固含量或固化收率。 |
| utilities | 电力与外购热量 | 能量 | MJ | E_MJ = 3.6 * E_kWh。H_net = sum(m_hotwater * (h_supply - h_return))，m_hotwater 单位 kg，h_supply 和 h_return 单位 MJ/kg，H_net 单位 MJ；若供应商 h 单位为 kJ/kg，该合计须除以 1000。供回水采用实际供应商一致的焓参考基准及净交付边界，各自按实测温度/压力状态取焓，使用 cp_heat 采集。不得将 MJ 热量再乘燃料低/高位热值，不得把蒸汽质量当作有效热量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已接收的干燥针叶锯材、未胶接干单板、干 UF 树脂、PVAc 胶及所列供应输入 |
| starting_condition_role | 前景加工的外购输入起点 |
| product_classification_scope | 五层木条芯物理子集；31421 仅为分类语境建议 |
| recursive_input_rule | 外购已胶接木条芯板不属本路线；内部返工保留同一实物账，不能产生另一个参考输出 |
| upstream_dataset_requirement | 供应数据集覆盖林业、锯木/单板制造及干燥、树脂制造、全部进厂运输、电力与热水生成，且输入边界相匹配。前景厂门边界本身不等于摇篮到厂门。 |
| disclosure | 实际供应起始状态、路线、树种、地区/年份、能源计量、上游排除项与废物去向 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| b_route | `blockboard_manufacture` | 纳入收料/调理、芯条开料及 PVAc 边缘胶拼、UF 配胶、五层组坯、实际采用时的两次单板热压、冷却/调理、裁边、砂光、分级、包装及污染控制。阶段计量保留在同一前景单元内。 | fao-farm-structures-1986; unido-panel-adhesives-1977 |
| b_upstream | `blockboard_manufacture` | 连接交付输入的上游数据集，缺失覆盖须显式披露。不推定现场燃料锅炉、原木加工或生锯材窑干；有这些操作的场址须扩充原子清单并审查来源。 | usda-wood-handbook-2021 |
| b_emissions | `blockboard_manufacture` | 外送废物按技术系统转移，残余室外排放按基本交换。经证据确认的生物源 CO2 无论 LCIA 口径如何均保留于 LCI；进口热/电排放留在上游。直接废水排放不属本送处理路线，须显式物种/介质行。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| blockboard_manufacture | 收料至成品包装 | required | 仅所声明路线 | foreground_production | 1 kg `finished_panel` |

同一板材在芯材/单板胶接、整理与包装阶段交接，属于同一前景单元。阶段投入/输出、拒收/返工、时间、能源及水分账仍分开保留。不将同产品中间物以参考 UUID 另记为交换。分配前，各内部转移两端数量相等。以芯条轴为 0°，面/背轴为 0°，横向层轴为 90°。对四个平面单板胶接界面分别记录涂胶面、有效胶接面积、湿/干涂胶量、组坯等待、压制压力、压板/胶线温度及固化时间。芯条边缘涂胶面积、夹紧及水分损失单独记录。来源：`fao-farm-structures-1986`、`unido-panel-adhesives-1977`。

### 过程：收料至成品板材（`blockboard_manufacture`）

#### 输入

##### 产品流

###### 窑干锯材（针叶材） （`core_lumber`）

接收窑干松木/冷杉锯材；开条与剔除缺陷前称净质量、测干基含水率。逐批记录树种及供应方边界。

- 选定流：窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_materials 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`fao-farm-structures-1986`; `usda-wood-handbook-2021`

###### 面层与背层用干燥未胶接针叶木单板 （`face_veneer`）

两外层采用同一已声明针叶树种和规格的单板，作为一个进厂单板交换；正面/背面用量、厚度、含水率和等级分开记录。排除已胶接的饰面板。

- 选定流：面层与背层用干燥未胶接针叶木单板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_materials 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`fao-farm-structures-1986`; `usda-wood-handbook-2021`

###### 横向层用干燥未胶接针叶木单板 （`cross_veneer`）

两横向层采用同一已声明针叶树种和规格的单板。独立记录净投入和尺寸，不与面层或芯材合成一项材料流。

- 选定流：横向层用干燥未胶接针叶木单板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_materials 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`fao-farm-structures-1986`; `usda-wood-handbook-2021`

###### 供应态水性聚醋酸乙烯酯（PVAc）木材胶黏剂 （`pvac_glue`）

PVAc 胶作为一条完整供应态水性木材胶黏剂交换称量，包括载体水及配方组分；记录实际固含量 s_P、含水量和供应商配方。涂在芯条边缘，室温夹紧并调理。载体水不得再次记为购入自来水，也不得用纯聚合物替代整胶。绑定 UUID 前须核实整胶身份及供应商配方。

- 选定流：供应态水性聚醋酸乙烯酯（PVAc）木材胶黏剂
- 流属性/单位：质量 / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_recipe 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_recipe`
- 来源：`unido-panel-adhesives-1977`

###### 脲醛树脂 （`uf_resin`）

所选单板胶接路线使用现场溶配的干态 UF 树脂粉料。按供应证明记录粉料干固体分数 s_U 及收料质量；水、固化剂与填料分别输入。购入预混水性 UF 胶须另行核实身份和基准，不属于本配方。

- 选定流：脲醛树脂 `23e41b7b-0991-4cf7-8625-7a30d23bbb27`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_recipe 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_recipe`
- 来源：`unido-panel-adhesives-1977`

###### 干态氯化铵固化剂 （`hardener`）

称量干态 NH4Cl，记录纯度及供应方说明，再用单独计量的配胶水溶解。不得从通用固化时间推算用量。

- 选定流：干态氯化铵固化剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_recipe 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_recipe`
- 来源：`unido-panel-adhesives-1977`

###### 未处理针叶木粉填料 （`wood_flour`）

仅当已声明 UF 配方确实使用此木粉时纳入；单独称量并记录含水率。小麦粉或矿物填料是不同流，须另核身份与配方；不得用木片替代。

- 选定流：未处理针叶木粉填料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_recipe 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_recipe`
- 来源：`unido-panel-adhesives-1977`

###### 自来水 （`water`）

配胶水与清洗水分别计量，仅汇总外部补水。回用清洗水为内部转移，不再次计为新鲜水。体积读数使用实测或供水方密度换算，不借用数据库筛选密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_water 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`unido-panel-adhesives-1977`

###### 交流电 （`electricity`）

路线要求工厂计量点的 1–35 kV 电网交付。包括开条、除尘、芯材夹紧、配胶、压机、裁边、砂光及包装辅助设备。汇总不重叠计量回路并与账单核对；kWh 乘 3.6 换为 MJ。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_energy 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 交付至压机回路的外购热水净热量 （`heat`）

采用供应方定义、跨工厂供回水边界的净交付热量。记录质量流量、供回温度、压力、焓值方法和损失。背景定义须与该边界一致；仅有 MJ 属性不能证明相容。本路线不含现场锅炉。

- 选定流：交付至压机回路的外购热水净热量
- 流属性/单位：净交付热量; 单位组 未决 / MJ
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_heat 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_heat`
- 来源：

###### 低密度聚乙烯薄膜（PE-LD） （`pe_film`）

使用包装膜时，按可销售批次称量交付的 LDPE 膜；参考板质量排除包装膜。记录损耗与回用，回用膜不得重复计量。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_pack 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：

###### 钢打包带 （`steel_strap`）

使用打包带时按批称钢带；仅当扣件是同一供应打包带的组成部分时一并计入，其余包装身份分开。仅当供应方成分匹配 99% 铁、1% 碳，且供应路线为采用机械分解、熔化工艺的回收和再加工时，才适用所选 UUID。保留供应方成分证明及路线记录；成分或路线不同或未知时，将该实际交换保留为未决，使用前另核身份。该 UUID 不是所有钢带的通用身份。B 排除包装。

- 选定流：钢打包带 `56fe4f71-b594-4b55-8553-c87f2516737d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_pack 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：

#### 输出

##### 产品流

###### 木芯胶合板 （`finished_panel`）

调理、裁边、砂光及包装后在厂门交付的唯一验收板材成品输出。板材未涂饰。净板质量排除全部包装；同产品在制品仅记于内部阶段账。

- 选定流：木芯胶合板 `f7f7ecd7-5389-40e3-8900-6b543b416086`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 kg
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_output`
- 来源：`fao-farm-structures-1986`; `unido-panel-adhesives-1977`

##### 废物流

###### 木屑废物 （`clean_sawdust`）

对送废物处理的施胶前锯屑收集称量，记录实测含水率和去向；收集粉尘不是空气排放。不得用此流指代含树脂的砂光粉尘。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_waste 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 木材边角料 （`clean_offcut`）

称量芯条施胶前剔除缺陷产生的实木边角料。材料含水率及去向与粉料分开记录。

本行仅计真实未团聚、未处理且未胶合的粗木料边角料；保留含水率与接收方记录，在链接处理数据前核实实物状态和接收方/供应数据兼容性。不得替代为团聚燃料或捕集粉尘。

- 选定流：木材边角料 `acc22294-8e77-4784-988f-2499be3c60eb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_waste 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### UF/PVAc 胶接木条芯板裁边废物 （`bonded_trim`）

称量进入同一已声明废物路线的胶接板裁边与拒收板，保留原因及状态记录。记录树脂含量、含水率和去向。前景不燃烧废板。

- 选定流：UF/PVAc 胶接木条芯板裁边废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_waste 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 含 UF/PVAc 的木条芯板砂光粉尘废物 （`sanding_dust`）

称量胶接后捕集的砂光粉尘，记录树脂含量、包装收容与废物去向；与洁净锯屑及排放颗粒物分开。

- 选定流：含 UF/PVAc 的木条芯板砂光粉尘废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_waste 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 送场外处理的 UF 胶设备清洗废水 （`glue_wastewater`）

计量送处理的 UF 清洗废水；分别记录水与固体、COD、甲醛浓度和去向。本行是技术系统废物转移，不是直接向水体排放。

- 选定流：送场外处理的 UF 胶设备清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_water 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：

###### 未固化 UF 配胶残料废物 （`glue_residue`）

扣除返回同配方的内部回用后，单独称量未固化 UF 余胶，记录固含量和处理去向。PVAc 余胶为另一种流；本路线芯胶工具采用专用干式收集，不排放 PVAc 清洗液。

- 选定流：未固化 UF 配胶残料废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_waste 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`unido-panel-adhesives-1977`

###### PVAc 边缘胶拼余胶废物 （`pvac_residue`）

单独称量送废物处理的 PVAc 余胶与挤出胶，区别于 UF 残料及清洗废水；保留实际固含量。

- 选定流：PVAc 边缘胶拼余胶废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_waste 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`unido-panel-adhesives-1977`

##### 基本流

###### 甲醛 （`formaldehyde`）

在压机/调理排气及无组织排放边界测甲醛质量排放；成品板试验箱浓度不得直接当作 kg 排放。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_emissions 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

###### 甲醇 （`methanol`）

当树脂证明或筛查识别甲醇时纳入；采用分物种出口测量。缺失检测为未知，不是零。

- 选定流：甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_emissions 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

###### 颗粒物 (PM2.5) （`pm25`）

测量切削/砂光出口控制设施后及无组织残余 PM2.5 排放，排除捕集粉尘。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_emissions 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

###### 颗粒物 (PM2.5 - PM10) （`pm_between`）

使用不重叠的 2.5–10 微米粒径段；累计 PM10 与 PM2.5 在同基准测得时，前者减去后者。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_emissions 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

###### 颗粒物（> PM10） （`pm_over10`）

仅用超过 10 微米粒径段；有同基准总颗粒物与累计 PM10 时可相减。不把累计 PM10 与两个细粒径段合计。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_emissions 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

###### 水蒸气 （`water_vapour`）

通过排气测量及考虑反应的 H2O 账，确定芯板调理、UF 热固化及板材调理的净水蒸气释放。分别记录入口空气湿度、木材水分、胶液载体水、添加水、留存/外送 H2O 及实际化学 H2O 生成/消耗；反应水不是另一个购入水输入。采用 cp_recipe 和 cp_emissions 记录实测或由来源支持的同批次反应程度；不得从树脂质量推定产水率，也不得强制把平衡差额计入水蒸气。来源：`frihart-wood-joining-2023`。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_emissions 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`frihart-wood-joining-2023`

###### 二氧化碳（生物源） （`co2_bio`）

经证据确认的木碳直接氧化/降解按生物源 CO2 记录；本非燃烧路线不假定有锅炉。无此排放须有碳账及操作记录，不能依据碳中和 LCIA 口径删除。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_emissions 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

###### 二氧化碳（化石源） （`co2_fossil`）

经证据确认的树脂/化石碳直接氧化与木碳分开记录。外购电力/热力供应排放进入各自背景，不计为本直接交换。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：x_norm = sum(q_lot) / B；采用 cp_emissions 采集实际交换；B 为 cp_output 的验收板材净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| a_physical | `blockboard_manufacture` | 保留各阶段未分配的总质量及元素 C/H/O 账，保留化石/生物碳来源；反应的净元素生成量为零。H2O、绝干木及胶物种分别采用实测或有支持的生成/消耗项跟踪，不假定物种守恒。内部转移仅在汇总边界抵消。板材/废物实物量不得乘环境分配份额。 | usda-wood-handbook-2021; frihart-wood-joining-2023 |
| a_waste | `blockboard_manufacture` | 基础路线只有一个可销售板材产品及外送处理废物：生产负荷归于验收板材，纳入废物处理负荷而不作替代产品抵扣。内部返工保留于同一账。若残余物成为可销售共产品，须先补充产品身份和实测实物输出，再选择有记录的因果分配或明确论证的替代方案；负荷账与物料平衡分开。不得将废物 UUID 改称产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | blockboard_manufacture | finished_panel | foreground_record | 批号；树种/层构；最终含水率；验收净质量 B；拒收质量；包装皮重 | 调理后经校准称量；核对同批分级/验收及包装记录。 | kg | 每批；能源连续日志；有代表性的排放检测期 | 同一声明的代表性生产期间 | 一个声明工厂及匹配路线/批次 | 每 1 kg 参考流 | 校准；原始记录；采样/分析；供应定义；库存/验收核对 |
| cp_materials | blockboard_manufacture | core_lumber; face_veneer; cross_veneer | foreground_record | 批号/树种/等级；湿质量；样品湿/绝干质量；各层尺寸；轴向；废料；供应起始状态 | 称进料及阶段用料；密封有代表性的含水率样品，按有记录的方法烘干至恒重并称量，核对库存及阶段转移。 | kg | 每批；能源连续日志；有代表性的排放检测期 | 同一声明的代表性生产期间 | 一个声明工厂及匹配路线/批次 | 每 1 kg 参考流 | 校准；原始记录；采样/分析；供应定义；库存/验收核对 |
| cp_recipe | blockboard_manufacture | pvac_glue; uf_resin; hardener; wood_flour | foreground_record | 组分身份；投料称量；批号；固含/纯度及检测条件；实测 H2O/非水挥发物；供应商配方；同批次固化前后组成及反应程度；G_H2O；C_H2O；不确定度；胶接面积；湿/干涂胶量；芯条夹紧；组坯等待；压板/胶线温度；压力；保压；胶接试验 | 采用经校准批次秤、供应配方/证明及固含/H2O 抽检；芯条边缘胶与四个单板界面分别记录。通过经验证的匹配批次化学分析，或在所记录固化条件下将有文件支持的供应商反应化学计量用于实测同批次反应程度，量化实际前景 UF 产水/耗水。上游树脂合成与前景固化及蒸发分开；通用反应示意图、固体失重测试或总排气水量均不能单独建立反应程度。缺失项保留未知；不设默认量、不假定完全固化，也不从差额推算收率。记录压制循环及胶接验收。 | kg | 每批；能源连续日志；有代表性的排放检测期 | 同一声明的代表性生产期间 | 一个声明工厂及匹配路线/批次 | 每 1 kg 参考流 | 校准；原始记录；采样/分析；供应定义；库存/验收核对 |
| cp_water | blockboard_manufacture | water; glue_wastewater | foreground_record | 新鲜/回用水质量；水表体积；密度；废水量；水/固体；COD；甲醛；去向 | 计量新鲜配胶/清洗支路；采集废水外送量及分析结果，核对储罐库存和内部回用。 | kg | 每批；能源连续日志；有代表性的排放检测期 | 同一声明的代表性生产期间 | 一个声明工厂及匹配路线/批次 | 每 1 kg 参考流 | 校准；原始记录；采样/分析；供应定义；库存/验收核对 |
| cp_energy | blockboard_manufacture | electricity | foreground_record | 回路；kWh/MJ；电压；账单；小时；阶段；共用表分摊 | 按不重叠回路读取校准电表，与供应账单核对总电量。 | MJ | 每批；能源连续日志；有代表性的排放检测期 | 同一声明的代表性生产期间 | 一个声明工厂及匹配路线/批次 | 每 1 kg 参考流 | 校准；原始记录；采样/分析；供应定义；库存/验收核对 |
| cp_heat | blockboard_manufacture | heat | foreground_record | 热水质量；供回温度/压力；焓参考/状态及 h 单位（MJ/kg 或 kJ/kg）；净 MJ；供应损失；背景边界 | 经校准热量表或供回水质量流量/焓积分；保留实际供应商 h 单位/参考/状态，显式将 kJ 换为 MJ，使用前核实供应/背景净交付兼容性。 | MJ | 每批；能源连续日志；有代表性的排放检测期 | 同一声明的代表性生产期间 | 一个声明工厂及匹配路线/批次 | 每 1 kg 参考流 | 校准；原始记录；采样/分析；供应定义；库存/验收核对 |
| cp_pack | blockboard_manufacture | pe_film; steel_strap | foreground_record | 材料；批号；包装质量；回用；废料；包装皮重；钢带供应成分（99% 铁、1% 碳）；机械分解/熔化回收路线 | 分别称各包装材料，将领退料记录与验收板批核对；通过供应证明核实所选钢带的成分/路线；供应不匹配或未知时须保留未决或另核身份。 | kg | 每批；能源连续日志；有代表性的排放检测期 | 同一声明的代表性生产期间 | 一个声明工厂及匹配路线/批次 | 每 1 kg 参考流 | 校准；原始记录；采样/分析；供应定义；库存/验收核对 |
| cp_waste | blockboard_manufacture | clean_sawdust; clean_offcut; bonded_trim; sanding_dust; glue_residue; pvac_residue | foreground_record | 流；湿/干质量；含水率/固含；树脂含量；捕集/排放区别；库存；销售状态；处理去向 | 各原子流专用容器及秤；废物联单与分析记录；仅扣同期间内部回用，不扣场外处理。 | kg | 每批；能源连续日志；有代表性的排放检测期 | 同一声明的代表性生产期间 | 一个声明工厂及匹配路线/批次 | 每 1 kg 参考流 | 校准；原始记录；采样/分析；供应定义；库存/验收核对 |
| cp_emissions | blockboard_manufacture | formaldehyde; methanol; pm25; pm_between; pm_over10; water_vapour; co2_bio; co2_fossil | foreground_record | 物种/来源；出口；标况流量；浓度；湿度；采样条件；小时；控制设施；无组织；PM 粒径段；检出限；碳来源；进出口空气湿度及流量；冷凝水；留存/外送 H2O；cp_recipe 的同批次 G_H2O/C_H2O；水专属性方法及不确定度 | 控制设施后有代表性的出口/无组织采样并按时间积分；保留物种及不重叠粒径段。用匹配的进出口湿度-流量及冷凝水记录量化净过程水蒸气，再核对包括 cp_recipe 实际 UF 产水/耗水的反应 H2O 账；不得重复计入载体水或反应水。总失重包括非水挥发物，不是 H2O 测定。缺失项/物种记为未知，不强制闭合。证明无氧化须有操作/碳证据。 | kg | 每批；能源连续日志；有代表性的排放检测期 | 同一声明的代表性生产期间 | 一个声明工厂及匹配路线/批次 | 每 1 kg 参考流 | 校准；原始记录；采样/分析；供应定义；库存/验收核对 |

所有协议均汇总同期间实际外部交换 q_lot，除以 cp_output 的验收板材净质量 B。cp_output 采集并汇总 B 本身；阶段投入/输出记录保持独立且未分配。这是上表各每 1 kg 字段的聚合含义。

### 计算规则

| rule_id | 适用对象 | 公式或规则 | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | 所有外部交换 | x_norm = sum(q_lot) / B; B = sum(验收板材净质量); B > 0 | q_lot; B; cp_output | x_norm |  |
| dry_wood | 木材质量账 | m_od = m_wet / (1 + u); m_water = m_wet - m_od | m_wet; u; cp_materials | m_od; m_water | usda-wood-handbook-2021 |
| glue_solids | 胶账 | m_s = m_supplied * s; m_ns = m_supplied * (1 - s); m_H2O = m_supplied * w_H2O，w_H2O 为实测或已核实供应商水质量分数，不自动等于 1 - s。记录方法/条件及非水挥发物比例；m_s 为供应态实测固体，不是固化树脂质量。 | m_supplied; s; w_H2O; cp_recipe | m_s; m_ns; m_H2O |  |
| electricity_units | electricity | E_MJ = 3.6 * E_kWh | E_kWh; cp_energy | E_MJ |  |
| net_heat | heat | H_net = sum(m_hotwater * (h_supply - h_return))；m_hotwater 单位 kg，两项 h 单位 MJ/kg，H_net 单位 MJ。若供应商 h 单位为 kJ/kg，使用 H_net = sum(m_hotwater * (h_supply - h_return)) / 1000。供回水采用实际供应商一致的焓参考基准及净交付边界，各自按实测温度/压力状态取焓。 | m_hotwater; h_supply; h_return; cp_heat | H_net |  |
| emission_mass | 各排放物种 | m_i = sum(c_i * V_normal * dt) + m_fugitive_i; 显式换算浓度及时间单位 | c_i; V_normal; dt; m_fugitive_i; cp_emissions | m_i |  |
| pm_fractions | pm25; pm_between; pm_over10 | m_pm_between = m_PM10 - m_PM2.5; m_pm_over10 = m_totalPM - m_PM10; 仅用同基准累计测量；负差值须审查 | m_PM2.5; m_PM10; m_totalPM; cp_emissions | m_pm_between; m_pm_over10 |  |
| physical_balances | 未调整的过程账 | 对总质量及元素 C/H/O 分别核对：期初库存 + 全部材料边界投入 = 期末库存 + 板材 + 外送残余物 + 材料排放；纳入有证据的大气摄入及包装转移，保留化石/生物碳来源，守恒元素的净化学生成量为零。报告带符号差额及不确定度；不得调整实测量或设虚构闭合容差。 | cp_materials; cp_recipe; cp_water; cp_pack; cp_waste; cp_emissions; cp_output | 总质量/元素 C/H/O 差额 | frihart-wood-joining-2023 |
| reactive_species | H2O 及干物质物种账 | 对各物种 X：期初 X + 外部 X 投入 + G_X = 期末 X + 板材 X + 外送 X + 排放 X + C_X；G_X/C_X 为实际前景生成/消耗量，单位 kg，采用 cp_recipe 实测或由同批次反应程度支持。H2O 账纳入实际 UF 固化反应水、木材水分、胶液载体水、添加水、空气湿度及同边界留存/液态/水蒸气输出。绝干木/胶物种的化学转化及非水挥发损失与 H2O 分开跟踪。元素 C/H/O 再分配不是净元素生成；上游树脂制造产水不是前景生成。报告差额/不确定度，不设默认 G_X/C_X、收率或完全固化假定；缺少反应项使闭合结论不确定。 | cp_materials; cp_recipe; cp_water; cp_waste; cp_emissions; cp_output | 考虑反应的 H2O/干物种差额 | frihart-wood-joining-2023 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_identity | 所有行 | 核实材料/物种/状态/路线/属性/单位/介质；空 UUID 为身份未决，不允许以邻近产品替代。 | 供应规格及核实直读记录 |
| dq_recipe | 芯胶与单板胶 | 当前供应商定义的整胶配方、实际固含/H2O/纯度及胶接验收；历史文献仅支持路线。通过匹配批次测量，或有支持的化学计量与实测同批次反应程度，核实前景 UF G_H2O/C_H2O 及干物种转化；不推定通用收率。 | unido-panel-adhesives-1977; frihart-wood-joining-2023; 供应/分析记录 |
| dq_scope | 期间/场址/基准 | 全部原始量匹配期间及验收 B；报告缺失计量/检测、检出限、季节/树种/配置变化与调查排除项。不从另一制造路线强加经验范围。 | 原始记录与边界披露 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| v_reference | `finished_panel` | 恰好一个产品输出匹配参考行/UUID；1 kg 板材净输出、全部必需限定及实测含水率均完整。同产品中间转移保留于聚合单元内。 | fao-farm-structures-1986 |
| v_route | `blockboard_manufacture` | 拒绝不相容芯构、纹理方向、胶路线或一体化燃烧/干燥边界。核实四个单板界面、芯条边缘胶及实际压制顺序、配方/固含和验收记录。分类名称本身不能建立适用性。 | fao-farm-structures-1986; unido-panel-adhesives-1977 |
| v_measurement | `blockboard_manufacture` | 实际外部量均以同一 B 归一化；保留未分配的总质量/元素 C/H/O 及考虑反应的物种账，与负荷账分开。核实实际 UF H2O 生成/消耗及干物种转化证据；不得把水或供应态干固体作为固化过程中的独立守恒量。缺少反应程度/分析证据为不确定，不是零产水或强制水蒸气差额。核实供应/背景净交付热量基准、h 单位/参考/状态及所需 kJ 到 MJ 换算；未支持关系及未决身份保持不确定。 | usda-wood-handbook-2021; frihart-wood-joining-2023 |
| v_emissions | `blockboard_manufacture` | 核实逐物种、室外空气介质及互斥 PM 段；不合计累计粒径，不将捕集粉尘算成空气排放。核对净水蒸气与进出口湿度、冷凝水、留存/外送 H2O 及有支持的前景反应水，不重复计量。保留有证据的生物源 CO2；无排放/检测缺口及截断须明确支持。 | frihart-wood-joining-2023 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 所声明室内五层针叶木条芯 PVAc/UF 路线，匹配上游输入且全部未决身份/计量已解决 |
| excluded_use | CPC3142 全覆盖、混合芯构/胶种、结构/寿命比较、船用/室外用途、全单板数据集或来自其他行业的数值默认值 |
| required_metadata | 工厂/时间/路线/树种/层构/配方、净 B/含水率、供应方、含 h 单位/参考/状态的能源定义、实际 UF 反应程度及 G_H2O/C_H2O 证据、参考流、分配及全部排除项 |
| required_quality_disclosure | 采样/表计校准、身份缺口、未支持净热量、总质量/元素及反应物种平衡差额、缺失反应测量、共产品状态、排放覆盖及检出限；仅前景与连接上游的完整度区别 |
| update_trigger | 芯构/树种、胶配方/固含、压制/调理、能源来源/基准、废物去向、供应或排放测量变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-notes-2025 | official_guidance | UN CPC 3.0 解释说明，2025-06-30; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; 查阅 2026-10-12 | 第139–140页：标题/解释冲突；仅用于分类语境，不提供工艺系数 |
| fao-farm-structures-1986 | official_guidance | FAO《热带气候下的农用建筑》，1986；第3章 Other Manufactured Boards; https://www.fao.org/4/s1250e/s1250e04.htm; 查阅 2026-10-12 | 木条芯、成对单板及交叉纹理；仅支持构造，不采纳通用尺寸或强度值 |
| unido-panel-adhesives-1977 | literature | J. Reinhardt，木质板行业合成树脂胶黏剂工业应用与配制，UNIDO ID/WG.248/9，1977-10-10; https://downloads.unido.org/ot/47/90/4790807/00001-10000_07656.pdf; 查阅 2026-10-12 | §2.2 印刷第15页；§3.1 印刷第24–30页：PVAc 芯条胶拼、独立热固单板胶及配方组分；历史路线证据，不作为现代配方/耐久/排放默认值 |
| usda-wood-handbook-2021 | handbook | USDA 林产品实验室《木材手册——木材作为工程材料》，FPL-GTR-282，2021; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf; 查阅 2026-10-12 | 第4章干基含水率及第13章烘干测量方法，印刷第4–1及13–2页；不转用树种含水率、密度或窑干能耗默认值 |
| frihart-wood-joining-2023 | handbook | C. R. Frihart、J. Konnerth、A. Frangi、C. Gottlöber、R. Jockwer 和 F. Pichelin，《木材的连接与重组》（Joining and Reassembling of Wood），Springer Handbook of Wood Science and Technology 第14章，2023；DOI 10.1007/978-3-030-81315-4_14；USDA 托管原文 https://research.fs.usda.gov/download/treesearch/66341.pdf；查阅 2026-10-14 | §14.2.1 氨基类胶黏剂，印刷第720–723页（PDF 第14–17页）、图14.13及固化条件与木材相互作用的化学部分：UF 缩聚/固化及水损失；仅支持定性化学，不采纳供应配方、反应程度或数值产水率 |
