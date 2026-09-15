---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-primary-cells-primary-batteries-and-electric-accumulators-including-separators
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原电池、原电池组和蓄电池的零件（包括隔膜）

## 1. 范围与适用性

本 PCR 适用于专供原电池、原电池组或蓄电池装配使用、作为独立产品供应的电池零件的厂内门到门制造。它为微孔聚烯烃隔膜、涂布锂离子电池电极以及铅酸电池板栅或极板规定路线特定的前景规则。数据包只能选择与所声明零件实际相符的过程路线和原子交换流。

边界始于符合规格的外购材料进入零件制造厂，止于合格零件在同一厂区门口放行。边界不包括外购活性材料、金属、聚合物、化学品、电力、燃料和水的上游生产；完整电芯或完整电池的装配；完整电芯注液；电池管理电子装置；使用；制造厂门后运输以及报废处理。出厂配送包装不属于本参考流；研究如另行纳入，必须披露。

已确认的参考产品是电池隔膜。过程和数据规则可指导其他纳入范围内的零件类别，但非隔膜数据集必须采用本零件自己的、经批准的精确产品流，不得复用 Battery Separator UUID。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-primary-cells-primary-batteries-and-electric-accumulators-including-separators |
| classification_refs | CPC 3.0：46430，精确分类语境 |
| covered_products | 独立销售的电池隔膜；涂布正极或负极；铅酸电池板栅以及涂膏或化成极板；其他电池专用待装配零件仅在提供精确产品流和路线特定清单时纳入 |
| excluded_products | 完整原电池、原电池组和蓄电池；作为化学品销售的上游活性材料粉体；不能证明为电池专用的通用金属或塑料制品；单独销售的电解液；电池管理系统；作为废物销售或转移的生产废料；维修服务 |
| representative_product | 干燥并放行用于电池装配的微孔聚烯烃电池隔膜 |
| production_route | 条件适用的聚烯烃隔膜转化、锂离子电池电极涂布与精整或铅酸电池板栅/极板制造；必须声明所选路线和技术 |
| market_state | 在制造厂门口放行的合格、独立供应、待装配零件；干燥，尺寸和规格已声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 经检验合格、用于所声明电芯或电池体系装配的微孔电池隔膜 |
| How much | 1 kg 合格隔膜产品净干质量，不含出厂配送包装 |
| How well | 符合生产者声明的材料结构、厚度、孔隙率、机械性能、热性能、洁净度和相容性规格；不合格产品不得计入参考数量 |
| How long or cycle | 一个生产报告期，并披露批次和生产活动覆盖范围 |
| reference_flow_link | 将合格输出 `separator_product` 归一化为 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 电池隔膜 `e99018c0-aaf6-4f02-81cd-3dadeda4fabb` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件类别；原电池或可充电电池用途；电化学体系；隔膜聚合物和层结构；涂层材料及涂层状态；隔膜干法或湿法工艺；厚度；孔隙率或透气度规格；宽度和交付形式；合格产品水分基准；再生含量声明；生产地域；技术；报告期；分配方法；包装排除或纳入情况 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | 参考产品和所有质量归一化行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将交换归一化为 1 kg 合格产品净干质量。水分或残留工艺油影响称量质量时应予记录，分母不得包括不合格材料或配送包装。 |
| `measurement_electricity` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表读数，并按 1 kWh = 3.6 MJ 换算为 MJ；声明计量边界和任何分表分配。 |
| `measurement_natural_gas` | 天然气行 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按供应商或计量表的参比状态报告气体体积，并声明温度、压力以及标准体积或实际体积。 |
| `measurement_solutions` | 硫酸、NMP、液体石蜡和工艺用水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录跨越边界的外购或补充物料总质量，并在适用时分别声明浓度、纯度、回收比例以及留存或蒸发比例。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购聚合物、金属、活性材料、粘结剂、溶剂、化学品、水、燃料和电力带有规格及供应商识别记录，进入电池零件制造厂。 |
| starting_condition_role | 路线特定前景转化的上游产品投入 |
| product_classification_scope | 独立供应、待装配的原电池、原电池组和蓄电池零件；已确认的参考对象为电池隔膜 |
| recursive_input_rule | 对已属于本产品类别的外购零件，作为上游产品投入按精确零件身份记录一次；除非厂内实施该制造并将其作为独立子过程记录，否则不得在同一前景过程中递归纳入其制造。 |
| upstream_dataset_requirement | 优先采用供应商和地域特定的上游数据集；否则披露代理地域、技术、产品状态、再生含量及缺失的供应商数据。 |
| disclosure | 声明零件类别、化学体系、路线、纳入操作、外购或厂内材料制备、溶剂回收、排放控制、废料去向、合格输出质量、排除项以及任何新增包装或运输。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | 所有前景数据包 | 仅纳入所声明零件实际发生的路线特定过程和原子交换流；除非有记录充分的产品组合及共同参考产品支持汇总，不得将隔膜、锂离子电池电极和铅酸电池板栅/极板路线合并平均。 | `mun-won-polyolefin-separator-manufacturing-2021`; `hawley-li-ion-electrode-manufacturing-2019`; `us-epa-ap42-storage-battery-production-1995` |
| `boundary_upstream_inputs` | 外购材料和公用工程 | 前景边界止于外购投入的接收点，并将每项投入链接到上游数据集；不得在前景路线内重复聚合、采矿、精炼、活性材料合成、金属生产、发电、供气或供水。 |  |
| `boundary_controls_and_recovery` | 溶剂回收和大气污染控制 | 当厂内回收和控制设备服务于所选路线时，纳入其能源、水、回收物料、捕集废物和残余直接排放。 | `hawley-li-ion-electrode-manufacturing-2019`; `us-epa-ap42-storage-battery-production-1995` |
| `boundary_complete_battery_exclusion` | 下游装配 | 排除电芯叠片或卷绕、完整电池装配、完整电芯注液、完整电池化成、使用和报废；仅当所声明产品本身就是相应的独立供应零件且该操作发生在放行门之前时例外。 | `un-cpc-3-0-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `separator_manufacturing` | 微孔聚烯烃隔膜制造 | `conditional` | 参考产品为聚烯烃电池隔膜时纳入；依据所声明技术选择干法 PP、湿法 PE、多层及陶瓷涂布操作。 | 前景薄膜转化、成孔、涂布、精整和放行 | 1 kg 合格干隔膜 |
| `lithium_ion_electrode_manufacturing` | 锂离子电池电极制造 | `conditional` | 产品为独立供应的涂布锂离子电池负极或正极时纳入；仅记录所声明极性、化学体系、溶剂和集流体。 | 前景浆料制备、涂布、干燥、溶剂回收、辊压、分切和放行 | 1 kg 合格干电极 |
| `lead_acid_grid_plate_manufacturing` | 铅酸电池板栅或极板制造 | `conditional` | 产品为独立供应的铅酸电池板栅或涂膏/化成极板时纳入；区分铸造或冲压板栅以及涂膏或化成极板状态。 | 前景合金熔化、铸造或冲压、铅膏制备、涂膏、固化、可选化成、精整和放行 | 1 kg 合格板栅或极板 |

### 过程：微孔聚烯烃隔膜制造（`separator_manufacturing`）

#### 输入

##### 产品流

###### 聚乙烯树脂（`separator_polyethylene`）

所声明隔膜采用 PE 湿法工艺或含 PE 多层路线时，记录初级形态聚乙烯。

- 选定流：聚乙烯 `f4dfd1a4-b24e-471e-bd21-04ad7a45ea52`
- 流属性/单位：Mass / kg
- 数量规则：计量投入路线的聚乙烯净量，包括开机料和损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格隔膜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separator_records`
- 来源：`mun-won-polyolefin-separator-manufacturing-2021`

###### 聚丙烯树脂（`separator_polypropylene`）

仅对干法 PP 或含 PP 多层路线记录初级形态隔膜级聚丙烯；精确 Tiangong UUID 尚未解决。

- 选定流：聚丙烯树脂
- 流属性/单位：Mass / kg
- 数量规则：计量投入路线的聚丙烯净量，包括开机料和损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格隔膜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separator_records`
- 来源：`mun-won-polyolefin-separator-manufacturing-2021`

###### 液体石蜡工艺油（`separator_liquid_paraffin`）

仅在湿法隔膜工艺中记录用作成孔稀释剂的液体石蜡；不得以石蜡或通用矿物油替代。

- 选定流：液体石蜡工艺油
- 流属性/单位：Mass / kg
- 数量规则：计量进入前景边界的新鲜和补充液体石蜡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格隔膜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separator_records`
- 来源：`mun-won-polyolefin-separator-manufacturing-2021`

###### 氧化铝涂层粉体（`separator_aluminium_oxide`）

仅在生产氧化铝涂覆隔膜时记录氧化铝；声明纯度、粒度规格及其是否以涂布配方形式供应。

- 选定流：氧化铝 `1ab686e8-5888-4f37-8fe7-3030773ddc9e`
- 流属性/单位：Mass / kg
- 数量规则：计量进入涂布操作的干氧化铝
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格隔膜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separator_records`
- 来源：`mun-won-polyolefin-separator-manufacturing-2021`

###### 电力（`separator_electricity`）

记录挤出、拉伸、萃取、涂布、干燥、收卷、通风及路线专用辅助设施的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：在所声明计量边界读取的路线用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格隔膜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separator_records`
- 来源：`mun-won-polyolefin-separator-manufacturing-2021`

###### 工艺用水（`separator_process_water`）

记录为冷却、清洗、萃取辅助或涂布制备而跨越边界的工艺用水；不记录不跨界的闭路循环量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量新鲜和补充工艺用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格隔膜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separator_records`
- 来源：`mun-won-polyolefin-separator-manufacturing-2021`

###### 气态天然气（`separator_natural_gas`）

仅当现场燃烧天然气提供路线专用热负荷时记录；直接基本流输出不含上游燃料供应排放。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量输送到路线专用加热器的天然气，或从共同计量表按有记录的方法分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格隔膜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separator_records`
- 来源：`mun-won-polyolefin-separator-manufacturing-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格电池隔膜（`separator_product`）

仅记录通过放行检验的隔膜质量。开机膜、边料和不合格卷不得计入本输出。

- 选定流：电池隔膜 `e99018c0-aaf6-4f02-81cd-3dadeda4fabb`
- 流属性/单位：Mass / kg
- 数量规则：将合格隔膜净干质量归一化为恰好 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格隔膜
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_separator_records`
- 来源：`mun-won-polyolefin-separator-manufacturing-2021`

##### 废物流

###### 聚乙烯隔膜边角废料（`separator_pe_offcut_waste`）

仅当干燥 PE 开机膜、边料和不合格隔膜作为独立固体废物流移出过程时记录，并声明污染状态。

- 选定流：聚乙烯电池隔膜边角废料
- 流属性/单位：Mass / kg
- 数量规则：称量离开前景过程的 PE 隔膜边料和不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格隔膜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separator_records`
- 来源：`mun-won-polyolefin-separator-manufacturing-2021`

###### 聚丙烯隔膜边角废料（`separator_pp_offcut_waste`）

仅当干燥 PP 开机膜、边料和不合格隔膜作为独立固体废物流移出过程时记录，并声明污染状态。

- 选定流：聚丙烯电池隔膜边角废料
- 流属性/单位：Mass / kg
- 数量规则：称量离开前景过程的 PP 隔膜边料和不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格隔膜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separator_records`
- 来源：`mun-won-polyolefin-separator-manufacturing-2021`

##### 基本流

###### 排入空气的化石源二氧化碳（`separator_carbon_dioxide`）

记录服务本路线的现场天然气燃烧所产生的实测直接化石源二氧化碳；不含上游发电或燃料供应排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或经设施核实并分配给隔膜路线的直接烟气排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格隔膜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separator_records`
- 来源：

### 过程：锂离子电池电极制造（`lithium_ion_electrode_manufacturing`）

#### 输入

##### 产品流

###### 富镍 NMC 正极活性材料（`electrode_nickel_rich_nmc`）

仅对所声明的富镍 NMC 正极记录本投入，不得用于其他正极化学体系。

- 选定流：富镍 NMC `f9e483f6-34da-43a9-bb96-c86bca4b494b`
- 流属性/单位：Mass / kg
- 数量规则：计量投入正极浆料或干法电极混合的干活性材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格电极
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrode_records`
- 来源：`hawley-li-ion-electrode-manufacturing-2019`

###### 石墨活性材料粉体（`electrode_graphite_powder`）

仅对石墨负极路线记录电池级石墨粉体；精确 Tiangong UUID 尚未解决。

- 选定流：电池级石墨活性材料粉体
- 流属性/单位：Mass / kg
- 数量规则：计量投入负极浆料或干法电极混合的干石墨粉体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格电极
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrode_records`
- 来源：`hawley-li-ion-electrode-manufacturing-2019`

###### 炭黑导电剂（`electrode_carbon_black`）

记录作为导电剂使用的炭黑，不得与活性材料或粘结剂合并。

- 选定流：炭黑
- 流属性/单位：Mass / kg
- 数量规则：计量投入电极混合的干炭黑
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格电极
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrode_records`
- 来源：`hawley-li-ion-electrode-manufacturing-2019`

###### PVDF 粘结剂（`electrode_pvdf`）

仅当所声明电极配方采用该粘结剂时记录 PVDF。

- 选定流：聚偏氟乙烯（PVDF） `f7f888c7-9524-4326-9a36-86f91e184a0b`
- 流属性/单位：Mass / kg
- 数量规则：计量投入混合的干 PVDF 粘结剂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格电极
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrode_records`
- 来源：`hawley-li-ion-electrode-manufacturing-2019`

###### NMP 溶剂（`electrode_nmp`）

对基于 NMP 的湿法涂布路线，记录进入前景边界的新鲜和补充 NMP 总量；另行记录回收和残余空气排放。

- 选定流：N-甲基-2-吡咯烷酮 `5c41bfdd-a740-4672-aa66-88df7ea25f81`
- 流属性/单位：Mass / kg
- 数量规则：计量跨越前景边界的外购和补充 NMP
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格电极
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrode_records`
- 来源：`hawley-li-ion-electrode-manufacturing-2019`

###### 铝集流体箔（`electrode_aluminium_foil`）

仅对采用铝集流体制造的电极记录铝箔，并声明合金、厚度和表面处理。

- 选定流：铝箔材 `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- 流属性/单位：Mass / kg
- 数量规则：计量发往涂布的铝箔，包括边料和开机损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格电极
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrode_records`
- 来源：`hawley-li-ion-electrode-manufacturing-2019`

###### 铜集流体箔（`electrode_copper_foil`）

仅对采用铜集流体制造的电极记录铜箔，并声明厚度、状态和表面处理。

- 选定流：铜箔 `2e6d00db-7f50-43db-b13d-f8d4c14e51c5`
- 流属性/单位：Mass / kg
- 数量规则：计量发往涂布的铜箔，包括边料和开机损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格电极
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrode_records`
- 来源：`hawley-li-ion-electrode-manufacturing-2019`

###### 电力（`electrode_electricity`）

记录混合、涂布、干燥、溶剂回收、辊压、分切、通风、分配给本路线的干燥房服务和检验用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：在所声明计量边界读取的路线用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格电极
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrode_records`
- 来源：`hawley-li-ion-electrode-manufacturing-2019`

###### 工艺用水（`electrode_process_water`）

记录为水系浆料、设备清洗、冷却补水或控制设备而跨越边界的水，并声明用途。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量新鲜和补充工艺用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格电极
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrode_records`
- 来源：`hawley-li-ion-electrode-manufacturing-2019`

###### 气态天然气（`electrode_natural_gas`）

仅当现场燃烧天然气用于电极干燥或溶剂回收时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量输送到路线专用热设备的天然气，或从共同计量表按有记录的方法分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格电极
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrode_records`
- 来源：`hawley-li-ion-electrode-manufacturing-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格石墨阳极（`electrode_graphite_anode_product`）

仅对经检验合格并以待电池装配状态放行的石墨负极记录本输出。

- 选定流：石墨阳极 `ec5373c5-73d9-4831-9cb3-374ed54dba65`
- 流属性/单位：Mass / kg
- 数量规则：将合格电极净干质量归一化为恰好 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格石墨阳极
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electrode_records`
- 来源：`hawley-li-ion-electrode-manufacturing-2019`

###### 合格锂离子电池正极（`electrode_cathode_product`）

仅对经检验合格并以待电池装配状态放行的涂布正极记录本输出；精确 Tiangong UUID 尚未解决。

- 选定流：待装配锂离子电池正极
- 流属性/单位：Mass / kg
- 数量规则：将合格正极净干质量归一化为恰好 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格正极
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electrode_records`
- 来源：`hawley-li-ion-electrode-manufacturing-2019`

##### 废物流

###### 涂布富镍 NMC 正极边角废料（`electrode_nmc_cathode_offcut_waste`）

将涂布铝箔开机料、边料和不合格富镍 NMC 正极记录为一个成分明确的固体废物流；不得与废溶剂或负极废料合并。

- 选定流：涂布富镍 NMC 正极边角废料
- 流属性/单位：Mass / kg
- 数量规则：称量离开前景过程的涂布 NMC 正极边料和不合格品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格电极
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrode_records`
- 来源：`hawley-li-ion-electrode-manufacturing-2019`

###### 涂布石墨负极边角废料（`electrode_graphite_anode_offcut_waste`）

将涂布铜箔开机料、边料和不合格石墨负极记录为一个成分明确的固体废物流；不得与废溶剂或正极废料合并。

- 选定流：涂布石墨负极边角废料
- 流属性/单位：Mass / kg
- 数量规则：称量离开前景过程的涂布石墨负极边料和不合格品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格电极
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrode_records`
- 来源：`hawley-li-ion-electrode-manufacturing-2019`

##### 基本流

###### 排入空气的 NMP（`electrode_nmp_to_air`）

记录回收和控制后的实测残余 NMP 空气排放；不得在未核算产品残留、废溶剂和库存变化时，用外购溶剂减去回收溶剂代替排放量。

- 选定流：1-甲基-2-吡咯烷酮 `fe0acd60-3ddc-11dd-a784-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：电极路线实测残余 NMP 空气排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格电极
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrode_records`
- 来源：`hawley-li-ion-electrode-manufacturing-2019`

###### 排入空气的化石源二氧化碳（`electrode_carbon_dioxide`）

记录服务干燥或回收的现场天然气燃烧所产生的实测直接化石源二氧化碳；不含上游发电或供气排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或经设施核实并分配给电极路线的直接烟气排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格电极
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrode_records`
- 来源：

### 过程：铅酸电池板栅或极板制造（`lead_acid_grid_plate_manufacturing`）

#### 输入

##### 产品流

###### 铅锑合金（`lead_antimony_alloy`）

仅对采用本合金的铸造板栅或小零件路线记录铅锑合金，并声明合金组成和再生含量。

- 选定流：铅锑合金 `1f4bc7a0-5cc5-4cc6-bb83-5b05a6653732`
- 流属性/单位：Mass / kg
- 数量规则：计量投入板栅或小零件铸造的合金
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格铅酸电池板栅或极板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lead_part_records`
- 来源：`us-epa-ap42-storage-battery-production-1995`

###### 氧化铅粉体（`lead_oxide`）

仅当现场制备铅膏时记录氧化铅粉体，不得与铅合金合并。

- 选定流：氧化铅粉体
- 流属性/单位：Mass / kg
- 数量规则：计量投入铅膏混合的干氧化铅
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格铅酸电池极板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lead_part_records`
- 来源：`us-epa-ap42-storage-battery-production-1995`

###### 硫酸（`lead_sulfuric_acid`）

记录进入铅膏制备或独立极板化成操作的硫酸，并声明浓度和操作。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：计量跨越前景边界的酸溶液总质量，并记录酸浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格铅酸电池极板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lead_part_records`
- 来源：`us-epa-ap42-storage-battery-production-1995`

###### 硫酸钡膨胀剂（`lead_barium_sulfate`）

仅在所声明负极铅膏膨胀剂配方中记录精制硫酸钡；天然重晶石不是精确替代品。

- 选定流：精制硫酸钡
- 流属性/单位：Mass / kg
- 数量规则：计量投入负极铅膏混合的干硫酸钡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格负极板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lead_part_records`
- 来源：`us-epa-ap42-storage-battery-production-1995`

###### 炭黑膨胀剂（`lead_carbon_black`）

仅当炭黑作为独立物料加入负极铅膏膨胀剂配方时记录。

- 选定流：炭黑
- 流属性/单位：Mass / kg
- 数量规则：计量投入负极铅膏混合的干炭黑
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格负极板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lead_part_records`
- 来源：`us-epa-ap42-storage-battery-production-1995`

###### 工艺用水（`lead_process_water`）

记录为铅膏混合、极板清洗、冷却补水或排放控制设备而跨越边界的工艺用水，并声明用途。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量新鲜和补充工艺用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格铅酸电池板栅或极板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lead_part_records`
- 来源：`us-epa-ap42-storage-battery-production-1995`

###### 电力（`lead_electricity`）

记录混合、涂膏、固化、可选极板化成、切割、通风、控制和检验的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：在所声明计量边界读取的路线用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格铅酸电池板栅或极板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lead_part_records`
- 来源：`us-epa-ap42-storage-battery-production-1995`

###### 气态天然气（`lead_natural_gas`）

仅当现场燃烧天然气用于合金熔化、固化、干燥或路线专用热负荷时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量输送到路线设备的天然气，或从共同计量表按有记录的方法分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格铅酸电池板栅或极板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lead_part_records`
- 来源：`us-epa-ap42-storage-battery-production-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格铅酸电池板栅（`lead_grid_product`）

仅对作为独立零件放行的合格铸造或冲压板栅记录本输出；精确 Tiangong UUID 尚未解决。

- 选定流：待装配铅酸电池板栅
- 流属性/单位：Mass / kg
- 数量规则：将合格板栅净质量归一化为恰好 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格板栅
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lead_part_records`
- 来源：`us-epa-ap42-storage-battery-production-1995`

###### 合格铅酸电池极板（`lead_plate_product`）

仅对作为独立零件放行的合格涂膏、固化或独立化成极板记录本输出；声明极板极性和状态。精确 Tiangong UUID 尚未解决。

- 选定流：待装配铅酸电池极板
- 流属性/单位：Mass / kg
- 数量规则：将合格极板净干质量归一化为恰好 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格极板
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lead_part_records`
- 来源：`us-epa-ap42-storage-battery-production-1995`

##### 废物流

###### 铅锑电池板栅废料（`lead_grid_scrap_waste`）

将离开前景过程的铅锑铸造废料、板栅边料和不合格板栅记录为明确的固体废物流；内部重熔不属于外部输出。

- 选定流：铅锑电池板栅废料
- 流属性/单位：Mass / kg
- 数量规则：称量转移到厂外或独立建模处理过程的铅锑板栅废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格铅酸电池板栅或极板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lead_part_records`
- 来源：`us-epa-ap42-storage-battery-production-1995`

###### 涂膏铅酸电池极板废料（`lead_plate_scrap_waste`）

将离开前景过程的不合格涂膏或化成铅酸电池极板及极板边料记录为明确的固体废物流；披露极性、含酸状态以及废料干湿状态。

- 选定流：涂膏铅酸电池极板废料
- 流属性/单位：Mass / kg
- 数量规则：称量转移到厂外或独立建模处理过程的涂膏或化成极板废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格铅酸电池极板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lead_part_records`
- 来源：`us-epa-ap42-storage-battery-production-1995`

##### 基本流

###### 排入空气的铅（`lead_to_air`）

记录经过现场控制后、以元素铅表示的铅及铅化合物实测空气排放；仅在核实排放环境后采用其他环境区室特定流。

- 选定流：铅 `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分配给所选零件路线的实测运行期排入未指定空气环境的铅总量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格铅酸电池板栅或极板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lead_part_records`
- 来源：`us-epa-ap42-storage-battery-production-1995`

###### 排入空气的硫酸雾（`lead_sulfuric_acid_mist`）

仅当极板化成或其他酸操作位于本零件边界内时记录实测硫酸雾；精确 Tiangong UUID 尚未解决。

- 选定流：排入空气的硫酸雾
- 流属性/单位：Mass / kg
- 数量规则：实测零件级酸操作经控制后排放的硫酸雾
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格铅酸电池极板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lead_part_records`
- 来源：`us-epa-ap42-storage-battery-production-1995`

###### 排入空气的化石源二氧化碳（`lead_carbon_dioxide`）

记录服务合金熔化、固化或干燥的现场天然气燃烧所产生的实测直接化石源二氧化碳；不含上游发电或供气排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或经设施核实并分配给铅零件路线的直接烟气排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格铅酸电池板栅或极板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lead_part_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | 混合零件类别和技术 | 在分配之前细分隔膜、电极、板栅和极板路线，并分别计量路线特定的材料、能源、废物和排放流。 |  |
| `allocation_common_services` | 共用公用工程和污染控制 | 仅对真正共用的服务采用有记录的因果驱动量分配，例如计量能源、机器时间、排风量、处理质量或合格干输出质量；存在物理因果驱动量时不得按收入分配。 |  |
| `allocation_scrap_and_recovery` | 废料、回收溶剂和内部循环 | 将厂外废料和回收溶剂作为独立输出报告，不得与材料总投入净额抵销。内部循环不跨越系统边界；记录相关现场能源和损耗并披露循环。 | `hawley-li-ion-electrode-manufacturing-2019`; `us-epa-ap42-storage-battery-production-1995` |
| `allocation_unavoidable_choice` | 剩余多输出分配 | 当细分和因果分配仍不能解决剩余负荷时，采用干输出质量分配，披露受影响流和分配比例，并对合理的替代驱动量进行敏感性分析。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_separator_records` | `separator_manufacturing` | 隔膜全部投入、合格输出、边角废物和直接排放 | 批次领料记录；公用工程计量表；地磅或废物联单；放行检验；烟气或设施排放记录 | 材料身份；供应商；批次；期初期末库存；领用和退回质量；电力；天然气体积及参比状态；水；合格干输出；边料；直接 CO2；路线和涂层状态 | 将采购和库存移动与批次记录核对；读取专用计量表或按有记录的方法分配共同计量表；称量合格和不合格膜材；采用经核实的直接排放记录 | kg；MJ；m3 | 每批次采集并按月汇总 | 有代表性的连续生产期，通常至少 12 个月；较短活动则覆盖全期 | 服务所声明隔膜路线的全部厂内操作 | 从领料总量中扣除有记录的退回量和库存变化；按合格干隔膜质量归一化；干法和湿法路线分别核算 | 校准计量表和秤记录；材料证书；批次表；放行试验；废物转移记录；排放监测或经核实的清单记录 |
| `cp_electrode_records` | `lithium_ion_electrode_manufacturing` | 电极全部投入、合格输出、边角废物、NMP 排放和直接 CO2 | 配方和批次记录；箔材领用记录；计量表；溶剂回收日志；不合格记录；放行检验；空气排放记录 | 极性；化学体系；干组分；溶剂；箔材类型和质量；电力；天然气；水；回收 NMP；废溶剂；合格干电极；边料；排入空气的 NMP；直接 CO2 | 将称量配方和箔材记录与库存变化核对；计量公用工程；核对溶剂投入、回收、废物、残留、库存变化和实测排放；称量合格与不合格电极 | kg；MJ；m3 | 每批次和卷材采集并按月汇总 | 有代表性的连续生产期，通常至少 12 个月；较短活动则覆盖全期 | 服务所声明电极路线的全部厂内操作，包括分配的干燥房和回收服务 | 正极与负极、化学体系、溶剂路线和集流体分别核算；按合格干电极质量归一化 | 校准秤和计量表；配方证书；涂布干燥日志；溶剂回收平衡；放行试验；废物联单；排放记录 |
| `cp_lead_part_records` | `lead_acid_grid_plate_manufacturing` | 铅零件全部投入、合格输出、废料、铅排放、酸雾和直接 CO2 | 熔炼和铸造日志；铅膏配方；酸和水记录；计量表；固化或化成日志；废料记录；放行检验；排放记录 | 合金组成和质量；氧化铅；酸质量和浓度；硫酸钡；炭黑；水；电力；天然气参比状态；合格板栅或极板质量；极板极性和状态；含铅废料；排入空气的铅；酸雾；直接 CO2 | 核对物料领用和库存变化；读取计量表；称量合格产品和厂外废料；采用控制后的路线特定实测排放 | kg；MJ；m3 | 每批次采集并按月汇总 | 有代表性的连续生产期，通常至少 12 个月；较短活动则覆盖全期 | 服务所声明板栅或极板路线及其控制设施的全部厂内操作 | 铸造与冲压板栅、正负极铅膏以及已化成与未化成极板分别核算；按合格干板栅或极板质量归一化 | 校准秤和计量表；合金和化学品证书；批次和固化记录；放行试验；废物联单；烟气测试或经核实的排放记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_accepted_mass` | 所有采集清单行 | 归一化交换量 = 报告期跨界交换量 / 报告期合格干产品质量 | 核对后的交换量；合格产品质量 | 每 1 kg 合格产品的交换量 |  |
| `calc_inventory_reconciliation` | 外购材料和溶剂 | 消耗投入 = 期初库存 + 接收量 - 期末库存 - 有记录的退回量；内部回收不得先从跨界总投入中抵销 | 库存记录；采购接收；退回；内部回收日志 | 核对后的投入质量 |  |
| `calc_common_meter_allocation` | 共用公用工程计量表 | 分配公用工程 = 共同计量量 × 有记录的因果份额；计量边界内因果份额合计必须为一 | 共同计量表读数；各路线驱动量合计 | 路线特定电力、天然气或水 |  |
| `calc_output_and_scrap_balance` | 合格产品和固体废料 | 核对固体投入、合格输出、厂外废料、捕集残渣、在制物料和库存变化；调查不明差异，不得将其归入通用废物流 | 物料领用；合格输出；废料；残渣；库存变化 | 已披露的质量平衡闭合情况 |  |
| `calc_solvent_balance` | NMP 和湿法隔膜工艺油 | 核对新鲜投入、内部回收循环、厂外废物、产品残留、空气排放和库存变化；内部循环不得重复计作边界流 | 溶剂或工艺油投入；回收；废物；残留；空气排放；库存变化 | 已披露的溶剂平衡 | `hawley-li-ion-electrode-manufacturing-2019`; `mun-won-polyolefin-separator-manufacturing-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和路线输出 | 声明零件类别、适用时的极性、化学体系、材料结构、尺寸、干法或湿法工艺、已化成或未化成状态、规格及合格产品质量。 | 产品规格；物料清单；放行检验；批次和批号追溯 |
| `dq_temporal_representativeness` | 所有前景数据 | 覆盖有代表性的连续期间，通常为 12 个月；采用较短生产活动时，披露日期、产量、开机影响和季节性限制。 | 计量日期；批次记录；生产日历；排除说明 |
| `dq_completeness` | 所有路线交换 | 核对外购投入、合格输出、内部循环、厂外废物和直接排放；每个排除操作和零值行应标记为不适用，不得静默遗漏。 | 质量和溶剂平衡；计量核对；废物联单；排放记录 |
| `dq_meter_allocation` | 共用服务 | 识别物理计量边界和因果分配驱动量；报告分配给所选路线的份额，并保留份额合计为一的证据。 | 计量表图；驱动量记录；分配工作表 |
| `dq_uuid_and_localization` | Tiangong 引用 | 仅使用直接核实的 state-100 UUID 和 Tiangong 精确中文 baseName。未解决行保持 UUID 为空，直至确认精确身份、分类、流属性、单位组、产品状态和环境区室。 | 已最终确定的 UUID 搜索回执；直读身份记录；manifest 未解决项 |
| `dq_range_status` | 重要清单量 | 所有数量均为前景采集要求。在至少两个相互独立、边界、参考单位和产品状态兼容的原始来源支持综合之前，不批准外部经验范围。 | 前景记录；manifest 范围证据需求；后续来源审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 参考流 | 隔膜路线必须报告恰好 1 kg 合格电池隔膜作为参考输出，不得将边料、不合格品、水分基准差异或出厂包装质量计入该数量。非隔膜产品不得使用隔膜 UUID。 |  |
| `validation_route_exclusivity` | 过程选择 | 至少一个所声明路线适用，且每个纳入过程和行必须与所声明零件类别、化学体系、极性、材料和技术一致；无关条件行应标记为不适用。 |  |
| `validation_atomic_flows` | 过程清单 | 每张清单卡片必须表示一个原子交换，并具备方向、流类型、属性、单位、数量来源、基准、证据和适用路线；合并的公用工程、材料、废物或排放组不通过校验。 |  |
| `validation_mass_and_solvent_balance` | 前景计算 | 数据包必须提供合格输出、固体材料及适用溶剂平衡，并解释物料差异，不得将差异归入未指明损耗。 | `hawley-li-ion-electrode-manufacturing-2019`; `mun-won-polyolefin-separator-manufacturing-2021`; `us-epa-ap42-storage-battery-production-1995` |
| `validation_emission_scope` | 直接基本流 | 仅当排放操作位于前景边界内时纳入直接铅、硫酸雾、NMP 和化石源 CO2 行；上游电力和外购投入排放应保留在所链接的上游数据集中。 | `hawley-li-ion-electrode-manufacturing-2019`; `us-epa-ap42-storage-battery-production-1995` |
| `validation_unresolved_identity` | UUID 为空的行 | UUID 为空的行需要审查，不得静默映射到更宽泛、分类不同、计量属性不同或环境区室错误的候选流。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；只有在方法学审查完成、所声明零件的精确输出流已解决且质量披露完整后，才可用作 `background_dataset` |
| downstream_use | 独立供应电池零件的前景产品系统构建；process 和 lifecyclemodel 投影；同一声明零件类别和参考流定义内的供应商或技术比较 |
| allowed_use | 可用于采用已确认参考流的声明隔膜路线；其他纳入零件只有在提供精确批准产品流和路线清单后方可使用；仅当零件状态、化学体系、规格、边界、分配、地域和期间兼容时比较数据集 |
| excluded_use | 完整电池或电芯结果；没有独立功能模型的每 kWh 性能声明；没有功能等效性的跨化学体系或跨零件比较；对电极、板栅、极板或其他零件复用隔膜 UUID；将未解决 UUID 当作已确认身份 |
| required_metadata | PCR id 和版本状态；零件类别；精确产品流；化学体系和极性；材料结构；路线和技术；尺寸和交付形式；合格输出质量和水分基准；地域；报告期；计量边界；分配；溶剂回收；排放控制；废料去向；排除项；上游数据集选择 |
| required_quality_disclosure | 原始数据占比；时间、地域和技术代表性；材料和溶剂平衡闭合；计量及分配覆盖；未解决流身份；数据缺口；代理；核实状态；不存在已批准外部数量范围的情况 |
| update_trigger | 零件类别、化学体系、活性材料、聚合物、层结构、涂层、集流体、合金、干法/湿法工艺、化成状态、溶剂或回收系统、能源、排放控制、废料路线、设施地域、分配驱动量、参考产品身份或范围证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 46430 正式分类身份，以及与完整电芯、电池和蓄电池的区分 |
| `us-epa-ap42-storage-battery-production-1995` | `official_guidance` | 美国环境保护署，AP-42 第 12.15 节《蓄电池生产》，1995 年 1 月，https://www.epa.gov/sites/default/files/2020-11/documents/c12s15.pdf | 铅酸电池板栅、铅膏、极板、固化、化成、废料、控制、铅排放和硫酸雾的过程分解 |
| `mun-won-polyolefin-separator-manufacturing-2021` | `literature` | Mun, S. C.; Won, J. H. Manufacturing Processes of Microporous Polyolefin Separators for Lithium-Ion Batteries and Correlations between Mechanical and Physical Properties. Crystals 2021, 11, 1013. https://doi.org/10.3390/cryst11091013 | 干法 PP 和湿法 PE 隔膜路线；挤出、退火、拉伸、萃取、多层和涂布决策 |
| `hawley-li-ion-electrode-manufacturing-2019` | `literature` | Hawley, W. B.; Li, J. Electrode manufacturing for lithium-ion batteries—Analysis of current and next generation processing. Journal of Energy Storage 25 (2019) 100862. https://doi.org/10.1016/j.est.2019.100862 | 电极混合、浆料、涂布、干燥、溶剂回收、集流体、辊压、废料和质量控制过程分解 |
