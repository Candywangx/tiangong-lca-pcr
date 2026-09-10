---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.refined-copper-and-copper-alloys-unwrought-master-alloys-of-copper
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 未锻轧精炼铜及铜合金；铜母合金

## 1. 范围与适用性

本 PCR 适用于生产设施出厂的精炼铜、未锻轧铜合金和铜母合金前景数据包，产品形态可为阴极、锭、坯、板坯、丸粒或其他已声明的未锻轧形态。若相关操作位于声明的生产者门到门边界内，则覆盖原生火法和湿法路线、再生铜精炼、重熔与合金化、母合金生产、产品成形准备、现场污染控制及残余物管理。

本 PCR 不覆盖作为最终参照产品的铜锍或沉淀铜、供电解精炼的未精炼铜或阳极铜、铜矿石和精矿、铜废料和废铜、铜粉，也不覆盖棒、线、板、带、箔、管、管件、铸件或成品等半成品和制成品。每个数据包必须选定一种产品牌号、路线、地域、技术时期及出厂形态；不得用通用平均值掩盖纯铜、合金、母合金、原生和再生路线之间的实质差异。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.refined-copper-and-copper-alloys-unwrought-master-alloys-of-copper |
| classification_refs | CPC 3.0: 41413，未锻轧精炼铜及铜合金；铜母合金 |
| covered_products | 精炼铜，包括阴极及其他声明的未锻轧形态；未锻轧铜合金，包括黄铜和青铜成分；用于引入合金元素的铜母合金，包括已声明的 Cu-P、Cu-Ni、Cu-Zn-Pb、Cu-Be 或其他成分 |
| excluded_products | 铜锍；沉淀铜；未精炼铜；供电解精炼的铜阳极；作为最终产品的矿石和精矿；作为最终产品的铜废料和废铜；粉末和片状粉；半成品或制成铜产品及成品 |
| representative_product | 生产设施门口、具有声明未锻轧形态和牌号的精炼铜或铜合金产品 |
| production_route | 路线特定：原生火法精炼、原生湿法回收、再生铜精炼、铜合金重熔和成分调整，或铜母合金生产 |
| market_state | 下游半成品加工或制品制造之前，在生产设施门口交付的未锻轧精炼金属、合金或母合金 |

## 3. 参照流

| 字段 | 值 |
| --- | --- |
| 是什么 | 声明牌号和生产者出厂形态的精炼铜、未锻轧铜合金或铜母合金 |
| 多少 | 1,000 kg 产品净质量；包装单独记录，不计入 1,000 kg |
| 多好 | 符合声明的化学成分、纯度或合金牌号、物理形态、验收规范以及水分或表面状态要求 |
| 多久或周期 | 一个具有代表性的生产期，归一化至生产者出厂产量；数据包必须声明期间和产量加权方法 |
| reference_flow_link | 参照流为离开 `product_forming_dispatch` 的合格产品净量；内部返回料和包装不属于参照量 |

| 字段 | 值 |
| --- | --- |
| 参照量 | 1,000 kg |
| 参照产品流 | 铜及铜合金 `39b46f9b-dec5-4c9a-9b23-9f38911fe7f7` |
| 参照流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参照单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参照单位 | kg |
| 必需限定信息 | 产品族：精炼铜、铜合金或铜母合金；化学成分或牌号；铜含量或纯度；未锻轧形态；原生、再生或混合路线；进料来源及再生含量口径；生产者出厂地点；技术路线；生产期；包装计入说明 |

构建前景数据包时，必须在数据集元数据、过程说明、参照流注释、产品描述或等效字段中声明 `必需限定信息` 所列项目。缺少任一必需限定信息时，该数据包的参照流定义不完整。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 合格参照产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用经校准的衡器确定产品净质量，并将全部前景量归一化到 1,000 kg。参照质量不包括包装、托盘、内部返回料、不合格产品、附着工艺液和未去除浮渣。 |
| `dry_or_as_received_basis` | 矿石、精矿、再生进料、熔剂和残余物 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明每个数量采用干基还是收到基。记录水分测量值，仅在所选口径需要时换算干质量；同一平衡不得混用干基和湿基。 |
| `metal_content_basis` | 含铜和合金化投入、产品、副产品、粉尘、污泥和炉渣 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 元素和 kg 物料 | 分别记录物料质量和经分析的铜或合金元素分数。元素质量应由匹配批次或期间记录计算，不得替代物料总质量。 |
| `energy_carrier_preservation` | 电力、燃料、蒸汽和回收能源 | 能源载体特定属性 | kWh 或 MJ | 保留计量的能源载体及单位。仅用已声明的系数和热值口径换算；不得将电力、燃料质量、蒸汽和回收热合并为无说明的能源总量。 |
| `water_balance_basis` | 取水、循环水、耗水、排水和转移水 | 体积或质量 | m3 或 kg | 将取水、循环、消耗、排放以及产品或残余物含水量分字段记录。质量和体积换算时声明密度。 |

## 5. 系统边界

前景边界从所选路线已声明的起始条件开始，到生产者门口的合格未锻轧产品和单独记录的包装结束。边界包括路线相关的进料准备；熔炼，或浸出及溶剂萃取/电积；吹炼；火法精炼；电解精炼；重熔；合金化；母合金添加；铸造或阴极整理；内部物料返回；有计量的现场公用工程；大气和水污染控制；可销售副产品回收；以及工艺残余物和废物直至外运或现场最终处理的管理。上游采掘、选矿、再生材料准备、电力和燃料生产、外购试剂生产、运输及外部废物处理若不在声明的前景内，必须使用兼容的上游数据集。

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 路线特定的接收或采出点：一体化湿法路线的矿石；火法路线的精矿或含铜中间物；再生路线的已准备含铜二次材料；或合金/母合金路线的精炼铜、分选铜废料和合金添加物 |
| starting_condition_role | 跨越前景边界的首个纳入质量核算的进料状态，须声明所有权、废物/产品状态、成分、水分口径、来源及准备状态 |
| product_classification_scope | 仅限精炼铜、未锻轧铜合金和铜母合金；中间铜锍、阳极铜、残余物、回收金属和下游半成品形态保留各自的流标识 |
| recursive_input_rule | 用于重熔或调整成分的精炼铜、未锻轧铜合金或铜母合金投入，作为具有自身数据集的独立上游产品投入记录，不在本前景数据包内递归展开 |
| upstream_dataset_requirement | 对前景外每种材料、能源载体、运输服务和外部处理采用地域、技术和时间上具有代表性的数据集；披露代理数据和覆盖缺口 |
| disclosure | 声明路线、所含设施和单元过程、一体化阶段与外购进料阶段、原生/再生进料份额及口径、废料的废物/产品状态、再生含量方法、副产品处理、截断、内部循环、污染控制、残余物去向、地域、技术和参照期 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_declaration` | 所选前景路线 | 纳入声明起始条件至生产者出厂产品之间的全部现场单元操作，并分别识别任何一体化采矿、选矿、二次进料准备、制酸、公用工程、回收或残余物处理操作。 | `eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018` |
| `boundary_relevant_flows` | 前景清单完整性 | 核算所有环境相关的产品流、废物流和基本流，包括能源、水、工艺化学品、直接大气和水排放、炉渣、粉尘、污泥、废电解液、阳极泥、浮渣、回收金属、硫酸和其他路线特定副产品。 | `epd-pcr-2023-01-v2-0-1`; `eu-jrc-nfm-bref-2017` |
| `boundary_no_silent_recursion` | 同类产品投入 | 在单独标识的同类投入处停止递归并链接上游数据集；不得既在上游计入其生产，又在消费该投入的前景过程内重复计入。 | `epd-pcr-2023-01-v2-0-1` |
| `boundary_packaging_separation` | 包装 | 研究边界内应纳入包装生产和处理，但包装质量必须与 1,000 kg 金属参照量分开报告。 | `epd-pcr-2023-01-v2-0-1` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feed_preparation` | 进料接收、表征、分选、干燥、破碎、混配或预处理 | required | 始终纳入确立合格进料及其质量/成分口径的路线特定操作；即使仅接收而无加工，也必须提供进料表征记录 | 前景进料定义与准备 | 转入下一生产阶段的合格进料质量和分析成分 |
| `copper_recovery_refining` | 原生或再生铜回收与精炼 | conditional | 由矿石、精矿、未精炼铜、阳极或二次含铜材料生产精炼铜时纳入 | 前景回收、熔炼、浸出、吹炼、火法精炼、电解精炼或电积 | 转入产品整理或合金生产的精炼铜质量 |
| `alloy_master_alloy_melting` | 铜合金或铜母合金熔炼与成分调整 | conditional | 参照产品为铜合金或母合金，或成分调整属于实质步骤时纳入 | 前景熔炼、合金化、保温、取样和成分校正 | 转入铸造的合格合金熔体质量 |
| `product_forming_dispatch` | 阴极整理、未锻轧铸造、检验、包装和发运 | required | 始终纳入路线相关的产品形态准备和生产者出厂验收 | 前景参照产品形成和发运 | 1,000 kg 合格参照产品净量 |
| `emission_residue_control` | 现场污染控制、水处理和残余物管理 | required | 纳入服务于所含前景操作的全部控制和残余物转移；真实零流须有证据 | 前景污染控制、回收和最终转移核算 | 受控流质量及测得的剩余排放或转移量 |

### 过程：进料接收与准备（`feed_preparation`）

#### 输入

##### 产品流

###### 路线特定含铜进料和合金添加物（`metal_bearing_feed`）

将每个合格进料批次或期间流分别记录为矿石、精矿、未精炼铜或阳极、已准备二次材料、精炼铜、分选铜或铜合金废料、母合金或元素合金添加物。保留产品/废物状态和成分，不得合并不同进料。

- 选定流：路线特定含铜进料或合金材料
- 流属性/单位：质量 / kg 物料及 kg 已声明元素
- 数量规则：各进料类别实测合格质量及匹配的分析值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参照产品净量
- 基准类型：参照流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 进料准备电力、燃料和热（`feed_preparation_energy`）

记录卸料、分选、减小粒度、干燥、除油、脱涂层、混配或其他已声明准备操作使用的计量电力及每种燃料或外购热载体。

- 选定流：路线特定电力、燃料、蒸汽或热载体
- 流属性/单位：能源或质量 / kWh、MJ 或按计量的 kg
- 数量规则：按有文件记录的电表或运行小时分配至合格已准备进料的实测载体用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参照产品净量
- 基准类型：参照流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 进料准备用水和工艺助剂（`feed_preparation_auxiliaries`）

仅在已声明的准备操作中消耗时记录水、熔剂、还原剂、除油介质及其他助剂；保持不同化学品标识。

- 选定流：路线特定用水和准备助剂
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：实测交付量、罐量变化或仪表读数减去有记录的返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参照产品净量
- 基准类型：参照流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_auxiliary_material_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备并完成表征的进料（`prepared_feed`）

记录转入回收、精炼或合金化的进料质量、水分口径、铜和合金元素成分及去向。

- 选定流：已准备的路线特定进料
- 流属性/单位：质量 / kg 物料及 kg 已声明元素
- 数量规则：由合格进料、已记录移除量、水分变化和库存变化计算的转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：按过程输出，并与 1,000 kg 参照产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

###### 移除的非进料物质和准备残余物（`feed_preparation_rejects`）

按去向及废物/产品状态记录分选拒收物、去除涂层、油、粉尘、细料、含水污泥和其他准备残余物。

- 选定流：路线特定准备拒收物或残余物
- 流属性/单位：质量 / kg
- 数量规则：按残余物类别和去向实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参照产品净量
- 基准类型：参照流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_transfer_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 进料准备直接排放（`feed_preparation_direct_releases`）

记录所含准备操作经控制后的实测粉尘、金属、燃烧排放、挥发性有机物及水排放。

- 选定流：逐项标识的空气或水基本排放
- 流属性/单位：质量 / kg
- 数量规则：实测浓度乘以匹配的流量和运行时间，或直接质量测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参照产品净量
- 基准类型：参照流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_release_monitoring`
- 来源：`eu-jrc-nfm-bref-2017`

### 过程：铜回收与精炼（`copper_recovery_refining`）

#### 输入

##### 产品流

###### 已准备含铜进料（`recovery_prepared_feed`）

记录进入已声明火法、湿法或再生精炼路线的已准备进料，并与 `prepared_feed` 核对。

- 选定流：已准备含铜进料
- 流属性/单位：质量 / kg 物料及 kg 铜
- 数量规则：具有匹配成分和库存变化的实测工艺进料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 精炼铜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance_records`
- 来源：`eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018`

###### 回收和精炼能源载体（`recovery_refining_energy`）

分别记录路线内干燥、熔炼、吹炼、火法精炼、电解精炼、浸出、溶剂萃取或电积操作使用的电力、燃料、氧气、蒸汽和回收能源。

- 选定流：路线特定电力、燃料、氧气、蒸汽或回收能源
- 流属性/单位：能源、质量或体积 / kWh、MJ、kg 或 Nm3
- 数量规则：按载体和所含单元操作计量的用量，扣除单独计量的外输能源
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 精炼铜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018`

###### 回收和精炼用水、熔剂与试剂（`recovery_refining_auxiliaries`）

按标识记录水和路线特定的熔剂、还原剂、硫酸、萃取剂、电解液添加剂及其他工艺化学品。

- 选定流：路线特定用水、熔剂、还原剂或工艺试剂
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：由仪表、库存核对或领料记录得到的实测消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 精炼铜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_auxiliary_material_records`
- 来源：`eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入整理或合金化的精炼铜（`refined_copper_output`）

记录转移点的合格精炼铜质量及分析值，包括阴极铜、电积铜或其他认可的精炼形态；不包括阳极铜或内部返回料。

- 选定流：精炼铜 `176d7abf-4f6c-4584-a720-f9a518ce7d2d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格转移质量及匹配的纯度结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：按回收和精炼过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_acceptance_records`
- 来源：`eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018`

###### 回收副产品和外输能源（`recovery_coproducts`）

分别记录每项可销售或转移的副产品，例如硫酸、铁硅酸盐、含贵金属阳极泥、镍或硫酸铜、回收铅/锡材料、富锌粉尘或外输蒸汽。

- 选定流：逐项标识的回收副产品或外输能源载体
- 流属性/单位：质量或能源 / kg、kWh 或 MJ
- 数量规则：按库存变化和规格验收调整的实测发运或转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 精炼铜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_dispatch_records`
- 来源：`ica-copper-environmental-profile-2018`; `eu-jrc-nfm-bref-2017`

##### 废物流

###### 回收和精炼残余物与废物（`recovery_refining_residues`）

按成分、处理状态和去向记录炉渣、粉尘、废电解液、排放液处理残余物、污泥、危险废物和未回收材料；内部返回与外部废物转移分开。

- 选定流：逐项标识的回收或精炼残余物
- 流属性/单位：质量 / kg
- 数量规则：按残余物类别和去向实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 精炼铜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_transfer_records`
- 来源：`eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018`

##### 基本流

###### 回收和精炼直接排放（`recovery_refining_direct_releases`）

记录控制后逐项实测的大气和水排放，包括路线相关粉尘、金属、二氧化硫、氮氧化物、一氧化碳、温室气体、酸雾、化学需氧量和溶解金属。

- 选定流：逐项标识的空气或水基本排放
- 流属性/单位：质量 / kg
- 数量规则：实测浓度乘以匹配的流量和运行时间，或直接质量测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 精炼铜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_release_monitoring`
- 来源：`eu-jrc-nfm-bref-2017`

### 过程：铜合金和铜母合金熔炼（`alloy_master_alloy_melting`）

#### 输入

##### 产品流

###### 铜基料、分选废料和合金添加物（`alloy_charge_materials`）

按牌号、质量、分析结果和废物/产品状态分别记录精炼铜、清洁分选的内部或外部废料、母合金及元素合金添加物。

- 选定流：精炼铜、分选铜合金废料、母合金或合金添加物
- 流属性/单位：质量 / kg 物料及 kg 已声明元素
- 数量规则：具有匹配成分证书或分析值的实测炉料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格合金或母合金熔体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 合金熔炼能源和工艺助剂（`alloy_melting_energy_aids`）

按载体或材料标识记录电力或燃料、熔剂、覆盖料、脱氧剂、取样耗材及模具或流槽处理材料。

- 选定流：路线特定能源载体或合金熔炼工艺助剂
- 流属性/单位：能源或质量 / kWh、MJ 或 kg
- 数量规则：声明熔炼批次的实测载体用量和材料领用记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格合金或母合金熔体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_aid_campaign_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格合金或母合金熔体（`conforming_alloy_melt`）

记录取样和调整后、转入铸造前的合格熔体质量和最终成分。

- 选定流：声明的铜合金或铜母合金
- 流属性/单位：质量 / kg 物料及 kg 已声明元素
- 数量规则：实测转移熔体质量及匹配的最终成分结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合金化过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_acceptance_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

###### 合金化浮渣、炉渣、粉尘和不合格材料（`alloying_residues`）

分别记录浮渣、炉渣、捕集粉尘、溢出物和不合格金属；标明内部重熔、外部回收或废物处理去向。

- 选定流：逐项标识的合金化残余物或不合格金属
- 流属性/单位：质量 / kg
- 数量规则：按去向实测回收或转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格合金或母合金熔体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_transfer_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 熔炼和合金化直接排放（`alloying_direct_releases`）

记录控制后实测的粉尘、金属、氧化锌、磷化合物、适用时的铍、燃烧排放及其他路线特定排放。

- 选定流：逐项标识的空气或水基本排放
- 流属性/单位：质量 / kg
- 数量规则：实测浓度乘以匹配的流量和运行时间，或直接质量测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格合金或母合金熔体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_release_monitoring`
- 来源：`eu-jrc-nfm-bref-2017`

### 过程：产品成形与发运（`product_forming_dispatch`）

#### 输入

##### 产品流

###### 合格精炼铜或合格合金熔体（`forming_metal_input`）

记录进入阴极剥片和整理、锭或坯铸造、丸粒成形或其他声明未锻轧形态操作的合格金属。

- 选定流：合格精炼铜或合格铜合金熔体
- 流属性/单位：质量 / kg
- 数量规则：与上游过程输出核对的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参照产品净量
- 基准类型：参照流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance_records`
- 来源：`epd-pcr-2023-01-v2-0-1`; `eu-jrc-nfm-bref-2017`

###### 成形能源、用水、模具处理和包装（`forming_dispatch_inputs`）

分别记录电力、燃料、冷却和清洗用水、脱模剂、捆扎带、托盘、包膜及其他包装；包装不计入参照产品质量。

- 选定流：路线特定能源、用水、成形助剂或包装材料
- 流属性/单位：能源、质量或体积 / kWh、MJ、kg 或 m3
- 数量规则：针对合格输出的实测用量或库存核对量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参照产品净量
- 基准类型：参照流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_forming_packaging_records`
- 来源：`epd-pcr-2023-01-v2-0-1`; `eu-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 生产者出厂的合格产品净量（`reference_product_output`）

记录恰好 1,000 kg 具有必需限定信息和产品验收证据的合格精炼铜、未锻轧铜合金或铜母合金净量。

- 选定流：铜及铜合金 `39b46f9b-dec5-4c9a-9b23-9f38911fe7f7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：生产者门口 1,000 kg 合格产品净量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参照流
- 基准类型：参照流（`reference_flow`）
- 证据类型：外部来源（`external_source`）
- 来源：`epd-pcr-2023-01-v2-0-1`; `ica-copper-environmental-profile-2018`
- 数量范围：参照流恒等值
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：生产者出厂的合格产品净量
  - 基准类型：参照流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`epd-pcr-2023-01-v2-0-1`; `ica-copper-environmental-profile-2018`

###### 内部返回金属（`internal_return_metal`）

分别记录切边阴极、浇道、溢出物、不合格金属及其他内部返回料，并链接至接收单元；它们既不是参照产品，也不是外部再生含量投入。

- 选定流：内部返回的铜或铜合金材料
- 流属性/单位：质量 / kg
- 数量规则：按来源、去向和成分实测内部转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参照产品净量
- 基准类型：参照流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_return_records`
- 来源：`epd-pcr-2023-01-v2-0-1`

##### 废物流

###### 成形和包装废物（`forming_packaging_waste`）

按材料和去向记录未返回金属损失、废模具处理材料、损坏包装及其他废物。

- 选定流：逐项标识的成形或包装废物
- 流属性/单位：质量 / kg
- 数量规则：按废物类别和去向实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参照产品净量
- 基准类型：参照流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_transfer_records`
- 来源：`epd-pcr-2023-01-v2-0-1`

##### 基本流

###### 成形和发运直接排放（`forming_direct_releases`）

记录燃烧、铸造、冷却、清洗及包装操作经控制后的实测排放。

- 选定流：逐项标识的空气或水基本排放
- 流属性/单位：质量 / kg
- 数量规则：实测浓度乘以匹配的流量和运行时间，或直接质量测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参照产品净量
- 基准类型：参照流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_release_monitoring`
- 来源：`eu-jrc-nfm-bref-2017`

### 过程：排放与残余物控制（`emission_residue_control`）

#### 输入

##### 产品流

###### 污染控制能源和处理试剂（`abatement_inputs`）

按所服务的控制系统记录电力、燃料、水、石灰、絮凝剂、吸附剂、滤材和其他处理投入。

- 选定流：路线特定能源载体或处理试剂
- 流属性/单位：能源、质量或体积 / kWh、MJ、kg 或 m3
- 数量规则：分配至所含前景操作的实测用量或库存核对量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参照产品净量
- 基准类型：参照流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_abatement_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

###### 接收控制的烟气粉尘、废水、排放液、炉渣和残余物流（`streams_to_control`）

在来源和接收控制系统处记录各受控流，不得把同一质量重复记为最终排放。

- 选定流：逐项标识的烟气、废水、排放液、炉渣、粉尘或残余物流
- 流属性/单位：质量或体积 / kg、Nm3 或 m3
- 数量规则：控制系统的实测转移量或匹配的流量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参照产品净量
- 基准类型：参照流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_abatement_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

#### 输出

##### 产品流

###### 回收材料和可复用处理输出（`recovered_treatment_outputs`）

依实际去向和验收状态，将回收含铜粉尘、氧化锌、酸、金属、水或热记录为内部返回或外部副产品。

- 选定流：逐项标识的回收材料、水或能源载体
- 流属性/单位：质量、体积或能源 / kg、m3、kWh 或 MJ
- 数量规则：按去向和验收状态实测的回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参照产品净量
- 基准类型：参照流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_dispatch_records`
- 来源：`eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018`

##### 废物流

###### 最终处理残余物和外运废物（`final_treatment_residues`）

按成分、分类和去向记录滤尘、石膏、水处理污泥、废介质、危险残余物和其他最终转移物。

- 选定流：逐项标识的最终处理残余物或废物
- 流属性/单位：质量 / kg
- 数量规则：按残余物类别和去向实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参照产品净量
- 基准类型：参照流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_transfer_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 向空气和水的剩余受控排放（`controlled_elementary_releases`）

使用最终排放点、匹配的流量、运行期间和检出限处理，记录每项经处理后的实测排放。

- 选定流：逐项标识的空气或水基本排放
- 流属性/单位：质量 / kg
- 数量规则：实测浓度乘以匹配的排放流量和运行时间，或直接质量测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参照产品净量
- 基准类型：参照流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_release_monitoring`
- 来源：`eu-jrc-nfm-bref-2017`

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 共用前景操作 | 优先通过拆分单元操作，或采用分别计量的材料、能源、排放和生产记录避免分配。记录拆分及保留的共用服务。 | `epd-pcr-2023-01-v2-0-1`; `ica-copper-environmental-profile-2018` |
| `allocation_internal_loops` | 内部铜、合金、粉尘、酸、水和能源返回 | 将内部返回保留在前景质量和能源平衡内。不得将内部循环作为副产品、再生含量投入、避免负担或重复上游投入。 | `epd-pcr-2023-01-v2-0-1` |
| `allocation_coproducts` | 可销售金属、酸、炉渣产品、回收化合物和外输能源 | 标识每项副产品及其分离点。不能拆分时使用有文件支持的物理因果关系；若无法支持，则用经济分配，并声明代表性价格期和敏感性检验。不得隐式应用替代信用。 | `ica-copper-environmental-profile-2018`; `epd-pcr-2023-01-v2-0-1` |
| `allocation_scrap_status` | 二次含铜投入和送往回收的金属输出 | 声明每个流在前景边界处是废物还是产品，以及采用的废物终止口径。按该 EPD PCR 的分配约定，来源未知的废料场材料视为废物；其他约定应另行报告，不得混用。 | `epd-pcr-2023-01-v2-0-1` |
| `allocation_route_transparency` | 原生、再生、混合、合金和母合金数据集 | 报告原生和再生进料份额、铜含量口径、内部返回份额、副产品方法及各路线分配负担。混合数据集必须由分别记录的路线清单按产量加权。 | `ica-copper-environmental-profile-2018`; `eu-jrc-nfm-bref-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_input_records` | `feed_preparation`; `alloy_master_alloy_melting` | 含铜进料和合金添加物 | 地磅、衡器、接收、批次、证书和分析记录 | material_id; supplier_or_source; product_or_waste_status; gross_mass; tare_mass; moisture; copper_fraction; alloying_element_fractions; lot_time; destination | 将合格净质量与库存变动核对，每批匹配代表性成分证据 | kg 物料；kg 元素；质量分数 | 逐批，按月汇总 | 至少连续 12 个有代表性的月份，或较短完整生产批期 | 每个所含设施和路线 | 一致地汇总合格干基或收到基质量；仅用匹配质量和成分计算元素质量 | 衡器校准；分析方法；证书可追溯性；库存核对 |
| `cp_energy_records` | `feed_preparation`; `copper_recovery_refining` | 电力、燃料、氧气、蒸汽和热 | 仪表、发票、储罐和运行小时记录 | carrier_id; meter_start; meter_end; purchase; stock_change; export; lower_or_higher_heating_value; unit_operation; period | 优先分表计量；否则按有文件记录的运行驱动因素分配，并与全场总量核对 | kWh；MJ；kg；Nm3 | 连续或逐次交付，按月汇总 | 与产品输出相同期间 | 每个所含单元操作和共用公用工程 | 载体净用量等于实测投入加库存减少，减外输和有记录的非前景用量 | 仪表校准；发票核对；热值来源；分配理由 |
| `cp_auxiliary_material_records` | `feed_preparation`; `copper_recovery_refining` | 水、熔剂、还原剂、酸、萃取剂、电解液添加物和其他助剂 | 仪表、领料、采购、储罐和库存记录 | material_id; quantity; concentration; opening_stock; closing_stock; return; unit_operation; period | 核对交付和库存变化；分别记录溶液浓度和回收返回量 | kg；m3；质量分数 | 逐次交付或逐批，按月汇总 | 与产品输出相同期间 | 每个所含单元操作 | 消耗量等于接收量加期初库存，减期末库存及有记录的返回或转移 | 仪表校准；库存核对；化学品规格 |
| `cp_material_balance_records` | `feed_preparation`; `copper_recovery_refining`; `product_forming_dispatch` | 过程转移和金属平衡 | 转移衡器、库存、分析和生产日志 | stream_id; input_mass; output_mass; inventory_start; inventory_end; moisture; element_fraction; internal_return; period | 在匹配边界和期间核对总物料、铜或已声明合金元素 | kg 物料；kg 元素 | 可得时逐批，按月和年度核对 | 与产品输出相同期间 | 每个所含过程和设施 | 在有文件记录的不确定度内，投入加库存减少等于输出、转移、排放、残余物和库存增加 | 平衡闭合；衡器校准；匹配分析；调查日志 |
| `cp_product_acceptance_records` | `copper_recovery_refining`; `alloy_master_alloy_melting`; `product_forming_dispatch` | 精炼铜、合金熔体和出厂产品 | 衡器、批次、实验室和放行记录 | product_id; grade; form; net_mass; copper_fraction; alloying_element_fractions; impurity_results; release_status; timestamp | 将净质量与已放行批次或期间及适用成分或纯度规范匹配 | kg；质量分数 | 逐批或逐次发运 | 完整参照期 | 每条所含生产线和产品牌号 | 仅汇总已放行合格产品；分别跟踪不合格品和内部返回 | 衡器校准；实验室质量保证；产品证书；放行授权 |
| `cp_coproduct_dispatch_records` | `copper_recovery_refining`; `emission_residue_control` | 副产品、回收输出和外输能源 | 衡器、仪表、库存、销售和转移记录 | output_id; mass_or_energy; composition; acceptance_status; destination; revenue_basis_if_used; timestamp | 将实物发运或内部转移与规格和去向匹配 | kg；kWh；MJ | 逐次发运，按月汇总 | 与产品输出相同期间 | 每个所含设施 | 汇总合格发运并按库存变化调整；内部返回分开 | 衡器或仪表校准；证书；去向收据；经济分配时的价格期证据 |
| `cp_residue_transfer_records` | all processes | 拒收物、炉渣、浮渣、粉尘、污泥、废介质、废水残余物和废物 | 衡器、联单、实验室和去向记录 | residue_id; mass; moisture; composition; hazard_status; internal_or_external; destination; treatment; timestamp | 测量转移质量并保留分类和去向证据 | kg；质量分数 | 逐次转移，按月汇总 | 与产品输出相同期间 | 每个所含设施 | 按残余物标识和去向汇总；从外部转移量中扣除有记录的内部返回 | 衡器校准；废物联单；分析；处理收据 |
| `cp_direct_release_monitoring` | all processes | 直接大气和水排放 | 连续监测、烟囱测试、排水取样、流量计和运行记录 | release_id; compartment; concentration; flow; duration; detection_limit; oxygen_or_moisture_reference; control_status; period | 匹配浓度、代表性流量和运行时间；保留低于检出限处理及基准条件 | kg；mg/Nm3；mg/L；Nm3；m3 | 可得时连续，并按许可或代表性测试频率 | 与产品输出相同期间 | 每个所含排放点 | 按点位和污染物计算质量排放后汇总，不重复受控流与最终排放 | 校准；认可测试；取样计划；许可报告；数据覆盖说明 |
| `cp_energy_and_aid_campaign_records` | `alloy_master_alloy_melting` | 批期能源和工艺助剂 | 仪表、炉次日志、批次、领料和库存记录 | campaign_id; product_grade; carrier_use; aid_mass; charge_mass; tap_mass; start_time; end_time | 将批期特定用量与合格熔体核对并记录共用负荷分配 | kWh；MJ；kg | 每个熔炼批期 | 覆盖参照期的代表性批期 | 每台合金或母合金炉及牌号族 | 按产量加权合格批期；披露排除或异常批期 | 仪表校准；批次日志；库存核对；批期覆盖率 |
| `cp_forming_packaging_records` | `product_forming_dispatch` | 成形投入和包装 | 仪表、批次、包装领用和发运记录 | product_grade; accepted_mass; energy; water; mould_treatment; packaging_material; packaging_mass; pallet_mass; dispatch_id | 将成形和包装投入与合格发运输出匹配 | kWh；MJ；kg；m3 | 逐批或逐次发运，按月汇总 | 与产品输出相同期间 | 每条所含成形和发运线 | 按产品牌号汇总；包装保持在金属净参照质量外 | 发运核对；包装规格；仪表校准 |
| `cp_internal_return_records` | `product_forming_dispatch` | 内部金属返回 | 转移衡器、批次、来源和去向记录 | return_id; source_process; destination_process; mass; composition; timestamp | 在来源和去向处记录同一个转移标识 | kg | 逐次转移，按月汇总 | 与产品输出相同期间 | 整个所含前景 | 在各过程平衡中各计一次，但在系统层面抵消为外部前景投入/输出 | 转移核对；衡器校准；匹配的来源和去向日志 |
| `cp_abatement_records` | `emission_residue_control` | 受控流和处理投入 | 控制系统仪表、运行、维护、试剂和转移记录 | control_id; source_stream; flow; operating_time; reagent; energy; captured_mass; discharge_point; downtime | 将控制运行与源操作及最终排放或残余物记录匹配 | kg；m3；Nm3；kWh；h | 连续或逐批，按月汇总 | 与所服务生产相同期间 | 每个所含控制系统 | 核对接收流、捕集输出、剩余排放和库存变化 | 监测仪校准；维护日志；停机记录；试剂核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景行 | 归一化量 = 期间量 / 期间合格产品净产量 × 1,000 kg | 期间流量；生产者出厂合格产品净质量 | 每 1,000 kg 参照产品的流量 | `epd-pcr-2023-01-v2-0-1`; `ica-copper-environmental-profile-2018` |
| `calc_dry_mass` | 含水材料 | 干质量 = 收到基质量 ×（1 - 实测水分质量分数） | 收到基质量；匹配水分分数 | 干质量及保留的收到基质量 | `eu-jrc-nfm-bref-2017` |
| `calc_element_mass` | 铜和合金元素平衡 | 元素质量 = 物料质量 × 匹配的元素质量分数 | 物料质量；分析或证书分数 | kg 铜或已声明合金元素 | `eu-jrc-nfm-bref-2017` |
| `calc_material_balance` | 每个过程及前景总计 | 闭合差 = 投入 + 库存减少 - 产品 - 副产品 - 废物 - 基本流排放 - 库存增加；报告差异及调查原因 | 匹配的物料转移、库存、成分、排放和残余物 | 物料和元素平衡闭合说明 | `eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018` |
| `calc_recycled_content` | 再生或混合路线产品 | 外部再生含量 = 进入前景的合格外部二次材料质量 / 参照产品净质量；同时报告物料质量和铜含量口径，排除内部返回 | 外部二次投入质量和铜含量；内部返回质量；产品净质量 | 具有声明口径的再生含量分数 | `epd-pcr-2023-01-v2-0-1` |
| `calc_direct_release` | 大气和水排放 | 排放质量 = 匹配浓度 × 排放流量 × 运行时间，并记录单位和基准条件换算 | 浓度；流量；时间；检出限规则；基准条件 | 每种污染物和排放点的 kg 排放量 | `eu-jrc-nfm-bref-2017` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参照产品和全部路线输出 | 产品族、牌号、成分或纯度、未锻轧形态、路线、地点、期间和验收规范必须可追溯至已放行产品记录。 | 产品证书、实验室结果、批次放行和发运记录 |
| `dq_temporal_representativeness` | 前景清单 | 除非较短批期即完整生产周期，否则采用至少连续 12 个代表性月份；披露停产、异常批期、缺失期间和产量加权。 | 生产日历、仪表覆盖、批期清单和完整性计算 |
| `dq_route_separation` | 原生、再生、合金和母合金路线 | 在计量或记录允许时分开实质不同的路线、炉型、进料类别和产品牌号；论证每项汇总。 | 过程图、仪表图、批次记录和汇总理由 |
| `dq_measurement_control` | 质量、成分、能源、水和排放 | 使用经校准仪器以及有文件记录的实验室或监测方法；声明检出限和缺失数据处理。 | 校准证书、质量保证/控制记录、认可测试报告和替代日志 |
| `dq_balance_completeness` | 物料、铜、合金元素、水和能源平衡 | 在匹配期间核对所含流并调查物料缺口；不得用未说明损失流强制闭合。 | 平衡工作簿、库存核对、调查记录和签署复核 |
| `dq_upstream_compatibility` | 上游和外部处理数据集 | 评估地域、技术、时间、产品标识、再生含量约定和边界兼容性；披露代理及排除阶段。 | 数据集元数据、来源审查、代理登记和覆盖说明 |
| `dq_allocation_transparency` | 共用操作和副产品 | 保留足以复现分配量的拆分、因果、物理、经济和敏感性证据。 | 计量图、分配工作簿、价格期证据和敏感性结果 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参照流 | 若产品不是精炼铜、未锻轧铜合金或铜母合金，或缺少牌号/成分、未锻轧形态、路线、生产者门口和参照期，则失败。 | `unsd-cpc-3-0`; `epd-pcr-2023-01-v2-0-1` |
| `validate_reference_mass` | 参照量 | 除非质量属性上的合格参照产品净量恰为 1,000 kg，且包装和内部返回不计入该质量，否则失败。 | `epd-pcr-2023-01-v2-0-1`; `ica-copper-environmental-profile-2018` |
| `validate_route_processes` | 过程图 | 若路线相关的回收、精炼、合金化、母合金、产品成形、污染控制或残余物管理操作被省略，且无上游数据集或明确排除理由，则失败。 | `eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018` |
| `validate_feed_status` | 原生和再生进料 | 若进料标识、质量口径、成分、产品/废物状态、来源或内部返回处理缺失，或在接收和过程转移记录间不一致，则失败。 | `epd-pcr-2023-01-v2-0-1`; `eu-jrc-nfm-bref-2017` |
| `validate_balance` | 物料和元素平衡 | 若物料和铜或已声明合金元素平衡缺失、使用不匹配期间，或把未解释的闭合差隐藏为未说明损失，则失败。 | `eu-jrc-nfm-bref-2017` |
| `validate_direct_releases` | 大气和水清单 | 若受控流在处理前后重复计算，或计算排放缺少匹配浓度、流量、持续时间、单位及检出限处理，则失败。 | `eu-jrc-nfm-bref-2017` |
| `validate_coproduct_allocation` | 副产品和共用操作 | 若省略副产品、把内部返回计为副产品信用，或分配/替代方法缺少分离点、理由、代表性期间及可复现计算，则失败。 | `ica-copper-environmental-profile-2018`; `epd-pcr-2023-01-v2-0-1` |
| `validate_data_coverage` | 前景期间 | 若未报告时间、设施、路线或产品牌号覆盖，或未披露缺失数据和代理，则失败。 | `epd-pcr-2023-01-v2-0-1` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明精炼铜、未锻轧铜合金或铜母合金产品及路线的生产者出厂前景清单 |
| downstream_use | 经方法学审查、质量审查和发布控制后，可作为 `secondary_dataset`；`background_dataset` |
| allowed_use | 当产品标识、地域、技术、时间、再生含量约定、分配和生产者出厂边界兼容时，用于下游半成品加工和产品系统的上游供应建模 |
| excluded_use | 未协调情况下直接比较不同牌号、纯铜与合金或母合金、原生与再生路线，或不同再生含量和副产品约定；作为半成品或成品数据集；在必需限定信息未知时作为通用铜代理 |
| required_metadata | PCR id 及发布后的版本；产品族；牌号和成分；纯度或铜含量；未锻轧形态；原生/再生/混合路线及进料份额；再生含量口径；设施和所含单元操作；地域；技术；参照期；参照净质量；包装；上游数据集；副产品；分配和截断方法；数据覆盖 |
| required_quality_disclosure | 仪表和分析覆盖；校准和实验室方法；物料和元素平衡闭合；时间和场址覆盖；路线汇总；直接排放监测覆盖；缺失数据和检出限处理；代理数据集；分配敏感性；未解决局限 |
| update_trigger | 牌号或产品形态、路线或炉型技术、进料来源或原生/再生份额、再生含量约定、副产品处理、系统边界、污染控制、设施组合、分配方法、上游电力或主要材料数据集发生变化，或证据实质改变归一化结果 |

## 11. 数据来源

| 来源 id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | 联合国统计司。《Central Product Classification, Version 3.0》结构和分类资源。https://unstats.un.org/unsd/classifications/Econ/CPC（检索于 2026-08-09）。 | 产品类别范围和 CPC 41413 标识 |
| `epd-pcr-2023-01-v2-0-1` | `standard` | EPD International。PCR 2023:01，《Fabricated metal products, except construction products》，2.0.1 版，发布日期 2026-02-25，有效至 2029-07-29。https://www.environdec.com/pcr-library/pcr_164859f7-28a7-42a3-3bec-08d9945ab091（检索于 2026-08-09）。 | CPC 414 适用性、1 吨生产者出厂声明单位、包装分离、生命周期边界、过程流披露、废料状态、分配和数据质量框架 |
| `eu-jrc-nfm-bref-2017` | `official_guidance` | 欧盟委员会联合研究中心。《Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries》。EUR 28648 EN，2017。DOI: 10.2760/8224。https://op.europa.eu/en/publication-detail/-/publication/c0bc6046-651c-11e7-b2f2-01aa75ed71a1（检索于 2026-08-09）。 | 原生和再生铜路线、电解精炼、湿法冶金、铜合金锭、母合金生产、投入、残余物、排放和污染控制过程分解 |
| `ica-copper-environmental-profile-2018` | `dataset` | International Copper Association。《Copper Environmental Profile: Copper Cathode Life Cycle Assessment》，2018。https://copperalliance.org/wp-content/uploads/2021/08/ICA-EnvironmentalProfileHESD-201803-FINAL-LOWRES-1.pdf（检索于 2026-08-09）。 | 铜阴极路线覆盖、从摇篮到大门边界、1,000 kg 功能单位、原生和再生数据采集、副产品标识及副产品处理备选方法 |
