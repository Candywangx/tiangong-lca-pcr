---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.live-plants-bulbs-tubers-and-roots-cuttings-and-slips-mushroom-spawn
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 活植物；鳞茎、块茎和根；插条和接穗；蘑菇菌种

## 1. 范围与适用性

本 PCR 适用于为种植、移栽、嫁接、营养繁殖或接种而投放市场的活体植物和真菌繁殖材料。覆盖苗圃培育的活植物和生根幼株；用于繁殖的鳞茎、球茎、根茎、块茎、块根、冠部及其他活根；生根或未生根的插条和接穗；以及以已声明载体或基质交付的蘑菇菌种。

前景数据包边界终止于生产苗圃、农场、实验室或菌种厂门口，涵盖繁殖、生长或培养、分级、植物检疫或污染筛查及出厂准备。只要声明路线，露地和设施生产、土壤和无土路线、裸根和容器化产品、组织培养来源植物以及谷物或基质载体蘑菇菌种均可纳入。

主要用于人类或动物直接食用的产品、采收的花和花蕾、作为种子销售的种子、不含活体繁殖材料的栽培基质、不含活菌种的蘑菇栽培料、成品食用菌、没有产品流的植物繁殖服务，以及繁殖材料离开生产者门口后的下游作物栽培均不在范围内。具体数据集不得合并物种、繁殖材料类型或生产路线存在实质差异的产品，除非报告聚合和分配方法且参考流限定信息仍具代表性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.live-plants-bulbs-tubers-and-roots-cuttings-and-slips-mushroom-spawn |
| classification_refs | CPC 3.0: 01961，精确映射语境 |
| covered_products | 活体苗圃植物；生根幼株；用于繁殖的鳞茎、球茎、根茎、块茎、块根、冠部和活根；生根或未生根的插条和接穗；以已声明载体或基质交付的蘑菇菌种 |
| excluded_products | 作为食物销售的食用根和块茎；切花和花蕾；作为种子销售的种子；未接种的栽培基质或蘑菇栽培料；采收食用菌；下游作物栽培；没有产品流的繁殖服务 |
| representative_product | 符合生产者声明的健康、身份和等级规格的一批可销售、具活力的种植或繁殖材料 |
| production_route | 来源材料接收或内部建立；繁殖准备；苗圃生长或菌种培养；分级和质量筛查；生产者门口准备 |
| market_state | 在生产者门口按销售状态保持活体和活力；声明裸根、容器化、休眠、生长中、生根、未生根或载体结合状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 能够实现所声明种植、移栽、嫁接、营养繁殖或蘑菇接种功能的具活力种植或繁殖材料 |
| How much | 按已声明销售状态质量基准计量的 1 kg 净可销售材料 |
| How well | 符合已声明物种或分类单元、品种或菌株、繁殖材料类型、活力或成活判据、植物检疫或污染状态、尺寸或等级以及载体或栽培基质规格 |
| How long or cycle | 在生产者门口结束的一个完整生产批次或作物周期；声明生产持续时间以及任何休眠、储存或培养时间 |
| reference_flow_link | 参考流是 `grading_and_gate_preparation` 的最终可销售输出，归一化为 1 kg 净可销售材料 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Planting or propagation material；与 CPC 匹配的通用流存在参考属性缺陷，等待修正后确定精确 Tiangong 产品流 UUID |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 科学名称或通用产品名称；适用时的品种、无性系或蘑菇菌株；繁殖材料类型；生根或未生根状态；休眠或生长中状态；裸根、容器或载体形式；已声明净产品质量边界；有意义时每 kg 的数量或繁殖体数量；纳入产品的栽培基质或载体质量；排除的可拆卸容器和包装质量；含水或销售状态；可销售等级；活力或成活判据；植物检疫或污染状态；生产路线；生产地域；生产者门口状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。质量参考量仅用于清单归一化，不代表不同物种、等级、种植单位或蘑菇菌种配方之间具有功能等效性。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 最终参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单结果归一化为生产者门口 1 kg 净可销售材料。按已声明销售状态计量，并保留地磅、秤量、批次或包装记录。 |
| `net_product_boundary` | 产品、栽培基质、载体、容器和包装 | Mass | kg | 纳入活体材料以及作为繁殖产品不可分割组成部分交付的载体或栽培基质。参考产品质量排除可拆卸容器、托盘、套袋、周转箱和运输包装，并将其作为单独投入记录。 |
| `count_to_mass` | 按数量记录的植物、鳞茎、根、插条、接穗和其他材料 | Mass and number of items | kg and item | 运营记录使用数量时，对同一代表性批次测量或抽样可销售质量和数量。报告每 kg 件数及抽样覆盖率，不使用无依据的通用数量-质量换算因子。 |
| `moisture_condition` | 质量随含水量变化的产品和栽培基质 | Mass | kg | 声明称量状态、灌溉或排水间隔，以及是否排除游离表面水。除非保留实测水分数据和换算，否则不得转换为干物质。 |
| `nutrient_and_crop_protection_basis` | 肥料、改良剂、消毒剂和植物保护产品 | Product mass and active or nutrient mass | kg | 分别记录配制产品质量及已声明 N、P、K、有效成分或消毒剂浓度。不得用养分或有效成分质量代替购入产品质量。 |
| `water_volume` | 灌溉、清洗、卫生和工艺用水 | Volume | m3 | 使用计量或供应商记录体积。若由质量换算为体积，应保留实测密度或有文件依据的水密度约定及温度基准。 |
| `energy_preservation` | 电力、燃料、蒸汽和热力 | Energy or fuel-specific property | kWh or MJ；保留燃料原生单位 | 按载能体保留计量能源和燃料数量。仅按 1 kWh = 3.6 MJ 将 kWh 换算为 MJ，不得把电力、热力和燃料合并成一个未区分的能源量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 按已声明路线接收或建立的来源植物、鳞茎、根、插条、接穗、组织培养物、母本衍生物、真菌培养物、菌种接种物或其他繁殖投入 |
| starting_condition_role | 进入前景生产系统的上游繁殖投入或内部维持的生物来源 |
| product_classification_scope | 符合 CPC 3.0 代码 01961 语义边界的产品；分类仅为映射语境，不定义规范 PCR 身份 |
| recursive_input_rule | 本身属于该产品类别的购入投入仅记录一次作为上游产品投入。不得在接收过程中递归重建其苗圃或菌种生产清单。 |
| upstream_dataset_requirement | 对购入的同类别繁殖材料、栽培基质、载体、肥料、能源、容器和其他材料投入使用供应商特定或具有代表性的上游数据集；披露任何代理、地域错配或遗漏的上游负荷。 |
| disclosure | 声明来源材料产地和健康状态、生产路线、设施或露地生产、土壤或无土系统、容器和栽培基质配置、蘑菇菌种载体、生产者门口点位、排除的下游阶段，以及按递归规则处理的同类别投入。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_foreground` | 所有数据集 | 纳入报告生产者实施或委托的繁殖准备、苗圃生长或菌种培养、分级、质量筛查和生产者门口准备。纳入相关水、能源、栽培基质或载体、养分和植物保护投入、容器、包装、产率、废次品、废水及场内废物处理。 | `wur-floripefcr-2024`; `fao-quality-planting-material` |
| `boundary_route_conditionals` | 路线特定操作 | 蘑菇菌种生产发生灭菌、无菌转移、接种、培养和污染物剔除时应纳入。设施环境供热、制冷、照明、通风、灌溉循环、田间操作和植物检疫处理仅在已声明植物生产路线实际发生时纳入。 | `fao-mushroom-cultivation-2001`; `ippc-ispm-36-2012`; `wur-floripefcr-2024` |
| `boundary_recursive_input` | 同类别繁殖投入 | 在已声明起始状态停止类别递归：以一个上游数据集和已披露数量、供应商、健康或质量状态及代理状态表示购入同类别材料。 | `ippc-ispm-36-2012` |
| `boundary_downstream_exclusion` | 出厂后阶段 | 排除出库运输、零售、客户现场种植、后续栽培、作物或食用菌收获、使用阶段养护和报废，除非研究目标明确扩展边界并单独报告这些阶段。 | `wur-floripefcr-2024`; `ingram-et-al-2019-landscape-plants` |
| `boundary_traceability` | 生物身份和植物健康 | 在前景生产期内保持正向和反向批次追溯、来源材料身份、检查、病虫害或污染发现、纠正措施、处理和卫生记录。 | `ippc-ispm-36-2012`; `fao-mushroom-cultivation-2001` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `propagation_setup` | 繁殖材料和生产介质准备 | required | 始终必需；按照已声明植物或蘑菇菌种路线选择路线特定投入和操作 | 生物来源、栽培基质、载体、容器和初始批次的前景建立 | 进入苗圃生长或菌种培养的已建立繁殖批次 |
| `growth_and_incubation` | 苗圃生长或蘑菇菌种培养 | required | 始终必需；苗圃栽培适用于植物材料，无菌培养适用于蘑菇菌种 | 生物生长、环境控制、灌溉、营养、植物保护和批次监测的前景过程 | 转入分级的具活力批次 |
| `grading_and_gate_preparation` | 分级、质量筛查和生产者门口准备 | required | 始终必需 | 可销售和废次材料分离、最终调理、计数或称量及包装的前景过程 | 1 kg 净可销售参考产品 |

### 过程：繁殖材料和生产介质准备（`propagation_setup`）

#### 输入

##### 产品流

###### 来源生物繁殖材料（`source_propagation_material`）

购入或内部转移的植物、鳞茎、根、插条、接穗、培养物、接种物或其他来源材料在分配至生产批次时跨越准备边界。

- 选定流：路线特定繁殖材料；可用时采用经核验、与物种和状态匹配的 Tiangong 流
- 流属性/单位：Mass / kg；有意义时另记 number of items / item
- 数量规则：分配至批次的实测接收或转移数量；内部维持母本仅分配实测更新、维护或繁殖体采收负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个已建立繁殖批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material`
- 来源：`ippc-ispm-36-2012`

###### 栽培基质或繁殖基质（`growing_medium`）

栽培基质填入苗床、托盘、花盆、穴盘或其他繁殖单元时记录。以下无泥炭流仅在产品匹配时采用，其他配方需选择经核验的配方特定流。

- 选定流：无泥炭栽培基质 `23acdfcc-398e-4755-b93b-8a246fc992e5`，适用时
- 流属性/单位：Mass / kg
- 数量规则：按配方实测批次质量，包括含水状态和任何再用比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个已建立繁殖批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_medium_and_carrier`
- 来源：`wur-floripefcr-2024`; `ippc-ispm-36-2012`

###### 谷物或其他蘑菇菌种载体（`spawn_carrier`）

蘑菇菌种记录接受真菌培养物的灭菌载体。仅当载体为小麦时采用 Wheat 流，其他载体需选择经核验的载体特定流。

- 选定流：小麦 `12da5e7d-9b93-4404-8c7d-08f98bec6238`，当实测载体为小麦时
- 流属性/单位：Mass / kg
- 数量规则：分配至菌种批次的实测干载体质量和装载状态质量；报告载体身份和含水基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个接种菌种批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_medium_and_carrier`
- 来源：`fao-mushroom-cultivation-2001`

###### 准备和卫生用水（`setup_water`）

混合介质、浸泡载体、清洗可复用设备或清洁准备区域所消耗的水纳入本过程。

- 选定流：水 `419682fe-60fb-4b43-be89-bf2824b51104`
- 流属性/单位：Volume / m3
- 数量规则：计量工艺体积或分配的供应商体积；分别记录产品内含水和清洗排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已建立繁殖批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`wur-floripefcr-2024`; `fao-mushroom-cultivation-2001`

##### 废物流

不要求废物投入。来自其他系统的再用介质、载体、容器或生物材料，应根据实际转移状态和处理要求记录为产品投入或废物投入。

##### 基本流

如存在直接抽取地下水或地表水，应在具体数据集中用正确基本流表示并与 `cp_water` 核对；不得把同一体积再次记录为供应水。

#### 输出

##### 产品流

###### 已建立繁殖批次（`established_batch`）

准备、种植、生根、嫁接或接种后的批次作为内部产品输出转入苗圃生长或菌种培养。

- 选定流：内部已建立繁殖批次；无需外部产品流 UUID
- 流属性/单位：Mass / kg 和 batch count / batch
- 数量规则：由来源材料、介质或载体、保留水分、容器和实测准备废次品计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已建立繁殖批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_setup_yield`
- 来源：`fao-quality-planting-material`; `fao-mushroom-cultivation-2001`

##### 废物流

###### 被拒或污染的准备材料（`setup_rejects`）

不合格来源材料、受污染载体、洒落介质和不可用准备材料，应在场内处理、堆肥、消毒或场外转移前记录。

- 选定流：路线特定生物或混合准备废物；在具体数据集中选择经核验废物流
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测废次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已建立繁殖批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_discharge`
- 来源：`ippc-ispm-36-2012`; `fao-mushroom-cultivation-2001`

##### 基本流

不规定基本流输出。灭菌、消毒或场内燃烧产生的实测直接排放在跨越环境边界时纳入具体数据集。

### 过程：苗圃生长或蘑菇菌种培养（`growth_and_incubation`）

#### 输入

##### 产品流

###### 已建立繁殖批次投入（`established_batch_input`）

来自 `propagation_setup` 的内部输出直接转移，不再次增加上游负荷。

- 选定流：内部已建立繁殖批次
- 流属性/单位：Mass / kg 和 batch count / batch
- 数量规则：等于 `established_batch` 的转移输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个生长或培养批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_setup_yield`
- 来源：`fao-quality-planting-material`; `fao-mushroom-cultivation-2001`

###### 灌溉和工艺用水（`growth_water`）

纳入灌溉、喷雾、水肥一体化、湿度控制、清洗和培养室卫生用水。循环水应与补水及排放分开记录。

- 选定流：水 `419682fe-60fb-4b43-be89-bf2824b51104`
- 流属性/单位：Volume / m3
- 数量规则：分配至已声明作物或菌种批次的计量补水和其他蓝水使用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个转入分级的具活力批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`wur-floripefcr-2024`; `ippc-ispm-36-2012`

###### 肥料和养分改良剂（`nutrient_inputs`）

记录苗圃植物使用的肥料和改良剂；不得重复记录已包含在所声明菌种载体中的养分。

- 选定流：含有至少两种营养成分（氮、磷、钾）的其他矿物肥料或化肥，未另作规定。`82940075-2add-45f5-8fdd-8126dcd0c759`，仅当购入产品匹配时
- 流属性/单位：Mass / kg product；另报 kg N、P 和 K
- 数量规则：施用于批次的购入或混配产品质量，与期初库存、入库、期末库存和损失核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个转入分级的具活力批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrients_and_treatments`
- 来源：`wur-floripefcr-2024`

###### 植物保护、消毒和卫生产品（`treatment_inputs`）

纳入实际使用的植物保护产品、消毒剂和卫生化学品，并单独识别生物防治和物理处理。

- 选定流：农药 `4b5aaf18-4297-4ff1-aaef-237d08e4b8f1`，仅用于匹配配制产品；否则选择经核验处理特定流
- 流属性/单位：Mass / kg formulated product 和 kg active ingredient
- 数量规则：按施用或卫生日志分配至批次的实测产品用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个转入分级的具活力批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrients_and_treatments`
- 来源：`ippc-ispm-36-2012`; `wur-floripefcr-2024`

###### 环境控制和运行电力（`electricity`）

纳入泵送、照明、通风、制冷、环境控制、洁净区域、培养、监测和搬运用电；具体数据集应采用经核验且地域和电压适当的流。

- 选定流：场址电力供应；Tiangong 候选 `3d76981f-964a-4865-b588-0e067a2a1163` 在采用前需核验流属性
- 流属性/单位：Energy / kWh
- 数量规则：计量电力或有文件依据的分表分配至已声明批次和生产期
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个转入分级的具活力批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`wur-floripefcr-2024`; `ingram-et-al-2019-landscape-plants`

###### 热力、燃料或蒸汽（`thermal_energy`）

纳入设施供热、载体灭菌、巴氏处理、热水处理或湿度控制；保留实际载能体且不得重复记录同一服务。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`，当购入或单独产生蒸汽为实测载能体时
- 流属性/单位：Mass / kg steam 及关联 Energy / MJ；其他燃料保留原生单位
- 数量规则：分配至批次的计量热载体或燃料量；场内产生时保留效率和外输能源记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个转入分级的具活力批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`fao-mushroom-cultivation-2001`; `wur-floripefcr-2024`; `ingram-et-al-2019-landscape-plants`

##### 废物流

除非进入的残余物在本过程有意处理或再用，否则不要求废物投入；此类投入应保留实际废物状态和上游处理边界。

##### 基本流

直接土地占用、自取水和资源投入跨越环境边界时，应使用经核验基本流纳入，不得与供应的技术圈投入重复。

#### 输出

##### 产品流

###### 转入分级的具活力批次（`viable_batch`）

符合内部转移判据的苗圃培育或培养批次在最终分级前称量或计数。

- 选定流：内部具活力繁殖批次
- 流属性/单位：Mass / kg；适用时 item or package count
- 数量规则：生长或培养结束、最终分级前的实测转移质量和数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个生长或培养批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_and_quality`
- 来源：`fao-quality-planting-material`; `fao-mushroom-cultivation-2001`

##### 废物流

###### 淘汰植物或受污染菌种（`growth_rejects`）

死亡、病害、等级不符、污染或其他不可销售材料应在卫生处理、返工、堆肥或处置前记录。

- 选定流：路线特定生物废物；在具体数据集中选择经核验废物流
- 流属性/单位：Mass / kg
- 数量规则：按原因和去向实测淘汰或污染质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个生长或培养批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_discharge`
- 来源：`ippc-ispm-36-2012`; `fao-mushroom-cultivation-2001`

###### 废水或循环系统排污（`wastewater`）

离开前景场址的废水和营养液排污按去向记录，包括实测体积以及可获得的养分、消毒剂或污染物浓度。

- 选定流：在具体数据集中选择与路线和处理匹配的废水流
- 流属性/单位：Volume / m3
- 数量规则：按去向计量排放体积；仅用配对体积和代表性浓度测量计算组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个生长或培养批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_discharge`
- 来源：`wur-floripefcr-2024`

##### 基本流

###### 直接养分和处理排放（`direct_emissions`）

根据前景施用、循环损失、排放和处理记录实测排放，或使用已声明、经评审的方法计算；不得从购入产品质量推断通用排放因子。

- 选定流：在具体数据集中选择物质和环境区室特定基本流
- 流属性/单位：Mass / kg emitted substance
- 数量规则：实测排放或由采集前景投入和场址条件按已声明方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个生长或培养批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_discharge`
- 来源：`wur-floripefcr-2024`

### 过程：分级、质量筛查和生产者门口准备（`grading_and_gate_preparation`）

#### 输入

##### 产品流

###### 具活力批次投入（`viable_batch_input`）

生长或培养过程产生的具活力批次进入最终分级，不重复计算前序负荷。

- 选定流：内部具活力繁殖批次
- 流属性/单位：Mass / kg；适用时 item or package count
- 数量规则：等于 `viable_batch` 的转移输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个最终分级批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_and_quality`
- 来源：`fao-quality-planting-material`; `fao-mushroom-cultivation-2001`

###### 容器和初级包装（`containers_and_packaging`）

记录随产品交付的花盆、穴盘、托盘、套袋、袋、瓶、标签、扎带和其他包装。可复用运输器具按有文件依据的周转次数和损耗摊销，且仍排除在参考产品质量之外。

- 选定流：在具体数据集中选择材料和制品特定包装流
- 流属性/单位：Mass / kg 和 number of items / item
- 数量规则：分配至可销售输出的实测包装质量和数量；声明再生含量和复用率时予以保留
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个可销售分级批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`wur-floripefcr-2024`; `ingram-et-al-2019-landscape-plants`

###### 分级和卫生公用工程（`gate_utilities`）

纳入最终清洗、分级、称量、贴标和出厂储存所用电力、水和处理产品，但不得与全场分配重复。

- 选定流：在具体数据集中选择经核验公用工程特定流
- 流属性/单位：按适用情况为 kWh、MJ、m3 或 kg
- 数量规则：计量或有文件依据分配至最终分级和出厂准备
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个可销售分级批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`wur-floripefcr-2024`

##### 废物流

不要求废物投入。

##### 基本流

不规定基本流投入。仅在自取资源跨越环境边界且未表示为供应产品流时纳入。

#### 输出

##### 产品流

###### 可销售种植或繁殖材料（`reference_product`）

最终可销售输出按已声明净销售状态称量，并携带全部参考流必需限定信息。与 CPC 精确匹配的 Tiangong 通用产品流 UUID 在其参考属性缺陷修正或发布合适替代流前暂不采用。

- 选定流：Planting or propagation material；等待经核验的精确 Tiangong 产品流 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 净可销售输出，排除可拆卸容器和包装，纳入已声明不可分割载体或栽培基质
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_yield_and_quality`
- 来源：`fao-quality-planting-material`; `fao-mushroom-cultivation-2001`

##### 废物流

###### 最终废次品和包装废物（`gate_rejects`）

最终废次产品、修剪物、破损容器、损坏包装，以及未返回可销售批次的实验室或植物检疫样品，应在处理或转移前记录。

- 选定流：在具体数据集中选择材料特定废物流
- 流属性/单位：Mass / kg
- 数量规则：按废物类型、原因和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个最终分级批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_discharge`
- 来源：`ippc-ispm-36-2012`; `wur-floripefcr-2024`

##### 基本流

不规定基本流输出。场内废物处理或卫生操作产生的直接排放仅在实测或用已声明、经评审方法计算时纳入。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共享生产线和操作 | 在分配前先细分过程并使用仪表、批次日志、物料领用或直接人工或设备记录。记录允许时，将苗圃生产、菌种生产以及存在实质差异的设施、田间或实验室路线分开。 | `wur-floripefcr-2024` |
| `allocation_shared_space_time` | 共享苗圃、温室、田间、洁净室、培养室和出厂公用工程 | 使用最接近因果关系的驱动因子分配未计量共享负荷：苗圃空间用占用面积-时间和种植密度；灭菌器和培养器用实测装载、腔体体积-时间或周期时间；分级用处理质量或搬运时间。报告驱动因子和敏感性。 | `wur-floripefcr-2024` |
| `allocation_saleable_and_rejects` | 可销售产品和不可销售生物材料 | 当废次品和受污染材料没有预定产品功能或收入时作为废物处理。不得仅因其被堆肥、消毒、再用或送往其他处理而分配避免负荷信用。 | `ippc-ispm-36-2012`; `fao-mushroom-cultivation-2001` |
| `allocation_multiple_saleable_products` | 多种可销售物种、等级、繁殖体类型或共产品 | 优先采用独立批次清单，或按实测质量、占用面积-时间、批次装载或其他已证明因果关系进行物理分配。没有可辩护物理关系时，只有在披露价格、期间、币种、份额和敏感性后方可采用经济分配。 | `wur-floripefcr-2024` |
| `allocation_mother_stock` | 母株、保藏培养物和可复用来源系统 | 在所代表生产期内产生的繁殖体或菌种批次之间分配实测维护和更新负荷。没有有文件依据的服务寿命和产出基准，不得分配历史建立负荷。 | `ippc-ispm-36-2012` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_material` | `propagation_setup` | 来源生物繁殖材料 | 供应商收货、内部转移和批次身份记录 | supplier; source lot; taxon; cultivar, clone, or strain; material type; origin; received mass; count; health or contamination status; treatment; destination batch | 按批次核对收货、转移、隔离和生产记录 | kg; item; lot | 每次收货或转移 | 完整代表生产期 | 纳入场址全部来源材料接收点 | 按来源批次和目标批次汇总质量和数量；单独保留拒收记录 | 供应商文件、批次标签、检查或测试记录以及正向/反向追溯 |
| `cp_medium_and_carrier` | `propagation_setup` | 栽培基质、基质或菌种载体 | 批次配方和领用记录 | material identity; supplier; formulation; dry or as-received mass; moisture; reused mass; container or bed destination; carrier treatment | 称量各成分并将库存领用与制备批次核对 | kg; % moisture | 每个制备批次 | 完整代表生产期 | 纳入产品全部介质和载体制备 | 按配方和批次汇总；未经披露不得合并实质不同载体 | 秤量记录、配方单、供应商规格和处理日志 |
| `cp_water` | `propagation_setup`; `growth_and_incubation` | 用水、循环和排放 | 仪表、供应商账单、水箱和灌溉控制记录 | source; meter opening and closing; make-up volume; recirculated volume; incorporated volume; discharge volume; allocation driver; date | 优先读取专用仪表；否则核对场址水量平衡和有文件依据的分配 | m3 | 仪表周期；可用时每批次或灌溉周期 | 完整生产周期；连续场址至少覆盖所代表年度运行期 | 纳入全部生产区和水源 | 按来源汇总补水；循环和排放分开；归一化至可销售输出 | 经校准仪表、账单核对、灌溉控制器导出和水量平衡检查 |
| `cp_nutrients_and_treatments` | `growth_and_incubation` | 肥料、改良剂、植物保护、消毒和卫生产品 | 采购、库存、混配和施用记录 | product; formulation; active ingredient; N, P, K content; opening stock; receipts; closing stock; applied mass; batch or area; date; treatment reason | 核对库存平衡和施用日志；保留产品标签和浓度计算 | kg product; kg nutrient or active ingredient | 每次施用或卫生事件；至少每月库存核对 | 完整代表生产期 | 纳入全部生产区和洁净或培养室 | 按产品和批次汇总配制产品及有效成分或养分质量；报告无法解释的库存差异 | 发票、库存记录、施用日志、校准记录、标签或安全数据表 |
| `cp_energy` | `growth_and_incubation`; `grading_and_gate_preparation` | 电力、燃料、热力、蒸汽、制冷和出厂公用工程 | 仪表、燃料收据、锅炉、CHP、腔体周期和设备日志 | carrier; meter opening and closing; purchased quantity; generated quantity; exports; efficiency; equipment; batch; operating time; allocation driver | 优先分表计量；否则核对场址能源和有文件依据的因果分配 | kWh; MJ; kg steam; native fuel unit | 仪表周期和每次灭菌或主要热过程 | 完整生产周期和代表年度运行期 | 纳入全部建筑、田间、温室、洁净室、培养室和出厂区域 | 保留载能体；按过程和批次汇总；外输仅作为单独输出报告 | 仪表校准、账单核对、燃料日志、锅炉或 CHP 记录及周期记录 |
| `cp_setup_yield` | `propagation_setup` | 已建立繁殖批次和准备废次品 | 批次质量平衡记录 | source mass; medium or carrier mass; retained water; container mass; established batch mass; setup reject mass; unexplained difference | 对同一批次边界的投入、内部输出和废次品称量或计数 | kg; item; batch | 每个准备批次，或声明覆盖率的代表性抽样批次 | 完整代表生产期 | 纳入全部准备路线 | 将投入与已建立批次、单独交付容器质量、废次品和实测库存变化核对 | 签署批次单、秤量检查和质量平衡评审 |
| `cp_batch_yield_and_quality` | `growth_and_incubation`; `grading_and_gate_preparation` | 具活力转移批次、可销售输出、等级和活力 | 生产、分级、检查、测试和包装记录 | batch; taxon or strain; start date; end date; route; input count or mass; viable transfer mass; saleable net mass; count; grade; viability or establishment test; pest or contamination finding; rejected mass; weighing condition | 对同一批次称量和计数；执行已声明质量测试并保留抽样方案 | kg; item; % viability; lot | 每个可销售批次 | 完整生产周期；仅聚合可比批次 | 纳入全部生产和分级场址 | 按同质产品和路线汇总可销售净质量和数量；由受测单元计算加权质量指标 | 经校准秤、包装记录、检查或实验室结果、抽样方案和追溯记录 |
| `cp_packaging` | `grading_and_gate_preparation` | 容器和包装 | 物料清单、领用、退回和复用记录 | article; material; mass per item; item count; recycled content; reusable trips; losses; supplier; destination batch | 称量代表性制品并核对领用和退回数量 | kg; item; trip | 每个包装规格和可销售批次 | 完整代表生产期 | 全部出厂准备和包装操作 | 经核验单件质量乘以净领用数量；可复用包装除以有文件依据的完成周转次数并计入损耗补充 | 供应商规格、抽样称量、库存核对和退回日志 |
| `cp_waste_and_discharge` | all processes | 生物废次品、污染材料、包装废物、废水和直接排放 | 废物票据、场内处理日志、排放仪表、样品和计算记录 | waste type; origin batch; mass or volume; contamination reason; treatment; destination; discharge volume; concentration; sample time; calculation method | 称量转移；计量排放；将代表性样品与匹配体积配对；记录场内处理 | kg; m3; kg substance | 每次转移或处理批次；按已声明频率排放采样 | 完整代表生产期 | 纳入全部废物和排放点 | 按类型和去向汇总毛输出；不得将回收或处理信用与投入净额抵销 | 合规转移记录、磅单、处理日志、实验室结果和质量或水量平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | 最终可销售产品 | 净可销售参考质量 = 毛包装批次质量 - 可拆卸容器和包装质量 - 不属于已声明销售状态产品的游离水。仅在载体或栽培基质作为不可分割产品组成部分交付时纳入。 | `cp_batch_yield_and_quality`; `cp_packaging` | kg net saleable material | `wur-floripefcr-2024` |
| `calc_count_mass_conversion` | 按数量记录的运营数据 | 每 kg 件数 = 同一抽样批次的可销售件数 / 净可销售参考质量。仅适用于抽样方案代表的批次。 | `cp_batch_yield_and_quality` | item/kg and sampling coverage | `fao-quality-planting-material` |
| `calc_inventory_normalization` | 每个清单行 | 归一化数量 = 分配至产品的批次或期间毛数量 / 同一批次或代表期间的净可销售参考质量。 | 适用采集协议；`cp_batch_yield_and_quality` | amount per kg reference product |  |
| `calc_setup_balance` | `propagation_setup` | 核对来源材料 + 介质或载体 + 保留水分 + 单独跟踪容器 = 已建立批次 + 准备废次品 + 实测库存变化 + 已披露残差。 | `cp_source_material`; `cp_medium_and_carrier`; `cp_water`; `cp_setup_yield`; `cp_waste_and_discharge` | kg and residual percentage |  |
| `calc_saleable_yield` | 生长、培养和分级 | 可销售产率 = 净可销售参考质量 / 进入所代表生长或培养批次的质量。按原因单独报告淘汰率和污染率。 | `cp_setup_yield`; `cp_batch_yield_and_quality`; `cp_waste_and_discharge` | kg/kg and % rejects | `fao-quality-planting-material`; `fao-mushroom-cultivation-2001` |
| `calc_discharge_emission` | 实测废水物质 | 排放质量 = 匹配排放体积 × 代表性实测浓度，完成单位换算。没有代表性论证，不得使用其他运行状态样品。 | `cp_water`; `cp_waste_and_discharge` | kg substance | `wur-floripefcr-2024` |
| `calc_shared_burden` | 未计量共享操作 | 使用已声明因果驱动因子和总和为一的份额分配共享毛数量。采用与操作匹配的面积-时间和密度、腔体装载或体积-时间、周期时间、处理质量或其他有文件依据驱动因子。 | `cp_energy`; production and space records | Allocated amount and allocation share | `wur-floripefcr-2024` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 产品和来源材料 | 每个可销售批次应向后关联来源材料和生产路线，并向前关联生产者门口批次。记录分类单元、适用时的品种或菌株、繁殖类型以及健康或污染状态。 | 批次登记、标签、供应商文件、检查或实验室记录和批次关联 |
| `dq_measurement` | 质量、数量、水、能源和施用数据 | 使用适合测量范围的经校准或核验仪器。保留单位换算、抽样设计、仪表分配和核对残差。 | 校准证书、秤量检查、仪表导出、抽样记录和计算工作簿 |
| `dq_temporal` | 前景清单 | 每条代表路线至少覆盖一个完整生产周期。连续运营还应使用至少 12 个月的代表运行期，或披露并论证较短的启动或生产活动数据。 | 带日期的生产、仪表、采购、批次和销售记录 |
| `dq_completeness` | 前景边界 | 纳入全部必需过程和全部重要水、能源、介质或载体、养分、处理、容器、包装、产率、废次品、废水和直接排放行。量化或明确论证每项遗漏。 | 过程图、投入产出核对、遗漏登记和评审签字 |
| `dq_route_and_geography` | 上游和前景数据 | 尽可能匹配物种或菌株、繁殖路线、设施或露地生产、基质或载体、技术、地域和时间。披露每项代理及其预期偏差方向。 | 数据集元数据、供应商地域、技术说明和代理评估 |
| `dq_quality_and_health` | 可销售输出 | 执行已声明可销售等级和活力或成活判据。种植用植物保留检查、病虫害管理、卫生、纠正措施和追溯记录；菌种保留污染筛查和培养记录。 | 等级规格、抽样方案、测试结果、检查日志、卫生记录和纠正措施记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 产品身份 | 当必需限定信息不能识别同质产品、路线、市场状态和生产者门口点位，或未经分离纳入食物、切花、种子、仅基质、采收食用菌或下游栽培时，校验失败。 |  |
| `validation_reference_mass` | 参考流 | 当净可销售质量无法与毛批次质量、纳入的载体或栽培基质、可拆卸容器和包装及游离水核对，或数量-质量换算未使用同一代表性批次时，校验失败。 | `wur-floripefcr-2024` |
| `validation_process_coverage` | 过程清单 | 缺少 `propagation_setup`、`growth_and_incubation` 或 `grading_and_gate_preparation` 任一过程，或实际发生的路线条件灭菌、培养、设施环境控制、田间操作或植物检疫处理被遗漏时，校验失败。 | `fao-mushroom-cultivation-2001`; `ippc-ispm-36-2012`; `wur-floripefcr-2024` |
| `validation_recursive_input` | 同类别投入 | 购入同类别繁殖投入既未链接上游数据集也未披露为代理，或递归重建其负荷造成重复计算时，校验失败。 |  |
| `validation_water_energy` | 水和公用工程 | 补水、循环、排放、电力、热力、蒸汽或燃料被静默净额抵销、重复或跨载能体合并，或共享场址分配缺少因果驱动因子及总和为一的份额时，校验失败。 | `wur-floripefcr-2024` |
| `validation_material_inputs` | 介质、载体、养分、处理、容器和包装 | 缺少配方或材料身份、毛数量、单位及对代表批次的分配，或用养分或有效成分质量代替配制产品质量时，校验失败。 | `wur-floripefcr-2024` |
| `validation_spawn_route` | 蘑菇菌种 | 缺少载体身份和含水状态、灭菌或巴氏处理记录、接种和培养批次、污染筛查、废次品，或产品菌株和活力判据时，校验失败。 | `fao-mushroom-cultivation-2001` |
| `validation_plant_health` | 种植用植物 | 缺少已声明生产或贸易语境要求的来源和批次追溯、检查、病虫害发现、卫生、处理及纠正措施记录时，校验失败。 | `ippc-ispm-36-2012` |
| `validation_yield_waste_balance` | 产率、废次品、废水和排放 | 可销售输出、准备废次品、淘汰物、污染材料、废水和其他材料输出未按毛量报告和核对，或处理或回收信用被静默净额抵销时，校验失败。 | `ippc-ispm-36-2012`; `fao-mushroom-cultivation-2001` |
| `validation_allocation` | 共享或多输出系统 | 可行时未尝试细分，所选驱动因子与负荷因果无关，经济分配缺少价格基准和敏感性，或母本负荷缺少有文件依据的生产期和产出基准时，校验失败。 | `wur-floripefcr-2024` |
| `validation_no_functional_equivalence` | 解释和比较 | 任何声称相同 kg 结果即可证明不同物种、等级、繁殖体类型、每 kg 数量、活力、成活性能或菌种配方功能等效的结论均校验失败。 |  |
| `validation_tiangong_reference_identity` | 参考产品流 | 在发布的 Tiangong 产品流既与已声明种植或繁殖材料语义匹配又具有兼容 Mass 流属性前，校验保持不确定；不得用与 CPC 匹配但以 CTUe 为参考属性的通用流替代。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 同质活体种植或繁殖材料及已声明路线的生产者门口前景数据包 |
| downstream_use | 经评审和 UUID 解决后，可发布为作物建植、苗圃供应、营养繁殖、嫁接或蘑菇接种的 `secondary_dataset` 或 `background_dataset`；可支持下游 `process` 和 `lifecyclemodel` 投影 |
| allowed_use | 在地域、技术、路线、产品状态、质量和参考流限定信息具有代表性时，用于产品足迹、供应链清单、生产改进和背景建模 |
| excluded_use | 仅按 kg 声称功能等效；没有性能证据即替代物种、等级、繁殖体类型或菌种配方；把食用作物、切花、种子、未接种基质、采收食用菌或下游栽培建模为本生产者门口数据集覆盖内容 |
| required_metadata | PCR id 和版本；产品和分类身份；适用时的品种、无性系或菌株；繁殖材料类型；生产路线；场址和地域；参考期；生产者门口点位；净质量定义；有意义时每 kg 数量；载体、栽培基质、容器和包装配置；活力、等级、植物检疫或污染状态；分配；上游代理；Tiangong 流身份 |
| required_quality_disclosure | 一手数据份额；时间、地域和技术代表性；仪器和抽样证据；批次和质量平衡残差；水和能源分配；材料和废物完整性；健康和污染检查；代理局限；未解决 Tiangong 参考产品身份 |
| update_trigger | 物种或菌株、繁殖路线、载体或栽培基质、设施或露地生产、场址、能源或水系统、处理制度、分配方法、产品等级或活力判据、包装、上游来源发生变化，或 Tiangong 参考产品流修正 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ippc-ispm-36-2012` | standard | International Plant Protection Convention，*ISPM 36: Integrated measures for plants for planting*，2012 年通过，官方 PDF：https://www.ippc.int/static/media/files/publication/en/2016/01/ISPM_36_2012_En_2015-12-22_PostCPM10_InkAmReformatted.pdf（检索日期 2026-07-30） | 种植用植物边界、生产场所计划、来源和批次追溯、检查、卫生、病虫害管理、记录、纠正措施以及栽培基质和灌溉风险披露 |
| `wur-floripefcr-2024` | standard | Broekema 等，*Product Environmental Footprint Category Rules for Cut flowers and Potted plants: Final version*，Wageningen Economic Research Report 2024-023，DOI：https://doi.org/10.18174/549543（检索日期 2026-07-30；仅作为 2024 年方法证据，不声称超过其标明的 2025 年有效期后仍为现行规则） | 功能单位结构、园艺过程边界、水、能源、肥料、栽培基质、包装、废物、一手数据、分配和质量规则设计 |
| `fao-quality-planting-material` | extension_guidance | FAO Family Farming Knowledge Platform / CIFOR-ICRAF，*Quality Planting Material through Good Nursery Management*，https://www.fao.org/family-farming/detail/en/c/1707870/ 及其链接全文手册（检索日期 2026-07-30） | 苗圃生产分解、健康可销售种植材料质量、移栽准备度、苗圃管理和前景采集设计 |
| `fao-mushroom-cultivation-2001` | extension_guidance | Food and Agriculture Organization of the United Nations，*Mushroom Cultivation for People with Disabilities: A Training Manual*，RAP Publication 2001/12，https://www.fao.org/4/ab497e/ab497e00.htm（检索日期 2026-07-30） | 蘑菇菌种载体准备、灭菌、无菌接种、培养、污染筛查、废次品、卫生和记录保存 |
| `ingram-et-al-2019-landscape-plants` | literature | Ingram、Hall 和 Knight，“Understanding Carbon Footprint in Production and Use of Landscape Plants”，*HortTechnology* 29(1)，2019，DOI：https://doi.org/10.21273/HORTTECH04220-18 | 佐证苗圃和温室前景阶段，以及能源、基质、容器、肥料和路线特定生产条件的重要性 |
