---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.potassium-sulphate-sulphate-of-potash
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# Mannheim 法散装粉状硫酸钾制造

## 1. 范围与适用性

本 PCR 适用于精制固体氯化钾与浓硫酸经 Mannheim 反应制造的散装、未包覆粉状硫酸钾肥料，采用化石管输天然气向独立炉体燃烧室供热，并用水吸收回收盐酸水溶液。代表产品为厂门交付的固体 K2SO4 等级，不是 NPK 混合肥或仅计钾养分的流。`mannheim-patent` 支持两步反应及燃气装置；`tess-sop-grade` 支持真实销售的细粉 SOP 状态。两者均不提供通用配方、含量、密度、收率、操作温度、排放因子或能耗默认值。

排除从矿石或卤水提取天然硫酸盐、Hargreaves SO2 转化、其他硫酸盐参与的湿法复分解、钾镁复盐、多养分混配肥、液体配方肥、下游溶解或灌溉施肥、包覆产品及独立造粒。此处制造包含冷却及满足声明规格所需的实际粉体整理；是否研磨、筛分及其电耗和粉尘均须采集，不从分类名称推定。燃油、生物源燃气、投加化学药剂洗涤及外供蒸汽变体须补充路线证据并逐项核验交换后，才可把本方法用于扩展范围。本方法不声称覆盖全部 SOP 制造路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.potassium-sulphate-sulphate-of-potash |
| classification_refs | CPC 3.0 34632 硫酸钾（硫酸钾肥）；本制造子集建议 narrower 关系（`un-cpc-sop`） |
| covered_products | 指定燃气 Mannheim 路线的未包覆散装固体粉状 K2SO4 肥料；声明实际残留氯化物、酸及水分 |
| excluded_products | 天然硫酸盐矿石或卤水回收；湿法复分解；复盐；钾养分计量流；混合肥；独立造粒或包覆；水溶肥及田间使用 |
| representative_product | 验收的散装粉状 SOP；实际 SKU 和含量待采集，不复制生产者组成作为默认值 |
| production_route | KCl + H2SO4 → KHSO4 + HCl；KHSO4 + KCl → K2SO4 + HCl；独立天然气燃烧、冷却和粉体整理、盐酸水溶液回收 |
| market_state | 厂门按交付状态销售的干固体粉体，包含实测残余水分和杂质；不含包装；盐酸水溶液共产品单独验收 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 厂门交付的散装粉状硫酸钾 |
| How much | 交付状态的 1 千克验收净产品 |
| How well | 实际 SKU、K2SO4 与养分含量、水分、氯化物、残余酸度、不溶物及粒径分布，不以通用纯度目标替代 |
| How long or cycle | 一个声明的代表性生产周期；不假定肥料使用寿命 |
| reference_flow_link | `sop` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 硫酸钾（钾硫酸盐） `eb8bf5f1-2c58-4513-9fe6-3e7d092564f8` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际 SKU；固体未包覆粉体；K2SO4 含量及测定口径；K 或 K2O 当量声明；实测水分；氯化物；残余游离酸；不溶物；粒径分布；Mannheim 燃气路线；场址和周期；散装厂门；排除包装的净产品质量；酸回收及共产品验收和浓度；公用工程供方数量基准；分配与处理去向 |

具体数据包必须声明相同限定信息。身份核验不证明实际批次、供方数据集、参考量基准兼容或测量完整。产品质量不等于干纯 K2SO4 质量，也不等于 K/K2O 质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass | kg | P 为同一生产周期内使用校准计量取得的 SOP 验收净输出质量，排除包装及不合格产品；记录库存和转移，确保输出与输入覆盖同一生产。使用 cp_output 将每个交换除以 P，归一化为每 1 kg 参考流。 |
| `solution_basis` | sulfuric; hcl_product; acidic_purge | Mass | kg | 分别保留整份溶液质量、含量质量分数与载水。活性物质量等于实测溶液质量乘以实测质量分数；不设酸浓度默认值。酸产品实物质量不乘分配份额。 |
| `solid_input_volume` | kcl | Volume | m3 | KCl UUID 的参考属性为 Volume 而非 Mass。要求配对实测质量与体积、明确堆积或固体体积约定、装填和水分及供方背景参考量定义。仅使用实测兼容密度换算称重质量；约定未知则投入数量与供方连接不完整。 |
| `gas_volume` | gas | Volume | m3 | 按记录的绝对压力、温度、水分、组成及压缩因子，将校准燃气表读数换算到供方参考状态。次级质量系数不是密度；参考状态未知则供方连接不完整。能源核对保留实测热值及 NCV/GCV 口径。 |
| `electric_energy` | electricity | Net calorific value | MJ | 选定电力属性为 Net calorific value。1 kWh = 3.6 MJ；保留实际 1–35 kV 消费组合接口及一致的输送和损耗边界。 |
| `species_mass` | hcl_air; h2so4_air; no_air; no2_air; chloride_water; sulfate_water | Mass | kg | 记录物种质量及原始实验室口径。按 NO2 计的 NOx、元素 N/S、酸当量及离子质量须明确化学换算和物种拆分；换算未知属于数据缺口而非零。 |
| `water_basis` | process_water; cooling_water; water_vapor_air; water_liquid | 按选定的 Mass 或 Volume | 按选定的 kg 或 m3 | 供水与水蒸气使用 Mass；液态返回使用 Volume。仅凭实测密度和温度将用水表体积换算为质量；区分购买的产品水、天然取水、蒸发及环境返回。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 收到精制固体 KCl 与工业浓硫酸溶液；燃气和电力位于核实的供应接口；记录供水条件 |
| starting_condition_role | 前景原料与公用工程接收点，不是这些投入的开采或制造 |
| product_classification_scope | CPC 3.0 34632 中的制造 SOP 子集；分类不证明路线或身份 |
| recursive_input_rule | 聚合厂内的 SOP、粉尘回用属于实测内部循环。外购 SOP 不算新制造输出；须隔离并披露经核验的独立上游来源，否则本反应数据集不适用。 |
| upstream_dataset_requirement | 每个外部投入须有兼容的供方生产及进厂运输，包括实际浓度、处理、电压、体积状态及水源；未解决的供方连接须披露，并禁止声称完整的从摇篮到厂门结果 |
| disclosure | 单一场址与周期、实际阶段、循环和库存流、排放控制及水接口；实物平衡与分配后负荷分别保留；不编造采集数量 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_reaction` | mannheim | 纳入接收储存、备料投料、两步化学反应、独立燃烧、实际冷却和粉体整理、HCl 捕集吸收、仅用水的气体处理、散装储存及全部相关公用工程、启停和维护损失。通用 BAT 与专利设计用于边界证据，不作为操作默认值。 | `mannheim-patent`; `lvic-aaf`; `cww-bref` |
| `boundary_internal` | mannheim | 反应气体和吸收、粉体整理及内部冷却聚合为一个前景单元，保留阶段独立计量。内部交接两端同量，粉尘、酸和水回用须有日志；清单仅记录净跨界交换。避免把参考 UUID 同时赋给多个中间产品输出。 | `mannheim-patent`; `ham-recovery`; `cww-bref` |
| `boundary_waste_water` | mannheim | 区分验收盐酸水溶液、内部回收液、外送酸性废物及实际环境排放。废物处理连接只计一次。直接排水须采集受纳介质、物种负荷、温度和流量；外部处理不等于当即排入淡水。历史密闭冷却器案例不证明其他工厂没有排污液。 | `ham-recovery`; `cww-bref` |
| `boundary_complete` | mannheim | 按原件和场址表征维护废气、废水清单；每个新增确认药剂、排放物种、包装组件或废物均单独建立并核验原子交换。所列条件行不规定正排放，也不证明场址已全面覆盖。资本设备、下游运输、使用和终端处置等排除及物质截断须披露并有研究专用相关性判断；不能以固定截断百分比省略危险或重要流。 | `cww-bref`; `ilcd-allocation` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `mannheim` | Mannheim 转化、散装粉体整理及盐酸水溶液回收聚合单元 | required | 指定燃气路线与厂门产品 | 前景生产，保留分阶段实物记录 | 1 kg 验收 SOP 参考流；盐酸溶液输出另行实测 |

### 过程：Mannheim 聚合生产（`mannheim`）

实物阶段图为备料 → KHSO4 生成 → 供热转化为 K2SO4 → 实际冷却和粉体整理 → 验收散装 SOP。反应 HCl → 冷却和水吸收 → 验收盐酸水溶液；残余气体 → 排放控制 → 实际空气排放。独立天然气燃烧室另有烟气出口。冷却回路、内部回用及排污保留明确实测端点。分配后环境负荷账是独立计算，不替代此物料图。

#### 输入

##### 产品流

###### 固体氯化钾原料（`kcl`）

记录进入炉前备料系统的精制固体氯化钾，不以矿石或钾养分质量替代。保留称重质量、纯度、水分及配对实测体积。选定身份的参考属性为 Volume；连接交换数量前必须核实供方的堆积或晶体体积定义及装填条件。不以数据库次级属性推算密度。

- 选定流：氯化钾 `c0f36a80-f6a0-4926-9a92-9c80f5fcb662`
- 流属性/单位：Volume / m3
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed`
- 来源：`mannheim-patent`

###### 硫酸溶液原料（`sulfuric`）

仅在实测浓度符合选定的 93–98% 等级时记录交付的工业硫酸溶液。整份溶液质量和活性 H2SO4 质量分别采集；使用实测含量而非名义纯度。来源CPC34231完整标题涵盖硫酸，不构成硝酸身份。其解释文字误称通过氧化SO3制造硫酸，不从该句推定制造机理或数量。实际供方等级和数量基准兼容仍须分别核对。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed`
- 来源：`mannheim-patent`

###### 炉体供热的管输天然气（`gas`）

计量独立燃烧室消耗的化石管输天然气。保留实况与供方参考温度、绝对压力、水分、组成及压缩因子。Volume 参考属性不提供密度或标准状态约定；不得默认换算 m3 至 kg 或采用默认热值。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`mannheim-patent`; `epa-gas`

###### 外购中压电力（`electricity`）

仅在实际供电接口为 1–35 kV 时记录中国（CN）用户侧电网平均电力。原生 locationOfSupply 为 CN；其他地理须另行核实相容流及供方。分别计量燃料输送、炉体驱动、风机、冷却、盐酸回收和粉体整理，再汇总并避免重复计算变压损耗。Net calorific value 为数据库能源属性；将实测 kWh 换算为 MJ，不把电力解释为可燃物。其他电压必须核验替代身份。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`lvic-aaf`; `mannheim-patent`

###### 盐酸吸收与仅用水洗涤的用水（`process_water`）

记录进入盐酸溶液或用于仅用水的气体吸收、清洗的供水。分别计量新水输入、回收水及库存变化；单元内部循环液不作为新的外购输入。声明处理方式、溶解盐及供方基准。

- 选定流：工艺用水 `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ham-recovery`; `cww-bref`

###### 冷却水供应或补充（`cooling_water`）

适用于水冷设备。记录跨越前景边界的冷却水（含补充水），不累计内部重复循环量。按冷却设计核对进回水温度、补水、排污、蒸发和泄漏。干式冷却器仅在现场证据表明确有用水时记录此输入。

- 选定流：冷却水 `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ham-recovery`; `lvic-aaf`

##### 废物流

本限定路线没有声明此方向和类型的交换；实际发现时须逐项补充。

##### 基本流

本限定路线没有声明此方向和类型的交换；实际发现时须逐项补充。

#### 输出

##### 产品流

###### 验收的散装粉状硫酸钾（`sop`）

唯一参考产品输出。记录 1 千克交付状态的验收净产品，排除容器和不合格库存。采集水分、K2SO4 含量、K/K2O 报告口径、氯化物、残余酸度、不溶物及粒径分布，不假定其为零。冷却、研磨、筛分与储存之间的粉体交接属于此聚合单元内部流。

- 选定流：硫酸钾（钾硫酸盐） `eb8bf5f1-2c58-4513-9fe6-3e7d092564f8`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output`
- 来源：`tess-sop-grade`; `mannheim-patent`

###### 回收的盐酸水溶液共产品（`hcl_product`）

记录跨越厂界的验收溶液，采集实际 HCl 质量分数及客户验收或有据的自用功能。产品 UUID 表示水溶液，不是纯气态 HCl。载水保留在溶液质量中；氯平衡另行跟踪 HCl 当量。不合格酸液不作为可售输出，必须单独分类并计入处理。

- 选定流：盐酸 `a118a682-1600-4855-b959-c78777b75ee8`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output`
- 来源：`mannheim-patent`; `ham-recovery`

##### 废物流

###### 外送处理的酸性氯化物硫酸盐排污液（`acidic_purge`）

适用于外送处理的受污染吸收、冷却或清洗排污液。实测湿溶液质量、pH、氯离子、硫酸根、酸度及悬浮盐，保留接收方及处理验收。组成和路线与一个真实废物流匹配前保持 UUID 为空。外送属于技术系统废物转移，不是直接排入水体。内部酸回收不计废物外送。

- 选定流：酸性氯化物硫酸盐排污液
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ham-recovery`; `cww-bref`

###### 外送处置的收集硫酸钾粉尘（`sop_dust`）

适用于无法回到合格生产、并外送的收集无机盐粉尘。采集称重干固体、水分、残留 KCl/KHSO4/H2SO4 及接收条件。UUID 保持为空；饲料级研磨粉尘不适用。内部回用保留在阶段实物账中，不计入此废物外送行。

- 选定流：收集的无机硫酸钾废粉尘
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`cww-bref`; `tess-sop-grade`

##### 基本流

###### 未被捕集的氯化氢（`hcl_air`）

计量吸收排口、酸储存及炉体泄漏实际进入室外空气的残余 HCl；与回收盐酸产品及溶解氯离子区分。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`mannheim-patent`; `ham-recovery`; `cww-bref`

###### 硫酸气溶胶（`h2so4_air`）

适用于投酸、酸输送或排口有实测 H2SO4 气溶胶外排。按 H2SO4 质量记录，不按 SO2/SO3 当量或酸雾废产品记录。将物种分析与粒径总量对应，避免重复计算同一气溶胶质量。

- 选定流：硫酸 `d1e249b9-59b4-45c4-b1cb-ad89a2dd167b`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`cww-bref`

###### 化石源二氧化碳（`co2_fossil`）

采用实测化石燃料碳及核对后的碳平衡，或兼容的烟气测量，包含启停。KCl/H2SO4 反应不含碳，不能将全部 CO2 解释为硫酸盐反应生成。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbon`
- 来源：`epa-gas`; `lvic-aaf`

###### 化石源甲烷逸散（`ch4_fossil`）

计量厂界内未燃甲烷及燃气系统逸散，不复制上游供方泄漏。排除延迟排放修正流；若燃料范围改变，生物源甲烷必须另列。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas`; `cww-bref`

###### 燃烧产生的氧化亚氮（`n2o_air`）

N2O 与 NO、NO2 分别定量。锅炉排放因子不能自动作为 Mannheim 炉排放数量；保留现场测量或有据的炉型专用方法。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas`; `mannheim-patent`

###### 化石源一氧化碳（`co_fossil`）

计量化石燃气燃烧外排的 CO 质量，包含异常工况覆盖。采用物种质量；未经明确换算不采用碳当量。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas`; `cww-bref`

###### 一氧化氮（`no_air`）

仅按实测或有据的一氧化氮物种分配记录 kg NO。未经可靠的物种拆分及摩尔换算，不将按 NO2 计的 NOx 汇总报告直接填入本行。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`mannheim-patent`; `cww-bref`

###### 二氧化氮（`no2_air`）

NO2 与 NO 分别按物种质量记录，排除 N2O。NOx 汇总量作为监测质量核对量，不与分物种交换重复累计。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`mannheim-patent`; `cww-bref`

###### 二氧化硫（`so2_air`）

适用于燃烧或其他确认排口中的 SO2。采集实际燃料硫、硫酸盐或酸的转化及实测排放；硫酸投料质量本身不等于 SO2 排放。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas`; `cww-bref`

###### PM2.5 粒径段颗粒物（`pm25_air`）

计量最小粒径段实际外排的未分物种颗粒质量。实物账保留该粒径段总量；仅凭兼容的实测粒径和物种证据划出已单列的 H2SO4 气溶胶份额。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`cww-bref`; `epa-gas`

###### 大于 PM2.5 且不大于 PM10 的颗粒物（`pm25_10_air`）

采用兼容的同股排气粒径测量确定互不重叠的 2.5–10 微米剩余份额；不将累积 PM10 总量与 PM2.5 相加。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`cww-bref`

###### 大于 PM10 的颗粒物（`pmover10_air`）

记录粉体操作及相关燃烧、排口经捕集后外排的独立粗颗粒份额。收集粉尘、内部回用和外排粗颗粒为不同去向。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`cww-bref`; `tess-sop-grade`

###### 燃气燃烧产生的苯（`benzene_air`）

适用于检出苯或场址燃料、燃烧证据支持存在苯的情形。物种质量只计一次；VOC 总量测量属于核对证据，不作为覆盖同一质量的新交换。

- 选定流：苯 `08a91e70-3ddc-11dd-9202-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas`; `cww-bref`

###### 燃气燃烧产生的甲醛（`formaldehyde_air`）

适用于检出甲醛或实际燃烧证据支持存在甲醛的情形。其他识别的有机物须分别建立原子行并核验身份；这两个 VOC 示例不代表物种清单已经闭合。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas`; `cww-bref`

###### 返回室外空气的水蒸气（`water_vapor_air`）

在水账中分别计量蒸发、携带水及燃烧生成的水蒸气。归属净返回量时排除环境进气原有水分。保留水的来源，不将燃料生成的燃烧水算作淡水耗用。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`lvic-aaf`; `cww-bref`

###### 返回淡水的液态水（`water_liquid`）

适用于直接返回经确认的淡水受纳水体的液态水。按 m3 记录处理后排水或清洁冷却排水；外送废水中的水不属于本行直接排放。温度及溶解组分另行表征。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：Volume / m3
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_discharge`
- 来源：`cww-bref`

###### 进入淡水的氯离子（`chloride_water`）

适用于经确认直接排入淡水。将实测溶解氯离子浓度与排水体积积分，不采用盐酸溶液、NaCl 质量或总溶解固体替代。排除外送处理转移量。

- 选定流：氯化物 `08a91e70-3ddc-11dd-9508-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_discharge`
- 来源：`cww-bref`

###### 进入淡水的硫酸根离子（`sulfate_water`）

适用于经确认直接排入淡水。按物种分析记录硫酸根离子质量；元素 S、硫酸和中性盐汇总为不同数量。不重复计入已明确分物种的盐及其离子。

- 选定流：硫酸盐 `fe0acd60-3ddc-11dd-ac59-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按本行采集协议记录每 1 kg 参考流的真实跨界数量；条件性存在不设默认正量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_discharge`
- 来源：`cww-bref`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_physical_ledger` | mannheim | 保留未分配的实测 KCl、酸、水和碳平衡、全部 SOP 输出 P 及全部验收盐酸溶液输出 H。产品和共产品实物质量、内部链接及实测捕集效率不乘环境负荷分配份额。残余废物须有明确接收与处理；为处置而中和酸液不会使其成为可售共产品。 | `mannheim-patent`; `ham-recovery`; `ilcd-allocation` |
| `allocation_hierarchy` | mannheim | 声明归因研究目标、功能及多功能性处理。首先细分或归属独立计量操作：SOP 整理归 SOP，酸专用浓缩和储存归酸，识别共享炉体及捕集功能。仅在所选属性确实决定相关负荷的证据支持下，对剩余共享负荷采用物理因果关系；化学计量或湿酸质量本身不是该证据。不能证明时，对验收且有正价值的共产品采用经济后备分配并做敏感性分析。系统扩展须单独证明研究目标、实际可替代酸等级及供方，并披露情景；同一共产品不得同时使用替代抵扣和分配。 | `ilcd-allocation` |
| `allocation_economic` | mannheim | 对剩余不可分的共享负荷 B，采用 a_S = V_S/(V_S+V_H)，V_S = P 乘 p_S，V_H = H 乘 p_H，a_H = 1-a_S。P、H 为交付状态的验收实物数量；净厂门价格 p_S、p_H 按相同市场、时间和币种的准确等级每 kg 计，按实际销售加权。酸载水与浓度须匹配报价等级，人为稀释不得改变价值。保留两份分配账，核对总和等于 B 并披露价格敏感性。价格未知、总价值为零或负数、处置及自用情形须明确方法审查，不能默认分配比例或把酸负荷设为零。 | `ilcd-allocation`; `ham-recovery` |

## 8. 前景数据采集、计算与质量规则

以下协议是未来场址数据生产要求，不声称已有当前工厂记录或定量默认值。每行采用同一周期及分母 P。实物数量与分配数量分别标记、分别记账。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | mannheim | SOP 与验收盐酸溶液 | 称重及实验室记录 | 验收 SOP 净质量 P；退回/再次验收；期初期末成品及在制品库存；生产历史和库存结转负荷；批次和 SKU；水分；含量口径；氯化物酸度不溶物；盐酸溶液 H 及质量分数；接收验收 | 校准秤或经核对的质量流量表、批次取样及实验室分析；不合格库存和内部交接分别跟踪；报告步骤：将周期跨界量除以 P kg 验收 SOP 输出；报告每 1 kg 参考流；分配前 H 保持完整溶液数量 | kg；质量分数 | 每批及每次转移 | 完整代表周期，保留启停及不合格生产时段 | 同一场址和产品路线 | 每 1 kg 参考流 | 秤校准；测定方法与结果；库存核对；接收验收 |
| `cp_feed` | mannheim | KCl 和硫酸溶液 | 接收、投料及实验室记录 | 质量；实测体积；批次；供方；含量；水分；酸浓度；KCl 堆积或固体体积约定及装填；原料和回用库存 | 校准称重或投料、配对体积测量、代表性组成取样；将实际耗用接收和库存与阶段转移核对；报告步骤：按库存核对汇总外部原料耗用，仅按实测兼容属性基准换算；除以 P；每 1 kg 参考流 | kg；m3；质量分数 | 每次接收或批次；有条件时连续投料日志 | 与 cp_output 同周期 | 同一场址的原料与投料界面 | 每 1 kg 参考流 | 校准；密度和装填方法；质量检验单；供方参考基准确认 |
| `cp_utilities` | mannheim | 燃气与电力 | 分表及供方记录 | 实际读数；燃气 T/P、湿干、组成、Z；供方参考状态；NCV/GCV；电压；损耗边界；阶段负荷；小时和启停 | 校准阶段分表、供方账单及实际燃气组成和热值测量；与厂级总表及相关操作记录核对；报告步骤：相关供应量只汇总一次；换算为核实供方基准；除以 P；每 1 kg 参考流 | m3；kWh；MJ | 连续或班次读数及账单核对 | 含启停与控制设施的完整周期 | 炉体、辅助设备、酸回收及粉体阶段 | 每 1 kg 参考流 | 表计校准；供方规格；核对和归属证据 |
| `cp_water` | mannheim | 供水、冷却及空气返回 | 水表及水热平衡记录 | 输入补水；单列循环量；返回；排污；蒸发；泄漏；酸中载水；进气水分；温度；密度；水来源 | 校准进出水表与经验证的蒸发或热水平衡；区分吸收、冷却及燃烧生成的水；报告步骤：按身份和来源汇总净外部供应返回，排除内部循环；除以 P；每 1 kg 参考流 | kg；m3；温度 | 班次或连续及每次排污 | 完整匹配周期 | 吸收器、冷却、清洗及核实的供应排水接口 | 每 1 kg 参考流 | 校准；密度；平衡残差和不确定性；冷却设计 |
| `cp_air` | mannheim | 每个排放物种和粒径段 | 源测试、监测及损失记录 | 排口来源；实际气量；浓度；物种和 CAS；T/P；湿干；氧基准；时间负荷；HCl/H2SO4；NO/NO2 拆分；N2O；累积 PM 粒径及化学划分；VOC 分物种；逸散 | 兼容源测试或连续监测与有据的代表性周期；按同一参考状态积分浓度和气量，连接前先拆分汇总物种报告；报告步骤：控制后各兼容污染物负荷只累计一次；分离互不重叠粒径和化学质量；除以 P；每 1 kg 参考流 | kg 物种；mg/m3；m3；时间 | 已装设备连续监测；否则代表测试覆盖负荷、控制和异常时段 | 同周期，含逸散和启停范围 | 反应、吸收、燃烧及粉体的每个出口；实际室外释放 | 每 1 kg 参考流 | 原始报告；方法校准；时间代表性；检出限；换算证据 |
| `cp_carbon` | mannheim | 化石 CO2 和碳闭合 | 燃气组成及碳账 | 燃气碳；CO2、CO、CH4 及分物种 VOC 排放碳；库存；未燃碳；化石和生物来源 | 校准燃气交付量及实际组成；独立核对实测燃烧排放与其他含碳投入；报告步骤：负荷分配前核对碳，必要时推导兼容 CO2 质量并除以 P；每 1 kg 参考流 | kg C；kg 物种；m3 | 周期及操作时段核对 | 与 cp_output 同周期 | 实际化石燃气边界及有据的扩展 | 每 1 kg 参考流 | 燃气分析；测量不确定性；闭合残差；不默认氧化份额 |
| `cp_waste` | mannheim | 酸性排污液与收集 SOP 粉尘 | 称重、分析及转移记录 | 实际量；湿干；组成；pH；氯离子硫酸根酸度；污染物；内部返回；接收方；处理路线；废物验收 | 每次外送称重和取样，液体计量分析；回收物料与库存及处置凭据核对；报告步骤：实际外送废物只累计一次，排除内部回收；除以 P；每 1 kg 参考流 | kg；质量分数 | 每次转移 | 含维护及拒收的完整周期 | 实际厂内废物出口及明确处理方 | 每 1 kg 参考流 | 地磅或处理方凭据；组成；供方处理范围；未决身份披露 |
| `cp_discharge` | mannheim | 返回淡水的水、氯离子和硫酸根 | 排口计量及实验室记录 | 排口及受纳介质；液体体积；温度；密度；氯离子硫酸根浓度；其他实际组分；处理范围；排水时段 | 计量实际直接返回淡水的流量，并取得兼容流量加权样品；排除外送废物转移；报告步骤：积分排口各实测物种及水体积；除以 P；每 1 kg 参考流 | m3；mg/L；kg 物种 | 样品与流量匹配；有条件时连续流量；每次异常排水 | 同一代表周期 | 仅已核实的环境排口 | 每 1 kg 参考流 | 受纳介质证据；原始分析；校准；处理边界及完整性 |
| `cp_allocation` | mannheim | 共产品负荷归属 | 阶段分表、功能及销售记录 | 验收等级；P；H；分等级价格；时段币种；正价值凭据；功能；独立阶段负荷；因果证据 | 将验收产品和阶段表与实际匹配销售或自用功能核对；审查分配顺序及有据的替代方法；报告步骤：保留每 1 kg 参考流实物账；仅按声明顺序、准确等级价值和敏感性分配环境负荷 | kg；货币/kg；实际负荷单位 | 每次销售或批次及周期汇总 | 同实物周期，声明市场价格覆盖 | 同厂门准确等级和实际共产品接收方 | 每 1 kg 参考流 | 价格凭据；功能验收；阶段证据；分配负荷守恒 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalization` | 所有清单行 | a_j = X_j/P；先汇总同一路线、供货等级及完整周期的各交换原始跨界量 X_j，包括可归属的失败/零产出区间、启停、清洗及返工，再仅相除一次。P须为cp_output提供的正值SOP验收净千克数，经退回/再次验收、成品库存及在制品核对后仅确认一次。保留生产历史及库存/在制品结转负荷，使归属覆盖同一验收产出；负荷调整不得删除原始实物交换或缩放盐酸输出。不得平均成功区间单位比值或再次除已归一化每千克值；协议报告步骤描述该最终基准。P为零时保留总量并披露无单位结果，不得相除或删除负荷。保留各核实分子属性/单位；sop输出为1千克。 | cp_output; 本行链接协议; 实际数量 | 保留原分子单位的每 1 kg 参考流清单 | `lvic-aaf`; `cww-bref` |
| `substance_accounts` | sulfuric; hcl_product; acidic_purge; kcl; sop | m_substance = m_solution_or_product 乘以相同湿干口径的实测质量分数；载水 m_water 另行实测或依据完整组成核对推导。保留 K、Cl、S 平衡：2KCl + H2SO4 → K2SO4 + 2HCl 是反应账恒等式，不是实测耗用或收率。跟踪杂质、未转化 KCl/KHSO4、游离酸、库存、粉尘与排污；要求实际路线兼容的元素分析。 | cp_feed; cp_output; cp_waste; cp_water | 未分配实物及元素账和残差不确定性 | `mannheim-patent`; `cww-bref` |
| `meter_conversion` | gas; kcl; electricity; process_water; cooling_water | 质量体积换算使用兼容实测密度；燃气 V_ref = V_meter 乘 (p_meter/p_ref) 乘 (T_ref/T_meter) 乘 (Z_ref/Z_meter)，p 为绝对压力，T 为开尔文温度，另行核对水分与组成。电力 MJ = 3.6 乘实测 kWh。供方参考约定未知则不能换算。 | cp_feed; cp_utilities; cp_water; 供方定义 | 与供方兼容的交换量及独立能源核对 | `lvic-aaf` |
| `air_loads` | hcl_air; h2so4_air; ch4_fossil; n2o_air; co_fossil; no_air; no2_air; so2_air; pm25_air; pm25_10_air; pmover10_air; benzene_air; formaldehyde_air | 对 mg/m3 与匹配 m3，L_i = sum(C_i,k 乘 V_k 乘 10^-6)。积分前一致校正气体 T/P、湿干与氧参考。PM2.5–10 = 兼容累积 PM10 减 PM2.5；>PM10 = 兼容总量减 PM10。仅在实测匹配粒径段内划出已识别化学气溶胶；保留实物总量及划分不确定性。物种或粒径拆分未知则保持未决。 | cp_air | 每个不重复物种或粒径段的 kg | `cww-bref`; `epa-gas` |
| `carbon_account` | co2_fossil | 经核对的外排 CO2 质量 = CO2 中核算的化石碳质量乘 CO2 分子量/C 原子量；采用燃料碳平衡时扣除实测 CO/CH4/其他物种和库存中的碳，或只计一次兼容直接 CO2 测量。不采用锅炉氧化默认值。 | cp_carbon; cp_air | 化石 CO2 和实物碳闭合 | `epa-gas`; `lvic-aaf` |
| `water_loads` | chloride_water; sulfate_water; water_liquid; water_vapor_air | 溶解负荷 kg = sum(浓度 mg/L 乘匹配排水 m3 乘 10^-3)。液态水为实测返回体积；水蒸气为实际归属净返回量，保留燃烧水来源。外送废水及其处理排放在接收系统中只计一次。 | cp_discharge; cp_water; cp_waste | 明确受纳方的水返回量及溶解离子负荷 | `cww-bref`; `ham-recovery` |
| `burden_allocation` | 所有清单行 | 保持实物 X_j 及产品输出不变。阶段细分后的相关负荷采用有据的物理份额或 allocation_economic 的经济份额；SOP 负荷 = SOP 专用负荷 + a_S 乘共享负荷；酸账得到其专用负荷 + a_H 乘共享负荷。两账之和须与总负荷核对，SOP 账按 P 归一化。 | cp_allocation; cp_output; 阶段负荷 | 与实物交换账独立的分配后环境负荷账 | `ilcd-allocation` |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `dq_scope` | 所有清单行 | 核实实际路线、物态、分析等级及接收方；条件性不存在须有场址证据。每个新增实际物种或材料单独记录。 | 厂区图；SKU 和分析；流清单及原件适用性 |
| `dq_basis` | 所有清单行 | P、采集时段及聚合须匹配。保留真实供方数量约定，区分核验身份与兼容完整供方数据集。 | 表计和秤校准；库存；原始供方及参考单位定义 |
| `dq_balances` | mannheim | 未分配 K/Cl/S、水及化石碳账须含明确残差、测量不确定性及回收库存项；缺口须调查，不用编造收率补齐。 | cp_feed；cp_output；cp_water；cp_waste；cp_carbon |
| `dq_emissions` | 全部环境输出 | 论证真实介质、物种、粒径及监测覆盖；NOx、VOC、PM 汇总证据不自动识别准确原子数量。低于检出限须保留限值和方法，不记无解释的零。 | cp_air；cp_discharge；cww-bref |
| `dq_sources` | 全部规则 | 保留原件限定。历史工厂案例、专利操作参数及商业等级性质不作为通用因子或调查范围。 | 来源版本页码和适用范围；真实场址采集协议 |
| `dq_links` | kcl; gas; sulfuric; acidic_purge; sop_dust | 声称完整连接数据包前，解决 KCl 体积约定、天然气参考状态、酸等级及供方浓度、来源解释文字瑕疵及兼容废物身份和处理。 | 供方澄清；真实测量；废物验收 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | sop | 要求唯一最终参考输出为 1 千克交付状态验收 SOP，两稿身份和分母相同；排除包装、不合格库存及内部交接。要求全部类别限定信息。 | `tess-sop-grade`; `mannheim-patent` |
| `validate_balances` | mannheim | 分配前核验未分配实测物料、水和碳平衡及内部同量链接；结合不确定性调查残差。不将理想反应收率、纯产品、通用耗用或单厂排放表现作为默认要求。 | `mannheim-patent`; `lvic-aaf`; `cww-bref` |
| `validate_atomic` | 所有清单行 | 每行仅一个实物交换，采用 UUID 时须准确物种或材料、介质及核验属性单位链；不得替代饲料级粉尘、有机浓盐废水或修正流，不得重复重叠粒径或离子和已分物种总量。废物空 UUID 为明确未决身份缺口。 | `cww-bref` |
| `validate_quantity_links` | 所有清单行 | 实物量统一按 P 归一化；KCl 体积、天然气状态、电力电压与损耗、酸浓度及水定义须兼容供方基准。名称命中或没有实测兼容及供方基准的质量体积系数不能完成连接。 | `lvic-aaf`; `cww-bref` |
| `validate_allocation` | mannheim | 实物输出与分配负荷分别保留；论证顺序、准确等级价值或因果关系、守恒及敏感性。不随意按质量分配、不编造价格、不用负价值默认法、不重复替代抵扣。 | `ilcd-allocation` |
| `validate_completeness` | mannheim | 披露已测事项、缺失身份、供方与物种拆分、纳入排除范围、条件性不存在及未决不确定性。全部相关交换、去向及测量解决前，完整数据集声明不通过；方法编写不认证已采集工业数据集。 | `cww-bref`; `ilcd-allocation` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 指定 Mannheim 散装粉体的场址归因前景过程数据集，分别保留实物账与共产品负荷账 |
| downstream_use | 将兼容 SOP 制造与上游供应及声明的下游肥料使用连接；使用真实质量和含量，不以仅计养分的流替代 |
| allowed_use | 选定燃气固体粉体路线及准确声明的场址、等级和周期，透明披露供方和身份完整性 |
| excluded_use | 天然硫酸盐回收、湿法复分解、复盐、混合肥、包覆、造粒、液体配方、通用肥效或未补方法的全路线 SOP 比较 |
| required_metadata | 全部参考限定；完整阶段图；供方数量基准；验收盐酸等级、功能和数量；共产品分配；排放及受纳介质；废物路线；时间地域；来源校准 |
| required_quality_disclosure | 真实测量和估计覆盖；未决身份供方；含量、库存和平衡不确定性；价格和物种拆分敏感性；环境及技术截断；方法审阅状态与数据集质量分别披露 |
| update_trigger | 路线燃料、等级、包覆造粒、供方数量约定、天然气状态、公用工程电压、酸回收用途、控制废物去向或监测改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-sop` | official_guidance | 联合国统计司 CPC 3.0，34632，[官方原件](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/34632) | 仅官方产品名称及层级，不批准制造路线或 PCR 身份 |
| `mannheim-patent` | literature | Tessenderlo Group NV，EP3680217A1，2020-07-15，第 1–5 页，0002、0006–0013、0030、0045、0053–0061 段；[专利原件](https://patentimages.storage.googleapis.com/1e/0d/d5/f1696137d404f9/EP3680217A1.pdf) | 两步反应、独立燃烧、HCl 共产品、天然气实例及 NO/NO2 区分；专利表现或配方值不作默认 |
| `tess-sop-grade` | literature | Tessenderlo Kerley，SoluPotasse 产品单，©2025，第 1–2 页，[生产者原件](https://www.tessenderlokerley.com/sites/tg_kerley/files/files/2025-04/solupotasse-sell-sheet-digital.pdf) | 真实干细粉交付状态及养分、产品、松装或平装密度口径区分；仅一个 SKU，不采用通用数值 |
| `ham-recovery` | literature | Alfa Laval，Efficient DIABON plate heat exchangers give Belgium fertilizer plant license to operate，Ham 历史工厂案例（设备自 2011 年，页面于 2026-10-14 读取），A valuable by-product、DIABON plate heat exchangers、Mission accomplished 段；[供应商原件](https://www.alfalaval.us/media/stories/fertilizers/efficient-diabon-plate-heat-exchangers-give-belgium-fertilizer-plant-license-to-operate/) | 水吸收、盐酸溶液冷却、产品与受污染排污区分；不移植案例设备或零废物结论 |
| `lvic-aaf` | official_guidance | 欧盟 LVIC–AAF BREF，2007-08，范围及 1.4.8、1.5.1 节（PDF 第 27、51、61 页；印刷 xxv、23、33 页），[官方原件](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf?download=1) | 肥料场址通用能源审计及水、CO2 实物账；氨、NPK 配方及锅炉蒸汽数量不用于 SOP |
| `cww-bref` | official_guidance | 欧盟化工废水废气处理和管理系统 BREF，2016，第 4 章 BAT 2–5、7–11（PDF 第 573–574、576–578 页；印刷 543–544、546–548 页），[官方原件](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/CWW_Bref_2016_published.pdf) | 化工流清单、实际物种浓度流量、水接口、处理和监测；不设场址排放默认量 |
| `epa-gas` | official_guidance | 美国 EPA，AP-42 1.4 Natural Gas Combustion，2026-10-14 读取的官方 PDF（页脚 10/26），声明及 1.4.3 节，PDF 第 1–3 页；[官方原件](https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf) | 燃烧物种筛查及源测试限定；锅炉因子、燃料组成、热值和氧化假设不作为 Mannheim 数量 |
| `ilcd-allocation` | official_guidance | 欧盟 JRC，ILCD Handbook General guide for LCA，Detailed guidance，2010-03 第一版，7.9.3 节（PDF 第 277、283、286–287 页；印刷 257、263、266–267 页），[官方原件](https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf) | 在声明目标下处理多功能性、细分、证实物理因果和经济后备方法；不设 SOP/盐酸分配默认比例 |
