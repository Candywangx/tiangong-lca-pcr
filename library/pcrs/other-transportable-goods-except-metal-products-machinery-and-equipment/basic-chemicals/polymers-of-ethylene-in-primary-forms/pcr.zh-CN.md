---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.polymers-of-ethylene-in-primary-forms
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 原生高压法 LDPE 均聚物粒料（散装交付）

## 1. 范围与适用性

本方法针对从单体生产原生 LDPE 树脂的真实方法需要，包括高压自由基反应、非完全单程转化、回收/排污及粒料调理。复用保留的语义 PCR 目录，不新增分类叶衍生记录，排除外购树脂转换。数据集被表示前，须选择并提供其实际牌号/路线证据；下列四种有来源支持的引发/反应器变体是不同选项，不是一种平均技术。`ec-polymers-bref-2007` `lyb-lupotech-2025`

真实商品牌号 Lupolen 2420K 证明无添加粒料供货形态，散装容器为所记载交付选项之一。其技术资料未识别聚合反应器、引发剂配方或制造地理；生产者须提供这些实际限定信息。典型熔体流动速率/密度不是强制限值、密度换算或场址 COA 的替代。不仅由宽泛名称推定均聚物化学，应核实单体及牌号声明。本方法不为该 SKU 指定 Trigonox B、庚烷或丙醛。`lyb-lupolen-2420k-2026`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.polymers-of-ethylene-in-primary-forms |
| classification_refs | CPC 3.0 34710 比本 LDPE 专用方法更宽；本方法不建立已接受映射。 |
| covered_products | 新聚合制造、验收后散装交付的原生无添加支化 LDPE 乙烯均聚物粒料；各实际牌号与反应器路线分别保留。 |
| excluded_products | HDPE；LLDPE；EVA 及丙烯酸类共聚物；UHMWPE；再生树脂；无独立证据的生物归属或质量平衡声明；填充、着色、交联或添加剂/母粒配混物；外购树脂转换；管材、薄膜、纤维及制品；袋装交付。 |
| representative_product | 无添加原生 LDPE 粒料；Lupolen 2420K 是真实商品牌号实例，不是固定工厂配方或反应器指定。数据集须声明自身供应牌号与验收规格。`lyb-lupolen-2420k-2026` |
| production_route | 交付乙烯的高压自由基聚合：声明管式仅氧引发、管式过氧化物/氧引发、管式仅过氧化物引发，或过氧化物引发搅拌釜式。保留反应器分区、链转移化学、载体、实际转化、循环/排污与后处理。不得因参考 UUID 宽泛而将路线平均。`ec-polymers-bref-2007` `lyb-lupotech-2025` |
| market_state | 脱气、干燥并验收的固体粒料，散装装载工厂门交付；树脂净质量排除槽车/容器皮重与运输包装，不代表下游薄膜服务。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应供后续转换使用的合格原生 LDPE 树脂。 |
| How much | 1 kg 净验收交付粒料，属于同一声明牌号、路线和状态。 |
| How well | 按牌号 COA 验收 LDPE 身份、熔体流动试验基准、密度试验基准、支化/牌号标识、无添加状态、水分及残余挥发物；不得以手册典型值代替合同限值。 |
| How long or cycle | 一个完整匹配的生产及交付报告期间；不定义使用寿命。 |
| reference_flow_link | bulk_supplied_ldpe |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 低密度聚乙烯粒料（PE-LD） `4f19f116-7b3b-11dd-ad8b-0800200c9a66` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 实际场址及期间; 原生乙烯来源及杂质规格; LDPE 均聚物牌号及无添加状态; 反应器及引发路线; 实际引发剂/载体/调节剂身份; 验收与试验基准; 净干燥/脱气散装粒料状态; 水分与残余物种; Q 与库存/负荷结转; 公用工程及处理门 |

必需限定信息须在数据集元数据或等效可追溯字段声明。原生参考为通用 LDPE 粒料，不推定牌号、CAS、路线、地点或用量。质量是其唯一原生参考属性，系数 1 不是密度。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考质量与终端清单均为 1 kg 验收交付 LDPE 粒料净质量；排除皮重/包装，声明水分和残余挥发物保留于物种账。 |
| `reporting_basis` | 所有清单行 |  |  | 采集完整原始期间分子。native_conversion 及 matched_period_ledger 先于唯一相除 owner normalize_period；卡片及协议聚合引用同一每参考流结果。不重复归一化。 |
| `formulation_species` | p_primary | Mass | kg | 整份外购制剂为物理投入质量。活性含量、水、载体和杂质为组分亚账；场内混合配方使用分别采购原料，不同时将组分和混合物重复作为采购。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 新鲜乙烯交付树脂厂，声明来源、纯度/杂质证明、压力、温度与交付方式；外购化学品和公用工程按实际供应门记录。 |
| starting_condition_role | 从单体制造原生树脂；前景门到门，并为摇篮到工厂门用途链接上游负荷。 |
| product_classification_scope | 仅 CPC 3.0 34710 中规定的原生 LDPE 粒料子集；分类不建立牌号或方法等价关系。 |
| recursive_input_rule | 内部回收乙烯、内部粒料及同线返工退料保留物理转移 ID 和结转负荷，不作为新增外购。外购同类树脂须作为独立上游投入，不能作为原生聚合证据；仅外购树脂转换位于范围之外。 |
| upstream_dataset_requirement | 将实际乙烯路线/来源以及每项外购制剂、组分、载体、油、公用工程与废物处理服务链接到兼容上游数据集；披露缺失供应商，不虚构配方或数量。 |
| disclosure | 声明场址地理/时间、牌号、反应器及引发路线、全部工序、交付形态、跨场址转移、公用工程生产、热输出以及废物/空气/水处理范围。所选 LDPE 原生流没有 CAS、路线、牌号、备注或供应地理；这些属于前景限定信息，不是原生记录隐含事实。 |

| route_id | 反应器/引发 | 必需区别范围 |
| --- | --- | --- |
| t_oxygen | 管式，氧/空气引发 | 实际空气组成、压缩、传热及循环/排污；不添加不存在的过氧化物。 |
| t_peroxide | 管式，过氧化物引发 | 每项实际过氧化物/制剂、注入温区、载体、调节剂和冷却/余热回收。 |
| t_combined | 管式，过氧化物与氧/空气联合引发 | 两类真实引发供货均各计一次，保留组分账与路线特定转化。 |
| a_peroxide | 搅拌釜式，过氧化物引发 | 实际过氧化物/载体、搅拌、进料/温区冷却及下游分离；不以管式仅氧引发替代。 |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `primary_chain` | 纳入新鲜原料接收和确认、实际存在的净化、引发剂储存/稀释/计量、初级及超高压压缩、所选反应器及温区、冷却、高低压分离、循环压缩、油/蜡分离、净化排污、熔体挤出、水下切粒、干燥、料仓脱气、质量验收、散装装载、清洗及可归属场内环境处理。每项实际外购催化剂、溶剂、调节剂和助剂单列；所列 LDPE 分支不使用 Ziegler/Phillips 催化剂。`ec-polymers-bref-2007` `lyb-lupotech-2025`  `ec-polymers-bref-2007`; `lyb-lupotech-2025` | `ec-polymers-bref-2007`; `lyb-lupotech-2025` |
| `actual_atomic_extension` | 每张清单卡对应实际供应/排放门的一项交换。条件卡仅在有记录时纳入；经证实不存在记为 not_applicable，不虚构零。每种额外实际过氧化物、制剂、载体、调节剂、催化剂、制冷剂、燃料、排污组分、废物或排放分子须增加完整独立卡。宽泛流 UUID 不得替代硬 CAS、牌号、介质或路线。整份外购制剂仅跨边界一次；检验组分和载体水属于亚账，不重复采购。场内稀释则记录分别采购组分及实际能耗/损失。`nouryon-trigonox-b-2025`  `nouryon-trigonox-b-2025` | `nouryon-trigonox-b-2025` |
| `environment_gates` | 对每个回收/排污去向区分内部返回、外售原料、外部废物处理转移及最终环境排放。原始物种账保留每个分子组分。场内氧化的捕集气体属于内部转移；记录实际燃料/空气/能源及处理后物种，不把捕集气体与其燃烧产物同时记为排放。场外废水按一个实测物理废物流及组分亚账记录，不再将其组分记为当地排放。纳入场内排水时，每项实际最终水相物种须单列。`ec-polymers-bref-2007`  `ec-polymers-bref-2007` | `ec-polymers-bref-2007` |

## 6. 过程清单结构

以下每张卡片数量及协议聚合描述同一个 normalize_period 最终报告结果。该计算依赖按第 8 节适用于全部清单行，包括内部转移。有限直接参考基准字段不执行任何算术；collection_method 保留原始期间分子。全部换算、结转/库存归属及唯一相除均由第 8 节规则执行。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_primary | 一体化原生 LDPE 制造 | required | 一个声明高压路线与牌号 | 接收/制备、压缩、聚合、分离/循环/排污、挤出/切粒、脱气/质检及真实场内公用工程/处理 | primary_granulate |
| p_bulk_gate | 散装验收及装载交付门 | required | 同一声明牌号/路线/状态；独立物理装载及验收边界 | 内部转移及库存管理、实际交付门负荷和新验收散装交付 | bulk_supplied_ldpe |

原生制造过程为一体化前景单元，不表示所有工序共用一表。cp_feed、cp_energy、cp_production、cp_recovery、cp_environment 和 cp_water 保留工序/物流 owner 及内部物种/公用工程账。高低压循环、净化返回与捕集气体均为真实内部转移，须核对；不为其另建采购卡不等于省略能耗、损失或化学。条件命名实例卡不是穷尽配方，报告前须增加全部真实独立交换；缺失物种/用量明确保留。

### 过程：原生 LDPE 制造 (`p_primary`)

#### 输入

##### 产品流

###### 新鲜单体 (`fresh_ethylene`)

将新鲜供应乙烯与回收循环分开记录；检验乙烯及每项杂质。不隐含通用纯度或上游路线；已筛查炼厂级身份不作为通用来源使用。

- 选定流: 聚合级乙烯
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_feed。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_feed`
- 来源: `ec-polymers-bref-2007`

###### 商品 DTBP 供货 (`dtbp_supply`)

两种过氧化物路线实际采购时条件纳入。整份交付商品仅计一次，含实测非活性部分；DTBP（CAS110-05-4）检验含量、活性氧及杂质为分别亚账。不把规格最低值作为该批检验值。

- 选定流: 过氧化二叔丁基，商品 Trigonox B
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_feed。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_feed`
- 来源: `nouryon-trigonox-b-2025`

###### 单独采购的过氧化物载体 (`heptane_makeup`)

仅记录实际稀释配方单独采购的正庚烷 CAS142-82-5，不重复外购过氧化物溶液中已包含的庚烷。原生名称声明生产混合、在工厂，路线与地理未指定。专利仅为实验实例，不是配方要求。

- 选定流: 正庚烷 `f3026a5f-e4ce-4bb3-b015-92d56ebb0091`
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_feed。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_feed`
- 来源: `arkema-wo2025133548`

###### 链转移剂 (`propanal_modifier`)

CAS123-38-6，仅在实际单独供货且配方使用时纳入；记录含量、载体和反应/并入产物去向。专利实例不为全部牌号或 Lupolen2420K 指定该调节剂。

- 选定流: 丙醛
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_feed。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_feed`
- 来源: `arkema-wo2025133548`

###### 氧引发空气 (`initiation_air`)

仅用于实际管式氧/空气引发；声明干/湿标准状态和实测氧组成。供给空气仅计一次，其氧/氮/水为组分亚账。除非实际另有独立供货，不同时记入外购氧。

- 选定流: 压缩空气
- 流属性/单位: Volume / m3
- 数量规则: 声明参考流基准的前景报告量；cp_feed。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_feed`
- 来源: `ec-polymers-bref-2007`

###### 压缩机润滑油补充 (`compressor_oil`)

记录实际润滑油制剂、供应商及补充/损失/滞留油；不将油代理为乙烯或聚合物。其他合成油或单独助剂供货须另列。

- 选定流: 矿物润滑油
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_feed。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_feed`
- 来源: `ec-polymers-bref-2007`; `lyb-lupotech-2025`

###### 原生制造外购电 (`primary_electricity`)

记录压缩、搅拌、冷却、循环、挤出、干燥和环境设备实际电压、地理、电网/供应商及期间；排除门交付单独所属计量。已筛查中国电网身份不得暗代表其他地区。

- 选定流: 中压交流电
- 流属性/单位: Energy / kWh
- 数量规则: 声明参考流基准的前景报告量；cp_energy。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `ec-polymers-bref-2007`

###### 外购蒸汽 (`steam_import`)

按指定压力、温度、焓及凝结水返回边界记录实际外购蒸汽，独立保留蒸汽质量/水亚账；不重复采购外部供应商使用的燃料。

- 选定流: 蒸汽
- 流属性/单位: Energy / MJ
- 数量规则: 声明参考流基准的前景报告量；cp_energy。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `ec-polymers-bref-2007`

###### 场内燃烧燃料 (`natural_gas`)

实际场内锅炉/氧化器使用时纳入。保留累计干/湿气体积、组成、压力温度、实测热值基准及实际燃烧物种；累计体积不再乘时间。其他实际燃料分别增加行。

- 选定流: 天然气
- 流属性/单位: Volume / m3
- 数量规则: 声明参考流基准的前景报告量；cp_energy。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `ec-polymers-bref-2007`

###### 处理工艺水补充 (`water_makeup`)

记录冷却和水下切粒、清洗及公用工程补充的实际外来处理水。原生流仅说明经处理的工业水，没有场址、处理路线或品质；须在当地核实。内部循环不是新取水。蒸汽/凝结水及其他实际水源按门分别记录。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_water。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `ec-polymers-bref-2007`

###### 外购吹扫氮 (`nitrogen_purge`)

实际吹扫/惰化时纳入；原生流未给 CAS、路线、牌号或地理。核实气态供货、纯度及实际吹扫去向，不移植其他氮气候选的中国或全球标签。

- 选定流: 氮气 `4f19ca0f-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_feed。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_feed`
- 来源: `ec-polymers-bref-2007`

###### 料仓脱气空气供给 (`degassing_air`)

记录与引发空气分开计量的粒料脱气/输送空气，声明气体状态及载体能源边界；场内制气时记录大气吸入和真实压缩机电量，不再增加外购空气负荷。

- 选定流: 压缩空气
- 流属性/单位: Volume / m3
- 数量规则: 声明参考流基准的前景报告量；cp_energy。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `ec-polymers-bref-2007`

##### 基本流

###### 场内燃烧大气空气 (`combustion_air`)

仅记录纳入场内燃烧的实际大气吸入；在亚账保留实测/工程核算氧、氮、湿度及惰性组成，与外购引发空气和料仓空气区分。

- 选定流: 空气
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `ec-polymers-bref-2007`

#### 输出

##### 产品流

###### 已验收内部粒料转移 (`primary_granulate`)

实际合格、干燥/脱气 LDPE 粒料转移至散装交付门；保留转移/批号、残余单体及结转上游负荷。尽管原生粒料 UUID 相同，此行为内部中间物，不是终端参考。

- 选定流: 低密度聚乙烯粒料（PE-LD） `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_production。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_production`
- 来源: `ec-polymers-bref-2007`; `lyb-lupotech-2025`

###### 独立销售副牌粒料 (`offgrade_granulate`)

仅记录实际独立销售 LDPE 副牌粒料；记录真实牌号/功能、价格/分配和去向。宽泛原生 LDPE 身份不使其成为声明牌号验收产出。废弃粒料改用废物行，内部返工不增加销售。

- 选定流: 低密度聚乙烯粒料（PE-LD） `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_production。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_production`
- 来源: `ec-polymers-bref-2007`

###### 回收单体外供原料 (`recovered_ethylene_export`)

仅记录跨前景边界向裂解/净化单元实际外供的原料；记录乙烯及各杂质、质量和去向。内部高低压循环留在回路账，不计外购或外供抵扣。

- 选定流: 回收乙烯
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_recovery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_recovery`
- 来源: `ec-polymers-bref-2007`

###### 回收溶剂外供 (`recovered_heptane_export`)

实际回收正庚烷达到声明再用规格且外供时纳入。原生生产混合、在工厂身份不建立回收物纯度或供应商；披露兼容性债务，链接背景供应商前核实。内部回用保持内部。

- 选定流: 正庚烷 `f3026a5f-e4ce-4bb3-b015-92d56ebb0091`
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_recovery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_recovery`
- 来源: `arkema-wo2025133548`

###### 实际可销售聚乙烯蜡 (`wax_sale`)

实际分离并销售的低聚蜡，记录组成、含油量、质量及分配；同一质量不得同时流向废蜡。

- 选定流: 聚乙烯蜡
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_recovery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_recovery`
- 来源: `ec-polymers-bref-2007`

###### 实际外供回收蒸汽 (`steam_export`)

仅记录实测对外有用回收蒸汽，声明压力温度和凝结水边界。内部回收蒸汽记入内部能源账，不增加输出；保留水质量及明确分配。

- 选定流: 蒸汽
- 流属性/单位: Energy / MJ
- 数量规则: 声明参考流基准的前景报告量；cp_energy。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `ec-polymers-bref-2007`; `lyb-lupotech-2025`

##### 废物流

###### 分离废蜡 (`waste_wax`)

记录实际废弃低聚蜡及夹带油/溶剂组成、处理和去向；排除已销售质量。

- 选定流: 聚乙烯蜡残渣
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `ec-polymers-bref-2007`

###### 废压缩机油 (`waste_oil`)

实际排出/损失并送外部处理的油；核对新油、滞留油、蜡中夹油及含油排水，不重复计算。

- 选定流: 废矿物润滑油
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `ec-polymers-bref-2007`

###### 废弃树脂 (`discarded_pellets`)

实际废弃粒料，与已售副牌和内部退料区分；追踪失败和过渡牌号批次及其负荷。

- 选定流: 废 LDPE 粒料
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `ec-polymers-bref-2007`

###### 送场外废水 (`wastewater_transfer`)

一项真实外部液体废物流；水、油、聚合物细粉及每项已识别溶解物记入不重复求和的组分账。保留流量、浓度、采样及接收处理，不对同一组分再记当地基本排放。

- 选定流: 聚合工厂废水
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `ec-polymers-bref-2007`

##### 基本流

###### 残余乙烯排入空气 (`ethylene_air`)

仅该实际物质在回收/治理后到达空气时纳入；保留分子身份、源点、介质、实测原始期间质量及控制效率证据。覆盖实际正常、开停车、泄漏及紧急释放，不套用通用 VOC 分配或推定零。

- 选定流: 乙烯
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `ec-polymers-bref-2007`

###### 载体庚烷排入空气 (`heptane_air`)

仅该实际物质在回收/治理后到达空气时纳入；保留分子身份、源点、介质、实测原始期间质量及控制效率证据。覆盖实际正常、开停车、泄漏及紧急释放，不套用通用 VOC 分配或推定零。

- 选定流: 正庚烷
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `arkema-wo2025133548`

###### 调节剂丙醛排入空气 (`propanal_air`)

仅该实际物质在回收/治理后到达空气时纳入；保留分子身份、源点、介质、实测原始期间质量及控制效率证据。覆盖实际正常、开停车、泄漏及紧急释放，不套用通用 VOC 分配或推定零。

- 选定流: 丙醛
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `arkema-wo2025133548`

###### 引发剂来源丙酮排入空气 (`acetone_air`)

仅该实际物质在回收/治理后到达空气时纳入；保留分子身份、源点、介质、实测原始期间质量及控制效率证据。覆盖实际正常、开停车、泄漏及紧急释放，不套用通用 VOC 分配或推定零。

- 选定流: 丙酮
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `nouryon-trigonox-b-2025`

###### 实际甲烷排入空气 (`methane_air`)

仅该实际物质在回收/治理后到达空气时纳入；保留分子身份、源点、介质、实测原始期间质量及控制效率证据。覆盖实际正常、开停车、泄漏及紧急释放，不套用通用 VOC 分配或推定零。

- 选定流: 甲烷
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `nouryon-trigonox-b-2025`

###### 引发剂来源叔丁醇排入空气 (`tert_butanol_air`)

仅该实际物质在回收/治理后到达空气时纳入；保留分子身份、源点、介质、实测原始期间质量及控制效率证据。覆盖实际正常、开停车、泄漏及紧急释放，不套用通用 VOC 分配或推定零。

- 选定流: 叔丁醇
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `nouryon-trigonox-b-2025`

###### 聚合物颗粒排入空气 (`polymer_dust_air`)

仅该实际物质在回收/治理后到达空气时纳入；保留分子身份、源点、介质、实测原始期间质量及控制效率证据。覆盖实际正常、开停车、泄漏及紧急释放，不套用通用 VOC 分配或推定零。

- 选定流: 聚乙烯颗粒物
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `ec-polymers-bref-2007`

###### 场内化石二氧化碳 (`fossil_co2_air`)

仅该实际物质在回收/治理后到达空气时纳入；保留分子身份、源点、介质、实测原始期间质量及控制效率证据。覆盖实际正常、开停车、泄漏及紧急释放，不套用通用 VOC 分配或推定零。

- 选定流: 二氧化碳，化石
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `ec-polymers-bref-2007`

###### 不完全燃烧一氧化碳 (`co_air`)

仅该实际物质在回收/治理后到达空气时纳入；保留分子身份、源点、介质、实测原始期间质量及控制效率证据。覆盖实际正常、开停车、泄漏及紧急释放，不套用通用 VOC 分配或推定零。

- 选定流: 一氧化碳
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `ec-polymers-bref-2007`

###### 燃烧一氧化氮 (`no_air`)

仅该实际物质在回收/治理后到达空气时纳入；保留分子身份、源点、介质、实测原始期间质量及控制效率证据。覆盖实际正常、开停车、泄漏及紧急释放，不套用通用 VOC 分配或推定零。

- 选定流: 一氧化氮
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `ec-polymers-bref-2007`

###### 燃烧二氧化氮 (`no2_air`)

仅该实际物质在回收/治理后到达空气时纳入；保留分子身份、源点、介质、实测原始期间质量及控制效率证据。覆盖实际正常、开停车、泄漏及紧急释放，不套用通用 VOC 分配或推定零。

- 选定流: 二氧化氮
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `ec-polymers-bref-2007`

###### 燃料硫二氧化硫 (`so2_air`)

仅该实际物质在回收/治理后到达空气时纳入；保留分子身份、源点、介质、实测原始期间质量及控制效率证据。覆盖实际正常、开停车、泄漏及紧急释放，不套用通用 VOC 分配或推定零。

- 选定流: 二氧化硫
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `ec-polymers-bref-2007`

###### 实际气体平衡离开氮 (`nitrogen_air`)

仅该实际物质在回收/治理后到达空气时纳入；保留分子身份、源点、介质、实测原始期间质量及控制效率证据。覆盖实际正常、开停车、泄漏及紧急释放，不套用通用 VOC 分配或推定零。

- 选定流: 氮气
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `ec-polymers-bref-2007`

###### 实际气体平衡离开未反应氧 (`oxygen_air`)

仅该实际物质在回收/治理后到达空气时纳入；保留分子身份、源点、介质、实测原始期间质量及控制效率证据。覆盖实际正常、开停车、泄漏及紧急释放，不套用通用 VOC 分配或推定零。

- 选定流: 氧气
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `ec-polymers-bref-2007`

###### 水蒸气排入空气 (`water_vapour_air`)

水账核对实际冷却/切粒蒸发水、原料湿度与燃烧水；不由乙烯加成聚合或闭合残差推算水。

- 选定流: 水蒸气
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_environment。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_environment`
- 来源: `ec-polymers-bref-2007`

###### 场内处理水排放 (`treated_water_out`)

仅在场内实际向地表水最终排水时纳入，记录接收介质及实测水分数；另为每项实际溶解物和悬浮物增加原子行。COD 保持指标身份，不作为分子排放或反应水因子；同一水不再计场外废物转移。

- 选定流: 水，排入地表水
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_water。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `ec-polymers-bref-2007`

### 过程：散装供货门 (`p_bulk_gate`)

#### 输入

##### 产品流

###### 物理内部粒料接收 (`internal_granulate_receipt`)

精确匹配 primary_granulate 批号/转移及结转负荷。保留接收、退回、期初末料仓库存及真实装载损失；仅在聚合整个前景时抵消成对内部转移。

- 选定流: 低密度聚乙烯粒料（PE-LD） `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_gate。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gate`
- 来源: `ec-polymers-bref-2007`; `lyb-lupolen-2420k-2026`

###### 散装交付门电力 (`gate_electricity`)

实际单独所属输送/装载及交付门清洗电表，声明场址电压、供应商和地理；排除 primary_electricity 已覆盖部分及客户运输。

- 选定流: 中压交流电
- 流属性/单位: Energy / kWh
- 数量规则: 声明参考流基准的前景报告量；cp_gate。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gate`
- 来源: `ec-polymers-bref-2007`

#### 输出

##### 产品流

###### 终端验收散装交付 LDPE (`bulk_supplied_ldpe`)

唯一终端参考：声明牌号/路线/状态的新正验收交付量；经校准装载净重排除皮重、退回、返工、副牌及重复批次。残余单体/水分继续在交付产品物种账中声明。

- 选定流: 低密度聚乙烯粒料（PE-LD） `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gate`
- 来源: `lyb-lupolen-2420k-2026`

##### 废物流

###### 收集装载洒落物 (`loading_waste`)

仅记录实际废弃的捕集洒落粒料；同线回收物须分别追踪内部返回，不记该废物或验收交付。

- 选定流: 废 LDPE 粒料
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_gate。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gate`
- 来源: `ec-polymers-bref-2007`

##### 基本流

###### 未捕集装载粉尘 (`loading_dust_air`)

装载捕集后实际未收集排入空气的粉尘；区分收集洒落物、捕集后送废物的粉尘与最终排放。

- 选定流: 聚乙烯颗粒物
- 流属性/单位: Mass / kg
- 数量规则: 声明参考流基准的前景报告量；cp_gate。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gate`
- 来源: `ec-polymers-bref-2007`

## 7. 分配与共产品处理

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `direct_attribution` | 先按场址、反应器路线及验收树脂牌号分开；使用匹配计量和批次/生产周期记录直接归属原料、公用工程及处理。共享负荷须有实测物理驱动及明确分配理由和敏感性。不得由通用流身份推定等能耗或合并路线。`ec-polymers-bref-2007`  `ec-polymers-bref-2007` | `ec-polymers-bref-2007`; `jrc-ilcd-allocation-2010` |
| `secondary_outputs` | 蜡、副牌树脂和实际外供蒸汽分别计量，不增加验收参考产出。可细分时避免分配。确需对销售输出分配时，记录真实质量/功能及数量，再逐交换识别并应用有依据的决定性物理因果关系，包括可行的虚拟细分。仅对仍无法据此归属的剩余负荷，才可按真实共同功能在同一工序出口状态下的有记录市场价值分配；说明不能物理归属的原因，记录同期匹配数量/价格，并报告敏感性。不把废物默认为联产品，循环不作为避免原生采购抵扣。场内回收利用热只减少实测外购，不另给输出抵扣。`ec-polymers-bref-2007` `lyb-lupotech-2025`  `ec-polymers-bref-2007`; `lyb-lupotech-2025` | `ec-polymers-bref-2007`; `lyb-lupotech-2025`; `jrc-ilcd-allocation-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed` | p_primary | 逐项新鲜化学品、制剂及空气供货 | 交付及库存账 | 批号；材料/制剂/CAS；供应商；含量与组分/载体分数；接收及退货质量；罐期初末库存；加料；气体状态；杂质；每项真实引发剂/调节剂身份 | owner：原生工厂材料管理员。保留完整期间原始交付、经校准秤/罐及加料记录，含失败和过渡运行；外购制剂与检验组分分开。气体体积或速率保留原始单位/时间基准。此处不除以产出。 | 原始 kg；声明状态的 m3；kWh；MJ；按记录类型保留实验室原始浓度单位 | 每次接收、运行、计量区间、分析及库存边界 | 含失败/零产出运行及期初末在制品的完整匹配报告期间 | 声明场址及本协议过程 owner；同牌号/路线/状态，保留子表/物流边界 | 每 1 kg 参考流 | 供应商证明；校准；组分检验；期初末核对；配方与来源路线证据 |
| `cp_energy` | p_primary | 原生制造每项公用工程及燃料 | 计量及公用工程账 | 表号与工序 owner；区间读数；实际公用工程规格；电压；压力/温度；累计气量或流速与时长；气体组成；热值基准；蒸汽焓及凝结水；内部回收；外供；停机 | owner：原生工厂能源工程师。保留原始电表差值及燃料记录，含失败/零产出运行、维护、回收和污染控制。区分外购公用工程与场内生产，不在原始期间记录中除以产出。累计体积已积分；速率记录保留测得时长。 | 原始 kg；声明状态的 m3；kWh；MJ；按记录类型保留实验室原始浓度单位 | 每次接收、运行、计量区间、分析及库存边界 | 含失败/零产出运行及期初末在制品的完整匹配报告期间 | 声明场址及本协议过程 owner；同牌号/路线/状态，保留子表/物流边界 | 每 1 kg 参考流 | 校准；供应商/地理；能源分配计量图；焓/热值证据；购入/外供凭证 |
| `cp_production` | p_primary | 内部及副牌 LDPE 生产 | 批次及库存谱系 | 运行 ID；反应器及引发路线；牌号；配方；起止；验收内部产出；副牌；失败/零产出运行；退回/返工批号；期初末在制品和料仓质量；物种分数；转入转出结转负荷向量 | owner：生产主管。保留所有纳入运行的原始运行、质检、称重和库存记录；逐批识别物理库存质量及继承负荷。不预设聚合投料等于验收产出，不除以产品数量。 | 原始 kg；声明状态的 m3；kWh；MJ；按记录类型保留实验室原始浓度单位 | 每次接收、运行、计量区间、分析及库存边界 | 含失败/零产出运行及期初末在制品的完整匹配报告期间 | 声明场址及本协议过程 owner；同牌号/路线/状态，保留子表/物流边界 | 每 1 kg 参考流 | 反应器日志；COA；水分/残余单体试验；在制品及返工核对；失败批次负荷保留 |
| `cp_recovery` | p_primary | 每项回收物种与排污去向 | 循环、排污和去向账 | 回路/物流 ID；路线；总循环；新鲜补充；排污/外供；蜡油分离；含乙烯及每项实际杂质的物种质量/组成；滞留气/液/聚合物库存；来源/去向；销售或废物 | owner：回收工程师。保留原始流量计、实际气/液分析、油蜡称重及去向凭证。内部转移不作外购抵扣，区分真实净化/治理物种变化。明确保留未知项，不除以产出。 | 原始 kg；声明状态的 m3；kWh；MJ；按记录类型保留实验室原始浓度单位 | 每次接收、运行、计量区间、分析及库存边界 | 含失败/零产出运行及期初末在制品的完整匹配报告期间 | 声明场址及本协议过程 owner；同牌号/路线/状态，保留子表/物流边界 | 每 1 kg 参考流 | 物流图；气相色谱及采样；罐校准；净化器/裂解装置转移凭证；实际销售规格 |
| `cp_environment` | p_primary | 每项废物及空气物质 | 按源区分排放与废物记录 | 源 ID；分子/CAS 身份；介质；原始浓度与流量或质量；干/湿及标准状态；时间戳；运行/停机/紧急；捕集/处理效率；去向；分子库存；碳来源；不确定性及检出限 | owner：场址环境工程师。保留完整期间按物种区分的原始监测、采样、泄漏/紧急日志、废物称重票及处理记录。区分处理前捕集与最终排放，含失败/零产出运行；不从总 VOC/COD 推定分子分配，不将记录除以产出。 | 原始 kg；声明状态的 m3；kWh；MJ；按记录类型保留实验室原始浓度单位 | 每次接收、运行、计量区间、分析及库存边界 | 含失败/零产出运行及期初末在制品的完整匹配报告期间 | 声明场址及本协议过程 owner；同牌号/路线/状态，保留子表/物流边界 | 每 1 kg 参考流 | 采样方案；实验室物种分析；经确认原始排放方法；泄漏检测修复；废物接收方；平衡及不确定性 |
| `cp_water` | p_primary | 物理水与水相物种 | 水及物种账 | 各取水；循环；蒸汽/凝结水；原料水分；蒸发；废水；实际最终水相物种；相态水；期初末库存；有独立证据的水生成/消耗；浓度及累计体积 | owner：场址水平衡工程师。保留原始水表、分析、蒸汽账及水分试验。物理/元素闭合与有证据的化学物种及相变分开，不从残差生成反应水。原始期间数量保持未归一化。 | 原始 kg；声明状态的 m3；kWh；MJ；按记录类型保留实验室原始浓度单位 | 每次接收、运行、计量区间、分析及库存边界 | 含失败/零产出运行及期初末在制品的完整匹配报告期间 | 声明场址及本协议过程 owner；同牌号/路线/状态，保留子表/物流边界 | 每 1 kg 参考流 | 水表校准；物种分析；受纳水体身份；独立反应证据；不确定性 |
| `cp_gate` | p_bulk_gate | 唯一验收散装交付及交付门负荷 | 装载、验收及库存谱系 | 转移与批号；牌号/路线/状态；净验收交付质量；毛重/皮重；COA；接收/退回/返工；期初末料仓库存；装载电量；洒落/粉尘；继承负荷向量；期间起止 | owner：散装门质量及发运管理员。保留原始经校准地磅/装载及交付门能源记录；逐批一次核对验收与退回，保留无产出损失和在制品结转负荷。识别同牌号/路线/状态的新正验收；采集端不将任何交换除以产出。 | 原始 kg；声明状态的 m3；kWh；MJ；按记录类型保留实验室原始浓度单位 | 每次接收、运行、计量区间、分析及库存边界 | 含失败/零产出运行及期初末在制品的完整匹配报告期间 | 声明场址及本协议过程 owner；同牌号/路线/状态，保留子表/物流边界 | 每 1 kg 参考流 | 地磅校准；签署 COA 及放行；批次谱系；无重复验收；交付门计量边界 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `native_conversion` | 所有原始清单记录 | 报告归一化前，以可追溯原生单位将每个原始分子换算至卡片单位：仅在适用时吨换千克、kWh 换 MJ；速率按实测时长积分，累计体积不再乘时间。体积转质量仅使用实际温度/压力/组成及独立有效密度或气体关系。不默认树脂/溶剂密度、热值或次级属性系数。 | raw_records; unit_evidence; cp_feed; cp_energy; cp_environment; cp_water; cp_gate | converted_raw_period_amounts |  |
| `matched_period_ledger` | 所有原始清单记录 | 按场址/牌号/路线/状态保留所选期间完整负荷向量 A_i，包括全部失败及零产出运行和实际处理负荷。将期初在制品/返工继承负荷核对至完成批次，并将期末在制品负荷一次结转；不遗漏废弃运行，不重复计入继承向量。匹配转移，聚合整个前景时仅抵消真实成对内部转移。物理库存质量与负荷结转分账，并明确将各负荷分到交付、保留、副牌或废物批次。本规则不除以 Q。 | converted_raw_period_amounts; cp_production; cp_recovery; cp_gate | matched_A_i; stock_and_carry_reconciliation |  |
| `accepted_supply` | bulk_supplied_ldpe | Q 为匹配期间声明牌号/路线/状态唯一新正验收净交付千克之和，并核对毛重减皮重、质检放行、退回、返工及期初末成品库存。中间转移、销售副牌、损失及重复验收不增加 Q。Q 为零时不存在报告归一化。 | cp_gate; cp_production; acceptance_and_stock_records | Q | `lyb-lupolen-2420k-2026` |
| `normalize_period` | 所有清单行 | 唯一报告归一化 owner：在 native_conversion 与 matched_period_ledger 之后，使用共同正 Q 计算 q_i = matched_A_i / Q。各卡片与协议聚合仅描述同一每 1 kg 参考流报告结果，不执行第二次相除。终端输出为 1 kg。原始分子、换算、结转/分配与共同 Q 均须可追溯。 | matched_A_i; Q | reported_inventory_per_1_kg |  |
| `species_and_elements` | p_primary; p_bulk_gate | 对完整投入加期初库存与输出加期末库存，分别核对物理质量及每个适用元素（C、H、O、N、S 及制剂特定元素）。独立追踪各气/液/固相及库存的实际聚合物、残余乙烯、各杂质/调节剂/载体/引发剂、油、蜡及分解产物。区分单程转化、循环回收、新鲜原料利用及验收产率；所需关系应测量，不假定 100%。DTBP 可形成丙酮、甲烷和叔丁醇，但来源没有通用分配。未知物种保持未知并调查，不以残差拟合。 | cp_feed; cp_production; cp_recovery; cp_environment; cp_gate | physical_element_and_species_reconciliation | `ec-polymers-bref-2007`; `nouryon-trigonox-b-2025` |
| `independent_water` | p_primary; p_bulk_gate | 独立水账包含供水/载体/原料水分、蒸汽/凝结水、蒸发、最终排水、滞留/自由水及库存。乙烯加成形成聚乙烯重复链本身不产生缩合水。实际副反应、过氧化物化学、燃料氧化或净化产生的水须有独立分子/路径证据及实测投入；相变不产生水。不用同一闭合残差同时解未知反应水项和另一未知出口，COD 或碳闭合均不能提供这两项。 | cp_water; cp_feed; cp_energy; cp_environment | water_reconciliation_and_unresolved_terms | `ec-polymers-bref-2007`; `nouryon-trigonox-b-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `grade_and_route` | 参考及全部批次 | 记录真实牌号及单体身份、反应器/引发剂/载体化学、无添加状态、净交付形态及试验条件。同一原生 LDPE UUID 不等于牌号等价；供应商须独立证明验收和路线。 | 供应商 COA；真实生产日志；牌号规格；参考限定信息 |
| `complete_period` | 所有清单行 | 制造及发运使用共同完整期间，含失败、停机及零产出运行；保留边界、不确定性、分配、在制品/返工及继承负荷谱系，不遗漏或重复收费。 | 计量/运行/库存核对及保留的原始分子账 |
| `native_identity_limits` | 含 UUID 卡片 | LDPE：通用产品粒料，无 CAS/路线/牌号/地理/备注。正庚烷：CAS142-82-5，生产混合、在工厂，无地理/路线，回收品质/供应商仍须核实。工艺用水：处理工业水，没有明确地理/路线/品质。氮气：通用质量身份，无 CAS/路线/牌号/地理。各项仅有参考质量系数1，不提供原生密度或热值假设。保留全部限制，另测数量并核实供应商兼容性。 | 完整原生流与精确参考属性/单位链；供应商记录 |
| `species_completeness` | 材料及环境账 | 追踪全部实际外购化学品/制剂及全部过程/废物/排放物种，不仅是碳或所选参考。有后果的未知物种、实际损失未测或参考/路线矛盾应阻止数据集声明并报告；单独辅助 UUID 为空不虚构此类方法缺口。 | 完整物理/元素/物种及独立水审计 |

## 9. 校验规则

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `reference_identity` | 双语均要求明确终端链接 bulk_supplied_ldpe，指向与声明 LDPE 参考 UUID 及 1 kg 净基准一致的产品输出。适用时，物理上不同的内部和副牌粒料行保留同一原生 UUID；这些行不成为终端参考。拒绝将 HDPE 淤浆/气相、LLDPE、EVA、再生、薄膜或配混身份用于该输出。   |
| `single_normalisation` | 核验完整匹配的原始期间分子与共同正验收交付量 Q。仅 normalize_period 在原生换算和结转负荷核对后执行报告相除。拒绝采集、聚合、卡片或后续计算中的第二次 A/Q。保留失败/零产出运行、退回/返工、过渡牌号、期初末在制品及继承负荷；Q 为零时不得归一化。   |
| `molecule_and_water_checks` | 总物理质量及每个适用元素分别核对，并独立核验真实分子反应/回收路径与单独水账。追踪乙烯、聚合物、每项调节剂/载体/引发剂及其分解产物、残留挥发物和库存变化；量化实际杂质及未解释残差。乙烯加成聚合本身没有缩合水化学计量。不得由残差、仅碳闭合或 COD 虚构物种、水或 100% 转化率/产率。`ec-polymers-bref-2007` `nouryon-trigonox-b-2025`  `ec-polymers-bref-2007`; `nouryon-trigonox-b-2025` | `ec-polymers-bref-2007`; `nouryon-trigonox-b-2025` |
| `coverage_and_sources` | 披露缺失测量、未知物种及未核实供应商链接。前景数据集可用前，须解决其实际参考/路线、全部重要物种及有后果的缺失量；PCR 协议不虚构这些测量。保留完整原生名称、地理、介质、精确属性到单位关系和来源限制。Schema 或 UUID 相同本身不是科学验证。   |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 原生 LDPE 树脂制造及散装供货前景；未链接上游时明确为门到门。 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 适用性及证据审查后，作为独立建模转换工序的声明牌号 LDPE 树脂原料。 |
| excluded_use | 通用可互换聚乙烯全集、再生树脂、EVA/LLDPE/HDPE、添加剂配混、管材/薄膜/纤维转换或完整使用寿命声明。 |
| required_metadata | 场址/时间；实际牌号、路线及物种；验收散装 Q 及库存/结转核对；参考 UUID 与属性/单位；上游来源门；公用工程地理；分配和处理范围。 |
| required_quality_disclosure | 原始证据及不确定性，失败/零产出纳入，在制品/返工结转负荷，缺失供应商/UUID/测量，原生限制和物种/水账残差。来源实例不是供应商测量。 |
| update_trigger | 牌号、反应器/引发/配方、载体、供货来源/状态、回收/排污或治理、能源来源、验收产出定义或重要测量证据改变。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `ec-polymers-bref-2007` | official_guidance | 欧盟委员会，《聚合物生产 BREF》，2007 年 8 月，第 3.2.1.1、3.2.2、3.3.1 节及表 3.9；https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/pol_bref_0807.pdf | 工业路线差异、非完全单程转化、压缩/循环/排污、蜡分离、挤出/脱气及环境负荷范围。属于欧洲历史工艺说明；1999 年调查汇总不是当前场址因子。表 3.9 的 VOC/COD 和一次能源数值不能代替单一分子流或公用工程计量。 |
| `lyb-lupotech-2025` | literature | LyondellBasell，Lupotech 手册 8735/25/08，第 1–2 页、图 1–2；https://www.lyondellbasell.com/globalassets/lyb/our-solutions/technologies/petrochemical/polyethylene/cta/Lupotech.pdf | 区分管式 T 与釜式 A 的工序和余热回收。“无工艺溶剂/催化剂”描述反应介质，不表示过氧化物载体、调节剂或压缩机油不存在。回收宣传不能作为实测 100% 回收率，亦未为具体 SKU 指定反应器或配方。 |
| `nouryon-trigonox-b-2025` | literature | Nouryon，Trigonox B 产品资料，2025-12-4，第 1–2 页；https://www.nouryon.com/globalassets/inriver/resources/pds-trigonox-b-polymer-production-glo-en.pdf | 商品 DTBP 引发剂，CAS 110-05-4，可用于管式/釜式 LDPE；含量、活性氧和物理密度是不同数量；丙酮、甲烷、叔丁醇为主要分解产物。不提供配方、排放分配或通用加量。氯苯是半衰期试验介质，不能据此推定为工厂投入。 |
| `lyb-lupolen-2420k-2026` | literature | LyondellBasell，Lupolen 2420K 技术资料，本次取得版本标注日期 10/15/2026，第 1–3 页；https://productsafety.lyondellbasell.com/DirectRequest?ProductGuid=79326e74-b73c-4977-9f56-b9e12367c004&ResponseTypeGuid=f1e32c20-d810-4db0-b25e-8e23a59f3733 | 真实无添加 LDPE 粒料牌号和散装容器交付实例。典型物性不是规格限值或堆积密度；薄膜试样与转换温度属于下游试验，并非聚合条件。区域销售可用性不是制造地理。不推定医疗/制药用途、SKU 反应器或引发剂。 |
| `arkema-wo2025133548` | literature | Arkema France，WO2025133548A1，2025-06-26 公布，法文原件印刷第 22 页，Protocole expérimental；https://patents.google.com/patent/WO2025133548A1 | 高压搅拌间歇实验釜中庚烷载体与丙醛链转移剂的具体实例。试验过氧酯、实验规模和实测结果具有案例特定性；不采用其作为工业配方、DTBP 用量、商品牌号身份、产率或放大因子。 |
| `jrc-ilcd-allocation-2010` | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition March2010, §7.9.3, printed257–258/PDF277–278; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因型多功能过程的方法背景：虚拟细分、决定性物理因果关系，以及剩余负荷经论证的过程出口市场价值。仅支持分配选择；不提供LDPE配方、通用质量/价格份额、回收物抵扣、供热替代抵扣或完整PEF/CFF声明。 |
