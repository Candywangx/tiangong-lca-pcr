---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.bovine-hide-glue-granules
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 石灰处理与热水提取路线的牛皮胶颗粒

## 1. 范围与适用性

本方法仅适用于未鞣制牛皮料实质制造的干颗粒工业皮胶，不按35420的完整分类名称覆盖所有胶或蛋白产品。现有酪蛋白方法终止于酪蛋白，明确排除后续衍生物；其他用胶产品也不是本制造类别。皮胶由动物胶原提取制成，不是植物蛋白，也不是仅购成品换包装。采用一种路线和一种交付形态，企业提供正常运行的实际前景记录。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.bovine-hide-glue-granules |
| classification_refs | CPC 3.0 35420，限牛皮胶子集；不宣称已接受映射 |
| covered_products | 未鞣制牛皮料经石灰处理、硫酸水洗、热水提取、过滤、浓缩和干燥制成的未配方干颗粒工业皮胶 |
| excluded_products | 骨胶、鱼胶、猪皮胶或马皮胶；铬鞣皮料；食用或医药明胶；蛋白胨；酪蛋白及酪蛋白酸盐；植物或合成黏合剂；明胶废料配胶；即用液体胶；购成品胶再包装 |
| representative_product | 以工业胶原黏合剂供应的干牛皮胶颗粒 |
| production_route | 仅一条未鞣制牛皮路线：接收、水洗和尺寸整理、石灰处理、水与硫酸除灰、热水提胶、胶液过滤、蒸发、干燥、制粒、包装、仓储和工厂门交接 |
| market_state | 以实际残余水分供应的干颗粒净质量；不自动折算为干蛋白或无水质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门实际净交付的牛皮胶工业干颗粒 |
| How much | 1 千克整份供货产品净质量，排除包装；保留实测残余水分 |
| How well | 按客户工业黏合剂规格验收；声明实测水分、蛋白基准、凝胶强度与黏度及检测条件 |
| How long or cycle | 一个明确期间与交付批群的实际净验收交接；不采用服务寿命 |
| reference_flow_link | rf_delivered_glue |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 皮明胶 `7b2fe9b1-13be-4c47-a6c9-21b899c724ad` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 牛来源及未鞣制皮料来源证明; 石灰与硫酸水洗路线及实际溶液含量; 干颗粒工业黏合剂等级，非食用或医药级; 批次水分与干物质检测方法; 蛋白含量、分析基准及使用的转换系数; 凝胶强度与黏度及测试条件和客户规格; 排除所有包装组分的产品净质量; 实际工厂门净交付量而非新增放行产量; 场址、地理、报告期间与交付批群标识; 期初期末在制品和成品质量及其结转负荷; 退回、返工、失败批及零产出核对; 公用工程供应、废水去向与残渣销售证据; 包装组成及纳入的仓储和装载边界 |

每个限定条目均须在数据包中明确声明。该native身份为工业动物皮胶的宽身份；名称组分为皮明胶、动物胶工业生产、工厂生产混合，未给CAS或供货地理。注释的“多由马皮”并非仅马来源限制，仍须披露并以牛皮供应证据证明本次适用。它不提供牛皮供应方、含水量、等级或背景负荷。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用完整供货胶粒实际净交付千克，包装排除，残余水分保留。干物质、蛋白与整份产品分别声明；不将胶液湿质量或新放行产量当成交付量。 |
| `wet_dry_species` | 物料与水账 | Mass | kg | 按calc_water_species记录完整商业湿制剂和其载水子账；物理水与反应生成或消耗水分开。不得用COD或总残差推算未知物种。 |
| `single_normalisation` | 所有清单行 | Mass | kg | 采集端不归一；按calc_delivery_cohort核对实际期间分子及库存负荷，再由calc_gate_once以同批群正交付Q仅归一一次。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | 范围内前景 | 纳入实际皮料整理、石灰处理、酸与水洗、多次提胶、过滤、蒸发、干燥、整理和质量检验。接收成品胶后包装不构成本路线制造。 | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `boundary_gate` | 范围内前景 | 参考门是工厂内向客户或承运方的实际验收净交接。纳入截至该门应归属的包装、厂内仓储、内部搬运和装载；排除之后的厂外配送和使用。生产放行与实际交付分别报告。 | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `boundary_upstream` | 范围内前景 | 购入未处理牛皮料是完整湿态商业投入。关联实际屠宰与皮料加工供应链、保存、运输、供应方分配及入厂状态。副产物名称不代表上游零负荷。本前景不重建屠宰、鞣制或乳生产。 | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `boundary_utilities` | 范围内前景 | 代表性前景购入蒸汽和电力；蒸汽发生在上游，按实际接口追踪凝结水回流及直接喷入水。自备锅炉场址必须逐项扩展燃料、水、处理及排放模型，不得删除。纳入实际清洗和废物管理。 | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `boundary_waste` | 范围内前景 | 代表模型将分别表征的原废水和湿残渣转交有记录的厂外管理。若内部转入厂内处理站，必须显式扩展其前景、每种实际药剂与公用工程、实测处理出水和污泥；不得将原废水标成处理水。 | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收时的未鞣制牛皮料，声明实际水分、保存盐及预处理；不接收铬皮料或骨料 |
| starting_condition_role | 实际制胶的完整上游商业皮料投入 |
| product_classification_scope | CPC3 35420中的限定工业牛皮胶子集 |
| recursive_input_rule | 外部同类胶投入保留上游负荷和独立批次身份；本方法排除仅再包装作业。内部胶回用按成对交接记录，合并时抵消但不删除再加工能源或损失。 |
| upstream_dataset_requirement | 追踪实际皮料供应方、动物来源、地理、时间、保存及上游分配；分别核实每项公用工程、化学品和运输供应方 |
| disclosure | 披露工厂与时间覆盖、水分和蛋白基准、净交付门、库存负荷、废物去向、联产品销售证明、纳入仓储装载、公用工程边界及每项未测量数据要求 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `hide_preparation` | 皮料整理、石灰处理与酸洗 | required |  | 将接收的未处理皮料制成水洗提胶料 | 每 1 kg 参考流 |
| `hot_extraction` | 热水提胶与胶液分离 | required |  | 分次提取胶液并分离提胶后皮渣 | 每 1 kg 参考流 |
| `drying_finishing` | 过滤、蒸发、干燥和制粒 | required |  | 以实测脱水将胶液制成干颗粒 | 每 1 kg 参考流 |
| `packing_delivery` | 包装、仓储、搬运及实际门交付 | required |  | 保留库存负荷并完成唯一验收净产品交付 | 每 1 kg 参考流 |

以下是代表路线的逐项交换卡。所有数量由真实企业提供；这些卡不提供假定配方或运行参数。条件性设备、药剂、耗材、排放与处理实际存在时必须逐物种或单品扩展，真实未使用才可记录不适用。完整原始物理账与库存账优先于归一报告；所有内部交接均成对抵消。

### 过程：皮料整理、石灰处理与酸洗 (`hide_preparation`)

#### 输入

##### 产品流

###### 未鞣制牛皮原料 (`bovine_hide_stock`)

计量整份接收湿皮料；水分、胶原或蛋白、脂肪与盐为组分子账，不是额外采购投入。记录供应方负荷和来源。

- 选定流: 未鞣制牛皮料
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_prepare`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 购入石灰乳 (`lime_slurry`)

记录整份交付水浆及实测Ca(OH)2质量分数；载水已含在采购质量中。若实际厂内配浆，须以分别购入石灰与水及实测搅拌负荷替换本投入，不得两套并存。

- 选定流: 氢氧化钙水浆
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_prepare`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 酸洗供应 (`sulfuric_acid_solution`)

采用实际整份购入溶液质量与含量；活性酸及载水为组分，不重复采购。接收后添加稀释水另列。本数据包拒绝改用另一酸路线。

- 选定流: 硫酸水溶液
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_prepare`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 水洗与补充水 (`preparation_water`)

采集跨越本过程边界的实际新水，含水洗、稀释与清洗。内部循环另账；不再加入石灰浆或酸的载水。

- 选定流: 工艺水
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_prepare`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 整理用电 (`preparation_electricity`)

计量洗鼓、整理设备、泵及应归属清洗、空载和失败运行负荷；采用实际分表或有依据的场址分配。

- 选定流: 电力
- 流属性/单位: 能量 / 千瓦时
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_prepare`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 进厂运输 (`inbound_road_freight`)

采集实际进厂商业货载、距离、载荷、回程口径与供应方。不得在本购入服务之外重复计同车柴油。

- 选定流: 公路货运服务
- 流属性/单位: 运输功 / 吨千米
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_prepare`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 内部整理皮料交出 (`prepared_hide_out`)

向hot_extraction成对交接湿质量，携带固形物、水与累积负荷；合并时只抵消本成对交换。

- 选定流: 水洗并经石灰及酸处理的牛皮料
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_prepare`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### 废物流

###### 原水洗废水 (`preparation_wastewater`)

计量实际排出湿废水、溶解盐、悬浮物、C/N/Ca/S及去向；不宣称已处理，不由COD推算固形物。

- 选定流: 石灰与酸皮料水洗原废水
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 分离石灰渣 (`spent_lime_solids`)

将实际物理分出的固体与废水区分；记录湿质量、固形物、夹带水和实际处置。同一悬浮物不得重复计入。

- 选定流: 湿废石灰渣
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### 基本流

### 过程：热水提胶与胶液分离 (`hot_extraction`)

#### 输入

##### 产品流

###### 内部整理皮料接收 (`prepared_hide_in`)

按批次、湿质量、固形物及负荷匹配prepared_hide_out；内部循环皮料不是第二次上游采购。

- 选定流: 水洗并经石灰及酸处理的牛皮料
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_extract`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 提胶用水 (`extraction_water`)

记录新增提胶与清洗水；湿皮料已有水及实际喷入蒸汽分别核算。

- 选定流: 工艺水
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_extract`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 购入提胶蒸汽 (`extraction_steam`)

采用实测交付热量及压力、温度和焓依据。水账另记物理蒸汽与凝结水质量。区分间接加热及任何实测直接喷入，不重复计热。

- 选定流: 蒸汽
- 流属性/单位: 能量 / 兆焦
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_extract`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 提胶用电 (`extraction_electricity`)

计量所有等级及失败运行的提取循环、输送泵和应归属清洗与空载负荷。

- 选定流: 电力
- 流属性/单位: 能量 / 千瓦时
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_extract`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 内部胶液交出 (`glue_liquor_out`)

记录每次实际提取的湿胶液及实测固形物、蛋白、水和结转负荷；其不是干态终端产品。

- 选定流: 牛皮胶水提取液
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_extract`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### 废物流

###### 提胶后皮渣 (`extracted_hide_tankage`)

湿残渣与胶液及废水分别计量，并测水分。默认按废物；证实为联产品后须以真实销售门及分配单列合格Product输出，不得改名为皮料等级或干胶。

- 选定流: 湿提胶牛皮残渣
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 分离油脂 (`recovered_grease`)

仅在实际物理回收油脂时纳入；保留水和杂质分析。默认废物管理，除非实际验收销售证据支持另列Product输出及经审查分配。

- 选定流: 回收牛皮油脂
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 提胶车间废水 (`extraction_wastewater`)

记录实际提胶排液、清洗损失及独立凝结水去向；不得扣除假设的可售蛋白。

- 选定流: 皮料提胶原废水
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### 基本流

### 过程：过滤、蒸发、干燥和制粒 (`drying_finishing`)

#### 输入

##### 产品流

###### 内部胶液接收 (`glue_liquor_in`)

匹配glue_liquor_out，含水与等级特定结转负荷；记录实际过滤与浓缩损失。

- 选定流: 牛皮胶水提取液
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_dry`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 购入浓缩干燥蒸汽 (`drying_steam`)

计量蒸发与干燥供热；保留蒸汽与凝结水质量和焓基准，不设每千克脱水默认能耗。

- 选定流: 蒸汽
- 流属性/单位: 能量 / 兆焦
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_dry`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 过滤与整理用电 (`finishing_electricity`)

纳入泵、过滤、真空、风机、实际冷却、制粒、回收、清洗及零产出耗电。实际制冷剂泄漏另行按物种列明。

- 选定流: 电力
- 流属性/单位: 能量 / 千瓦时
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_dry`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 冷却与清洗补水 (`drying_makeup_water`)

只计量实际外部补水；区分循环冷却水、清洗水和工艺凝结水。

- 选定流: 工艺水
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_dry`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 内部干胶粒交出 (`granules_internal_out`)

将此已核实宽身份用于实际工业牛皮胶粒。native注释称皮料且多由马皮制成，这是一般主要来源描述，并非仅限马皮规格。未声明CAS或地理，不推定供应方等同。向packing_delivery交接批次水分、固形物、质量及负荷；新增放行不是交付Q。

- 选定流: 皮明胶 `7b2fe9b1-13be-4c47-a6c9-21b899c724ad`
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_dry`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### 废物流

###### 滤渣 (`filter_residue`)

分别计量分出的湿滤渣与组成；如使用过滤介质，另以具体单项投入纳入实际耗用。

- 选定流: 湿牛皮胶过滤残渣
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 转出工艺凝结水 (`condensate_out`)

计量产品带水形成的液体凝结水及其实际有机夹带与去向。购入蒸汽的公用工程凝结水在水子账中分开；如实际对外返还，按实际另列。

- 选定流: 皮胶蒸发凝结水
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### 基本流

###### 未凝结产品水 (`water_vapour`)

以独立测量的蒸发、凝结和空气湿度平衡确定实际未凝水排放；不含已计凝结水，不作为假设反应水差额。

- 选定流: 排入空气的水蒸气
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 未回收胶尘 (`glue_dust`)

纳入控制设施之后实际测量或有依据的废气排放；回用捕集细粉是内部成对回用，弃置捕集细粉须另列废物流。安装过滤器不代表默认零排放。

- 选定流: 排入空气的牛皮胶颗粒物
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

### 过程：包装、仓储、搬运及实际门交付 (`packing_delivery`)

#### 输入

##### 产品流

###### 内部干胶粒接收 (`granules_internal_in`)

匹配granules_internal_out及结转负荷和实际水分。期初成品另保留历史负荷，不视为新生产。

- 选定流: 皮明胶 `7b2fe9b1-13be-4c47-a6c9-21b899c724ad`
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gate`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 外层纸袋 (`kraft_bag`)

依据供应方组成与损失记录称量实际外袋；纸袋与聚合物内衬分开计。

- 选定流: 牛皮纸袋
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gate`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 聚乙烯内衬 (`pe_liner`)

仅纳入实际供应内衬；核实聚合物及供应质量。无内衬须有证据，不得默默假设。

- 选定流: 聚乙烯袋内衬
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gate`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 包装与仓储用电 (`packing_electricity`)

纳入实际应归属交付批群的称量、包装、照明、仓储搬运、退回检查与装载用电，必要时使用储存时间和位置记录。

- 选定流: 电力
- 流属性/单位: 能量 / 千瓦时
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gate`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 厂内柴油搬运 (`handling_diesel`)

当实际柴油搬运车辆位于门边界内时纳入；计量消耗、燃料分析与作业。按场址证据将每种实际燃烧物种另列基本流。纯电场址保留不使用证明，不虚构柴油投入。

- 选定流: 柴油
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gate`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 门验收净交付 (`rf_delivered_glue`)

只有本行是终端参考。Q为范围内胶粒唯一实际净验收交接量，排除包装，并在原批群中修正退回。另报实测残余水分与蛋白；不得用纯度、干物质或蛋白系数改变整份供货产品质量。

- 选定流: 皮明胶 `7b2fe9b1-13be-4c47-a6c9-21b899c724ad`
- 流属性/单位: 质量 / 千克
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_gate`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### 废物流

###### 不可回收不合格胶 (`discarded_glue`)

计量实际销毁的不合格或退回胶粒，保留历史与返工负荷；留作以后返工的货物仍是库存，不是废物也不是Q。

- 选定流: 不合格牛皮胶颗粒
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gate`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 弃置纸袋 (`paper_sack_waste`)

分别记录实际包装不合格与破损纸袋及处置或回收去向；随产品销售的包装不是前景废物。

- 选定流: 废牛皮纸袋
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gate`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### 弃置聚乙烯内衬 (`pe_liner_waste`)

计量实际弃置内衬与去向，排除作为产品包装出厂的内衬。

- 选定流: 废聚乙烯袋内衬
- 流属性/单位: 质量 / 千克
- 数量规则: A_row / Q；原始换算和第8节库存负荷核对后的一次报告操作。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gate`
- 来源: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separation` | 范围内前景 | 追踪各提取批与胶等级。先用实际计量和批记录将可分离的物料、能源、包装、仓储及处理直接归属，再分配共用作业。不得将全部负荷归给首次提取，也不得将后续胶液视为无负荷。 | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `allocation_sale_gate` | 范围内前景 | 提胶后的湿皮渣、油脂和滤渣是不同物理物流。除非该流的实际销售规格、合法去向、验收净量、交接记录及市场证据证明其为所述门的联产品，否则按废物处理。历史回收实例只证明可能性，不证明本站销售。不得用干渣量替代实测湿交付量。 | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `allocation_shared` | 范围内前景 | 对剩余共同负荷，记录实际因果关系和实测物理驱动量。若无合理物理关系，须以同一门的同期数量和价格明确申报经审查的场址分配并做敏感性分析；保留未分配账。不得借用乳业或IDF、肉畜或机构经济系数，不得自动给替代产品抵扣或将上游皮料负荷设为负。 | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_prepare` | hide_preparation | 接收、石灰处理、酸洗及进厂供应 | foreground_records | 场址; 期间; 批次; 负责人; 整份湿皮料质量; 来源; 水分; 蛋白; 盐; 供应方负荷; 整份石灰浆质量及含量; 整份酸溶液质量及含量; 新水; 表读数; 运输载荷及千米; 失败运行; 在制品期初期末质量及结转负荷 | 负责人：生产与采购数据管理员。采集完整匹配期间未归一的称重单、分析、库存变动、表差和供应方记录。采集端不除以Q；将稀释及内部配制与采购分别计量。 | 千克; 千瓦时; 吨千米 | 每批及每次事件；期间结账 | 同一完整实际报告期间，含失败及零产出 | 所声明单厂及匹配路线产品批群 | 每 1 kg 参考流 | 校准; 签字批记录; 供应方分析证明; 路线与来源; 运输记录; 库存负荷核对 |
| `cp_extract` | hot_extraction | 提取组分与公用工程 | foreground_records | 场址; 期间; 批次; 负责人; 成对皮料交接; 每次提取湿胶液; 固形物与蛋白分析; 新水; 已积分蒸汽热量及质量; 凝结水; 电力; 失败与零产出运行; 返工; 期初期末在制品及结转负荷 | 负责人：提胶主管与公用工程计量管理员。保留每次提取及实际原始公用工程分子，包括失败运行；关联各批组分与期初期末在制品负荷，不执行A/Q。测量蒸汽状态，明确直接喷入或间接加热。 | 千克; 兆焦; 千瓦时 | 每批及每次事件；期间结账 | 同一完整实际报告期间，含失败及零产出 | 所声明单厂及匹配路线产品批群 | 每 1 kg 参考流 | 成对批次交接; 固形物分析; 蒸汽与凝结水及焓记录; 校准表计; 等级记录 |
| `cp_dry` | drying_finishing | 胶液整理、脱水及胶粒放行 | foreground_records | 场址; 期间; 批次; 负责人; 胶液湿质量与干物质; 胶粒整份质量与水分; 蛋白基准; 凝胶强度及黏度和方法; 电力; 热量; 蒸汽与凝结水质量; 冷却与清洗补水; 回用细粉; 失败运行; 期初期末在制品及结转负荷; 新增放行事件标识 | 负责人：整理主管与质量实验室。记录完整未归一批记录和表计，含干燥失败、捕集细粉与清洗。测定实际质量与残余水；每次内部放行关联包装库存。放行既非交付Q，也非额外期末库存输出。 | 千克; 兆焦; 千瓦时; 声明的分析单位 | 每批及每次事件；期间结账 | 同一完整实际报告期间，含失败及零产出 | 所声明单厂及匹配路线产品批群 | 每 1 kg 参考流 | 校准; 实验室方法; 唯一放行标识; 组分平衡; 回用及库存日志 |
| `cp_gate` | packing_delivery | 实际净交付、库存、退回及包装 | foreground_records | 场址; 期间; 交付批群; 负责人; 唯一交接标识; 验收产品净千克; 包装皮重与组成; 批次水分; 成品期初期末质量及结转负荷; 新增放行; 交接; 退回及原交接关联; 返工及失败运行; 纸袋与内衬投入及损失; 仓储时长与位置; 电力; 柴油; 装载记录 | 负责人：仓储发运管理员与质量验收负责人。采集原始事件量、未归一负荷及完整在制品和成品结转负荷；只由实际交接并在原退回批群修正形成正的唯一净验收交付Q。保留未交付库存及负荷；不假定生产放行等于Q。重新检查或验收不产生第二份产品。 | 千克; 千瓦时; 记录的仓储小时 | 每批及每次事件；期间结账 | 同一完整实际报告期间，含失败及零产出 | 所声明单厂及匹配路线产品批群 | 每 1 kg 参考流 | 承运方或客户签收; 校准净称重; 批次追踪; 包装单; 库存与负荷核对; 退回关联; 表计 |
| `cp_water` | drying_finishing | 物理水、物种、废水及残渣记录 | foreground_records | 场址; 期间; 批次; 负责人; 新水与载水及原料带水; 蒸汽与凝结水; 水解证据; 酸碱分析; 实际中和程度; 溶解离子及水合状态; 湿出口质量; 固形物与水分及蛋白; C/N/Ca/S; 气体及空气湿度; 已积分体积; 实测密度与状态; 处理去向; 销售或处置证据; 期初期末水及物种库存 | 负责人：环境实验室与工艺化学负责人，由drying_finishing管理，覆盖hide_preparation、hot_extraction及drying_finishing。独立保留未归一实测质量或体积、组成及实际反应证据。反应程度来自试剂与物种分析及经验证化学，不来自质量差额或COD。区分液体废水、残渣、凝结水及蒸气；证实任何销售及实际处理。保留完整库存水、物种及结转负荷。 | 千克; 立方米; 声明的分析单位 | 每批及每次事件；期间结账 | 同一完整实际报告期间，含失败及零产出 | 所声明单厂及匹配路线产品批群 | 每 1 kg 参考流 | 校准流量与称重; 独立支持的密度; 实验室物种分析; 验证机理与程度; 出口样品; 联单与实际销售证明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_raw_units` | all inventory rows | 原始记录先换算再汇总：速率乘实际时长得到积分量；已积分液体或气体体积不得再乘时间。按记录温度与组成的独立密度换算质量；不得假定native次级属性系数是密度。电力千瓦时与蒸汽兆焦分别保留。 | raw_measurement; duration_if_rate; density_if_volume; cp_prepare; cp_extract; cp_dry; cp_gate; cp_water | raw_period_exchange | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `calc_delivery_cohort` | all inventory rows | 逐个原始交换或负荷组分核对：期初在制品及成品结转负荷加完整实际期间新增负荷，减期末在制品及成品结转负荷和有证据归给其他产品或批群的负荷。在记录联产品分配之后，得到所声明交付批群的A_row。纳入其失败与零产出、退回、返工、仓储、包装及装载负荷；不得删除真实已发生损失。内部交接成对抵消一次，不删除外部负荷。分别保留原始物理账、库存账及负荷衔接；不得将库存质量从电量中相减。 | raw_period_exchange; opening_WIP_burdens; closing_WIP_burdens; opening_FG_burdens; closing_FG_burdens; other_cohort_burdens; cp_prepare; cp_extract; cp_dry; cp_gate; cp_water | A_row | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `calc_gate_once` | all inventory rows | 每个非参考交换按A_row / Q报告为每1千克参考流；Q是本产品、路线、状态和批群排除包装并按原交接修正退回后的正的唯一实际工厂门净验收交付千克。参考输出为1千克。原始换算与库存负荷核对后仅执行一次除法；卡片表达式与协议汇总说明描述同一报告操作，不是连续多次除法。Q=0无每千克结果；保留其负荷供明确归属或结转。 | A_row; Q; cp_gate | exchange_per_kg_delivered | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `calc_water_species` | all inventory rows | 对每项库存和物流，区分整份湿质量、实测水、干固形物与实测蛋白；干物质为湿质量乘一减实测水分，不等同蛋白质量。独立建立总质量与元素守恒。在实际石灰与硫酸步骤中，区分酸碱生成水、胶原水解耗水及物理蒸发。生成水由独立核实的实际中和程度量化；水解贡献由独立验证的反应或分析证据确定，不用闭合差额。记录溶解钙与硫酸根和实际水合状态，不假定硫酸根全部沉淀为石膏。核对皮料、溶液、新水与直接蒸汽带入水、反应生成或消耗水，以及胶、废水、残渣、蒸气、凝结水和期初期末库存带水。不得用一个平衡拟合两个未知量。 | raw_period_exchange; actual_reaction_extent; speciation_evidence; moisture_assays; opening_closing_stock; cp_water | independent_mass_element_water_ledgers | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 参考与原料身份 | 仅以完整限定牛工业路线及限制使用宽Hide Glue身份；native地理与CAS未指定，不推断。独立证明供应方路线和等级。 | 实际供应方、生产、实验室、仓储与交付记录；相关原始来源 |
| `quality_period` | 全部采集协议 | 在披露范围内采用同一完整实际报告期间与场址。保留正常运行、维护、清洗、失败和零产出作业；将任何排除核对到其实际接收批群。 | 实际供应方、生产、实验室、仓储与交付记录；相关原始来源 |
| `quality_representativeness` | 外部证据与企业数据包 | SelJel是特定厂商牛工业品实例，不是行业收率或通用水分系数；EPA描述历史美国工艺，1975报告标记draft。不转用数值收率、时长、投加量、排放或分配因子。仍要求实际企业数据、质量规格、公用工程配置、废水与供应方匹配。 | 实际供应方、生产、实验室、仓储与交付记录；相关原始来源 |
| `quality_completeness` | 清单扩展 | 实际存在的每种清洗剂、过滤耗材、防腐剂、托盘、制冷剂、燃烧物种及处理作业均分别识别；真实不存在须记录。这些场址数据要求不得用集合流或默默置零替代。 | 实际供应方、生产、实验室、仓储与交付记录；相关原始来源 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | 范围内前景 | 核实未鞣制牛皮来源、实际石灰与硫酸路线及颗粒工业品规格；拒绝真实的native等级、路线、介质或物质矛盾。 | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `validate_gate` | 范围内前景 | 要求由唯一净验收交付事件形成正Q，并关联批次及门记录。新增放行产量、内部颗粒交接和成品库存增加均非额外交付。退回及再次验收不制造第二份产量；修正原交付批群并携带其负荷。 | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `validate_inventory` | 范围内前景 | 保留全部匹配期间原始投入和负荷，包括失败及零产出运行、返工、退回、期初期末在制品和成品结转。一次归一前核对批群归属及库存交接。Q=0不得删除分子，也不得发布有限每千克清单。 | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `validate_balance` | 范围内前景 | 总物理质量及C/N/Ca/S平衡与水和物种账分别闭合。核对经分析的商业溶液、原料带水、蒸汽、蒸发、废水、湿渣和库存。COD/BOD为分析指标，不是明胶或未知平衡物种换算。不得从一个差额同时拟合反应水和另一未知出口。 | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `validate_evidence` | 范围内前景 | 要求实际供应方与背景数据兼容性、native身份限制、校准、分析、来源证据和完整双语字段。不支持的物种、销售状态或分配属于明确的数据包缺口，不得推测数值。 | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 作为下游制造的工业胶原黏合剂投入，要求供应方、路线、等级、状态、地理与时间兼容 |
| allowed_use | 证据及科学审查后用于限定牛干胶粒生产与实际工厂门净供应 |
| excluded_use | 不自动适用于其他动物、食用或医药明胶、蛋白水解物、酪蛋白酸盐、配方液体胶或回收医药明胶；不提供临床或培养用途操作指引 |
| required_metadata | 全部必需限定信息、native身份限制、来源与协议标识、原始期间及库存负荷衔接、实测产品质量和实际供应方或背景数据集 |
| required_quality_disclosure | 未测量场址或供应方字段、校准与分析质量、质量及物种平衡不确定性、残渣分类及任何经审查分配；身份兼容不是科学批准 |
| update_trigger | 原料物种或处理、酸、供应方、配方、干燥、公用工程边界、参考门、质量、废物处理、销售状态、分配或证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `seljel-technical-catalogue` | handbook | SelJel产品目录，Technical Gelatine，PDF第12页，印刷22-23页；https://seljel.com/katalog.pdf | 厂商原始资料支持牛皮路线、石灰处理、酸水洗、提胶、蒸发干燥及工业颗粒形态。报告的10-12%水分仅属该产品实例，不是换算系数或通用等级。目录未署日期（PDF元数据创建于2021年）；未建立本站收率、公用工程、酸身份或分配。 |
| `epa-hide-glue-1977` | official_guidance | 美国EPA，Potential Environmental Impact of Compounding and Fabricating Industries: A Preliminary Assessment，EPA-600/2-77-160，1977年8月，55-56页及图26；https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100PHTX.TXT | 历史原始工业报告支持皮胶清洗、热水提取、过滤、蒸发和干燥制造以及分开的水与固体出口。采用官方HTML/TXT版；不是当前工厂配方、性能因子或已取得的出版方PDF。排除骨、酪蛋白、鱼及其他黏合剂分支。 |
| `epa-animal-glue-1975` | literature | 美国EPA，Development Document for Effluent Limitations Guidelines and Standards of Performance，Miscellaneous Chemicals Industry，prepared by Roy F. Weston under contract 68-01-2932，1975年2月DRAFT，动物胶IV-102及IV-105至IV-107；https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=2000UTT8.TXT | 历史承包方草案（未经EPA审查且非正式EPA出版物）原始工业证据支持石灰处理皮料、稀硫酸去残灰、热水提胶及废水来源；皮渣或油脂回收只是可能出口，须实际销售证据。不作为法律意见、现行排放限值或可转移投加量、收率、废水负荷或分配。与肉屑、铬皮及骨路线保持区分。 |
