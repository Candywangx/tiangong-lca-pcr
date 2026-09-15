---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.fuel-oils-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未另分类的燃料油

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 类别 33370 中、未归入更具体 CPC 燃料类别的可销售燃料油前景数据包。范围包括炼油残余燃料油、重质燃料油、作为燃料销售的重瓦斯油，以及由炼油残余物、馏分稀释组分或其他已声明燃料组分调制且符合条件的混合物。边界止于炼油厂或调和设施门口，不包括下游运输、分销、用户侧储存或燃烧。

本 PCR 不限定单一生产路线。数据集必须声明产品来源是一次分离、转化残余物、处理、外购组分调和，还是上述路线的组合。船用、工业、发电及其他市场等级只有在产品身份满足 CPC 33370 时才属于本范围；市场特定标准用于补充限定，而不取代本产品类别边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.fuel-oils-n-e-c |
| classification_refs | CPC 3.0: 33370，未另分类的燃料油 |
| covered_products | 可销售的残余燃料油、重质燃料油、作为燃料销售的重瓦斯油，以及在其他类别未列明且其已声明组成和市场身份仍属于 CPC 33370 的燃料油调和物。 |
| excluded_products | 原油；汽油；航空燃料和涡轮燃料；煤油；归入 CPC 33360 的瓦斯油或柴油；润滑油；石油气；作为材料使用的沥青；超出已声明 CPC 石油产品边界的纯生物燃料或其他产品；尚不可作为燃料油销售的炼油中间物。 |
| representative_product | 在炼油厂或调和设施门口经质量放行的可销售残余或重质燃料油调和物。 |
| production_route | 炼油分离、残余物转化或处理、组分接收、调和、质量控制、储存和转移的已声明组合。 |
| market_state | 位于生产或调和设施门口的散装液体燃料，已声明等级、组成依据、能量含量和适用质量规范。 |

既有 CPC 解释材料仅用于理解延续的燃料油类别，不取代仓库中的 CPC 3.0 身份。窄规格和特定应用规范必须通过限定信息表达，不得暗中缩窄本 PCR。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在炼油厂或调和设施门口放行、属于 CPC 33370 的可销售燃料油所含净热值能量。 |
| How much | 1 MJ 净热值。 |
| How well | 批次或报告期产出满足其声明的燃料油等级或合同规范，并报告硫含量、密度、黏度及试验温度、水和沉积物、净热值方法与生产路线。 |
| How long or cycle | 一个生产批次或一个内部一致的报告期，通常不超过 12 个月。 |
| reference_flow_link | 功能单位通过天工产品流 `6908344a-d905-4a65-a5e6-9511198fde88` 实现，并受 CPC 33370 分类及下列全部必需限定信息约束。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 燃料 `6908344a-d905-4a65-a5e6-9511198fde88` |
| 参考流属性 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` |
| 参考单位组 | Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` |
| 参考单位 | MJ |
| 必需限定信息 | CPC 33370 产品身份；商业等级或规范；残余型、馏分型或调和型；组分与原料依据；生产与处理路线；硫含量；密度及参考温度；运动黏度及试验温度；水和沉积物；净热值及测量或计算方法；如存在则声明生物源、合成、再生或废物来源份额；生产地域；设施门口状态；批次或报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。天工流的通用名称不授权将其用于其他燃料类别。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_energy_ncv` | 参考产品和全部归一化清单 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 使用同一产品批次的净热值或报告期加权平均净热值，将全部清单归一化到 1 MJ 可销售产出。 |
| `product_mass_energy_link` | 可销售产品和燃料组分 | 净热值和质量 | MJ 和 kg | 分别记录产品质量与净热值；用可销售质量乘以批次匹配的净热值计算产出能量。无文件化换算时不得用高位热值替代。 |
| `volume_mass_conversion` | 以体积计量的液体投入和产出 | 体积、密度和质量 | 报告体积单位、kg/m3 和 kg | 仅使用同一物料且参考温度一致的实测或合同密度将体积换算为质量；保留原始体积、密度、温度和换算记录。 |
| `quality_test_conditions` | 黏度、密度、水、沉积物、硫及其他等级属性 | 属性特定试验结果 | 已声明试验单位 | 报告试验方法、样品或批次身份、适用时的试验温度、删失结果的检出限，以及数值是实测还是供应商报告。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 将每种起始原料或外购组分识别为原油或未完成油品、炼油中间物、残余物流、馏分稀释组分、添加剂或市场燃料组分；声明其是在场址内生产还是跨越前景边界接收。 |
| starting_condition_role | 起始条件决定哪些分离、转化、处理和上游供应过程属于前景，哪些通过上游产品系统链接。 |
| product_classification_scope | 仅限 CPC 3.0:33370；不得将其他燃料类别、未完成中间物或非燃料石油产品重新标记后套用本 PCR。 |
| recursive_input_rule | 本身符合 CPC 33370 的外购投入，应作为带有自身上游数据集和已声明等级的产品投入记录；其生产过程不得在接收方调和过程中重复构建。 |
| upstream_dataset_requirement | 将原油、炼油中间物、氢气、电力、热、水、化学品、添加剂和运输链接到具有代表性的上游数据集；存在供应商特定数据时应予保留。 |
| disclosure | 声明设施和地域、报告期、产品等级、原料和组分依据、采用的路线单元、分配方法、储存和转移边界，以及排除的炼油基础设施或共享作业。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_completeness` | 前景路线 | 纳入将已声明起始条件转化为放行燃料油所需的全部场内作业：适用的分离、转化、处理、调和、质量控制、储存、转移、公用工程、直接排放、废水和废物。 | `us-epa-ap42-petroleum-refining` |
| `boundary_purchased_components` | 接收的炼油物流和燃料组分 | 将接收组分作为带上游数据集的产品投入；其生产被省略时不得声称覆盖从摇篮到大门。 | `unsd-cpc-33370` |
| `boundary_recursive_fuel_oil` | 调和中使用的 CPC 33370 投入 | 在接收的产品投入处停止递归，保留其上游数据集，并声明投入和产出等级，避免调和过程重复计算上游生产。 | `mass-balance-identity` |
| `boundary_downstream_exclusion` | 下游生命周期 | 除非研究明确扩展边界并单独报告，否则排除设施门口之后的运输、经销商或用户储存、燃烧、灰渣管理和终端使用设备。 | `unsd-cpc-33370` |
| `boundary_market_specification` | 船用及其他受监管等级 | 仅对相关已声明等级应用市场特定质量与硫要求；不得用船用或取暖燃料规范缩窄整个 CPC 类别。 | `iso-8217-2024`; `imo-sulphur-2020`; `astm-d396-21` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `primary_refining` | 一次分离与残余物流生产 | conditional | 前景设施处理原油或未完成原料时纳入。 | 前景生产 | 分离炼油物流的质量和净热值能量 |
| `conversion_and_treating` | 残余物转化与处理 | conditional | 纳入为产品组分供料或调质的每个减黏裂化、裂化、焦化、加氢处理、脱硫、脱臭或等效单元。 | 前景生产与调质 | 处理后调和组分的质量 |
| `blending_and_quality_control` | 组分调和与产品放行 | required | 始终纳入配制和放行可销售 CPC 33370 产品的作业。 | 前景生产 | 1 MJ 放行燃料油净热值 |
| `storage_and_transfer` | 产品储存和转移至设施门口 | required | 始终纳入直至已声明设施门口的储存、循环、泵送、库存变化和装载。 | 前景储存和门口交付 | 门口转移的 1 MJ 净热值 |
| `onsite_utilities_and_treatment` | 场内公用工程与残余物处理 | conditional | 场内存在并归属于前景边界的锅炉、加热炉、蒸汽、自发电、制氢、硫回收、火炬、废水处理或废物处理时纳入。 | 前景支持与处理 | 向前景过程交付的服务 |

### 过程：一次分离与残余物流生产（`primary_refining`）

#### 输入

##### 产品流

###### 原油或未完成炼油原料（`crude_or_unfinished_feed`）

按来源和等级记录跨入前景分离系统的每种原料，包括质量、密度以及适用时的能量含量记录。

- 选定流：针对已声明原油或未完成炼油物流选择的原料特定 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：报告期实测接收量加期初库存减期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 MJ 放行燃料油净热值
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_refining_records`
- 来源：`us-epa-ap42-petroleum-refining`

###### 一次炼制公用工程（`primary_refining_utilities`）

记录归属于分离和残余物流生产的计量电力、蒸汽、过程燃料和水；共享公用工程不得重复计入。

- 选定流：为每种计量公用工程选择的公用工程特定 Tiangong 产品流
- 流属性/单位：公用工程特定属性 / 计量单位
- 数量规则：分配给所纳入单元操作的实测或发票核对公用工程用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位过程产出，随后归一化到 1 MJ 放行燃料油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_refining_records`
- 来源：`us-epa-ap42-petroleum-refining`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 残余和重质调和组分（`residual_heavy_components`）

按批次或罐区转移记录每种分离残余物或重瓦斯油组分，包括其去向为参考产品、其他产品还是库存。

- 选定流：依据已声明炼油物流身份选择的组分特定 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：与原料、共产品、库存变化、废物和损失核对的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位一次炼制过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_primary_refining_records`
- 来源：`mass-balance-identity`; `unsd-cpc-33370`

##### 废物流

###### 一次炼制废水和残余物（`primary_refining_wastes`）

按命名废物流及去向记录离开过程的含油水、污泥、罐底或脱盐残余物及其他废物。

- 选定流：数据集构建时选择的废物特定 Tiangong 废物流
- 流属性/单位：Mass / kg
- 数量规则：实测转移、处理记录或文件化质量平衡计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位过程产出，随后归一化到 1 MJ 放行燃料油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_refining_records`
- 来源：`us-epa-ap42-petroleum-refining`

##### 基本流

### 过程：残余物转化与处理（`conversion_and_treating`）

#### 输入

##### 产品流

###### 转化或处理原料（`conversion_feed`）

记录进入所纳入转化或处理单元的每种残余物、重质馏分或中间物，并保留来源过程和转移质量。

- 选定流：针对已声明炼油中间物选择的原料特定 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：与转移和罐区记录核对的实测单元进料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位处理后调和组分产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_treating_records`
- 来源：`us-epa-ap42-petroleum-refining`

###### 氢气、化学品、催化剂和公用工程（`conversion_auxiliaries`）

对每个纳入单元分别记录氢气、处理化学品、催化剂补充、电力、蒸汽和过程燃料。

- 选定流：数据集构建时选择的物质或公用工程特定 Tiangong 产品流
- 流属性/单位：物料或能量特定属性 / 记录单位
- 数量规则：归属于该单元的实测消耗、采购核对或催化剂补充记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位处理后调和组分产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_treating_records`
- 来源：`us-epa-ap42-petroleum-refining`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 处理后燃料油调和组分（`treated_blend_component`）

记录处理或转化后的组分、实测质量、硫及相关质量变化，以及转移至调和的数量。

- 选定流：针对已声明处理后炼油物流选择的组分特定 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：经单元质量平衡核对的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位转化或处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conversion_treating_records`
- 来源：`mass-balance-identity`; `us-epa-ap42-petroleum-refining`

###### 回收硫及其他共产品（`conversion_coproducts`）

分别记录可销售硫、气体、馏分、焦炭或其他共产品；保留实测数量和分配决定。

- 选定流：数据集构建时选择的共产品特定 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：实测共产品产出和库存核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位处理后调和组分产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_treating_records`
- 来源：`us-epa-ap42-petroleum-refining`

##### 废物流

###### 废催化剂、污泥和处理废物（`conversion_wastes`）

记录废催化剂、污泥、废碱液及其他命名处理废物，并声明处理或回收去向。

- 选定流：数据集构建时选择的废物特定 Tiangong 废物流
- 流属性/单位：Mass / kg
- 数量规则：实测外运或处理记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位处理后调和组分产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_treating_records`
- 来源：`us-epa-ap42-petroleum-refining`

##### 基本流

###### 所纳入转化单元的化石二氧化碳（`conversion_fossil_co2`）

根据单元特定监测或文件化碳与燃料计算记录直接化石二氧化碳；上游电力排放保留在上游。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测排放或由采集的燃料与碳记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位处理后调和组分产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conversion_treating_records`
- 来源：`us-epa-ap42-petroleum-refining`

###### 所纳入转化单元的二氧化硫（`conversion_sulfur_dioxide`）

按排放点记录直接二氧化硫，区分监测排放和计算值，并保留硫平衡输入。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测排放或由采集的硫与控制记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位处理后调和组分产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conversion_treating_records`
- 来源：`us-epa-ap42-petroleum-refining`

###### 所纳入转化单元的氮氧化物（`conversion_nitrogen_oxides`）

根据监测点或文件化单元特定计算记录直接氮氧化物。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：Mass / kg
- 数量规则：实测排放或由采集的运行与排放控制记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位处理后调和组分产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conversion_treating_records`
- 来源：`us-epa-ap42-petroleum-refining`

### 过程：组分调和与产品放行（`blending_and_quality_control`）

#### 输入

##### 产品流

###### 燃料油调和组分（`blend_components`）

按罐或批次记录每种场内或外购组分，包括质量、密度、适用时的净热值，以及对硫和黏度的贡献。

- 选定流：为每种已声明调和组分选择的组分特定 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：实测批次投料或转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每调和批次，随后归一化到 1 MJ 放行燃料油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_release_records`
- 来源：`unsd-cpc-33370`; `mass-balance-identity`

###### 稀释组分、添加剂和调和能耗（`blend_auxiliaries`）

将稀释组分与添加剂分开记录，并记录批次或报告期调和加热、循环和泵送的计量能耗。

- 选定流：数据集构建时选择的物料或公用工程特定 Tiangong 产品流
- 流属性/单位：物料或能量特定属性 / 记录单位
- 数量规则：实测批次投料、采购核对或计量公用工程用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每调和批次，随后归一化到 1 MJ 放行燃料油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_release_records`
- 来源：`astm-d396-21`; `iso-8217-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行的参考燃料油（`released_reference_fuel_oil`）

只有通过已声明放行规范的可销售产出才归一化到参考流。留待返工的不合格物料不是可销售产出。

- 选定流：燃料 `6908344a-d905-4a65-a5e6-9511198fde88`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：使用批次匹配的可销售质量和净热值归一化后恰为 1 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 MJ 放行燃料油净热值
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_blending_release_records`
- 来源：`mass-balance-identity`; `astm-d396-21`; `iso-8217-2024`

###### 返回返工的不合格物料（`off_spec_rework`）

将返回调和或其他过程的物料记录为内部转移；离开产品系统的物料应按去向记录为废物或共产品。

- 选定流：针对已声明不合格物料选择的产品特定内部流
- 流属性/单位：Mass / kg
- 数量规则：实测返工转移质量与库存核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每调和批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_release_records`
- 来源：`mass-balance-identity`

##### 废物流

##### 基本流

### 过程：产品储存和转移至设施门口（`storage_and_transfer`）

#### 输入

##### 产品流

###### 进入储存的放行燃料油（`released_fuel_to_storage`）

记录转入可销售储存的放行批次，并保留罐身份、质量或体积、密度和能量含量。

- 选定流：燃料 `6908344a-d905-4a65-a5e6-9511198fde88`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：由批次质量和净热值计算的实测转移能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位储存和转移过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_transfer_records`
- 来源：`mass-balance-identity`

###### 储存加热和转移电力（`storage_energy`）

记录归属于所纳入产品罐和转移期的罐加热、循环、泵送和装载能耗。

- 选定流：外购电力使用 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`；其他能源载体使用路线特定产品流
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ，或 Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` 内的 kWh
- 数量规则：分项计量用量，或基于采集运行记录形成的文件化设备级分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 MJ 在设施门口转移的燃料油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_transfer_records`
- 来源：`us-epa-ap42-petroleum-refining`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 在设施门口转移的燃料油（`fuel_oil_at_gate`）

在库存核对后记录门口转移的可销售净能量，不包括下游运输和用户储存。

- 选定流：燃料 `6908344a-d905-4a65-a5e6-9511198fde88`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：在门口转移和库存损失归一化后恰为 1 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：设施门口转移的 1 MJ 净热值
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_transfer_records`
- 来源：`mass-balance-identity`

##### 废物流

###### 罐底物、排水和污染物料（`storage_wastes`）

按实测数量和去向记录罐底物、排水、含油水、泄漏回收物和受污染吸附材料。

- 选定流：数据集构建时选择的废物特定 Tiangong 废物流
- 流属性/单位：Mass / kg
- 数量规则：实测移除量或文件化库存核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 MJ 在设施门口转移的燃料油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_transfer_records`
- 来源：`us-epa-ap42-petroleum-refining`

##### 基本流

###### 储存和转移空气排放（`storage_air_releases`）

记录物质特定的实测或建模呼吸、工作、装载和无组织排放。存在物质解析数据时不得报告一个未识别的汇总 VOC 流。

- 选定流：为每种已报告空气排放选择的物质特定 Tiangong 基本流
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或由采集的周转量、储罐、产品和控制数据计算的文件化罐区及转移模型值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 MJ 在设施门口转移的燃料油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_transfer_records`
- 来源：`us-epa-ap42-petroleum-refining`

### 过程：场内公用工程与残余物处理（`onsite_utilities_and_treatment`）

#### 输入

##### 产品流

###### 公用工程燃料、电力、水和处理化学品（`onsite_utility_inputs`）

记录所纳入场内公用工程与处理系统的全部投入，再仅将可归属的服务份额分配给前景燃料油路线。

- 选定流：为每种公用工程或处理投入选择的投入特定 Tiangong 产品流
- 流属性/单位：物料或能量特定属性 / 记录单位
- 数量规则：分配到所交付服务的计量、采购或库存核对投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位所交付公用工程或处理服务
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_utility_treatment_records`
- 来源：`us-epa-ap42-petroleum-refining`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交付的公用工程和处理服务（`onsite_services`）

记录向每个前景过程交付的蒸汽、热、电力、氢气、硫回收、废水处理或其他服务，避免与外购供应重复计算。

- 选定流：数据集构建时选择的服务特定 Tiangong 产品流
- 流属性/单位：服务特定属性 / 服务单位
- 数量规则：计量服务交付量或由采集运行记录形成的工程计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位所交付服务
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_utility_treatment_records`
- 来源：`us-epa-ap42-petroleum-refining`

##### 废物流

###### 废水、污泥、灰渣和处理残余物（`onsite_treatment_outputs`）

分别记录处理或未处理废水、污泥、灰渣、回收残余物和最终处置流，并声明去向和处理状态。

- 选定流：数据集构建时选择的废物特定 Tiangong 废物流
- 流属性/单位：Mass / kg
- 数量规则：实测排放、外运或文件化处理质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位所交付公用工程或处理服务，随后分配到 1 MJ 放行燃料油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_utility_treatment_records`
- 来源：`us-epa-ap42-petroleum-refining`

##### 基本流

###### 所纳入场内公用工程系统的化石二氧化碳（`onsite_fossil_co2`）

根据实测排放或采集燃料与碳记录的计算，记录可归属的直接化石二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测排放或由采集的燃料和碳记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位所交付公用工程服务，随后分配到 1 MJ 放行燃料油
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_utility_treatment_records`
- 来源：`us-epa-ap42-petroleum-refining`

###### 所纳入场内公用工程系统的二氧化硫（`onsite_sulfur_dioxide`）

使用监测排放或文件化硫与控制计算记录可归属的直接二氧化硫。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测排放或由采集的硫和控制记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位所交付公用工程服务，随后分配到 1 MJ 放行燃料油
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_utility_treatment_records`
- 来源：`us-epa-ap42-petroleum-refining`

###### 所纳入场内公用工程系统的氮氧化物（`onsite_nitrogen_oxides`）

根据监测或文件化单元特定计算记录可归属的直接氮氧化物。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：Mass / kg
- 数量规则：实测排放或由采集的运行和排放控制记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位所交付公用工程服务，随后分配到 1 MJ 放行燃料油
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_utility_treatment_records`
- 来源：`us-epa-ap42-petroleum-refining`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享炼油和调和作业 | 首先通过单元过程细分、独立计量、批次或罐区追踪，或在合理时为单独建模的功能实施系统扩展来避免分配。 | `eu-recommendation-2021-2279` |
| `allocation_physical` | 无法避免的多产出过程 | 无法细分或系统扩展时，使用能反映投入和排放如何随共产品变化的已证明物理关系分配，例如质量、能量含量或其他因果过程参数。 | `eu-recommendation-2021-2279` |
| `allocation_other_relationship` | 不存在合理物理关系的过程 | 只有在说明物理分配不具代表性后，才可使用经济或其他关系；声明价格、地域、时期和货币依据，并对合理物理替代方法进行敏感性分析。 | `eu-recommendation-2021-2279` |
| `allocation_internal_rework` | 不合格内部返回 | 将内部返工视为不产生共产品抵扣的内部转移；计入增加的调和、公用工程、储存和损失负荷。 | `mass-balance-identity` |
| `allocation_disclosure` | 全部分配负荷 | 报告每个共享过程、共产品、分配键、分母、分配份额、排除流和敏感性结果，使总量可复现。 | `eu-recommendation-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_primary_refining_records` | `primary_refining` | 原料、公用工程、组分、废物 | 仪表、罐区、实验室、发票和废物记录 | 物料 id；来源；期初和期末库存；接收；转移；质量或体积；密度；温度；NCV；去向 | 将仪表和罐区移动与单元运行日志核对 | 记录的质量、体积、能量和试验单位 | 按批次并每月核对 | 与产品产出相同期间 | 所纳入分离单元及其相关储罐 | 按物料和单元求和；计算库存调整总量；分配后归一化 | 校准仪表；罐容表；实验室证书；签字核对 |
| `cp_conversion_treating_records` | `conversion_and_treating` | 原料、辅助投入、产出、废物、直接排放 | 单元进出料仪表；化学品日志；催化剂记录；连续监测；烟道测试；废物联单 | 单元 id；运行小时；原料；产出；氢气；公用工程；硫；控制；排放；废物 | 按运行周期核对单元记录和排放计算 | 记录的物料、能量、浓度和排放单位 | 连续或批次记录每月汇总 | 与产品产出相同期间 | 每个纳入的转化或处理单元 | 仅汇总同质路线；分配前保留单元级计算 | 校准；实验室数据；监测 QA；计算表；废物接收凭证 |
| `cp_blending_release_records` | `blending_and_quality_control` | 组分、辅助投入、放行产品、返工 | 调和单、罐区转移、实验室放行、仪表、发票 | 批次 id；组分 id 与数量；密度；黏度和温度；硫；水；沉积物；NCV；规范；合格或不合格 | 核对批次配方、罐区移动和放行证书 | kg、记录体积单位、MJ/kg 和属性特定试验单位 | 每个放行批次 | 报告期全部批次 | 调和资产和放行实验室 | 仅由合格批次计算可销售产出；适用时按质量加权报告期属性 | 受控配方；校准仪表；认可或文件化试验方法；放行批准 |
| `cp_storage_transfer_records` | `storage_and_transfer` | 储存产品、能耗、门口产出、废物、空气排放 | 罐尺、转移仪表、装载单、能量仪表、维护及排放模型输入 | 储罐 id；期初和期末库存；接收；发运；密度；温度；NCV；加热能耗；废物移除；储罐和控制参数 | 核对库存和转移记录，并应用文件化物质特定排放方法 | kg、记录体积单位、MJ、kWh 和 kg 排放 | 每次转移并每月核对 | 与产品产出相同期间 | 所纳入产品罐、泵和装载点 | 将门口产出调整到一致质量与能量依据；按合理周转量或因果驱动因素分配罐区排放 | 仪表校准；罐容表；装载单；模型输入审查；库存签字 |
| `cp_onsite_utility_treatment_records` | `onsite_utilities_and_treatment` | 公用工程投入、服务、处理产出、直接排放 | 燃料和公用工程仪表、运行日志、监测、排放记录、废物联单 | 系统 id；投入；服务产出；燃料组成；排放控制；排放；废水；污泥；去向 | 由核对后的运行记录计算服务效率和可归属产出 | 记录的物料、能量、服务、排放和排放单位 | 连续或班次记录每月汇总 | 与产品产出相同期间 | 所纳入场内支持系统 | 按第 7 节层级分配所交付服务和残余物 | 校准仪器；实验室和监测 QA；操作员签字；处置凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_saleable_energy` | 放行产品批次 | 可销售能量（MJ）= 可销售产品质量（kg）× 批次净热值（MJ/kg） | 合格批次质量；批次匹配 NCV | MJ 可销售产出 | `mass-balance-identity` |
| `calc_reference_normalization` | 每个前景清单量 | 归一化量 = 已分配报告期数量 ÷ 可销售总产出能量，再乘以 1 MJ 参考数量 | 已分配数量；可销售产出 MJ | 每 1 MJ NCV 产出的数量 | `mass-balance-identity` |
| `calc_liquid_mass` | 体积计量液体 | 质量 = 修正体积 × 同一参考条件下密度；不得混用密度和体积参考温度 | 原始体积；仪表修正；密度；参考温度 | kg 物料 | `astm-d396-21` |
| `calc_mass_reconciliation` | 各单元、调和批次和储存系统 | 投入 + 期初库存 = 产品 + 共产品 + 废物 + 实测排放 + 期末库存 + 已量化未解释差额 | 实测投入、产出、废物、排放和库存记录 | 平衡质量及披露残差 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_technological` | 路线和设备 | 描述实际分离、转化、处理、调和、储存、公用工程和控制技术；不得在无单独结果或权重时合并实质不同路线。 | 单元清单、过程图、运行记录和路线权重 |
| `dq_geographical` | 前景和上游数据 | 直接作业使用设施地域，外购投入使用具有代表性的供应商地域；披露地域代理。 | 场址地址、供应来源、数据集地域和代理理由 |
| `dq_temporal` | 全部前景记录 | 使用一个内部一致且通常不超过 12 个月的期间，覆盖代表性运行条件；披露停工、开工和异常火炬。 | 时间戳、生产日历、运行小时和异常日志 |
| `dq_precision_completeness` | 仪表、试验和平衡 | 报告仪表和试验方法、校准或 QA 状态、采样频率、缺失数据处理、质量平衡残差，以及物料和排放点覆盖度。 | 校准记录、实验室 QA、完整性表和核对工作簿 |
| `dq_method_consistency` | 分配和归一化 | 在全部过程中一致应用一种已声明分配层级和 NCV 参考依据；保留未四舍五入的计算输入。 | 分配工作簿、NCV 记录和归一化检查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_category_identity` | 产品和参考流 | 产品缺失 CPC 33370 身份或任一必需限定信息，或产品是未完成物流、属于更具体燃料类别时，校验失败。 | `unsd-cpc-33370`; `astm-d396-21`; `iso-8217-2024` |
| `validate_reference_identity` | Tiangong 参考流 | 要求产品流 `6908344a-d905-4a65-a5e6-9511198fde88`、NCV 属性 `93a60a56-a3c8-11da-a746-0800200c9a66`、能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` 和参考单位 MJ，且不得嵌入数据集版本。 |  |
| `validate_route_completeness` | 过程图 | 要求两个必需过程和已声明路线触发的每个条件过程；无量化理由而遗漏路线单元、直接排放点、废物或可归属公用工程时校验失败。 | `us-epa-ap42-petroleum-refining` |
| `validate_energy_normalization` | 参考产出 | 由合格批次质量和 NCV 重新计算可销售 MJ，并确认每个清单行使用相同已分配分母。 | `mass-balance-identity` |
| `validate_mass_balance` | 单元、调和和储存平衡 | 重新计算质量平衡；报告带符号残差，超过设施经审查测量不确定度且未经调查批准时校验失败。 | `mass-balance-identity` |
| `validate_allocation` | 共产品和共享系统 | 确认分配层级，复算分配份额；使用经济或非物理兜底方法时要求敏感性分析。 | `eu-recommendation-2021-2279` |
| `validate_emission_resolution` | 直接空气和水排放 | 要求物质特定流、来源或计算方法、控制状态，并避免过程单元与场内公用工程重复计算。 | `us-epa-ap42-petroleum-refining` |
| `validate_market_requirements` | 已声明受监管等级 | 仅对相关产品应用已声明市场规范和硫限值；船用燃料还须核实已声明 MARPOL 区域和适用硫要求。 | `iso-8217-2024`; `imo-sulphur-2020` |
| `validate_data_quality` | 前景数据包 | 报告已执行检查、跳过检查、发现、完整性、时间与地域适配性、技术代表性、精度及未解决证据缺口。 | `eu-recommendation-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 炼油厂或调和设施门口可销售 CPC 33370 燃料油的前景生产数据包。 |
| downstream_use | 构建 Tiangong flow、process 和 lifecyclemodel 投影，以及保留已声明等级和路线的比较或核算研究。 |
| allowed_use | 用于所代表的设施、时期、路线、产品等级、分配和门口状态；扩大使用须明确评估代表性。 |
| excluded_use | 不得作为通用燃烧数据集、原油数据集、柴油或瓦斯油数据集、限定信息不匹配的船用燃料默认值，或未代表路线与地域的替代数据。 |
| required_metadata | PCR id；CPC 代码；产品与商业等级；参考 UUID；设施和地域；期间；路线；原料和组分依据；NCV；硫；密度和温度；黏度和试验温度；水和沉积物；规范；分配；门口；数据所有者和审查状态。 |
| required_quality_disclosure | 一手数据与代理数据份额；上游数据集来源和年限；仪表与实验室 QA；缺失数据处理；质量平衡残差；分配敏感性；排除作业；异常事件；未解决身份和定量证据缺口。 |
| update_trigger | 产品等级、组分依据、路线技术、硫或其他规范、设施或地域、分配、参考流身份、报告期代表性，或适用分类和市场要求发生实质变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-33370` | official_guidance | 联合国统计司，CPC Version 2.1 代码 33370 详情，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/1074/33370 | 燃料油、残余燃料油、重质燃料油、重瓦斯油和调和物的官方解释范围；在仓库 CPC 3.0 身份下解释。 |
| `us-epa-ap42-petroleum-refining` | official_guidance | 美国 EPA，AP-42 第 5.1 章 Petroleum Refining，https://www.epa.gov/sites/default/files/2020-09/documents/5.1_petroleum_refining.pdf | 炼油过程分解、储存和转移、公用工程系统及直接排放清单点。 |
| `eu-recommendation-2021-2279` | official_guidance | 欧盟委员会 Recommendation (EU) 2021/2279 环境足迹方法，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30 | 分配层级，以及技术、地域、时间和精度数据质量准则。 |
| `iso-8217-2024` | standard | ISO 8217:2024，Products from petroleum, synthetic and renewable sources — Fuels (class F) — Specifications of marine fuels，https://www.iso.org/standard/80579.html | 船用等级限定和质量属性披露；不用于缩窄整个 CPC 类别。 |
| `imo-sulphur-2020` | official_guidance | 国际海事组织，IMO 2020 — cutting sulphur oxide emissions，https://www.imo.org/en/mediacentre/hottopics/pages/sulphur-2020.aspx | 按 MARPOL 运行区域限定船用燃料硫合规要求。 |
| `astm-d396-21` | standard | ASTM D396-21，Standard Specification for Fuel Oils，https://doi.org/10.1520/D0396-21 | 燃料油等级和试验记录限定，包括密度、黏度、硫、水、沉积物和放行质量。 |
| `mass-balance-identity` | method_factor | 第 8 节所述质量守恒和批次能量归一化恒等式 | 质量核对、液体质量换算控制、可销售能量、参考归一化和内部返工处理。 |
