---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.jute-and-other-textile-bast-fibres-except-flax-true-hemp-and-ramie-processed-but-not-sp-997c4cad
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 加工过但未纺过的黄麻及其他纺织用韧皮纤维（亚麻、大麻和苎麻除外），此类纤维的落纤和下脚料

## 1. 范围与适用性

本 PCR 适用于黄麻、红麻及其他适用纺织用韧皮纤维在纺纱前完成准备后的前景数据包，包括已梳理或已并条的纤维状态、落纤，以及仍作为产品销售的纤维下脚料。适用路线从准备工厂门处接收原状或已沤制纤维开始，涵盖选料、实际采用的配批或软化、实际采用的梳理和并条，以及最终打包或散装发运准备。

本 PCR 不包括亚麻、大麻和苎麻；农业种植；已收获茎秆；未作为独立计量上游单元过程建模的沤制和初次纤维提取；已纺纱线；机织、非织造或后整理纺织品；以及不作为 CPC 26170 产品销售而送往废物处理的纤维物料。数据包必须说明参考产品是已准备纤维、梳理纤维或纤维条、并条纤维条、落纤，还是产品级纤维下脚料。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.jute-and-other-textile-bast-fibres-except-flax-true-hemp-and-ramie-processed-but-not-sp-997c4cad |
| classification_refs | CPC 3.0: 26170 |
| covered_products | 加工过但未纺过的黄麻、红麻及其他适用纺织用韧皮纤维（亚麻、大麻和苎麻除外）；梳理或并条纤维及纤维条；落纤；可销售纤维下脚料 |
| excluded_products | 未经准备即销售的原状或已沤制纤维；亚麻；大麻；苎麻；已纺纱线；织物；非织造布；制成品；仅按废物管理的物料 |
| representative_product | 工厂门处加工过但未纺过的黄麻韧皮纤维，并声明交付产品状态 |
| production_route | 选料和分级；可选配批、乳化软化和调湿；可选梳理和并条；最终称量、打包或散装发运 |
| market_state | 工厂门处可销售批次，通常打包或以其他方式成单元，并声明等级、含水基准、纤维种类和加工状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为所声明的下一道纺织工序做好准备，或作为落纤或产品级纤维下脚料销售的加工过但未纺过的适用纺织用韧皮纤维 |
| How much | 1 kg 交付参考产品 |
| How well | 声明纤维种类、产品状态、等级或质量类别、含水基准、配批油或乳液处理，以及产品或废物状态 |
| How long or cycle | 准备工厂门处的一个生产批次；不指定使用期限 |
| reference_flow_link | 下列参考数量和 Tiangong 产品流表示所交付的 CPC 26170 批次 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 加工过但未纺过的黄麻及其他纺织用韧皮纤维（亚麻、大麻和苎麻除外），此类纤维的落纤和下脚料 `f3c8c841-9fe8-4c84-9f01-5dac913d827b` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 纤维种类；已准备纤维、梳理纤维、并条纤维条、落纤或产品级下脚料状态；等级或质量类别；含水量及湿基或干基约定；配批油或乳液处理；打包或散装形式；地理和时间代表性；产品或废物法规状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用经校准的质量计量交付参考产品，并将所有清单数量归一化到同一声明产品状态的 1 kg 或 1,000 kg。 |
| `moisture_basis` | 纤维及纤维衍生产品流 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告收到时质量和含水量，并声明湿基或干基约定。仅按声明的计算规则转换至另一含水基准，并保留原始观测值。 |
| `wastewater_load` | 排入水体的 COD、BOD5 和油脂 | 质量 | kg | 污染物负荷按质量报告；当测得浓度和废水体积时，按 `calc_wastewater_load` 计算并保留两项原始测量值。 |
| `electricity_measurement` | 电力投入 | 能量 | kWh | 优先采用过程分表；否则记录从工厂总表按设备分配的方法及其运行时间证据。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | 前景准备系统 | 从准备工厂门处验收的原状或已沤制适用韧皮纤维批次开始，到同一工厂发运门处称量的加工过但未纺过产品结束。纳入实际采用的选料、配批、软化、调湿、梳理、并条、粉尘控制、废水处理和交付形式准备。 | `unsd-cpc-ver-3-2025`; `bis-jute-certification-manual`; `ec-pef-2021-2279` |
| `upstream_retting_separation` | 种植、沤制和初次提取 | 将种植、已收获茎秆生产、沤制、纤维提取、清洗和初次干燥作为原状或已沤制纤维投入的上游生产。若这些工序在报告场址一体化进行，须作为独立单元过程计量并将其产出连接到本准备系统，不得合并为不可追溯数量。 | `unsd-cpc-ver-3-2025`; `fao-ijo-improved-retting-jute`; `hasan-jute-retting-2020`; `datta-jute-retting-2024` |
| `same_category_recirculation` | 内部回用或外购加工纤维 | 内部回用纤维不得重复计数。外购 CPC 26170 纤维作为投入记录，并连接其上游数据集及披露递归产品类别关系。 | `ec-pef-2021-2279` |
| `downstream_exclusion` | 纺纱及后续纺织工序 | 前景产品门之外排除纺纱、捻线、络筒、织造、非织造加工、染色、整理、使用和生命周期末端；任何研究特定的下游扩展须另行披露。 | `unsd-cpc-ver-3-2025`; `bis-jute-certification-manual` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 准备工厂门处已验收的原状或已沤制黄麻、红麻或其他适用韧皮纤维批次，并声明供应商、种类、等级、含水基准和既往沤制状态 |
| starting_condition_role | 加工但未纺纤维准备系统的上游产品投入 |
| product_classification_scope | 仅 CPC 3.0 子类 26170；原状或已沤制纤维是上游产品，已纺或已转化纺织品是下游产品 |
| recursive_input_rule | 外购同类别加工过但未纺过纤维按产品投入记录并连接上游数据集；内部返回料只作为内部回用记录一次，不计入外购投入总量 |
| upstream_dataset_requirement | 原状或已沤制纤维的供应商特定或代表性上游数据集，适用时包含种植和沤制；无上游数据集时要求独立的一体化沤制记录 |
| disclosure | 声明路线、工厂门、纤维种类、产品状态、等级、含水基准、配批处理、内部回用、共产品状态、包装形式、地理范围、参考期及全部排除工序 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `selection_batching` | 纤维选料、配批与调湿 | required | 每批均纳入选料和称量；仅在实际采用时纳入水、油、表面活性剂和调湿 | 将验收的原状或已沤制纤维转化为适合机械准备的均匀喂入料 | kg 调湿纤维 |
| `carding` | 梳理与清理 | conditional | 在纤维经过开松、清理或形成梳理纤维条时纳入 | 分离纤维束、去除杂质并形成梳理中间产品 | kg 梳理纤维条或纤维 |
| `drawing` | 并条与纤维条均匀化 | conditional | 梳理纤维条在销售或纺纱前进行并合和牵伸时纳入 | 使纤维条均匀并缩减为所声明的未纺产品状态 | kg 并条纤维条 |
| `product_presentation` | 最终称量、打包和发运形式准备 | required | 每个数据集均纳入最终称量；仅在实际采用时纳入电力和每个包装组件 | 确立交付参考产品和发运门质量 | kg 参考产品 |

### 过程：纤维选料、配批与调湿（`selection_batching`）

#### 输入

##### 产品流

###### 原状或已沤制黄麻纤维原料（`raw_retted_jute_fibre_input`）

这是进入准备过程的已验收黄麻纤维批次。数量来自供应商质量、含水量、种类和等级记录。

- 选定流：原状或已沤制黄麻纤维
- 流属性/单位：质量 / kg
- 数量规则：记录经校准的验收批次质量，包装和剔除异物另计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明含水基准的参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`unsd-cpc-ver-3-2025`; `bis-jute-certification-manual`

###### 配批用过程水（`process_water_input`）

仅在实际使用时，记录加入配批乳液、喷淋调湿或设备清洗并跨越过程边界的水。

- 选定流：过程水
- 流属性/单位：体积 / m3
- 数量规则：用水表或罐体平衡记录用水，与无关的工厂用水分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调湿纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batching_materials`
- 来源：`bis-jute-certification-manual`; `ec-pef-2021-2279`

###### 黄麻配批油（`jute_batching_oil_input`）

将所供应的一种配批油配方作为单独投入记录，并在数据集元数据中标明商品名和组成。

- 选定流：黄麻配批油
- 流属性/单位：质量 / kg
- 数量规则：记录配批单或库存领用质量；仅在有无油路线证据时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 调湿纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batching_materials`
- 来源：`bis-jute-certification-manual`

###### 非离子表面活性剂（`nonionic_surfactant_input`）

当非离子表面活性剂是配批乳液的成分时，须单独记录。

- 选定流：非离子表面活性剂
- 流属性/单位：质量 / kg
- 数量规则：记录配批单或库存领用质量；未使用表面活性剂时标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 调湿纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batching_materials`
- 来源：`bis-jute-certification-manual`

###### 选料与配批用电（`electricity_selection_batching`）

本过程的一项计量电力交换包括物料搬运、乳液制备、喷淋、软化和通风设备的用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录过程分表用电，或记录从工厂总表按设备分配的方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调湿纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`bis-jute-certification-manual`; `ec-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调湿黄麻纤维（`conditioned_jute_fibre_output`）

这是完成实际添加和停放时间后离开选料及配批过程的中间产品。

- 选定流：调湿黄麻纤维
- 流属性/单位：质量 / kg
- 数量规则：在转移至梳理或最终交付准备时记录产出批次质量和含水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 调湿纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`bis-jute-certification-manual`

##### 废物流

###### 黄麻根部切除料（`jute_root_cuttings_output`）

喂入准备时去除的根端料按实际去向分类为产品或废物；本卡仅用于作为废物的情形。

- 选定流：黄麻根部切除废料
- 流属性/单位：质量 / kg
- 数量规则：称量单独收集并送往废物处理的根部切除料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调湿纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_destination`
- 来源：`bis-jute-certification-manual`

###### 黄麻纤维清扫废料（`jute_fibre_sweepings_output`）

未返回生产的地面及开松线纤维清扫料作为一项单独称量的废物流记录。

- 选定流：黄麻纤维清扫废料
- 流属性/单位：质量 / kg
- 数量规则：扣除容器皮重后称量清扫料并记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调湿纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_destination`
- 来源：`ec-pef-2021-2279`

###### 配批废水（`batching_wastewater_output`）

乳液损失、地面清洗或设备清洗产生的废水在处理或排放前作为一项废物流记录。

- 选定流：配批废水
- 流属性/单位：体积 / m3
- 数量规则：用水表或罐体平衡计量废水体积并识别处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调湿纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume_quality`
- 来源：`bis-jute-certification-manual`; `ec-pef-2021-2279`

##### 基本流

###### 选料与配批工序排入空气的颗粒物（`particulate_air_selection_batching`）

排出厂房或控制装置的纤维粉尘作为空气排放记录，不与捕集固体废物合并。

- 选定流：未指定粒径颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用实测出口负荷，或根据浓度和排风量形成有文件依据的场址特定计算值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调湿纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_particulate`
- 来源：`bis-jute-certification-manual`; `ec-pef-2021-2279`

###### 排入水体的化学需氧量（`cod_water_selection_batching`）

配批废水经场内或外部处理后排放时，COD 负荷须单独记录。

- 选定流：化学需氧量，排入水体
- 流属性/单位：质量 / kg
- 数量规则：按 `calc_wastewater_load` 用实测 COD 浓度及对应废水体积计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调湿纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_volume_quality`
- 来源：`ec-pef-2021-2279`

###### 排入水体的五日生化需氧量（`bod5_water_selection_batching`）

排放许可或接收处理要求 BOD5 时，将其作为单独水排放记录。

- 选定流：五日生化需氧量，排入水体
- 流属性/单位：质量 / kg
- 数量规则：按 `calc_wastewater_load` 用实测 BOD5 浓度及对应废水体积计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调湿纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_volume_quality`
- 来源：`ec-pef-2021-2279`

###### 排入水体的油脂（`oil_grease_water_selection_batching`）

含油配批废水在实测或许可证要求时，须单独记录油脂负荷。

- 选定流：油脂，排入水体
- 流属性/单位：质量 / kg
- 数量规则：按 `calc_wastewater_load` 用实测油脂浓度及对应废水体积计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调湿纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_volume_quality`
- 来源：`bis-jute-certification-manual`; `ec-pef-2021-2279`

### 过程：梳理与清理（`carding`）

#### 输入

##### 产品流

###### 进入梳理的调湿黄麻纤维（`conditioned_jute_fibre_input_carding`）

这是转入梳理线并称量的调湿纤维。

- 选定流：调湿黄麻纤维
- 流属性/单位：质量 / kg
- 数量规则：记录梳理生产批次的转移质量和含水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 梳理纤维条产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`bis-jute-certification-manual`

###### 梳理用电（`electricity_carding`）

梳理用电包括梳理电机、喂料机、除尘和相关生产线驱动装置。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录梳理生产批次的分表用电或有文件依据的设备分配量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 梳理纤维条产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`bis-jute-certification-manual`; `ec-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 梳理黄麻纤维条（`carded_jute_sliver_output`）

形成纤维条的梳理纤维在进入并条或最终销售时按主要中间产品称量。

- 选定流：梳理黄麻纤维条
- 流属性/单位：质量 / kg
- 数量规则：记录产出质量、含水量和梳理生产线标识。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 梳理纤维条产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`bis-jute-certification-manual`

###### 梳理产生的黄麻落纤（`jute_tow_output_carding`）

作为可单独销售落纤产品回收的短纤维须作为一项共产品交换记录。

- 选定流：加工过但未纺过的黄麻落纤
- 流属性/单位：质量 / kg
- 数量规则：单独称量可销售落纤，并保留销售或转移去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 梳理纤维条产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_destination`
- 来源：`unsd-cpc-ver-3-2025`; `ec-pef-2021-2279`

##### 废物流

###### 黄麻梳理落杂（`jute_caddies_output_carding`）

不作为产品销售且不在内部返回的梳理落杂作为一项废物流记录。

- 选定流：黄麻梳理落杂废料
- 流属性/单位：质量 / kg
- 数量规则：单独称量梳理落杂并记录处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 梳理纤维条产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_destination`
- 来源：`bis-jute-certification-manual`; `ec-pef-2021-2279`

##### 基本流

###### 梳理工序排入空气的颗粒物（`particulate_air_carding`）

梳理线未捕集的纤维粉尘须与已捕集梳理落杂分开记录。

- 选定流：未指定粒径颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用实测出口负荷，或根据浓度和排风量形成有文件依据的计算值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 梳理纤维条产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_particulate`
- 来源：`bis-jute-certification-manual`; `ec-pef-2021-2279`

### 过程：并条与纤维条均匀化（`drawing`）

#### 输入

##### 产品流

###### 进入并条的梳理黄麻纤维条（`carded_jute_sliver_input_drawing`）

转入并条机并称量的梳理纤维条是本卡唯一物料投入。

- 选定流：梳理黄麻纤维条
- 流属性/单位：质量 / kg
- 数量规则：记录并条生产批次的转移质量和含水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 并条纤维条产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`bis-jute-certification-manual`

###### 并条用电（`electricity_drawing`）

并条机及其专用辅助设备的电力须与梳理用电分开记录。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录并条生产批次的分表用电或有文件依据的设备分配量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 并条纤维条产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`bis-jute-certification-manual`; `ec-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 并条黄麻纤维条（`drawn_jute_sliver_output`）

未纺的并条纤维条在最终交付准备前作为主要中间产品或可销售产品称量。

- 选定流：未纺的并条黄麻纤维条
- 流属性/单位：质量 / kg
- 数量规则：记录产出质量、含水量、并条道数和声明等级。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 并条纤维条产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`bis-jute-certification-manual`; `unsd-cpc-ver-3-2025`

###### 并条产生的黄麻落纤（`jute_tow_output_drawing`）

从并条过程回收并作为落纤销售的短纤维须与主纤维条分开记录。

- 选定流：加工过但未纺过的黄麻落纤
- 流属性/单位：质量 / kg
- 数量规则：单独称量可销售落纤，并保留转移或销售证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 并条纤维条产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_destination`
- 来源：`unsd-cpc-ver-3-2025`; `ec-pef-2021-2279`

##### 废物流

###### 送往处理的黄麻纤维条废料（`jute_sliver_waste_output`）

无产品去向的纤维条废料作为废物记录，不与可销售落纤合并。

- 选定流：黄麻纤维条废料
- 流属性/单位：质量 / kg
- 数量规则：单独称量并记录处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 并条纤维条产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_destination`
- 来源：`ec-pef-2021-2279`

##### 基本流

###### 并条工序排入空气的颗粒物（`particulate_air_drawing`）

并条机未捕集的纤维粉尘须与梳理排放分开记录。

- 选定流：未指定粒径颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用实测出口负荷，或根据浓度和排风量形成有文件依据的计算值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 并条纤维条产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_particulate`
- 来源：`bis-jute-certification-manual`; `ec-pef-2021-2279`

### 过程：最终称量、打包和发运形式准备（`product_presentation`）

#### 输入

##### 产品流

###### 可销售加工黄麻纤维批次（`saleable_processed_jute_fibre_input`）

当调湿或梳理纤维而非并条纤维条或落纤进入最终交付准备时使用本卡。

- 选定流：加工过但未纺过的黄麻纤维
- 流属性/单位：质量 / kg
- 数量规则：记录转移质量和含水量；纤维条或落纤参考产品时标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`unsd-cpc-ver-3-2025`

###### 可销售并条黄麻纤维条批次（`saleable_drawn_jute_sliver_input`）

仅在并条纤维条为交付参考产品时使用本卡。

- 选定流：未纺的并条黄麻纤维条
- 流属性/单位：质量 / kg
- 数量规则：记录转移质量和含水量；其他产品状态时标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`unsd-cpc-ver-3-2025`; `bis-jute-certification-manual`

###### 可销售黄麻落纤批次（`saleable_jute_tow_input`）

仅在落纤为交付参考产品时使用本卡。

- 选定流：加工过但未纺过的黄麻落纤
- 流属性/单位：质量 / kg
- 数量规则：记录转移质量和含水量；其他产品状态时标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`unsd-cpc-ver-3-2025`

###### 最终称量与打包用电（`electricity_baling`）

称量、输送和打包设备采用动力时记录其电力。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录最终交付准备的分表用电或有文件依据的设备分配量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`bis-jute-certification-manual`; `ec-pef-2021-2279`

###### 钢制打包丝（`steel_baling_wire_input`）

使用钢丝固定交付包时，钢丝作为独立包装组件记录。

- 选定流：钢制打包丝
- 流属性/单位：质量 / kg
- 数量规则：记录领用量或每包直接质量；使用其他固定系统时标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`ec-pef-2021-2279`

###### 聚丙烯打包带（`polypropylene_strap_input`）

使用聚丙烯带固定交付包时，须与钢丝分开记录。

- 选定流：聚丙烯打包带
- 流属性/单位：质量 / kg
- 数量规则：记录领用量或每包直接质量；未使用聚丙烯带时标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`ec-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交付的加工但未纺韧皮纤维产品（`reference_product_output`）

这是唯一交付参考产品。必需限定信息决定该批次属于已准备纤维、纤维条、落纤还是产品级纤维下脚料。

- 选定流：加工过但未纺过的黄麻及其他纺织用韧皮纤维（亚麻、大麻和苎麻除外），此类纤维的落纤和下脚料 `f3c8c841-9fe8-4c84-9f01-5dac913d827b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按声明含水基准采用经校准的交付批次质量，并将数据集归一化到 1 kg 或 1,000 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 来源：`unsd-cpc-ver-3-2025`

##### 废物流

###### 送往废物处理的不合格黄麻纤维（`off_spec_jute_fibre_output`）

无可销售产品去向的不合格纤维按废物称量，并与 CPC 26170 产品级下脚料区分。

- 选定流：不合格黄麻纤维废料
- 流属性/单位：质量 / kg
- 数量规则：单独称量拒收纤维，并记录处理去向和不合格原因。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_destination`
- 来源：`ec-pef-2021-2279`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共同生产主纤维、落纤和可销售纤维下脚料的过程 | 首先细分已独立计量的单元过程，或在能形成透明多功能结果时扩展系统。不得对已独立计量过程再分配。 | `ec-pef-2021-2279` |
| `allocation_physical` | 不可分离的共同负荷 | 无法细分或扩展且产出质量能反映相关物理关系时，按同一生产批次可销售产出的干重当量分配共同负荷。内部回用和送往处理的废物不进入可销售产出分母。 | `ec-pef-2021-2279` |
| `allocation_other_relation` | 质量不能代表内在功能关系的产出 | 若不存在可辩护的物理关系，采用生产批次平均经济价值等其他有文件依据的关系；披露价格、平均期、币种、分配因子以及对物理备选方案的敏感性。 | `ec-pef-2021-2279` |
| `waste_product_status` | 落纤、纤维下脚料、梳理落杂和不合格纤维 | 依据去向证据将每项物料只分类一次：可销售规格和交易证据使其成为产品或共产品，处理义务使其成为废物。不得将同一质量同时建模为产品和废物。 | `unsd-cpc-ver-3-2025`; `ec-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_identity` | 全部 | 纤维投入、中间产品和最终产品 | 称量单及批次记录 | 毛重；皮重；净重；含水量；种类；等级；产品状态；批次 id；时间戳 | 经校准的秤及代表性含水样品 | kg；百分比 | 每批及每次过程转移 | 至少一个有代表性的生产年度，或披露的生产批次期 | 全部纳入生产线和班次 | 按批次和过程状态汇总净重；归一化前保留含水基准 | 校准证书；取样记录；与库存和销售核对 |
| `cp_batching_materials` | `selection_batching` | 过程水、配批油和表面活性剂 | 仪表、配批单和库存领用记录 | 物料身份；供应商；批次；期初和期末库存；添加量；退料；水表值 | 每项原子物料直接计量或质量平衡 | m3 或 kg | 每配批，按月汇总 | 与产品相同参考期 | 每条配批线 | 每项物料分别汇总；不得使用合并乳液占位 | 仪表校准；配批单；采购和库存核对 |
| `cp_process_electricity` | 全部 | 电力 | 分表或设备分配记录 | 电表起止值；设备 id；运行时间；功率；生产批次 | 优先分表，否则采用与工厂电费单核对的工程分配 | kWh | 每班或每生产批次 | 与产品相同参考期 | 全部纳入设备及辅助设备 | 按过程汇总，并以实际过程产出归一化 | 仪表校准或电费单核对；分配工作表 |
| `cp_waste_mass_destination` | 全部 | 每项产品共输出及废物流 | 容器称量单及去向记录 | 流身份；毛重；皮重；净重；产品/废物状态；内部返回；接收方；处理方式 | 分开容器和经校准称量 | kg | 每次移出或每批 | 与产品相同参考期 | 全部纳入生产线 | 每个具名流分别汇总；内部返回只扣除一次 | 秤校准；销售发票、转移单或废物联单 |
| `cp_wastewater_volume_quality` | `selection_batching` | 废水体积、COD、BOD5、油脂 | 流量计及实验室结果 | 排放体积；采样时间；浓度；处理阶段；去向 | 连续体积计量，并在可行时采用代表性混合样 | m3；mg/L | 体积连续或逐批；水质按许可或代表性频次 | 与产品相同参考期 | 每个可归属于纳入过程的排放口 | 浓度与对应体积匹配，每项污染物分别计算 | 实验室方法、样品传递链、仪表校准、处理记录 |
| `cp_air_particulate` | `selection_batching`; `carding`; `drawing` | 排入空气的颗粒物 | 排口测试及通风运行记录 | 浓度；气体体积；持续时间；控制装置状态；过程产量 | 直接测量或有文件依据的场址特定计算 | mg/m3；m3；h；kg | 许可频次及物料或控制变化后 | 参考期内代表性运行条件 | 每个物料粉尘排口 | 按过程分别计算出口质量；捕集粉尘仍为废物流 | 有资质测试报告；仪器校准；控制装置日志 |
| `cp_packaging_components` | `product_presentation` | 钢丝和聚丙烯带 | 采购领用或每包直接物料清单 | 组件身份；单位质量；每包数量；返回或重复使用 | 直接称量或经抽样核对的供应商规格 | kg | 每种包装设计及每月核对 | 参考期采用的现行包装设计 | 全部交付形式 | 每个组件按交付质量分别计算 | 供应商规格；抽样质量；采购核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 全部清单交换 | 归一化数量 = 期间交换量 / 期间交付参考产品质量 × 选定参考数量 | 交换量；交付参考产品质量；1 kg 或 1,000 kg 选定基准 | 归一化交换量 | `ec-pef-2021-2279` |
| `calc_moisture_conversion` | 需要统一含水基准的纤维质量 | 干质量 = 收到时质量 ×（1 − 湿基含水分数）；转换回声明含水基准时必须说明约定和因子 | 收到时质量；实测含水量；基准约定 | 声明基准上的纤维质量 | `ec-pef-2021-2279` |
| `calc_wastewater_load` | 每项 COD、BOD5 或油脂卡 | 污染物负荷（kg）= 浓度（mg/L）× 废水体积（m3）/ 1,000 | 匹配的浓度和排放体积 | 排入水体的污染物质量 | `ec-pef-2021-2279` |
| `calc_mass_balance` | 每个过程及报告期 | 投入纤维质量加单独计量添加物 = 产品产出加产品共输出加废物加实测库存变化加有文件依据的含水变化；调查而不是强行闭合无法解释的差额 | 投入、产出、废物、库存和含水记录 | 核对结果和无法解释的质量差额 | `ec-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和全部纤维流 | 保留种类、产品状态、等级、含水基准、油处理、批次关联和产品或废物状态；参考产品必须保持在 CPC 26170 范围内。 | 批次规格、Tiangong UUID、称量单及交易或去向证据；`unsd-cpc-ver-3-2025` |
| `dq_temporal` | 全部前景记录 | 使用同一连贯参考期的记录，通常至少连续 12 个月；披露较短生产批次、停机和异常生产。 | 有日期的仪表、台账、实验室报告和生产日历；`ec-pef-2021-2279` |
| `dq_completeness` | 每个纳入过程 | 核对产品、共产品、废物、水、电力、材料、废水指标和直接空气排放；披露每项被排除或不可得的原子交换。 | 过程核对、缺失数据清单和完整性审查；`ec-pef-2021-2279` |
| `dq_representativeness` | 技术、地理和产品组合 | 使记录的生产线、纤维组合和运行条件与声明数据集匹配；披露代理设备分配或上游数据集。 | 生产线清单、生产份额、供应商记录和数据质量评价；`ec-pef-2021-2279` |
| `dq_source_traceability` | 计算和次级数据 | 保留原始值、单位、换算、分配因子、来源版本以及审查可见的计算工作表。 | 审计轨迹和计算文件；`ec-pef-2021-2279` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | UUID、产品流类型、质量属性、kg 单位、CPC 26170 范围或必需产品状态限定信息缺失或不一致时，校验失败。 | `unsd-cpc-ver-3-2025` |
| `validate_scope` | 前景边界 | 若种植、沤制或初次提取在无独立上游单元过程的情况下合并，或纺纱和下游转化在无明确扩展披露时纳入，则校验失败。 | `unsd-cpc-ver-3-2025`; `fao-ijo-improved-retting-jute`; `bis-jute-certification-manual` |
| `validate_atomic_inventory` | 过程清单 | 若电力、水、配批油、表面活性剂、包装组件、每项废物、废水体积、COD、BOD5、油脂或颗粒物排放与另一交换合并，或被选择指令标签替代，则校验失败。 | `ec-pef-2021-2279` |
| `validate_mass_balance` | 每个纳入过程 | 缺少投入、产出、废物、库存和含水核对时校验失败；必须报告无法解释的差额，不得静默分配。 | `ec-pef-2021-2279` |
| `validate_allocation` | 共同负荷和共产品 | 共产品状态、分母、因子或分配层级无文件记录，或同一纤维质量同时计为产品和废物时，校验失败。 | `ec-pef-2021-2279`; `unsd-cpc-ver-3-2025` |
| `validate_data_quality` | 发布的前景数据包 | 时间、技术或地理代表性、仪表和实验室证据、代理使用或缺失数据披露缺失时，校验失败。 | `ec-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 准备工厂门处加工过但未纺过的黄麻或其他适用韧皮纤维前景产品类别数据集 |
| downstream_use | 可作为纺纱、纺织转化、包装、复合材料及其他下游模型的 `secondary_dataset` 或 `background_dataset` 发布 |
| allowed_use | 所需纤维种类、产品状态、等级、含水基准、处理、地理范围、技术和参考期与本数据集匹配的产品系统 |
| excluded_use | 仅原状或已沤制纤维生产；亚麻、大麻或苎麻；已纺纱线；下游织物生产；无法区分可销售落纤或纤维下脚料与送往处理废物的数据集 |
| required_metadata | PCR id 和版本；参考流 UUID；纤维种类；产品状态；等级；含水基准；配批处理；过程路线；产品和废物去向；分配方法；包装形式；工厂地理位置；参考期；上游数据集引用 |
| required_quality_disclosure | 过程覆盖；原子流完整性；仪表和实验室覆盖；质量平衡差额；分配因子；内部回用；缺失数据；代理方法；数据质量评价；全部未决流身份或缺失范围 |
| update_trigger | 纤维种类或产品状态组合、准备技术、配批配方、粉尘或废水控制、包装系统、分配基础、上游纤维来源、地理范围或参考期发生足以改变代表性的变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-ver-3-2025` | official_guidance | 联合国统计司，*Central Product Classification Version 3.0 Explanatory Notes*（2025），https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-20） | CPC 26170 范围、排除项、原状或已沤制上游区别及未纺产品身份 |
| `fao-ijo-improved-retting-jute` | official_guidance | FAO 与 International Jute Organisation，*Improved Retting and Extraction of Jute*，GCP/RAS/122/IJO，https://www.fao.org/fishery/docs/CDrom/aquaculture/a0845t/volume2/docrep/field/381307.htm（检索日期 2026-08-20） | 上游沤制、提取、清洗和干燥过程边界及路线披露 |
| `bis-jute-certification-manual` | official_guidance | 印度标准局，*Product Certification Manual for Jute Bags for Packing 50 kg Sugar according to IS 15138:2010*，https://bis.gov.in/qazwsx/oth/DDGE22IS15138a.pdf（检索日期 2026-08-20） | 纺纱前的选料、软化和乳液制备、梳理、并条、粉尘控制、电力、用水及过程记录结构 |
| `ec-pef-2021-2279` | official_guidance | 欧盟委员会，Recommendation (EU) 2021/2279，Annex I Product Environmental Footprint Method，http://data.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-20） | 功能单位、参考流、前景数据采集、完整性、数据质量、分配层级和校验 |
| `hasan-jute-retting-2020` | literature | Hasan 等，*Pectinolytic Bacterial Consortia Reduce Jute Retting Period and Improve Fibre Quality*，Scientific Reports 10, 5175（2020），https://doi.org/10.1038/s41598-020-61898-z | 经原文核验的沤制、提取、清洗和日晒干燥顺序及路线差异；未采用任何数量范围 |
| `datta-jute-retting-2024` | literature | Datta 等，*The sequential microbial breakdown of pectin is the principal incident during water retting of jute (Corchorus spp.) bast fibres*，BMC Plant Biology 24, 295（2024），https://doi.org/10.1186/s12870-024-04970-4 | 经原文核验的沤制终点重要性及纤维与非纤维组织分离；未采用任何数量范围 |
| `chakrabortty-jute-retting-2023` | literature | Chakrabortty 与 Begum，*An approach to improve the existing ribbon retting of jute fibre using concrete tank and natural catalyst*，Heliyon 9, e19488（2023），https://doi.org/10.1016/j.heliyon.2023.e19488 | 经原文核验的沤制路线对用水量及 BOD/COD 的影响；仅作为上游证据，未将案例值转换为范围 |
