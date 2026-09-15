---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.foil-of-aluminium-of-a-thickness-not-exceeding-0-2-mm
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 厚度不超过 0.2 mm 的铝箔

## 1. 范围与适用性

本 PCR 适用于铝层厚度不超过 0.2 mm、主要以卷材交付的可销售变形铝或铝合金箔。它涵盖素箔，以及带有已声明的表面处理、涂层、印刷层、清漆、复合层或衬背且铝箔仍是可识别并单独定量的销售产品组成部分的箔材。与 CPC/HS 类别边界一致，厚度分类以铝层为准，不计衬背厚度。

本 PCR 的产品系统从已声明的铝起始状态开始，涵盖箔坯制备、冷轧、可选退火、可选双合轧与分离、分切、生产者实施的表面处理或涂覆、内部废料回收、卷取和发运包装。热轧板坯路线和连续铸轧带坯路线均可采用。前景数据包可从外购铝锭、轧制板坯、铸轧带坯或箔坯开始，但应识别起始状态，并将所有外购上游材料链接到适当数据集。

本类别有意保持比电池集流体箔或包装箔更宽。除非数据集明确标示为相应的窄产品且只在限定信息匹配时使用，否则不得仅以单一应用牌号、厚度、合金/状态、表面规范或工艺路线代表整个 CPC 41535。成品包装、电池单体或电极、电容器、换热器、绝缘电气产品、电缆及其他制成品不在范围内。厚度超过 0.2 mm 的板带材以及在最终箔轧制前作为产品销售的箔坯也不属于参考产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.basic-metals.foil-of-aluminium-of-a-thickness-not-exceeding-0-2-mm` |
| classification_refs | CPC 3.0 `41535`，精确：厚度不超过 0.2 mm 的铝箔 |
| covered_products | 铝层厚度大于零且不超过 0.2 mm、以已声明卷材交付的素面或经转换加工的铝及铝合金箔；衬背或涂层须单独定量。 |
| excluded_products | 厚度超过 0.2 mm 的铝板或带；最终箔制造前销售的箔坯；成品包装、电池部件、电气部件和热管理组件；铝层无法单独定量的复合材料。 |
| representative_product | 已声明的可销售铝箔卷。不设类别统一的合金、状态、厚度、应用等级、涂层、衬背、针孔等级或洁净度等级默认值。 |
| production_route | 对热轧箔坯或连续铸轧带坯进行冷轧，并按路线选用退火、双合轧与分离、分切、表面转换和内部废料回收。 |
| market_state | 在生产者大门处已卷绕到声明卷芯、可发运的净可销售箔材；运输包装另行报告。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产者大门处以卷材交付、符合已声明产品规范的可销售铝或铝合金箔。 |
| How much | 销售箔产品净质量 1 kg。卷芯、托盘和可移除运输包装不计入参考质量并单独列入清单。仍构成销售箔产品的涂层、清漆、油墨、胶黏剂、复合层或衬背计入参考质量，并声明其质量分数。 |
| How well | 符合针对厚度及公差、合金及状态、表面状态、卷材尺寸以及适用针孔和洁净度要求所声明的客户或产品规范。本 PCR 不设统一性能阈值。 |
| How long or cycle | 一个已声明生产批次或生产周期，或不超过连续 12 个月的产量加权报告期。 |
| reference_flow_link | `coil_packaging_and_dispatch` 的最终输出 `delivered_aluminium_foil_coil`。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 铝箔材 `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 铝层名义厚度及公差；铝合金牌号或已声明化学成分；状态；箔坯路线；轧制道次路线；退火状态和制度或无退火；单层轧制或双合轧与分离；分切宽度、边部状态、卷芯内径和卷材净质量；表面状态及正反面区别；表面处理、涂层、印刷、清漆、复合或衬背的组成及质量分数或无；针孔试验方法、取样面积、结果和合同判据或不适用；洁净度、润湿性或残余轧制油的试验方法、结果和合同判据或不适用；原生铝、外部消费前再生铝和外部消费后再生铝比例及监管链方法；内部废料循环核算；金属良率；交付卷材和可移除包装规范；生产路线、场址地理、技术和参考期。 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 交付箔产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单结果归一化为 1 kg 销售箔产品净质量；卷芯和可移除运输包装不计入参考质量，并作为单独投入报告。 |
| `aluminium_layer_thickness` | 分类和产品限定信息 | 长度 | mm 或 µm | 铝层厚度应与涂层或衬背分开测量和报告。按 1 µm = 0.001 mm 换算。声明的铝层厚度应大于零且不超过 0.2 mm。 |
| `constituent_mass_fraction` | 涂覆、复合、印刷、上清漆或带衬背箔 | 质量分数 | kg/kg 产品 | 按干态组成质量基准报告铝、各涂层或处理固形物、胶黏剂、油墨、清漆、复合层和衬背；各分数应在声明的舍入误差内合计为 1。 |
| `metal_input_share` | 进入模型边界的新鲜含铝炉料 | 质量分数 | kg Al/kg 新鲜 Al 投入 | 按含铝量报告原生铝、外部消费前再生铝和外部消费后再生铝。内部工艺废料属于循环流，不是再生成分投入，不得加到这些比例中。 |
| `yield_measurement` | 铝转换路线 | 质量比 | kg/kg | 金属良率 = 参考产品中可销售铝净质量 / 进入声明边界的新鲜铝质量；两个铝质量项均不含涂层和衬背质量，并披露库存变化处理。 |
| `energy_measurement` | 各前景过程 | 能量 | 电力用 kWh；燃料、蒸汽和热能用 MJ | 可获得时按载能体和过程记录计量能源；无明确换算及低位/高位热值约定时，不得合并电力和热能。 |
| `water_measurement` | 各前景过程 | 体积或质量 | m3 或 kg | 区分取水、耗水、循环水和排放废水；不得将循环水重复计为新鲜取水。 |
| `coil_and_packaging_mass` | 发运 | 质量 | kg | 对每个发运卷或产量加权批次分别记录箔材净质量、卷芯质量和各类可移除包装材料。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_start` | 前景系统 | 纳入报告生产者从已声明外购铝起始状态到可销售交付卷材所控制的全部操作；披露起点是铝锭、板坯、铸轧带坯还是箔坯。 | `european-aluminium-2018`; `iso-14044-2006` |
| `boundary_upstream_links` | 外购产品和能源 | 将外购铝、合金添加物、涂料、衬背材料、燃料、电力、水、辅助材料、卷芯和包装链接到尽可能匹配声明地理、技术和时间的数据集。 | `iso-14044-2006` |
| `boundary_route_complete` | 铝箔制造 | 纳入路线适用的冷轧、退火、双合轧与分离、分切、表面转换、内部废料处理、卷取和包装；不适用的操作应明确标为不适用，不得静默省略。 | `european-aluminium-2018`; `eafa-alufoil-production` |
| `boundary_direct_releases` | 前景过程 | 纳入由场址记录支持或根据采集记录计算的直接大气排放、水排放、废物、浮渣、盐渣、废水、润滑剂损失和处理输出。 | `iso-14044-2006` |
| `boundary_capital_and_personnel` | 前景系统 | 除非研究目标、适用计划规则或已证明的重要性要求纳入，否则排除资本设备、建筑、通勤和人员活动；若纳入应披露。 | `iso-14044-2006` |
| `boundary_no_narrow_substitution` | 类别代表性 | 不得将电池级、包装级、腐蚀箔、涂漆箔、单一厚度或其他窄产品流作为整个 CPC 41535 类别的默认代表。 | `unsd-cpc-3-41535` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告生产者接收的外购原生或再生铝、轧制铝锭/板坯、连续铸轧带坯或箔坯。 |
| starting_condition_role | 跨越声明前景边界的第一个产品投入；它决定哪些铝生产和箔坯操作属于前景，哪些通过上游链接。 |
| product_classification_scope | CPC 3.0 `41535` 下铝层厚度不超过 0.2 mm 的可销售箔，不受下游用途限制。 |
| recursive_input_rule | 当外购箔或箔坯会使本 PCR 递归调用时，只将其记录一次为可见产品投入，链接到单独识别的上游数据集，不在接收过程中重建其上游制箔过程。 |
| upstream_dataset_requirement | 上游数据集应在相关时声明铝生产路线、原生/再生成分基准、地理、参考期以及分配或再循环方法。 |
| disclosure | 声明起始材料形态、供应商边界、纳入和排除的操作、外包转换步骤、内部废料循环，以及按适用研究规则实施的任何截断。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `foil_stock_production` | 箔坯生产 | conditional | 当报告场址从铝锭、板坯、铝液或再生炉料生产箔坯时纳入。 | 生产适合最终箔轧制的热轧或连续铸轧带坯。 | 1 kg 箔坯输出 |
| `foil_rolling` | 铝箔冷轧 | required | 始终纳入报告生产者控制的最终厚度轧制。 | 将箔坯轧至声明厚度，并记录轧制介质、能源、损失和废料。 | 1 kg 轧制箔输出 |
| `annealing` | 退火 | conditional | 纳入为达到声明状态或表面条件而使用的每个中间或最终退火。 | 按声明热制度改变状态，并去除或转化轧制残留物。 | 1 kg 退火箔输出 |
| `double_rolling_and_separation` | 双合轧与铝箔分离 | conditional | 两层箔材合并轧制后再分离时纳入。 | 表示薄箔路线及其形成的正反面表面差异。 | 1 kg 分离箔输出 |
| `slitting_finishing_and_winding` | 分切、精整与卷取 | required | 纳入最终分切、切边、检验和卷取。 | 生产可销售宽度的卷材，并记录边料和不合格材料。 | 1 kg 可选转换和包装前的可销售箔 |
| `surface_treatment_coating_or_backing` | 表面处理、涂覆、印刷、上清漆、复合或衬背 | conditional | 纳入生产者控制且仍体现于或改变销售产品的各项操作。 | 增加或改变已声明的表面组成和性能。 | 1 kg 转换后箔输出 |
| `internal_scrap_recovery` | 内部废料回收 | conditional | 纳入生产废料的场内收集、重熔、精炼或返回准备。 | 保持内部金属循环可见并记录回收损失和残余物。 | 1 kg 返回或转移的回收铝 |
| `coil_packaging_and_dispatch` | 卷材包装与发运 | required | 始终纳入最终放行、称重、卷芯配置、包装和生产者大门发运。 | 确立参考流并区分箔净质量、卷芯和包装质量。 | 1 kg 交付箔产品净质量 |

### 过程：箔坯生产（`foil_stock_production`）

#### 输入

##### 产品流

###### 新鲜含铝炉料（`fresh_aluminium_charge`）

按含铝量或组成质量基准，将原生铝、外部消费前再生铝、外部消费后再生铝和合金添加物记录为单独投入。

- 选定流：已声明铝锭、板坯、铝液、废料和合金添加投入
- 流属性/单位：Mass / kg
- 数量规则：称重收货量加期初库存减期末库存，各再生成分类别分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 箔坯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_ledger`
- 来源：`environdec-pcr-2022-08`

###### 箔坯能源载体（`foil_stock_energy`）

分别记录边界内熔炼、铸造、热轧或连续铸轧的电力、燃料、蒸汽和外购热力。

- 选定流：电力和已声明热能源载体
- 流属性/单位：Energy / 按载能体分别用 kWh 和 MJ
- 数量规则：分配至所纳入箔坯操作的计量用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 箔坯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：`european-aluminium-2018`

#### 输出

##### 产品流

###### 箔坯（`foil_stock_output`）

记录转入冷轧的热轧或连续铸轧带坯质量，并识别路线。

- 选定流：已声明箔坯
- 流属性/单位：Mass / kg
- 数量规则：称重或质量平衡得到的箔坯输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 箔坯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_ledger`
- 来源：`european-aluminium-2018`

##### 废物流

###### 箔坯残余物与未回收金属（`foil_stock_residues`）

记录浮渣、盐渣、耐火材料废物、未内部回收的不合格金属及其去向。

- 选定流：按废物分类声明的箔坯残余物
- 流属性/单位：Mass / kg
- 数量规则：称重发运量或按去向计算的质量平衡量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 箔坯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions_waste_records`
- 来源：`european-aluminium-2018`

### 过程：铝箔冷轧（`foil_rolling`）

#### 输入

##### 产品流

###### 箔坯投入（`foil_stock_input`）

按路线、合金、状态、厚度以及供应商或内部来源记录箔坯。

- 选定流：已声明箔坯
- 流属性/单位：Mass / kg
- 数量规则：经库存变化调整的称重投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 轧制箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_ledger`
- 来源：`european-aluminium-2018`

###### 轧制能源与工艺辅助材料（`rolling_energy_auxiliaries`）

分别记录电力、轧制油或乳液、过滤器和补充冷却介质；循环或回收的润滑剂不得重复计作新鲜投入。

- 选定流：电力、轧制润滑剂、过滤器和已声明冷却辅助材料
- 流属性/单位：按适用情况为 Energy / kWh、Mass / kg、Volume / m3
- 数量规则：分配至轧制线的计量能源和材料领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 轧制箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_auxiliary_ledger`
- 来源：`european-aluminium-2018`

#### 输出

##### 产品流

###### 轧制箔卷（`rolled_foil_output`）

记录输出质量、名义厚度、实测公差、轧制道次、速度或路线标识以及下一受控操作。

- 选定流：轧制铝箔卷
- 流属性/单位：Mass / kg
- 数量规则：经在制品调整的轧制输出称重值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 轧制箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_ledger`
- 来源：`european-aluminium-2018`

##### 废物流

###### 轧制废料与废辅助材料（`rolling_scrap_and_spent_auxiliaries`）

按内部回收或外部去向记录边料、断带、不合格箔、废润滑剂、过滤器和废水。

- 选定流：已声明轧制废料和废辅助材料
- 流属性/单位：Mass / kg；废水用 Volume / m3
- 数量规则：按去向称重、计量或质量平衡得到的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 轧制箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions_waste_records`
- 来源：`european-aluminium-2018`

##### 基本流

###### 轧制直接排放（`direct_rolling_emissions`）

记录轧制和润滑剂处理的实测或许可挥发性有机物及其他直接排放，不得用已发布行业平均值替代。

- 选定流：已声明的直接大气或水体排放
- 流属性/单位：按物质分别为 Mass / kg
- 数量规则：场址测量，或根据采集的运行记录和经批准排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 轧制箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_waste_records`
- 来源：`european-aluminium-2018`

### 过程：退火（`annealing`）

#### 输入

##### 产品流

###### 进入退火的箔（`foil_for_annealing`）

对每次声明的退火记录箔质量、合金、来料状态、厚度和卷材标识。

- 选定流：轧制铝箔卷
- 流属性/单位：Mass / kg
- 数量规则：批次投入称重值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 退火箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_ledger`
- 来源：`european-aluminium-2018`

###### 退火能源与气氛（`annealing_energy_atmosphere`）

按炉或批次记录电力、燃料、外购热力和工艺气氛气体，并记录已声明的时间-温度制度。

- 选定流：电力、燃料、热力和已声明气氛气体
- 流属性/单位：能源用 Energy / kWh 和 MJ；气体用 Mass 或 Volume
- 数量规则：计量或按批次分配的用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 退火箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：`european-aluminium-2018`

#### 输出

##### 产品流

###### 退火箔卷（`annealed_foil_output`）

记录输出质量、声明状态、退火制度和放行表面条件。

- 选定流：退火铝箔卷
- 流属性/单位：Mass / kg
- 数量规则：批次输出称重值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 退火箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_roll_release`
- 来源：`european-aluminium-2018`

### 过程：双合轧与铝箔分离（`double_rolling_and_separation`）

#### 输入

##### 产品流

###### 进入双合轧的箔（`foil_for_double_rolling`）

记录两层配对材料，包括质量、厚度、合金和正反面方向。

- 选定流：用于配对的轧制铝箔卷
- 流属性/单位：Mass / kg
- 数量规则：配对投入称重值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 分离箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_ledger`
- 来源：`european-aluminium-2018`; `eafa-alufoil-production`

###### 双合轧能源与润滑剂（`double_rolling_energy_lubricant`）

记录配对轧制和分离使用的电力和新鲜轧制润滑剂。

- 选定流：电力和轧制润滑剂
- 流属性/单位：Energy / kWh；Mass / kg
- 数量规则：分配至该操作的计量能源和润滑剂领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 分离箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_auxiliary_ledger`
- 来源：`european-aluminium-2018`; `eafa-alufoil-production`

#### 输出

##### 产品流

###### 分离箔卷（`separated_foil_output`）

记录分离后的输出质量，并区分该路线形成的亮面和暗面或其他正反面特定状态。

- 选定流：分离铝箔卷
- 流属性/单位：Mass / kg
- 数量规则：经在制品调整的输出称重值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 分离箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_roll_release`
- 来源：`european-aluminium-2018`; `eafa-alufoil-production`

### 过程：分切、精整与卷取（`slitting_finishing_and_winding`）

#### 输入

##### 产品流

###### 进入精整的箔（`foil_for_finishing`）

记录卷材质量、厚度、合金/状态、宽度和前序工艺路线。

- 选定流：已声明轧制或退火铝箔卷
- 流属性/单位：Mass / kg
- 数量规则：经库存变化调整的称重投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可选转换和包装前的可销售箔
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_ledger`
- 来源：`european-aluminium-2018`; `eafa-alufoil-production`

###### 分切与检验能源（`slitting_inspection_energy`）

记录分切、检验和卷取所用的计量电力及单独列清单的耗材。

- 选定流：电力和已声明精整耗材
- 流属性/单位：Energy / kWh；Mass / kg
- 数量规则：计量或按产量分配的用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可选转换和包装前的可销售箔
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_auxiliary_ledger`
- 来源：`eafa-alufoil-production`

#### 输出

##### 产品流

###### 精整箔卷（`finished_foil_output`）

对放行批次记录可销售箔质量、分切宽度、边部状态、卷材尺寸、针孔试验以及洁净度或润湿性结果。

- 选定流：精整铝箔卷
- 流属性/单位：Mass / kg
- 数量规则：符合声明客户规范的放行输出称重值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可选转换和包装前的可销售箔
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_roll_release`
- 来源：`en-546-1-2007`; `astm-b926-2025`; `astm-f22-2021`

##### 废物流

###### 分切边料与不合格箔（`slitting_trim_rejects`）

记录边料、断带、不合格卷及其内部回收或外部去向。

- 选定流：按去向分类的铝边料和不合格箔
- 流属性/单位：Mass / kg
- 数量规则：称重或质量平衡得到的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可选转换和包装前的可销售箔
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions_waste_records`
- 来源：`european-aluminium-2018`

### 过程：表面处理、涂覆、印刷、上清漆、复合或衬背（`surface_treatment_coating_or_backing`）

#### 输入

##### 产品流

###### 表面转换用基箔（`base_foil_for_surface_conversion`）

记录转换前的基箔质量和全部必需箔材限定信息。

- 选定流：已声明精整铝箔卷
- 流属性/单位：Mass / kg
- 数量规则：经库存变化调整的称重投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转换后箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_ledger`
- 来源：`eafa-alufoil-production`

###### 表面转换材料与能源（`surface_conversion_materials_energy`）

分别记录处理化学品、涂层固形物、溶剂、油墨、清漆、胶黏剂、复合层、衬背材料、电力和热能。

- 选定流：已声明表面材料、衬背材料、电力和热能源载体
- 流属性/单位：Mass / kg；Energy / kWh 和 MJ
- 数量规则：材料领用量和计量或按批次分配的能源用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转换后箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_ledger`
- 来源：`eafa-alufoil-production`

#### 输出

##### 产品流

###### 转换后箔卷（`converted_foil_output`）

记录输出质量以及铝和各涂层、油墨、清漆、胶黏剂、复合层或衬背的干质量分数。

- 选定流：已声明转换后铝箔卷
- 流属性/单位：Mass / kg
- 数量规则：根据采集记录计算组成分数的称重输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转换后箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment_ledger`
- 来源：`eafa-alufoil-production`

##### 废物流

###### 表面转换废物（`surface_conversion_waste`）

记录涂料残余物、含溶剂废物、废水、不合格复合材料及其处理或回收去向。

- 选定流：按去向分类的已声明表面转换废物
- 流属性/单位：Mass / kg；废水用 Volume / m3
- 数量规则：称重、计量或质量平衡得到的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转换后箔输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions_waste_records`
- 来源：`eafa-alufoil-production`

### 过程：内部废料回收（`internal_scrap_recovery`）

#### 输入

##### 废物流

###### 内部可回收铝废料（`internal_scrap_input`）

按来源过程分别记录清洁和受污染废料，并保持其循环流身份。

- 选定流：内部铝工艺废料
- 流属性/单位：Mass / kg
- 数量规则：转入回收的称重值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 回收铝输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_scrap_ledger`
- 来源：`european-aluminium-2018`; `environdec-pcr-2022-08`

##### 产品流

###### 废料回收能源与辅助材料（`scrap_recovery_energy_auxiliaries`）

记录场内重熔或回收准备使用的电力、燃料、熔剂、盐和其他辅助材料。

- 选定流：电力、热能源载体、熔剂和盐
- 流属性/单位：Energy / kWh 和 MJ；Mass / kg
- 数量规则：分配至回收的计量或领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 回收铝输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_auxiliary_ledger`
- 来源：`european-aluminium-2018`

#### 输出

##### 产品流

###### 返回生产的回收铝（`recovered_aluminium_output`）

记录回收金属质量、接收过程以及任何场外转移；不得将返回金属计作新鲜再生成分投入。

- 选定流：回收铝
- 流属性/单位：Mass / kg
- 数量规则：回收金属输出称重值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 回收铝输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_scrap_ledger`
- 来源：`european-aluminium-2018`; `environdec-pcr-2022-08`

##### 废物流

###### 废料回收损失与残余物（`scrap_recovery_residues`）

记录未回收金属、浮渣、盐渣、处理残余物和去向。

- 选定流：按去向分类的已声明废料回收残余物
- 流属性/单位：Mass / kg
- 数量规则：由记录支持的发运称重值或质量平衡差额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 回收铝输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_internal_scrap_ledger`
- 来源：`european-aluminium-2018`

### 过程：卷材包装与发运（`coil_packaging_and_dispatch`）

#### 输入

##### 产品流

###### 发运前可销售箔（`saleable_foil_before_dispatch`）

记录放行箔材质量，并链接到适用的素箔或转换精整路线。

- 选定流：已声明可销售铝箔卷
- 流属性/单位：Mass / kg
- 数量规则：不含卷芯和可移除包装的放行箔称重值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付箔产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_dispatch_ledger`
- 来源：`en-546-1-2007`

###### 卷芯与可移除包装（`coil_core_and_packaging`）

按材料和质量记录卷芯、卷轴、衬纸、包膜、干燥剂、托盘、捆扎带和其他可移除运输包装。

- 选定流：已声明卷芯和包装材料
- 流属性/单位：Mass / kg
- 数量规则：单件称重质量或与发运记录核对的物料清单数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付箔产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_dispatch_ledger`
- 来源：`european-aluminium-2018`; `en-546-1-2007`

#### 输出

##### 产品流

###### 交付铝箔卷（`delivered_aluminium_foil_coil`）

这是参考产品，表示生产者大门处的可销售箔净质量，并携带第 3 节的完整限定信息。

- 选定流：铝箔材 `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定为 1 kg 销售箔产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 共用生产线和公用工程 | 分配前，首先利用计量、质量、机器时间或其他因果记录，按过程、生产路线、合金、状态、产品厚度和时段实施细分。 | `iso-14044-2006`; `environdec-pcr-2022-08` |
| `allocation_internal_scrap_loop` | 内部工艺废料 | 将内部废料保持为可见循环流，并将回收负荷和损失归入产品系统；不得将内部废料宣称为原生铝替代或外部再生成分。 | `european-aluminium-2018`; `environdec-pcr-2022-08` |
| `allocation_external_scrap_method` | 外购废料和外售可回收材料 | 声明所选再循环或废料分配方法、系统边界点、负荷、信用、质量修正以及投入和输出废料的一致性；未经核对不得混用方法。 | `environdec-pcr-2022-08`; `iso-14044-2006` |
| `allocation_joint_products` | 无法避免的联产品或共产品输出 | 无法细分时采用有文件支持的物理关系；无法建立物理关系时，采用经济基准或适用计划规定的基准，并披露价格、时期、敏感性和受影响流。 | `iso-14044-2006` |
| `allocation_offspec_and_waste` | 不合格箔、边料、浮渣和废物 | 按实际去向和合同状态对每项输出分类。同一材料不得同时视为内部回收循环、废物处理投入和外售共产品。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_ledger` | 所有适用生产过程 | 铝和中间产品质量 | 地磅单、ERP 收发、生产和库存记录 | 材料标识；合金；再生类别；供应商/内部来源；期初库存；收货；领用；期末库存；输出；废料；时间戳 | 按过程和产品族核对经校准称重及库存记录。 | kg | 每批或每班；按月汇总 | 与参考输出相同报告期 | 所有纳入场址和受控外包步骤 | 产量加权合计并校正在制品期初/期末变化 | 秤具校准；库存核对；批次谱系 |
| `cp_energy_metering` | `foil_stock_production`; `annealing` | 按载能体和操作分列的能源 | 仪表、燃料发票、炉批记录 | 载能体；表计编号；期初/期末读数；数量；热值约定；批次；时间戳 | 优先使用分表；共用表按有文件支持的因果驱动分配并与发票核对。 | 按载能体用 kWh 或 MJ | 连续或每批；按月核对 | 与参考输出相同报告期 | 所有纳入场址 | 用量合计除以对应过程输出 | 仪表校准；发票核对；分配工作表 |
| `cp_energy_and_auxiliary_ledger` | `foil_rolling`; `double_rolling_and_separation`; `slitting_finishing_and_winding`; `internal_scrap_recovery` | 电力和运行辅助材料 | 分表、领用记录、润滑剂和耗材台账 | 过程；载能体/材料；数量；返回/回收量；批次；时间戳 | 核对计量能源和新鲜材料领用，循环润滑剂不计入新鲜投入。 | kWh、MJ、kg 或 m3 | 每班或每批；按月汇总 | 与参考输出相同报告期 | 所有纳入生产线 | 按过程输出计算产量加权合计 | 仪表/秤具校准；采购和库存核对 |
| `cp_surface_treatment_ledger` | `surface_treatment_coating_or_backing` | 表面材料、衬背和能源 | 配方、领用、涂布量、仪表和生产记录 | 材料；干固形物；溶剂；投入质量；返回质量；涂布量；衬背质量；能源；输出质量；批次 | 将配方和领用记录与实测涂布量及输出组成质量核对。 | kg、kg/kg 产品、kWh、MJ | 每个配方和批次 | 与参考输出相同报告期 | 所有纳入转换线 | 按质量加权的配方和每单位转换输出能源 | 配方批准；平衡核对；试验证书 |
| `cp_emissions_waste_records` | 所有适用生产过程 | 直接排放和废物去向 | 烟气/水监测、许可证、废物联单、处理记录 | 物质/废物代码；数量；方法；因子；去向；回收状态；时间戳 | 可获得时采用直接测量；否则根据采集活动量和有文件支持的因子计算。 | 按流分别用 kg 或 m3 | 按监测计划及每次发运 | 对报告期具有代表性 | 所有纳入排放点和废物路线 | 实测合计或有文件支持的计算量除以过程输出 | 实验室报告；许可记录；联单；因子来源 |
| `cp_quality_roll_release` | `foil_rolling`; `annealing`; `double_rolling_and_separation`; `slitting_finishing_and_winding` | 箔材规范和放行量 | 轧制证书、检验和实验室记录 | 合金；状态；名义/实测厚度；公差；宽度；边部；正反面；卷质量；针孔方法/面积/数量；洁净度或润湿性方法/结果；验收判据；放行状态 | 将每个放行卷或抽样批次链接到实测规范和声明的合同判据。 | mm 或 µm；mm；kg；方法特定结果 | 每卷或统计定义批次 | 与参考输出相同报告期 | 所有纳入精整线 | 保留批次结果；产量加权汇总应保留范围和不合格质量 | 仪器校准；抽样方案；分析证书 |
| `cp_internal_scrap_ledger` | `internal_scrap_recovery` | 内部废料循环和回收损失 | 废料票据、重熔批次、回收金属和残余物记录 | 来源过程；废料类别；投入质量；回收金属；返回去向；残余物；库存变化；时间戳 | 将废料从来源过程追溯到回收或转移，不重新分类为外部再生投入。 | kg | 每次转移和回收批次 | 与参考输出相同报告期 | 所有纳入回收地点 | 按废料类别和时期核算循环平衡 | 秤具校准；批次谱系；质量平衡核对 |
| `cp_packaging_dispatch_ledger` | `coil_packaging_and_dispatch` | 箔净质量、卷芯、包装和发运 | 最终称重单、物料清单、包装和发运记录 | 卷材标识；箔净质量；卷芯材料/质量；包装材料/质量；客户规范；发运时间戳 | 核对净重和毛重并保留按材料区分的包装数量。 | kg | 每个发运卷 | 与参考输出相同报告期 | 所有发运地点 | 合计净输出和各包装材料后按箔净质量归一化 | 经校准秤具；发运核对；包装规范 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 完整前景清单 | 归一化流 = 报告期流数量 / 报告期可销售箔净数量。 | 采集的流数量；可销售箔净输出 | 每 1 kg 可销售箔净质量的流 | `iso-14044-2006` |
| `calc_fresh_aluminium_shares` | 含铝投入 | 对从边界外进入的含铝量，原生铝比例 + 外部消费前再生铝比例 + 外部消费后再生铝比例 = 1（在声明舍入误差内）；合金元素和内部返回金属保持单列。 | 按来源类别分列的含铝质量 | 三项已声明外部铝来源比例 | `environdec-pcr-2022-08` |
| `calc_metal_yield` | 声明的铝转换边界 | 金属良率 = 箔中所含可销售铝净质量 / 进入边界的新鲜铝质量。可销售铝不含涂层和衬背；新鲜铝不含内部循环返回。 | 参考产品组成质量；新鲜铝台账；库存变化 | kg 可销售 Al/kg 新鲜 Al 投入 | `european-aluminium-2018` |
| `calc_internal_scrap_balance` | 内部废料循环 | 期初废料库存 + 产生的工艺废料 = 回收金属 + 外售废料 + 回收残余物 + 期末废料库存；重要时校正水分和污染物。 | 废料转移；回收金属；残余物；库存变化 | 已核对的循环平衡和差额 | `european-aluminium-2018` |
| `calc_constituent_fraction` | 转换后箔 | 组成分数 = 各铝、涂层、油墨、清漆、胶黏剂、复合层或衬背的干质量 / 销售产品总干质量；各分数在声明舍入误差内合计为 1。 | 配方、涂布量、衬背、基箔和输出记录 | kg 组成/kg 销售产品 | `eafa-alufoil-production` |
| `calc_weighted_aggregation` | 多产品、生产线或场址 | 以可销售箔净质量为权重汇总各归一化清单流；不得脱离产量权重直接平均比值。 | 场址/生产线/牌号数量和净输出 | 产量加权清单 | `iso-14044-2006` |
| `calc_direct_emission` | 计算得到的直接排放 | 排放量 = 采集活动量 × 有文件支持的排放因子 × 适用控制装置修正；保留因子身份、单位、时期和控制效率证据。 | 活动记录；因子；控制记录 | 物质特定直接排放 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_temporal` | 全部前景数据 | 使用一个不超过连续 12 个月的一致报告期；披露停产、异常生产周期和报告期外的任何替代。 | 有日期的生产、仪表、采购、废物和质量记录 |
| `dq_technological` | 声明产品 | 保留合金/状态、厚度、箔坯路线、轧制/退火路线、双合轧状态、表面转换和应用特定规范；不得在无产量权重时汇总技术上不相似的产品。 | 路线谱系；产品规范；加权汇总工作表 |
| `dq_geographical` | 所有纳入场址和上游链接 | 识别各前景场址的生产国家或地区，以及材料和能源数据集的地理代表性。 | 场址清单；供应商记录；数据集元数据 |
| `dq_completeness` | 质量、能源、水、排放和废物 | 核对材料投入、输出、内部循环、库存变化、仪表和发票；记录排除流及适用截断规则。 | 已签署核对；质量和能量平衡；排除登记表 |
| `dq_measurement` | 采集数量 | 适用时使用经校准或法定检定的仪器，并保留单位、换算因子、抽样方案以及不确定性或精度信息。 | 校准证书；实验室方法；抽样方案；换算工作表 |
| `dq_product_quality` | 放行箔材 | 在规定时记录厚度、合金/状态、卷材几何、针孔和洁净度或润湿性的客户判据及结果。ASTM B926 可用于针孔识别/计数，ASTM F22 可用于定性水膜破裂洁净度检查，但本 PCR 不将这些方法转化为统一验收阈值。 | 放行证书；试验方法；取样面积；试验结果；合同判据 |
| `dq_recycled_content` | 铝来源比例 | 保留外部再生投入的供应商证据和监管链方法；内部废料循环单独报告并避免重复计算。 | 供应商声明；采购规范；质量平衡或隔离记录 |
| `dq_source_hierarchy` | 二手证据 | 优先采用官方标准/PCR 和代表性行业数据集。除非产品、路线、地理、时间和边界的可比性得到证明，否则已发布平均值仅作为背景。 | 来源登记表；可比性评估；替换计划 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 最终参考输出应使用 Aluminum foil `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 `kg`，并精确归一化为 1 kg 销售箔净质量。 |  |
| `validation_category_scope` | 声明产品 | 铝层厚度应大于零且不超过 0.2 mm；厚度不含衬背。厚度超过 0.2 mm 的产品或下游制成品不符合本 PCR 范围。 | `unsd-cpc-3-41535` |
| `validation_required_qualifiers` | 数据集元数据 | 第 3 节每项必需限定信息应有声明值、明确的 `none` 或有理由的 `not applicable`；笼统的电池级或包装级标签不能满足限定信息集。 | `en-546-1-2007`; `astm-b926-2025`; `astm-f22-2021` |
| `validation_route_completeness` | 过程清单 | 过程图中的每个过程均应出现，或对条件过程明确标为不适用并提供证据；受控外包操作应保持可见并链接。 | `european-aluminium-2018`; `eafa-alufoil-production` |
| `validation_mass_reconciliation` | 铝和转换后产品质量 | 质量平衡应核对投入、输出、库存变化、内部循环和残余物。组成分数应在 0 到 1 之间并在声明舍入误差内合计为 1。任何差额均应报告和调查，不得强制归零。 | `iso-14044-2006` |
| `validation_recycled_content` | 铝来源核算 | 各外部铝来源比例应在 0 到 1 之间，三项外部来源比例应在声明舍入误差内合计为 1；内部废料不得计作外部再生成分。 | `environdec-pcr-2022-08` |
| `validation_yield` | 金属转换 | 金属良率应根据采集的质量记录计算，位于 0 到 1 之间，声明所含边界和库存处理，并在存在涂层或衬背时与总体产品良率分开。 | `european-aluminium-2018` |
| `validation_quality_methods` | 放行产品 | 适用时，针孔和洁净度/润湿性应报告合同判据、方法、抽样基准和结果。本 PCR 不设超出已声明合同或适用产品标准的统一合格/不合格阈值。 | `astm-b926-2025`; `astm-f22-2021` |
| `validation_allocation_disclosure` | 已分配清单 | 数据集应识别第 7 节要求的各分配或再循环方法、驱动因素、受影响流和敏感性；未报告的分配方法混用不符合要求。 | `iso-14044-2006`; `environdec-pcr-2022-08` |
| `validation_no_contextual_defaults` | 定量清单 | 未完成有文件支持的可比性评估并明确窄数据集身份时，不得将 European Aluminium 行业平均值或应用特定 Tiangong 过程候选复制为类别默认值。 | `european-aluminium-2018` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景铝箔生产数据包及其过程或生命周期模型投影。 |
| downstream_use | 在产品限定信息匹配时，用于电池集流体、包装、热管理、电气及其他铝箔用途的产品碳足迹、LCA、EPD、供应链清单和工程研究。 |
| allowed_use | 用于已声明的合金/状态、厚度、生产路线、表面状态、涂层/衬背、质量规范、地理、技术和时期；只有在覆盖范围按产量加权且组成透明时才允许更宽汇总。 |
| excluded_use | 用一个窄牌号或路线通用代表整个 CPC 41535；产品性能认证；法律合规声明；超出箔生产者大门的成品包装、电池、电气或热管理产品清单。 |
| required_metadata | CPC 3.0 `41535`；精确 Tiangong 参考流身份；第 3 节全部限定信息；已声明起始条件；纳入/外包过程；场址、地理、技术和时期；分配与再循环方法；前景与二手数据状态。 |
| required_quality_disclosure | 数据覆盖和完整性；计量和估算比例；质量/能量核对；再生成分监管链；金属良率；适用时的针孔和洁净度方法/结果；不确定性和偏离；任何已发布二手数据的可比性限制。 |
| update_trigger | 厚度/合金/状态产品组合、箔坯路线、轧制或退火路线、双合轧实践、表面转换、再生成分采购或分配方法、良率、能源供应、场址边界、质量规范或报告期发生对代表性有实质影响的变化。 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-41535` | official_guidance | 联合国统计司，Central Product Classification Version 3.0，代码 41535 及解释性说明，2025。[CPC 官方资源](https://unstats.un.org/unsd/classifications/Econ/CPC)及 [CPC Version 3.0 解释性说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf)，访问日期 2026-08-09。 | 精确类别身份；铝层厚度上限；带衬背箔的分类处理。 |
| `iso-14044-2006` | standard | ISO 14044:2006，Environmental management - Life cycle assessment - Requirements and guidelines，2022 年确认现行。[ISO 目录记录](https://www.iso.org/standard/38498.html)，访问日期 2026-08-09。 | LCI 边界、分配、数据质量、计算和报告原则。 |
| `environdec-pcr-2022-08` | standard | EPD International，PCR 2022:08 Basic aluminium products and special alloys，版本 1.0.2，有效至 2027-06-09。[PCR 库记录](https://www.environdec.com/pcr-library/pcr_040ae46d-0894-4dca-831b-91aa8d2b93b8)，访问日期 2026-08-09。 | 铝产品 PCR 范围以及明确披露所选废料/再循环分配方法。 |
| `european-aluminium-2018` | dataset | European Aluminium，Environmental Profile Report: Life-Cycle Inventory Data for Aluminium Production and Transformation Processes in Europe，2018 年 2 月。[完整报告](https://european-aluminium.eu/wp-content/uploads/2023/01/European-Aluminium_Environmental-Profile-Report-2018_full-version.pdf)，访问日期 2026-08-09。 | 宽口径铝箔过程分解、热轧和连续铸轧箔坯路线、可选退火/表面处理/分切、双合轧、内部废料回收及行业清单结构背景；不采用其行业数值平均值作为默认值。 |
| `eafa-alufoil-production` | extension_guidance | European Aluminium Foil Association，Alufoil Production。[行业技术页面](https://www.alufoil.org/Alufoil-Production)，访问日期 2026-08-09。 | 箔生产路线、薄规格双合轧、分离、分切、卷材、涂层和复合层。 |
| `en-546-1-2007` | standard | NBN EN 546-1:2007，Aluminium and aluminium alloys - Foil - Part 1: Technical conditions for inspection and delivery。[NBN 官方记录](https://app.nbn.be/data/r/platform/frontend/detail?lang=en&p40_id=174383&p40_language_code=en)，访问日期 2026-08-09。 | 素面变形铝箔检验与交付限定信息；作为更窄的素箔参考，而非类别外边界。 |
| `astm-b926-2025` | standard | ASTM B926-09(2025)，Standard Method for Pinhole Determination in Aluminum and Aluminum Alloy Plain Foil by Means of a Light Table。[ASTM 官方记录](https://store.astm.org/b0926-09r25.html)，访问日期 2026-08-09。 | 可选针孔识别/计数方法和方法/结果披露；不设统一最大值。 |
| `astm-f22-2021` | standard | ASTM F22-21，Standard Test Method for Hydrophobic Surface Films by the Water-Break Test。[ASTM 官方记录](https://store.astm.org/f0022-21.html)，访问日期 2026-08-09。 | 可选定性表面洁净度/水膜破裂法及其披露限制。 |
