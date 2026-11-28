---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.slag-dross-scalings-and-other-waste-from-the-manufacture-of-iron-or-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 用于烧结铁料的隔离热轧粗氧化皮

下述条件须同时成立：中国热轧厂一种真实非合金连续热轧带钢来源，与其他来源隔离，湿法除鳞、重力分离及物理排水，并在首次约定烧结接收质量门成为松散湿粗铁料。定量工厂记录及牌号限值须按真实应用采集。不假设组成、油分、铁收率、炉配方、密度或回收信用。整份产品是非均质氧化铁皮，不是纯磁铁矿或金属铁。

## 1. 范围与适用性

沿用原语义 PCR 目录身份，CPC 3.0:39310 的较窄映射已经接受，见 docs/adr/2026-11-21-accept-cpc-39310-coarse-hot-strip-mill-scale.md。现有钢材方法可提供相容来源钢负荷，但其钢材参考输出不是本回收铁料功能。炉渣/粒化高炉矿渣的形成与制备不证明氧化皮等价。松散氧化皮也不同于金属废碎料压块和分选回收金属供料。以下合取条件和排除项完整适用。

UNSD CPC 3.0 完整说明（2025-06-30）第 203 页将炼铁炼钢氧化皮与 39320 非炼铁炼钢制造含金属灰渣、39340 钢铁废碎料及 39350 重熔废锭分别列项。废钢压块不是氧化皮。已接受的关联仅覆盖此处限定的氧化皮。2026-10-23 已发布补充原件 CPC3!A1910:D1910 将同一保留代码 39310 定义为 HS 2022 的 2618、2619；2618 粒状炼铁炼钢炉渣不在本热轧氧化皮范围，所选氧化皮归于 2619 一侧，不能用粒状炉渣替代。两版分类来源均不确定 Product/Waste 交换身份或接收方验收。(`unsd-cpc3-2025`; `unsd-cpc3-2026-supplement`; `wco-hs2022-ch26`)

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.slag-dross-scalings-and-other-waste-from-the-manufacture-of-iron-or-steel |
| classification_refs | CPC 3.0:39310；本湿粗氧化皮子集窄于整项炉渣/浮渣/氧化皮分类 |
| covered_products | 一种隔离非合金热轧钢带来源、重力分离并机械排水的粗氧化皮，作为松散湿态烧结铁料放行 |
| excluded_products | 高炉/炼钢炉渣、浮渣、合金/不锈钢/铸造/酸洗氧化皮、含油细泥、干捕集粉尘、混合回收钢、金属屑、压块/球团、纯 FeO/Fe2O3/Fe3O4/金属铁及废物处理服务参考 |
| representative_product | 被接受用于烧结铁料的松散排水后热轧粗氧化皮 |
| production_route | 接收带继承负荷的非合金连铸板坯 → 真实天然气加热 → 连续热轧带钢与水力除鳞 → 来源隔离氧化皮坑/重力分离 → 物理排水 → 首次铁料质量接受 → 另账批次服务 |
| market_state | 声明的首次接收质量接受状态下的湿粗混合氧化物铁料；按实测放行净质量计，不含容器皮重 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 向声明的烧结接收方供给回收氧化物铁料 |
| How much | 每 1 kg 参考流 |
| How well | 按首次接受时真实约定的粗氧化皮铁料质量，独立检验水/油/组成与粒度；不设通用数值牌号 |
| How long or cycle | 一个可追溯的首次放行报告批次；不假设寿命、烧结收率或替代性能 |
| reference_flow_link | `finished_scale` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 作为烧结铁料接受的排水后热轧粗氧化皮 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 来源钢炉批与非合金组成; 板坯炼钢/连铸供方及上游负荷; 实际加热/连续热轧带钢/除鳞路线; 单独隔离的收集水路与中国厂址; 整份氧化皮氧化物/金属铁及其他元素化验; 独立氧及水/油测定; 实测粒度分布; 接收方/约定铁料牌号与接受检验; 实际水/油/杂质限值及合法 Product 转移依据; 首次放行 Q 与报告/批次标识; 毛物理质量 V 另于归属交换向量 A; 期初/期末 WIP 与 FG 数量及逐交换继承负荷; 失败批及 Q 为零负荷; 退回/冲回与真实增量返工; 实际公用工程状态/电压/供方/地区; 各包装账及放行后服务 |

数据集元数据、参考流备注或等效可消费上下文须声明所有限定项。首次放行净 kg 只包含真实保留的产品水/油状态。泛化流名不提供牌号或接收批准。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 首次质量接受的放行状态铁料净量 1 kg，采用 cp_release，不含皮重；Q 仅为首次放行产量。 |
| raw_state | all inventory rows | 真实行属性 | 真实行单位 | 按测量状态保留原始量，归属前换算单位，第 8 节仅归一化一次。累计体积不是速率；须有独立密度/高位热值及物种证据。 |
| separate_vectors | all inventory rows | 毛物理质量及归属交换 | kg 与真实交换单位 | 毛 V 用于物理物料/元素核对；A 是真实分配与 WIP 继承后的负荷分子，不能代替 V，服务保留原 Q_c。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际加热前接收的来源已知非合金连铸板坯，带相容上游钢材形成负荷 |
| starting_condition_role | 物理和负荷交接，不自动按废物截断 |
| product_classification_scope | 仅 CPC 3.0:39310 内隔离湿粗热轧带钢氧化皮 |
| recursive_input_rule | 本路线从钢材形成氧化皮；外购成品氧化皮重新包装不属本范围。真实同类外部退回只计一次来源/状态及完整继承向量；内部循环抵消且不新增 Q |
| upstream_dataset_requirement | 真实板坯供方覆盖实际铁/钢生产路线、精炼、存在的合金加入及到接收状态的连铸。声明并连接 BF-BOF 或 EAF 路线，不在此编造，不重复已含工序。真实接收运输及每个外包服务仅连接一次实际供方 |
| disclosure | 范围/状态与接收方状态；完整钢材共输出；铁/氧/水/油物理账；分配和继承向量；首次 Q 另于毛发运；服务与不确定性 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | 路线与产品 | 纳入实际接收/运输、板坯加热、钢材氧化、连续热轧带钢、除鳞、隔离收集、重力沉淀/撇油、排水、检验和首次铁料质量门。保留来源钢共输出及各单独去向。这是相容单元工序的透明技术综合，不是某一 SKU 或工厂配方证明。 | `jrc-ferrous-bref-2022`; `algoma-mill-scale-sds-2022`; `jrc-ilcd-2010`; `doe-steel-roadmap-2001` |
| b_terminal | 范围排除 | 仅用于声明烧结接收方按真实湿粗状态接受的铁料，记录真实技术与合法状态。BREF 示例不构成通用接受阈值。需脱油、热干燥、洗涤/浮选、压块/球团、混合或不同来源路线的细/油泥须另行方法审查。Waste 处理服务参考不能代替此 Product 铁料。 | `jrc-ferrous-bref-2022`; `algoma-mill-scale-sds-2022`; `jrc-ilcd-2010`; `doe-steel-roadmap-2001`; `harsco-briquetting-case` |
| b_q | 首次放行批 | Q 是报告批次内新增首次通过约定铁料质量接受的放行状态氧化皮净质量，不含容器和任何既往放行。同批期末成品已在 Q 内，不得再次作为生产输出加计。发运、仓储与复验不新增产量。冲回仅撤销该批并连带其完整向量和原放行关联，纠正后再放行只恢复此前冲回的合格量到原批。早前批次恢复不构成当期批新增首次产量。 | `jrc-ilcd-2010` |
| b_stock | 批次负荷 | 原始记录保留所有失败/零产出批、停开机、空转、清理及真实返工。期初/期末 WIP 按阶段、数量、组成及每种投入、排放、残余物、外包服务保留完整继承向量并随批转移。制造 A 包含本期分配负荷加期初 WIP 向量减期末 WIP 向量，不把失败负荷转给虚构后续产量。FG 按放行批与既有向量处理，不从新放行制造量再次扣减。 | `jrc-ilcd-2010` |
| b_services | 放行后 | 放行后仓储、复验、搬运、实际包装/清洗/维修及发运保留另账服务，关联各原批 Q_c，含旧 FG 和退回。H 是真实服务负荷向量，绝非生产分母。H/Q_c 仅一次附加至该服务批；合并产品账时抵消内部首次放行转移。不能按当期新增 Q 除旧批服务或暗删这些负荷。 | `jrc-ilcd-2010` |
| b_extend | 完整性 | 最低卡片不是零值/默认选择器。报告前对实际但未列的每种整份外购制剂/材料/燃料、包装部件、制冷剂、服务、废物混料与排放化学物种新增具体原子行。可选项无实际发生须有证明，未知不等于零。不假设外购蒸汽、锅炉、冷凝水、化学脱油或氧化皮热干燥。整份外部混料或服务仅连接一个真实供方，不重复其成分/排放。 | `jrc-ferrous-bref-2022`; `jrc-ilcd-2010` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mill_scale_recovery | 来源钢转化至回收铁料及批服务 | required | 仅完整适用路线 | foreground | 新增首次放行净 Q，原 Q_c 服务另账 |

在此合并过程中分别保留形成/轧制、隔离/沉淀/排水、质量放行/FG 与放行后服务账。内部含氧化皮水、澄清水循环及氧化皮转移在各阶段配对并在合并时抵消。真实外部发运、接收方及外包供方保持明确。全部卡片继承上述完整范围、库存和归属规则。每张非参考负荷卡仅一次使用第 8 节唯一生产 a_j 结果或其互斥服务 s_jc 部分，毛 V 另存；完整钢材共输出及真实物料/容器退回/发运腿保留同一归一化规则的独立物理上下文 v_j 视图，毛质量绝不作负荷分配，亦不产生重复输出/信用；任何采集协议均不预归一化原始量。

### 过程：来源钢与氧化皮回收（`mill_scale_recovery`）

#### 输入

##### 产品流

###### 加热前接收的来源钢板坯 (`received_slab`)

中国厂内用于平轧热轧带钢的一种实际非合金连铸板坯供料。此 Product 身份限定为中国厂内生产混合、上游连铸中间板坯，并不确定钢号或上游供方。逐批记录非合金钢化验、净质量、温度及完整相容的炼钢和连铸负荷，不可换成已加热钢坯、成品带钢或外购回收氧化皮。

- 选定流：用于平轧的连铸钢板坯 `fa93b446-0340-4d7b-9f4d-e3f78789ea94`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_origin`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 板坯加热炉天然气 (`furnace_natural_gas`)

实际工业板坯加热炉燃烧的天然气；原生 Product 为全球厂内生产混合，以总热值为参考。另核对真实中国供方和时期。采集实际气体体积或质量及同计量状态下独立测定或商业证明的总热值，以高位热值 MJ 报告。不规定气体组成、密度、效率或热值因子，同一次燃烧不得再计外购炉热。

- 选定流：天然气 `4bfd1abb-9106-495a-a291-ce410f205691`
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 轧制及回收设备用电 (`electricity`)

实际电压接口的用户侧计量交流电。电能计量采用技术流属性 Energy，不采用燃料热值。已读泛化 1–35 千伏供电候选的原生属性为净热值；未独立核实供方/属性适配前，不绑定到本 Energy 行。共享能量单位组本身不能证明属性等价。仅用于真实相符的电压接口，并声明电网/地区、时期和供方。包括加热辅机、轧制、除鳞泵、沉淀驱动、排水、检验、搬运、水处理及停开机、空转、清理负荷。保留生产与放行后服务的电表分区；内部电力不可重复采购，供方已含输配不得再加。其他电压或自发电须另核流与供方。

- 选定流：计量交流电
- 流属性/单位：Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 外供处理后补充工艺水 (`makeup_process_water`)

一种外供经处理的工业工艺水 Product 投入，原生参考为质量/kg。声明真实处理与水质、供应接口、水源、地点/地区及供方；泛化身份不确定这些选择。仅计外部新补水，含实际清洗及冷却补水。内部循环毛量为成对转移，不再采购或另计天然取水。直接河水/地下水取用须另列基本资源流及真实处理清单。体积转 kg 时只能使用独立测定的该水状态密度。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 整份外购热轧润滑制剂 (`rolling_lubricant`)

仅在实际使用时纳入。整份外购供货制剂只采购一次，供方组成、油分、载水、添加剂及损失仅作分析子账。不规定 NAS 等级或石油裂解配方。另供稀释水和实际厂内配制电力才另计；不可同时采购整份制剂与其化验成分。若实际采购预配水乳液，须另用对应整份配方行并保持采购基准互斥。

- 选定流：石油基热轧润滑浓缩制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 液压系统补充油 (`hydraulic_oil`)

纳入实际外部补充，记录真实整份供货制剂、维护转移及油箱库存。液压漏油的来源与轧制润滑油分开；整份油采购与成分化验不可相加。使用 UUID 前须核对真实牌号与供方。

- 选定流：石油基液压油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 新增周转运输料斗 (`returnable_skip_purchase`)

仅在实际新增采购时纳入一种用于散装氧化皮的碳钢制周转料斗。记录实测皮重、规格、使用趟次/维修史及真实制造供方，不假设件重换算。仅把实际寿命/服务使用负荷归属各批次，内部周转不可重复采购。若有另供衬里、盖或其他包装组件，须分别列行。

- 选定流：碳钢制周转运输料斗
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 料斗首次非购买外部接收 (`skip_first_external_receipt`)

一种首次非购买接收的碳钢运输料斗，可随来料进入，也可另行借入或无偿调拨。无论供方清单是否覆盖，均记录 F；没有同一实物先前从本站外发的证据，不得当作退回。记录所有权、实际制造/服务覆盖、接收运输、费用与继承负荷各一次；缺供方数据保持未知，不作零值。附着物料另有质量行，不入皮重。

- 选定流：首次非购买接收的碳钢运输料斗
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一实物背景 v_j 或原批 v_jc 结果；另存毛 V 和实际归属采购/运输/服务负荷，各计一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`

###### 外部返回厂内空料斗 (`skip_external_return_received`)

ER 只记录可追到同一实物先前从本站外发的真实料斗退回，与 P 购买、F 首次非购买接收互斥。延续继承容器负荷而不重复采购；按真实供方覆盖，将实际退回运输、清洗、维修或服务计一次。缺供方数据保持未知。残留氧化皮或水单独称量并记为产品返回或残余物，不是空皮重或新 Q。

- 选定流：外部退回空碳钢运输料斗
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一物理上下文 v_j 或原批 v_jc 结果；毛 V 及继承负荷分开，不新增 Q 或采购。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 接收方实际退回已放行氧化皮 (`returned_scale`)

仅用于真实退回的既往放行批，保留原来源、物料状态、原 Q_c 和完整继承向量。退回物理质量及原交付冲回另于增量返工/服务。恢复属于原批，绝不创造新氧化皮产量。本行不能采购无关氧化皮或将 Waste 改成 Product。

- 选定流：接收方退回的既往放行热轧粗氧化皮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一物理上下文 v_j 或原批 v_jc 结果；毛 V 及继承负荷分开，不新增 Q 或采购。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_balances`
- 来源：`jrc-ilcd-2010`

##### 废物流

##### 基本流

###### 从环境空气吸入的氧气 (`ambient_oxygen`)

来自空气的可再生元素基本资源，质量/kg。记录加热、氧化及辅助用气真实空气毛吸入中的氧气份额，反应氧和尾气未反应氧另作物理子账。这不是外购工业氧气。不能仅靠拟合未知氧化物比例或未识别气体损失来反推吸氧。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 进气氮气 (`ambient_nitrogen`)

按独立确定的进气组成与状态，记录空气毛吸入中的该单一分子物种。这是物理穿流/反应物账，不是外购压缩气体，也不产生假设的大气去除信用。核对对应出口分子物种及转化，不编固定空气组成。

- 选定流：从环境空气吸入的氮气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 进气氩气 (`ambient_argon`)

按独立确定的进气组成与状态，记录空气毛吸入中的该单一分子物种。这是物理穿流/反应物账，不是外购压缩气体，也不产生假设的大气去除信用。核对对应出口分子物种及转化，不编固定空气组成。

- 选定流：从环境空气吸入的氩气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 进气湿分 (`ambient_water`)

按独立确定的进气组成与状态，记录空气毛吸入中的该单一分子物种。这是物理穿流/反应物账，不是外购压缩气体，也不产生假设的大气去除信用。核对对应出口分子物种及转化，不编固定空气组成。

- 选定流：从环境空气吸入的水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 进气二氧化碳 (`ambient_co2`)

按独立确定的进气组成与状态，记录空气毛吸入中的该单一分子物种。这是物理穿流/反应物账，不是外购压缩气体，也不产生假设的大气去除信用。核对对应出口分子物种及转化，不编固定空气组成。

- 选定流：从环境空气吸入的二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

#### 输出

##### 产品流

###### 首次质量放行的回收氧化皮 (`finished_scale`)

中国热轧厂声明的非合金钢热轧带钢路线产生、单独收集的湿粗氧化皮，经重力分离和真实排水。按放行时整份氧化物混料计量，含独立测得的保留自由水和残余油，不编铁含量或氧化物相比。声明实际接收方/约定烧结铁料规格、粒度分布、水分、油/杂质限值及合法转移依据。Product 表达须有相容 Product 原生身份及实际接收方接受依据，不能用 Waste 型氧化皮、高炉渣、纯磁铁矿或金属铁替代。本方法不含压块、混入其他残余物、脱油或热干燥。

- 选定流：作为烧结铁料接受的排水后热轧粗氧化皮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：`jrc-ferrous-bref-2022`; `algoma-mill-scale-sds-2022`; `jrc-ilcd-2010`

###### 来源钢共输出 (`hot_strip_cooutput`)

按自身钢材质量门记录完整真实热轧钢带共输出及其表面/温度、组成、水分和库存，另于 Q。这是未酸洗热轧钢带，不可暗换为冷轧或酸洗负荷。即使多数负荷归属钢材功能，钢材毛质量仍保留在物理账。相容供方/流须反映真实路线。

- 选定流：未酸洗连续热轧非合金钢带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一物理上下文 v_j，保留完整毛 V_steel 及其独立归属负荷向量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_balances`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 随毛实物发运外出的料斗 (`skip_with_dispatch`)

记录所有毛实物发运所带容器皮重，含旧成品及替换发运；斗内氧化皮另计。本腿不是净 Q 或新容器产量。

- 选定流：随毛实物氧化皮发运的碳钢料斗
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一物理上下文 v_j 或原批 v_jc 结果；毛 V 及继承负荷分开，不新增 Q 或采购。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 向外退空料斗 (`skip_return_to_owner`)

实际向外部所有者返还空斗的皮重另于随货发运与内部周转，同一外出不能计两次。

- 选定流：向外部所有者退还的空碳钢料斗
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一物理上下文 v_j 或原批 v_jc 结果；毛 V 及继承负荷分开，不新增 Q 或采购。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 外部澄清回水 (`external_return_water`)

仅在真实供方协议下存在外部 Product 回水时纳入：计量水质量/体积、独立密度、温度、压力/焓及供方水/能分配。不是废水处置、基本环境排水或内部循环。不可编蒸汽、冷凝水、锅炉或外售热信用；内部澄清回水在轧制与分离账之间抵消。

- 选定流：澄清工业回水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

##### 废物流

###### 送外部处理的不合格来源氧化皮 (`scale_reject`)

仅用于中国热轧厂除鳞冲渣废水分离后实际外送的不合格来源氧化皮，原生为 Waste flow、质量/kg。这些是身份的路线、地点和处理限制；不是已放行 Product、泛化混合污泥或外购氧化皮。称量整份不合格混料，保留水/油/铁子账、实际接收方和合法状态。内部返工/捕集为成对转移。全部留存或外送不合格物料另于 Q，不默认零负荷或回收信用。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 实际金属切头切尾废钢 (`metallic_crop_scrap`)

按来源化验及独立接收方计量真实热轧切头切尾/堆钢废钢，金属废钢不是氧化皮。内部回炉在合并时成对抵消；真实外部废钢须声明处理或有价共输出状态并在对应门审查分配。仅收集废钢不意味着发生重熔或压块。

- 选定流：非合金钢热轧带钢切头切尾废钢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 从粗铁料分出的细泥 (`oily_fine_sludge`)

一种真实整份湿细氧化皮沉淀污泥，与放行粗氧化皮分开称重，并分析水/油/固体。记录真实处理接收方与继承负荷；不可改名作粗铁料或暗加脱油，化学或热处理将改变本路线。

- 选定流：含油细氧化皮沉淀污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 送外部处理的废水排污 (`scale_water_purge`)

送外部处理供方的一种真实整份水性排污，悬浮氧化皮和油分测值为子账。记录体积，需质量时独立测定该混料状态密度。不能同时把其中水/铁/油作为直接环境排放；后续处理排放由外部供方负责。内部回用澄清水不属本出口。

- 选定流：含氧化皮热轧废水排污
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 送接收方的捕集粉尘 (`captured_scale_dust`)

仅在实际干法气体净化捕集时纳入：处理前单独称量的干基含铁颗粒废物，测定组成、水分，注明来源/位置及回收或处理接收方。与空气排放、粗氧化皮和污泥去向互斥。把粉尘回混本粗铁料会改变组成来源，须明确重审边界，不假设零废物回流。

- 选定流：钢铁热加工收集粉尘 `550674c0-8fd0-53e8-8299-8664c1dfc3f8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 容器废物 (`skip_scrap`)

记录报废料斗皮重、剩余继承容器负荷和真实接收方，附着氧化皮/水另行核对；它不是热轧切头切尾废钢或新回收氧化皮。

- 选定流：报废碳钢运输料斗
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 单独排出的废润滑油 (`used_oil`)

原生为产生点的 Waste flow，适用已使用并污染的石油基或合成润滑油，处理路线未指定。仅用于实际单独排出的润滑油，测定水/固体分并记录合法接收方/真实处理；该身份不规定再生或燃烧。混合细泥和撇取油水乳液保留各自流，不假设固定水/添加剂化验值或信用。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 撇取油水相 (`skimmed_oil_emulsion`)

重力分离实际撇取的整份油水相，独立于粗氧化皮、细泥和排出废润滑油测定。后续处理只连接一个真实外部接收方；油和载水分析不另作排放或采购交换。

- 选定流：撇取的石油基油水乳液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

##### 基本流

###### 向空气排放化石二氧化碳 (`co2_fossil`)

仅化石 CO2，向未指定空气的基本排放，质量/kg。独立核对炉燃料碳和真实润滑油碳氧化，另于环境进/出 CO2；无替代矿石或能源信用。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 向空气排放化石一氧化碳 (`co_fossil`)

仅化石 CO，向未指定空气的基本排放，质量/kg。测量物种排放及化石碳来源；总 VOC 或总碳不等于 CO。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 向空气排放一氧化氮 (`nitric_oxide`)

仅 NO，向未指定空气的基本排放，质量/kg。以 NO2 当量报告的 NOx 是指标，不得全部分配为 NO；保留实测物种及摩尔换算依据。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 向空气排放二氧化硫 (`sulfur_dioxide`)

仅 SO2，向未指定空气的基本排放，质量/kg。按实际含硫燃料/污染及实测或独立有据的该物种释放量；无排放须有证据，不能默认零，SOx 不可替代。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 向空气排放化石甲烷 (`methane_fossil`)

仅化石 CH4，向未指定空气的基本排放，质量/kg，包含实际存在的泄漏与不完全燃烧。天然气整份供料不是纯甲烷；实测其他烃须另列，不能把总 VOC 转成甲烷。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 向空气排放水蒸气 (`water_vapour`)

仅气态 H2O，向未指定空气的基本排放，质量/kg。独立测定蒸发、燃烧生成水及大气湿分进出，作为同一出口物种的来源子账，不能叠加总量与来源分区。冷凝液与产品保留自由水去向另列，不编结构水/反应水。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 尾气中的氮气 (`nitrogen_exhaust`)

仅 N2，向未指定空气的基本排放，质量/kg。按实测进气及真实反应记录物理穿流，配对入口氮并区分 NO/NO2 形成，同一氮不重算；外购氮气不属环境空气身份。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 二氧化氮排放 (`nitrogen_dioxide`)

实际 NO2 分子质量另于 NO；亚硝酸根和未分物种 NOx 都不能绑定。仅有真实物种比例和分子量时才换算 NO2 当量监测数据，未知物种分配须保留完整性缺口。

- 选定流：向空气排放的二氧化氮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 尾气未反应氧 (`oxygen_exhaust`)

尾气实际未反应 O2 另于进入氧化皮或燃烧产物的氧记录。该空气出口不能套入口空气资源身份。

- 选定流：尾气中的氧气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 尾气氩气 (`argon_exhaust`)

真实惰性 Ar 穿流与入口空气氩及泄漏/存量变化配对，不设固定空气比例或当作外购氩。

- 选定流：尾气中的氩气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 大气二氧化碳穿流 (`ambient_co2_exhaust`)

入口大气 CO2 穿流按来源另于新生成的化石 CO2，与真实入口量配对。物理返回不构成碳封存/去除信用。

- 选定流：穿流尾气的大气二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 未捕集氧化铁颗粒物 (`oxide_particulate_air`)

按真实空气分室记录实际夹带氧化物整份颗粒物，独立测定粒度及铁/氧/其他元素，分析子账不可叠加。捕集粉尘保留技术圈残余物出口；不能当纯 Fe3O4，不能用质量账残差冒充空气损失。

- 选定流：向空气排放的热轧氧化铁颗粒物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### 真实散热 (`heat_air`)

可量化时按真实热状态记录实测/核对的散热 MJ，另于外购燃料能及物料/水携带显热；不假设外售热共产品。

- 选定流：向空气散失的热量
- 流属性/单位：Energy / MJ
- 数量规则：使用第 8 节唯一 a_j 结果或互斥批服务 s_jc，保留未除原始记录及毛 V。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_context | 归因决策 | 仅用于实际需要分配的归因研究，说明适用决策情景。工业制造或回用证据本身不支持分配键、免费废物投入或替代产品信用。若来源氧化皮属弃置/负价值废物或转移状态变化，须保留真实起源和管理负荷并在两侧确立相容的废物/回收约定；不能自动套正价值产品经济键或零负荷。 | `jrc-ilcd-2010` |
| a_subdivide | 全部交换 | 先识别专属工序并作真实细分，再按量化因果归属作虚拟细分：实际钢材专属整理、氧化皮专属排水/质量放行及单独计量搬运归属决定该负荷的功能。来源钢转化与氧化皮制备分开，不把全部加热/轧制负荷给氧化皮，也不删其形成。保留逐行分配记录及各共功能守恒。 | `jrc-ilcd-2010` |
| a_causality | 剩余交换 | 对每个剩余交换独立识别决定性物理因果关系，证明改变共功能如何改变该交换。钢/铁、氧化物氧、特定炉和泵服务可能有不同关系。仅有质量、铁含量、价格或共用表不等于因果；禁止通用质量比例或任意选择物理/经济分配。毛物理质量账绝不用分配比例。 | `jrc-ilcd-2010` |
| a_residual | 真正剩余交换 | 仅在有理由确认决定性物理因果关系不存在/不可行后，对真正剩余交换采用同一共过程门、真实状态下各共功能同期代表性市场价值。若报价在下游，剔除后续氧化皮排水/包装/运输或钢材整理费用。保留价格符号、数量、币种、时期、调整与敏感性；缺失、零/负价或不相容价格须明确审查，不编比例或擅取绝对值。分配向量之和须还原完整原始清单。 | `jrc-ilcd-2010` |
| a_credits | 接收方与回收 | 记录真实回收/处置与内部回流。不规定钢与氧化皮固定负荷比例、替代铁矿质量、再生含量信用、避免填埋、外售热信用或下游烧结性能。铁料出口、处理服务与真实钢材共输出不能重复领取同一负荷或信用。 | `jrc-ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

这些协议只采未除原始观测、事件/期总量、库存与继承向量。aggregation_rule 单元格仅标记计算后的共同最终报告基准，不指示采集人员先除。真实汇总、单位换算、归属与 WIP 转移在唯一 A/Q 之前完成。放行后服务保留原始 H_jc 和原 Q_c，绝不通过当期生产 Q。共享表/协议也不合并各流与各去向。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_origin | mill_scale_recovery | 钢材来源 | 供方与接收记录 | 炉批; 钢材化验; 板坯质量; 接收温度; 上游路线; 供方/provider; 运输方式/距离/载荷; 继承交换向量 | 核对校准接收称重及供方路线/炼钢/连铸记录到同一真实批，保留完整上游覆盖及运输清单或真实外包供方，不重复已含公用工程 | kg; actual service unit | 每批及每次转移 | 完整报告期与期初批 | 来源供方至声明中国热轧厂 | 每 1 kg 参考流 | 校准; 供方覆盖; 监管链; 负荷转移 |
| cp_energy | mill_scale_recovery | 电力与炉用燃气 | 计量表与票据记录 | 表起止; 原始 kWh; 原始燃气体积/质量; 计量温压; 真实高位热值; 独立气体密度/组成; 生产/服务/空转分区; 供方/电网/电压 | 读取真实校准表及供方能质证明，保留时序与空转/失败/清理。区分累计体积与速率，电能另于炉燃料/热量 | kWh; MJ HHV; actual m3/kg | 连续表与每供货批 | 全期含停机及 Q 为零 | 所选全部生产与服务设备 | 每 1 kg 参考流 | 电表校准; 计量拓扑; 证明; 操作日志 |
| cp_materials | mill_scale_recovery | 水与供货制剂 | 采购与库存记录 | 供方/产品; 实际供货制剂; 接收/耗用/退回; 水油罐存; 毛循环; 内部转移对; 密度/状态; 外部回水温度/焓 | 逐项称量/计量真实外供水或整份制剂及库存，保留原始单位与供方组成，化验成分不另作采购。实际配制及回水服务另计 | kg; measured m3 | 每次供货/耗用及库存边界 | 全期及期初库存历史 | 实际油水罐及过程/回水接口 | 每 1 kg 参考流 | 证明; 校准表; 独立密度; 转移配对 |
| cp_air | mill_scale_recovery | 各分子/颗粒物/热交换 | 物种测量与状态记录 | 物种及来源; 进气组成/状态; 尾气组成/状态; 累计气体体积或真实速率/时间; 污染物浓度; 颗粒粒度/组成; 捕集/非空气去向; 湿分; 反应水证据; 热状态 | 保留物种特定校准测量及独立物料/反应证据，按实测状态把各原始体积/浓度转换为分子质量。NOx/COD/VOC 总量在真实物种确定前只作指标；不可由一个残差反推多个未知 | kg; raw m3; actual concentration; MJ | 覆盖全部工况的代表性连续/事件测量 | 全期含停开机与清理 | 每个真实进气/烟囱/排口及处理接口 | 每 1 kg 参考流 | 校准; 物种分析; 干湿基; 采样; 独立反应证据 |
| cp_release | mill_scale_recovery | 首次接受氧化皮 | 称重与质量放行记录 | 批/群; 首次门/时间; 放行净质量; 容器皮重; 独立自由水/油/氧化物/元素化验; 粒度分布; 接收方规格/合法接受; 原放行/冲回关联; Q; Q_c | 用校准秤称同一整份放行批并排除包装，检验真实接收质量规格，独立测水/油/铁/氧且不假设氧化物相比。去重首次放行并将有符号冲回关联原批 | kg | 每次首次放行及有符号冲回 | 完整新放行批及历史关联 | 下游烧结前同一约定门 | 每 1 kg 参考流 | 校准称重; 采样; 真实接受; 合法转移依据 |
| cp_balances | mill_scale_recovery | 阶段及批次质量/负荷 | 库存与批次来源记录 | 阶段; 各交换毛 V; 钢材共输出; 铁/氧/碳/氢及相关元素; 自由/相态/结构/反应水; 油; 期初期末 WIP/FG 数量; 继承交换向量; 失败批; 退回; 返工; 内部转移对 | 在形成、分离排水和成品库门独立称量/采样各流及库存，逐交换完整向量随批转移。制造、FG 与合并物理账一致，按独立确定的不确定性调查差异 | kg; original exchange units | 每批/转移及期界 | 全期与继承历史 | 来源/回收/FG 全部门 | 每 1 kg 参考流 | 独立秤/化验; 盘点表; 完整向量; 审计链 |
| cp_residues | mill_scale_recovery | 各独立残余物及接收方 | 称重及去向记录 | 流/批; 整份质量; 自由水/油/铁/其他分析; 产品/废物状态; 接收方; 内部回流; 留存库存; 运输/处理供方; 实际门价格 | 称量每种实际隔离残余物并保留接收/处理记录。混料整份质量与组成子账不可相加；捕集物、环境排放及由供方负责的后续处理分开 | kg; measured raw volume | 每次转移及库存边界 | 全期含不合格/Q 为零批 | 各真实残余物接口和接收方 | 每 1 kg 参考流 | 地磅; 化验; 合法接收方; 真实去向/供方 |
| cp_packaging | mill_scale_recovery | 每账一种物理包装类型 | 皮重与互斥容器移动记录 | 单一类型/配置; 期初空/WIP/FG/周转; P; F 首次非购买接收; ER 同件真实退回; 期末空/WIP/FG/周转; S 毛发运; EO 外退; W 废物; 内部周转对; 实测皮重; 制造/维修/服务历史 | 独立计数/称量每种实际包装组件，按同一类型保留完整期初 + 外购 + 首次非购买外部接收 + 同件真实外部退回 = 期末 + 毛实物发运外出 + 向外退回 + 废物恒等式。按配置实测皮重，内部周转抵消且不入产品 Q | kg; actual item counts | 每次移动与库存边界 | 全期及服务历史 | 全部 WIP/FG/服务位置的空与附着容器 | 每 1 kg 参考流 | 皮重测量; 移动日志; 完整互斥移动账; 服务寿命 |
| cp_services | mill_scale_recovery | 放行后服务 | 批服务与分配记录 | 原 Q_c; 服务批; 当期原始 H_j; 服务日期; 旧 FG; 毛发运; 增量返工/清理; 继承向量; 分配调整; 上游/供方接口 | 把实际仓储/搬运/包装/发运原始服务关联原服务批，保留旧批负荷及真实退回/冲回关联。真实外包供方仅用一次，或采集其各原子交换，不重复内含能源 | original exchange units | 每次服务事件 | 当期事件及原批历史 | 所有放行后工序与接收方 | 每 1 kg 参考流 | 批关联; 原始票据/表; 分配证明; 无新增产量 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_conversion | all inventory rows | 分配前将各实测原始量转换到行单位：kWh × 3.6 → MJ；吨 × 1000 → kg；升 × 0.001 → m3。累计体积已是数量，只对真实速率按真实时间积分。燃气高位热值能量由实际体积/质量乘独立确定的相容高位热值；任何质量/体积换算均用同温压/组成下独立物质密度，不用原生次级系数冒充实测密度。 | raw records; actual state; independent HHV/density | U_j | `jrc-ilcd-2010` |
| attribute_exchange | all inventory rows | 独立保留毛物理 V_j。按第 7 节逐个处理换算 U_j 及继承向量，先记录专属归属、虚拟细分与决定性因果，再仅对真实剩余项作市场价值分配。本期生产负荷 R_j 归属真实氧化皮功能，所有共功能向量相加还原未分清单，不提供固定比例。 | U_j; actual co-functions; inherited vectors; allocation evidence | R_j | `jrc-ilcd-2010` |
| carry_wip | 制造交换 | A_j = R_j + B_open_WIP_j - B_close_WIP_j。各 B 是属于本首次生产批的同一交换单位、阶段与批次继承量。R_j 含全部可归属失败/停开机/空转/清理与增量返工。旧 FG 退回保留原生产向量，并使用原批增量返工/服务账；其原向量与恢复质量都不能塞入当期新增生产 R_j/Q。已放行货仍在库不构成再次扣 FG 的理由。有符号原放行冲回及继承向量保留批账。 | R_j; B_open_WIP_j; B_close_WIP_j; cp_balances | A_j | `jrc-ilcd-2010` |
| normalize_exchange | 制造交换 | 仅当 Q > 0 时执行一次 a_j = A_j / Q。Q 为 cp_release 的净首次放行量。清单负荷量直接使用同一 a_j，不再除；采集协议不预除原始量。功能共输出或物料退回/容器转移作为物理上下文报告时，由同一个唯一归一化步骤对其自身未除换算毛量报告 v_j = V_j / Q；v_j 不进入 A_j，也不再除。旧批物理服务/退回/发运腿在同一步骤使用其自身 V_jc / Q_c，绝不能将新旧混合发运量除以当期 Q。钢材共输出数量为物理上下文，不是替代产品信用或第二次分配产品产率。Q = 0 保留完整原始物理与负荷向量，不输出单位结果。 | A_j; Q; cp_release | a_j | `jrc-ilcd-2010` |
| attach_services | 放行后服务 | 仅对原首次放行正量批 Q_c 执行一次 s_jc = H_jc / Q_c。H_jc 是归属该批的当期原始服务负荷；声明的交付/批记录仅一次合并原生产 a_jc 与 s_jc。H 绝非生产分母，当期 Q 不能归一化旧 FG 服务。Q_c 未知/为零则保留原始服务并审查。 | H_jc; Q_c; cp_services | s_jc | `jrc-ilcd-2010` |
| physical_gates | 形成、分离、成品库及合并门 | 对各整份物料及独立相关铁/氧/碳/氢/其他元素：期初物理库存 + 外部接收 + 毛内部接收 = 期末物理库存 + 毛内部发出 + 全部真实外部产品/残余物/化学排放，并有化学证据支持反应转化。合并时抵消相同内部接收/发出。FG 原始账使用 O_FG + G + ER_FG = C_FG + S_FG + RV_FG + D_FG。G 是正向合格首次放行/恢复条目；RV_FG 是实际撤销放行并转至 WIP 的质量；D_FG 仅含未计入 RV_FG 的其他销毁/重分类/转移。这些是带原批关联的互斥物理腿。批次净放行账为 Q = G - RV_FG，代入得到 O_FG + Q + ER_FG = C_FG + S_FG + D_FG，不再列第二次 RV_FG。各批分开：旧放行恢复只更新原 Q_c，不入当期新增生产 Q。Q 已包含在 FG/发运分区内，不在其上另加输出。质量账用毛 V，绝不用分配 A。未知账不能声称通过。 | gross V; independent assays; all stocks/transfers; reaction evidence; cp_balances | stage and consolidated physical reconciliations | `jrc-ferrous-bref-2022`; `algoma-mill-scale-sds-2022`; `jrc-ilcd-2010` |
| water_oil_oxide | 整份氧化皮与全部湿态去向 | 氧化皮整份和各湿残余物整份质量各自已含实测水/油/矿物；元素铁和氧及 FeO/Fe2O3/Fe3O4/金属铁分析为同一整份的不可叠加子账。用验证方法区分油与水/矿物，并独立测自由/结构/相态/反应水区别及实际变化。不可用 SDS 危害上限、默认铁比例、固定密度或单个残差确定两个未知。同一边界整份混料不能再按其中水/铁/油分别排放。 | whole weights; independent phase/element/water/oil tests; cp_balances | non-additive component and element reconciliation | `jrc-ferrous-bref-2022`; `algoma-mill-scale-sds-2022`; `jrc-ilcd-2010` |
| packaging_balance | 每个独立包装类型 | 对每种相同包装：期初空 + 期初附着 WIP + 期初附着 FG + 期初周转 + P + F + ER = 期末空 + 期末附着 WIP + 期末附着 FG + 期末周转 + S + EO + W。这些状态互斥，周转件不能再算空/附着。P 为真实购买；F 为首次非购买外部接收，含随来料或另行借入/无偿调拨，无论供方清单是否覆盖；ER 为可追到同一件先前从本站外发的真实退回；S 随毛实物发运皮重，EO 独立向外退回，W 真实废物。内部再用抵消。P/F/ER 互斥，实际采购、运输与服务负荷各归属一次；缺供方覆盖明确待决。每个实际部件独立执行，不能以净 Q 代替、重复采购或自动当共产品。 | opening/closing by type; P; F; ER; S; EO; W; cp_packaging | complete individual packaging balance | `jrc-ilcd-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 全部交换 | 真实流类型/路线/形态/等级/地区/介质及全部原生限制须匹配。泛化身份不证明供方或产品状态。运行使用前参考铁料须有独立相容 Product UUID。 | 完整直读身份; 真实供货/接收记录 |
| dq_measurement | 原始记录与库存 | 保留独立称重/化验/密度、真实计量状态、全部工况、完整 WIP/FG 向量与不确定性。未知保持未知；工厂数值须后续真实采集，不编造。 | cp_origin; cp_energy; cp_materials; cp_air; cp_balances |
| dq_acceptance | 参考铁料与接收方 | 追溯首次接受、状态/质量及真实技术与合法接收依据。工业原件支持路线综合，不是厂址证明、当期销售合同、默认化验或 LCA 分配证据。 | cp_release; 真实接收检验与文件 |
| dq_complete | 数据集覆盖 | 纳入所有真实原子流与去向，或披露未解决覆盖并不出完整结论。整份混料与分析分区互斥，真实供方只计一次，各包装账完整。科学审查与翻译审查分别决定。 | 清单核对; 分配档案; 批/服务审计 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | 适用性 | 核对确切非合金热轧带钢来源、隔离湿粗状态及声明烧结接收方。炉渣、金属废钢、纯氧化物、细油泥、团聚产品与其他氧化皮来源不适用，不声称覆盖整个 CPC 叶。 | `jrc-ferrous-bref-2022`; `algoma-mill-scale-sds-2022`; `jrc-ilcd-2010` |
| v_native | 每个绑定身份 | 核对真实 Product/Waste/Elementary 类型、全部原生名称/注释/存在的 CAS、路线/形态/等级/地区/分室及全部属性。使用精确参考属性/单位组链与真实参考单位，不反推密度或件重。Waste 氧化皮 UUID 不能识别成品 Product 铁料；真实身份缺口在解决前不可用。 | `jrc-ilcd-2010` |
| v_q | 参考与批次 | 核对 1 kg 放行状态铁料净量、唯一首次 Q、完整去重冲回及旧批关联。期末 FG 未加两次，毛发运不是 Q，服务使用原 Q_c，H 绝非分母。Q 为零保留原始负荷且不出单位结果。 | `jrc-ilcd-2010` |
| v_physical | 全部物理门 | 在形成、分离排水、FG 与合并门核对整份毛物料及独立相关元素。核对真实氧/水/油分区、反应/物种证据、内部抵消、各接收方和各包装腿。一个残差不能拟合多个未知；缺化验或气体物种未解时不能声称完整守恒。 | `jrc-ferrous-bref-2022`; `algoma-mill-scale-sds-2022`; `jrc-ilcd-2010` |
| v_attribution | 负荷向量 | 独立重建每个原始量→换算→归属→库存继承的分子，再作唯一归一化。审查细分与逐交换因果、合理剩余共门价格及完整守恒，不能从工程检查或可复用来源回执推断科学批准。 | `jrc-ilcd-2010` |
| v_reporting | 完整性与声明 | 披露全部未测字段、身份/供方缺口、适用限制及不确定性。机械投影/计量检查只证明声明一致性，不证明真实工厂守恒、合法状态、科学批准、映射接受或发布。分别披露限定范围映射决定和具体研究适用性。 | `jrc-ilcd-2010` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 归因回收铁料生产；披露真实钢材共功能与服务批 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅真实匹配的粗氧化皮烧结铁料，状态相容且负荷交接完整 |
| excluded_use | 废物处理功能单位、炉渣/水泥铁料代理、纯氧化铁/金属铁、压块、下游替代声称或无条件全叶覆盖 |
| required_metadata | 来源钢炉批与非合金组成; 板坯炼钢/连铸供方及上游负荷; 实际加热/连续热轧带钢/除鳞路线; 单独隔离的收集水路与中国厂址; 整份氧化皮氧化物/金属铁及其他元素化验; 独立氧及水/油测定; 实测粒度分布; 接收方/约定铁料牌号与接受检验; 实际水/油/杂质限值及合法 Product 转移依据; 首次放行 Q 与报告/批次标识; 毛物理质量 V 另于归属交换向量 A; 期初/期末 WIP 与 FG 数量及逐交换继承负荷; 失败批及 Q 为零负荷; 退回/冲回与真实增量返工; 实际公用工程状态/电压/供方/地区; 各包装账及放行后服务 |
| required_quality_disclosure | 原生身份与供方限制、来源/接收状态、真实路线、实测组成/状态、毛物理/元素核对、逐交换分配与继承向量、Q/Q_c/服务及全部未解完整性 |
| update_trigger | 钢材来源/路线、隔离、水油/粒度状态、接收方状态/规格、处理或包装、供方/接口、负荷约定变化或新材料证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-ferrous-bref-2022 | official_guidance | Best available techniques reference document for the ferrous metals processing industry (2022), JRC131649; https://publications.jrc.ec.europa.eu/repository/handle/JRC131649 ; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf | 第 2.2 节热轧带钢加热/轧制/除鳞与水路；第 2.4.11.2 节重力分离与粗/细/油去向；第 8.11.1.2–1.3 节粗氧化皮回用与油泥反例。仅作定性技术综合，不是工厂配方、通用数值牌号、分配规则或合法接收批准。 |
| algoma-mill-scale-sds-2022 | literature | Algoma Steel Inc., Mill Scale Safety Data Sheet, version 1.0, revision 2022-11-23; https://www.algoma.com/wp-content/uploads/2025/03/SDS-Mill-Scale.pdf | 第 1/3 节整份氧化皮身份及加热/热轧/水除鳞/重力回收、CAS 65996-74-9、多氧化物/微量元素性质；第 9/16 节物性限制与供方特定免责声明。危害判定上限不是可相加的批次化验、铁分、水油规格、密度或接收证明。 |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 第 7.9.2–7.9.3 节，印刷页 255–272：归因决策限制、真实/虚拟细分、逐交换决定性物理因果、实际状态/共门剩余市场价值、守恒及另列废物/回收情形。支持声明方法与前景采集要求，不提供钢/氧化皮比例、实测工厂数据或自动信用。 |
| unsd-cpc3-2025 | official_guidance | UNSD, Central Product Classification Version 3.0, explanatory notes, 30 June 2025, p.203; https://unstats.un.org/unsd/classifications/Econ/cpc | 仅支持分类与邻界；不建立交换类型、铁料验收或分配规则。 |
| doe-steel-roadmap-2001 | official_guidance | Steel Industry Technology Roadmap, Chapter 3, §3.1.3, printed pp.68–70; https://www1.eere.energy.gov/manufacturing/resources/steel/pdfs/roadmap_chap3.pdf | 独立定性工艺依据：氧化皮沉淀、粗氧化皮作烧结料、油脂限制；历史美国描述不建立当代中国收率、品级或通用含油限值。 |
| harsco-briquetting-case | literature | Harsco Environmental, Briquetting: An Innovative Triumph, Background; https://www.harsco-environmental.com/case-study/briquetting-innovative-triumph/ | 运营方反路线证据：洁净氧化皮与含油污泥的差别；其压块/热处理案例排除，不迁移案例产量、油分或能耗。 |
| unsd-cpc3-2026-supplement | official_guidance | UNSD CPC Version 3.0 explanatory notes, 23 October 2026, CPC3!A1910:D1910; https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | 已发布分类补充，CPC3!A1910:D1910：保留 39310 代码，HS 2022 2618/2619 范围；区分粒状炉渣与真实热轧氧化皮。不修改共享分类，也不提升交换状态。 |
| wco-hs2022-ch26 | official_guidance | WCO Harmonized System 2022, Chapter 26, headings 26.18–26.20; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0526_2022e.pdf | 品目文字区分：2618 粒状炼铁炼钢炉渣与 2619 非粒状渣/浮渣/氧化皮；仅用于分类。 |
