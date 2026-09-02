---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-sheep-fresh-or-processed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 绵羊乳制奶酪（新鲜或加工）

## 1. 范围与适用性

本 PCR 适用于完全以绵羊乳或绵羊乳来源乳制配料制造、交付于奶酪制造设施大门的奶酪。范围包括新鲜或未成熟奶酪、乳清奶酪和凝乳、成熟奶酪（包括霉菌成熟型）、磨碎或粉状奶酪、盐水奶酪，以及所有乳制奶酪或乳配料均可追溯至绵羊乳的加工奶酪。

前景路线必须声明参考产品属于新鲜/未成熟、成熟、乳清奶酪或凝乳、磨碎/粉状或加工状态；还必须声明产品以沥干还是含盐水状态销售、配方及添加配料状态，以及参考质量对应未包装、散装包装还是零售包装状态。

山羊乳、牛乳、水牛乳或其他非绵羊乳制奶酪不在范围内。混乳奶酪，或含有任何非绵羊乳制配料的加工奶酪，均不适用本 PCR，必须重新分类；不得通过分配或质量平衡掩盖非绵羊乳部分。非乳制奶酪类似物不在范围内。绵羊养殖和产乳由上游数据集表示，不在奶酪工厂前景边界中重复建模。默认设施大门边界不包括配送、零售、消费者使用和生命末期。

Codex 产品标准仅用于识别适用产品状态、配料和声明要求；其中的组成、添加剂、卫生或质量条款不提供清单数量。本类别不规定统一的乳到奶酪收率、配方、盐用量、用水量或能耗强度；这些数量必须来自场址和批次特定记录。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-sheep-fresh-or-processed |
| classification_refs | CPC 3.0：22253，绵羊乳制奶酪（新鲜或加工） |
| covered_products | 绵羊乳制新鲜/未成熟奶酪、乳清奶酪和凝乳、成熟或霉菌成熟奶酪、磨碎或粉状奶酪、盐水奶酪，以及仅使用绵羊乳制配料的加工奶酪 |
| excluded_products | 山羊乳、牛乳、水牛乳、其他动物乳或混乳奶酪；含非绵羊乳制配料的加工奶酪；非乳制奶酪类似物 |
| representative_product | 以所声明的新鲜/成熟/加工、盐水、配料和包装状态交付市场的绵羊乳制奶酪 |
| production_route | 接收绵羊乳或可追溯的绵羊乳制奶酪中间产品；路线特定的凝固或乳清回收；按条件进行盐渍、成熟、盐水处理、研磨或加工；最终调理和包装 |
| market_state | 设施大门产品；声明新鲜/未成熟、成熟、乳清奶酪/凝乳、磨碎/粉状或加工状态，并声明沥干/含盐水和包装基准 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在奶酪制造设施大门提供处于所声明产品及市场状态的绵羊乳制奶酪 |
| How much | 按所声明净质量、沥干质量或含包装质量基准计 1 kg 参考产品 |
| How well | 符合生产者声明的产品规格和适用市场要求；动物种属来源及产品状态声明完整 |
| How long or cycle | 从生产到设施大门放行的一个完整生产批次；适用时记录成熟或持有时长 |
| reference_flow_link | `final_conditioning_packaging` 的质量归一化输出，并关联所声明产品状态以及证明仅含绵羊乳制成分的批次记录 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 新鲜或加工的羊奶奶酪 `d2800438-b79a-4065-98ab-b7b0fe10ce97` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 仅绵羊乳；产品状态（新鲜/未成熟、成熟、乳清奶酪/凝乳、磨碎/粉状或加工）；相关时的生乳或热处理状态；适用时的成熟或持有时长；沥干或含盐水基准；配料和配方声明；包装基准；设施大门地理范围和期间 |

构建前景数据包时，`必需限定信息` 中的每项信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息会使参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按所声明基准计量放行产品质量。除非参考产品明确声明为含包装状态，否则排除包装和游离盐水；对于盐水奶酪，须分别声明奶酪固体质量和盐水质量，并说明 1 kg 参考量是沥干还是含包装基准。 |
| `sheep_origin_mass` | 乳和乳制配料 | Mass | kg | 按质量和动物种属来源记录每个接收乳制品批次。不得把非绵羊乳制品质量与绵羊乳投入合并；任何非绵羊乳制投入均要求重新分类。 |
| `volume_to_mass` | 以体积计量的乳、水或盐水 | Mass 或 Volume | kg 或 m3 | 保留实测体积；只有在密度适用于所记录材料、温度和批次或供应商规格时才换算为质量，不得采用统一密度。 |
| `ingredient_mass_basis` | 盐、菌种、凝乳剂、酸、乳化盐及其他配料 | Mass | kg | 使用批次领料、投加或对账记录。Codex 许可或质量限值不构成清单数量。 |
| `energy_conversion` | 电力、热能和燃料 | Energy 或质量/体积 | kWh、MJ、kg 或 m3 | 保留仪表或采购单位，以及用于把能量归一化到参考流的场址特定转换系数、热值和仪表边界。 |
| `packaging_mass` | 初级、次级和三级包装 | Mass | kg | 使用包装规格或经称量的批次样本，把包装件数换算为质量，并分别保留各材料。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 用于初级制造并在奶酪设施接收的绵羊乳，或为加工奶酪/乳清奶酪制造而接收并单独识别的绵羊乳制奶酪/乳清中间产品 |
| starting_condition_role | 定义工厂前景入口，并保留路线从绵羊乳、绵羊乳清或绵羊乳制奶酪中间产品开始的信息 |
| product_classification_scope | 乳制来源完全为绵羊乳，并声明新鲜/成熟/加工、盐水、配料和包装状态的奶酪 |
| recursive_input_rule | 用于制造加工、磨碎、粉状或其他进一步加工奶酪的绵羊乳制奶酪投入，作为具有独立上游数据集的显式技术圈投入保留；不得在接收过程中重新构造或重复计算其先前奶酪制造 |
| upstream_dataset_requirement | 对绵羊乳及所有接收的绵羊乳制中间产品、配料、能源载体、水、包装、研究范围内运至设施的运输和废物处理使用可追溯上游数据集 |
| disclosure | 声明前景入口材料、仅含绵羊乳的证据、过程路线、相关时的生乳/热处理状态、新鲜/成熟/加工状态、成熟或持有时长、盐水基准、配料、包装基准、地理、技术、分配方法和数据期间 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_sheep_only` | 进入前景系统的所有乳制材料 | 仅纳入有文件证明为绵羊乳或绵羊乳来源的批次。混合种属批次或非绵羊乳制配料会使产品不适用本 PCR，必须重新分类。 | `unsd-cpc-3-0-2025`; `fao-who-cxs-206-1999` |
| `boundary_factory_gate` | 前景过程链 | 纳入接收和调理、适用的奶酪制造或加工操作、设施公用工程和清洗、产品损失、废水和废物流、最终调理、包装及截至设施大门放行的场内储存。 | `eu-pef-2021`; `eu-fdm-bat-2019` |
| `boundary_route_declaration` | 产品状态和路线 | 仅纳入实际执行的操作，并声明每个被省略的条件过程。新鲜/未成熟、成熟、乳清奶酪、盐水、磨碎/粉状和加工路线不得由一个假定配方或过程强度表示。 | `fao-who-cxs-283-1978`; `fao-who-cxs-221-2001`; `fao-who-cxs-208-1999` |
| `boundary_upstream_link` | 绵羊乳和绵羊乳制中间产品 | 关联上游数据集，而不递归重建其清单；保留供应商、地理、生产体系和期间兼容性。 | `eu-pef-2021` |
| `boundary_exclusions` | 下游阶段 | 除非研究明确扩大边界并单独报告，否则排除配送、零售、消费者使用和生命末期。 | `eu-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `milk_reception_conditioning` | 绵羊乳接收与调理 | conditional | 绵羊乳进入前景设施时必需 | 建立仅含绵羊乳的身份、接收质量、损失及调理乳输出 | 每批次调理绵羊乳 kg |
| `primary_cheesemaking` | 初级凝乳形成与乳清分离 | conditional | 直接以绵羊乳制造奶酪时必需；按所声明新鲜或成熟路线调整 | 凝固或等效奶酪形成、凝乳处理和乳清分离 | 每批次奶酪中间产品和乳清 kg |
| `whey_cheese_recovery` | 绵羊乳清奶酪回收 | conditional | 参考产品或共产品为乳清奶酪/乳清凝乳时必需 | 从绵羊乳清进行加热/加酸或所声明路线的回收 | 每批次乳清奶酪和残余乳清 kg |
| `salting_ripening_brining` | 盐渍、成熟与盐水处理 | conditional | 执行其中任一操作时必需 | 产品特定的盐/盐水管理、成熟、翻转、清洗、干燥和储存 | 每批次调理后奶酪输出 kg |
| `processed_cheese_manufacture` | 加工、磨碎或粉状绵羊乳制奶酪制造 | conditional | 加工、磨碎、粉化、混配或重熔产品时必需 | 对绵羊乳制奶酪投入进行受配方控制的进一步加工 | 每批次加工奶酪输出 kg |
| `facility_utilities_cleaning` | 设施公用工程、制冷与清洗 | required | 记录可归因于所纳入前景操作的服务 | 电力、热能、水、清洗材料、废水及制冷剂记录 | 分配至合格输出的实测服务量 |
| `final_conditioning_packaging` | 最终调理、包装与场内储存 | required | 适用于散装、无包装或零售包装放行；包装投入依所声明市场状态条件纳入 | 对可销售输出、包装、储存损失和参考流放行进行对账 | 1 kg 放行参考产品 |

### 过程：绵羊乳接收与调理（`milk_reception_conditioning`）

#### 输入

##### 产品流

###### 接收绵羊乳（`received_sheep_milk`）

仅记录有绵羊来源证据的乳批次。供应商、批次、接收质量、温度、用于过程控制的组成或质量数据以及生乳或热处理状态必须与批次保持关联。

- 选定流：绵羊乳
- 流属性/单位：Mass / kg
- 数量规则：每批次实测验收绵羊乳质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_lot_records`
- 来源：`fao-who-cxs-206-1999`; `fao-who-cxs-283-1978`

#### 输出

##### 产品流

###### 调理绵羊乳（`conditioned_sheep_milk`）

记录任何实际执行的过滤、分离、标准化或热处理之后转移至奶酪制造的质量。

- 选定流：调理绵羊乳
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量或批次质量对账
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_batch_output_records`

##### 废物流

###### 拒收乳与接收残余物（`reception_rejects`）

把拒收乳、过滤残余物、洒漏及其去向与验收乳分开记录。

- 选定流：拒收乳和乳制残余物
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或对账的拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_loss_waste_records`

### 过程：初级凝乳形成与乳清分离（`primary_cheesemaking`）

#### 输入

##### 产品流

###### 调理绵羊乳投入（`cheesemaking_milk_input`）

转移调理绵羊乳实测质量，不以通用乳到奶酪收率代替。

- 选定流：调理绵羊乳
- 流属性/单位：Mass / kg
- 数量规则：实测批次转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_lot_records`

###### 菌种、凝乳剂、盐和路线特定配料（`cheesemaking_ingredients`）

分别记录各配料的供应商、批次、乳制配料的动物种属来源、有效制剂和批次剂量。Codex 许可的配料或添加剂类别不是清单数量。

- 选定流：路线特定奶酪制造配料
- 流属性/单位：Mass / kg
- 数量规则：各配料的批次领料或投加记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_formula_records`
- 来源：`fao-who-cxs-283-1978`; `fao-who-cxs-221-2001`

#### 输出

##### 产品流

###### 新鲜凝乳或奶酪中间产品（`fresh_cheese_intermediate`）

记录实际批次输出及其路线去向：作为新鲜奶酪直接放行、成熟/盐水处理或转入进一步加工。

- 选定流：新鲜绵羊乳制奶酪或凝乳中间产品
- 流属性/单位：Mass / kg
- 数量规则：按去向实测输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_output_records`

###### 绵羊乳清（`sheep_milk_whey`）

按质量或经验证的体积转质量换算计量乳清，并记录其出售、内部回收、处理或丢弃去向。

- 选定流：绵羊乳清
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或批次对账的乳清质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_batch_output_records`

##### 废物流

###### 凝乳细粒、洒漏和不合格损失（`cheesemaking_losses`）

按回收、饲料、处理或处置去向分别记录。

- 选定流：奶酪制造乳制残余物
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或对账的损失质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_loss_waste_records`

### 过程：绵羊乳清奶酪回收（`whey_cheese_recovery`）

#### 输入

##### 产品流

###### 绵羊乳清投入（`whey_recovery_input`）

保留乳清来源批次，以及投入数据集所附的任何上游分配或负荷。

- 选定流：绵羊乳清
- 流属性/单位：Mass / kg
- 数量规则：实测接收或转移乳清质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_lot_records`

###### 乳清奶酪配料（`whey_cheese_ingredients`）

从批次配方记录酸化剂、盐、乳添加物或其他路线特定配料；任何乳制添加物均须来自绵羊乳。

- 选定流：乳清奶酪配料
- 流属性/单位：Mass / kg
- 数量规则：各配料的批次领料或投加记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_formula_records`

#### 输出

##### 产品流

###### 回收乳清奶酪或凝乳（`whey_cheese_output`）

记录可销售质量以及所声明新鲜、包装或进一步调理状态。

- 选定流：绵羊乳清奶酪或凝乳
- 流属性/单位：Mass / kg
- 数量规则：实测批次输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_output_records`

##### 废物流

###### 残余乳清和回收损失（`residual_whey`）

记录质量、与处理相关时的浓度和去向，不假定固定回收率。

- 选定流：残余绵羊乳清
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或对账的残余质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_loss_waste_records`

### 过程：盐渍、成熟与盐水处理（`salting_ripening_brining`）

#### 输入

##### 产品流

###### 新鲜绵羊乳制奶酪投入（`ripening_cheese_input`）

记录批次质量、产品状态、用于过程控制时的水分或干物质测量和进入时间。

- 选定流：新鲜绵羊乳制奶酪中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测批次转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_lot_records`

###### 盐和盐水补充（`salt_brine_input`）

分别记录干盐、水、再用盐水和补充或更换量；不得根据产品质量限值推断配方。

- 选定流：盐和过程盐水
- 流属性/单位：Mass / kg
- 数量规则：按批次或槽循环实测补充、添加和转移数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brine_records`
- 来源：`fao-who-cxs-208-1999`

#### 输出

##### 产品流

###### 成熟或盐水奶酪（`ripened_brined_cheese`）

记录放行质量、成熟或盐水处理时长，以及沥干或含盐水状态。成熟期间的质量变化必须由进入和离开实测质量计算，不采用类别默认值。

- 选定流：成熟或盐水绵羊乳制奶酪
- 流属性/单位：Mass / kg
- 数量规则：按所声明质量基准实测批次输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_output_records`

##### 废物流

###### 废盐水和成熟损失（`spent_brine_ripening_losses`）

把废盐水、洗液、奶酪皮修整、不合格奶酪和蒸发质量变化分开记录。

- 选定流：废盐水和成熟残余物
- 流属性/单位：Mass / kg
- 数量规则：按去向实测排放或对账损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_loss_waste_records`

### 过程：加工、磨碎或粉状绵羊乳制奶酪制造（`processed_cheese_manufacture`）

#### 输入

##### 产品流

###### 绵羊乳制奶酪中间产品（`processed_cheese_inputs`）

记录每个奶酪投入批次，并验证所有乳制奶酪和乳配料均来自绵羊乳。混合种属投入必须重新分类。

- 选定流：绵羊乳制奶酪中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测每个投入批次的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_lot_records`

###### 添加配料和工艺水（`processed_cheese_ingredients`）

根据批准的批次配方记录每种配料、加水、加工助剂和乳制来源。不得把 Codex 许可转化为默认配方。

- 选定流：加工奶酪配料和水
- 流属性/单位：Mass / kg
- 数量规则：各材料的批次领料、投加或配方对账
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_formula_records`
- 来源：`fao-who-cxs-283-1978`

#### 输出

##### 产品流

###### 加工、磨碎或粉状奶酪输出（`processed_cheese_output`）

记录质量以及与批次关联的准确加工状态和配方。

- 选定流：加工绵羊乳制奶酪
- 流属性/单位：Mass / kg
- 数量规则：实测可销售批次输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_output_records`

##### 废物流

###### 加工和产品损失（`processed_cheese_losses`）

按去向记录启动、修整、过滤、不合格和清洗回收损失。

- 选定流：加工奶酪残余物
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或对账的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_loss_waste_records`

### 过程：设施公用工程、制冷与清洗（`facility_utilities_cleaning`）

#### 输入

##### 产品流

###### 外购电力（`facility_electricity`）

在可获得的最窄仪表边界记录电网或供应商电力；不得与燃料、蒸汽或回收能合并。

- 选定流：交流电力，声明消费组合与电压等级
- 流属性/单位：Energy / kWh
- 数量规则：使用直接计量或有文件说明的场址分配，把实测电量归因于所纳入过程
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019`

###### 外购蒸汽（`facility_purchased_steam`）

仅在蒸汽跨越设施边界时实例化，并保留供应压力或温度及凝结水回流条件。

- 选定流：外购蒸汽，声明压力与凝结水回流条件
- 流属性/单位：Energy / MJ 或 Mass / kg
- 数量规则：供应商仪表或发票数量，与场内燃料使用分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019`

###### 外购热水（`facility_purchased_hot_water`）

仅在热水作为外购能源服务时实例化，并声明供回水温度。

- 选定流：外购热水，声明供回水温度
- 流属性/单位：Energy / MJ
- 数量规则：实测热量，或根据实测质量、温差和有文件依据的比热计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019`

###### 天然气（`facility_natural_gas`）

当场内锅炉、巴氏杀菌、热水或工艺供热燃烧天然气时实例化。

- 选定流：输送至设施的气态天然气
- 流属性/单位：Volume / m3 或 Energy / MJ
- 数量规则：实测或发票载体数量，并保留声明的高位/低位热值惯例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019`

###### 液化石油气（`facility_lpg`）

场内燃烧 LPG 时实例化，不得与天然气或柴油合并。

- 选定流：输送至设施的液化石油气
- 流属性/单位：Mass / kg 或 Energy / MJ
- 数量规则：罐体领用、交付或库存对账数量；换算时记录热值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019`

###### 柴油（`facility_diesel`）

仅对固定热力设备或可直接归属的场内设备实例化；除非另行纳入，不包括进出场运输。

- 选定流：输送至设施的柴油
- 流属性/单位：Mass / kg 或 Volume / L
- 数量规则：领用或采购数量，并与设备运行记录对账
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019`

###### 工艺用水（`facility_process_water`）

将进入奶酪、盐水、乳清处理或直接接触产品的用水与清洗用水分开记录。

- 选定流：工艺用水，声明水源和处理状态
- 流属性/单位：Volume / m3 或 Mass / kg
- 数量规则：实测数量或批次投加记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019`

###### 清洗用水（`facility_cleaning_water`）

将 CIP、人工冲洗、周转箱清洗和卫生用水与产品/工艺用水分开记录；识别再用水并避免重复计算。

- 选定流：清洗用水，声明水源和处理状态
- 流属性/单位：Volume / m3 或 Mass / kg
- 数量规则：实测数量或从完整设施水平衡进行有文件说明的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019`

###### 氢氧化钠清洗剂（`cip_sodium_hydroxide`）

使用烧碱进行 CIP 或设备清洗时实例化，并保留供应浓度和有效成分质量。

- 选定流：氢氧化钠清洗剂
- 流属性/单位：Mass / kg
- 数量规则：领用溶液质量乘以实测或供应商声明的有效比例，同时保留总质量和有效质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019`

###### 硝酸清洗剂（`cip_nitric_acid`）

酸性 CIP 使用硝酸时实例化，不得与碱液或消毒剂合并。

- 选定流：硝酸清洗剂
- 流属性/单位：Mass / kg
- 数量规则：领用溶液质量乘以实测或供应商声明的有效比例，同时保留总质量和有效质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019`

###### 过氧乙酸消毒剂（`sanitizer_peracetic_acid`）

使用过氧乙酸时实例化；保留配方浓度，不得记录为通用消毒剂。

- 选定流：过氧乙酸消毒剂
- 流属性/单位：Mass / kg
- 数量规则：投加配方质量，并保留供应商有效浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019`

###### 次氯酸钠消毒剂（`sanitizer_sodium_hypochlorite`）

使用次氯酸钠时实例化；保留有效氯浓度，并与其他消毒剂分开。

- 选定流：次氯酸钠消毒剂
- 流属性/单位：Mass / kg
- 数量规则：投加配方质量，并保留有效氯比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019`

#### 输出

##### 废物流

###### 设施废水（`facility_wastewater`）

记录排放体积和去向；保留相关负荷参数的采样数据，并把单独管理的未污染水流与废水区分。BAT 指示性性能水平仅在其规定适用性和分母匹配时作为背景检查。

- 选定流：乳品设施废水
- 流属性/单位：Volume / m3
- 数量规则：实测排放或按去向经验证的水平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

##### 基本流

###### 化学需氧量排水（`wastewater_cod_to_water`）

根据匹配的流量与浓度记录报告乳品废水 COD 负荷。

- 选定流：化学需氧量，排入水体
- 流属性/单位：Mass / kg
- 数量规则：匹配排水体积乘以代表性 COD 浓度，并保留采样覆盖信息
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

###### 五日生化需氧量排水（`wastewater_bod5_to_water`）

将五日生化需氧量负荷与 COD 分开报告。

- 选定流：五日生化需氧量，排入水体
- 流属性/单位：Mass / kg
- 数量规则：匹配排水体积乘以代表性 BOD5 浓度，并保留采样覆盖信息
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

###### 总氮排水（`wastewater_total_nitrogen_to_water`）

当排放路线监测或要求总氮时报告总氮负荷。

- 选定流：总氮，排入水体
- 流属性/单位：Mass / kg
- 数量规则：匹配排水体积乘以代表性总氮浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

###### 总磷排水（`wastewater_total_phosphorus_to_water`）

将总磷负荷与总氮和悬浮物分开报告。

- 选定流：总磷，排入水体
- 流属性/单位：Mass / kg
- 数量规则：匹配排水体积乘以代表性总磷浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

###### 总悬浮物排水（`wastewater_tss_to_water`）

根据匹配的排水与分析记录报告悬浮物负荷。

- 选定流：总悬浮物，排入水体
- 流属性/单位：Mass / kg
- 数量规则：匹配排水体积乘以代表性 TSS 浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

###### 油脂排水（`wastewater_oil_grease_to_water`）

当所选排放或处理路线监测油脂或油脂具有重要性时报告其负荷。

- 选定流：油脂，排入水体
- 流属性/单位：Mass / kg
- 数量规则：匹配排水体积乘以代表性油脂浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

###### 氨制冷剂向空气损失（`refrigerant_r717_to_air`）

R717 系统应实例化，并根据物质特定维护和库存记录计算损失。

- 选定流：氨（R717），排入空气
- 流属性/单位：Mass / kg
- 数量规则：期初充注量加补加量减回收量和期末充注量，并与泄漏事件对账
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### R404A 制冷剂向空气损失（`refrigerant_r404a_to_air`）

R404A 系统应实例化；不得把该混合制冷剂质量与氨或其他制冷剂合并。

- 选定流：制冷剂 R404A，排入空气
- 流属性/单位：Mass / kg
- 数量规则：期初充注量加补加量减回收量和期末充注量，并与泄漏事件对账
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

### 过程：最终调理、包装与场内储存（`final_conditioning_packaging`）

#### 输入

##### 产品流

###### 合格绵羊乳制奶酪（`qualified_cheese_input`）

记录进入最终调理的奶酪批次，并包含本 PCR 要求的产品状态限定信息。

- 选定流：合格绵羊乳制奶酪
- 流属性/单位：Mass / kg
- 数量规则：实测进入最终放行操作的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_output_records`

###### 塑料薄膜包装（`packaging_plastic_film`）

柔性聚合物薄膜应实例化，并声明聚合物、层结构、再生含量和包装层级。

- 选定流：塑料包装薄膜，声明聚合物和复合层结构
- 流属性/单位：Mass / kg
- 数量规则：领用质量或件数乘以经核实的薄膜质量，并扣除退回
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

###### 硬质塑料包装（`packaging_rigid_plastic`）

塑料盒、杯、托盘、盖或封口件应实例化，并保留聚合物与部件身份。

- 选定流：硬质塑料包装部件，声明聚合物
- 流属性/单位：Mass / kg
- 数量规则：部件件数乘以经核实的部件质量，并扣除退回
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

###### 瓦楞纸板包装（`packaging_corrugated_cardboard`）

瓦楞纸箱、外箱、隔板或套筒应实例化。

- 选定流：瓦楞纸板包装
- 流属性/单位：Mass / kg
- 数量规则：部件件数乘以经核实的纸板部件质量，并扣除退回
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

###### 铝箔包装（`packaging_aluminium_foil`）

铝箔或铝箔为主的盖材应实例化；多层复合材料仍须保留完整层结构。

- 选定流：铝箔包装
- 流属性/单位：Mass / kg
- 数量规则：领用质量或部件件数乘以经核实的部件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

###### 玻璃包装（`packaging_glass`）

玻璃罐或容器应实例化，并将封口材料分开记录。

- 选定流：玻璃包装容器
- 流属性/单位：Mass / kg
- 数量规则：合格容器件数乘以经核实的容器质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

###### 木托盘包装（`packaging_wooden_pallet`）

纳入托盘时应实例化；可重复使用托盘按核实周转次数及损失/维修记录分配。

- 选定流：木质运输托盘
- 流属性/单位：Mass / kg
- 数量规则：托盘质量除以核实的重复使用次数，再分配至发运产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

#### 输出

##### 产品流

###### 放行参考产品（`released_sheep_cheese`）

本输出是在所声明新鲜/成熟/加工、盐水、配料和包装状态下的绵羊乳制奶酪。

- 选定流：新鲜或加工的羊奶奶酪 `d2800438-b79a-4065-98ab-b7b0fe10ce97`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所声明参考质量基准恰为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 塑料薄膜包装废料（`waste_plastic_film_packaging`）

将报废和裁切的柔性薄膜与其他聚合物分开，并按去向记录。

- 选定流：塑料薄膜包装废料
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或领用对账的废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_loss_waste_records`

###### 硬质塑料包装废料（`waste_rigid_plastic_packaging`）

按聚合物和去向记录报废的盒、杯、托盘、盖和封口件。

- 选定流：硬质塑料包装废料
- 流属性/单位：Mass / kg
- 数量规则：按聚合物和去向实测或件数转质量对账的废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_loss_waste_records`

###### 瓦楞纸板包装废料（`waste_corrugated_cardboard_packaging`）

将损坏纸箱、外箱、隔板和套筒与塑料包装分开记录。

- 选定流：瓦楞纸板包装废料
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或领用对账的废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_loss_waste_records`

###### 铝箔包装废料（`waste_aluminium_foil_packaging`）

将铝箔及铝箔为主的复合废料分开记录，并保留复合材料组成。

- 选定流：铝箔包装废料
- 流属性/单位：Mass / kg
- 数量规则：按组成和去向实测或领用对账的废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_loss_waste_records`

###### 破损玻璃包装（`waste_glass_packaging`）

将破损或报废玻璃容器与封口和标签废物分开记录。

- 选定流：破损玻璃包装
- 流属性/单位：Mass / kg
- 数量规则：实测破损容器质量，或报废件数乘以经核实的容器质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_loss_waste_records`

###### 最终奶酪产品损失（`waste_final_cheese_product`）

将启动、换产、包装损坏及放行前退回的奶酪与包装废物分开记录。

- 选定流：不合格绵羊乳制奶酪
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或通过批次质量平衡对账的产品损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_loss_waste_records`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 不同产品线、路线和批次 | 应在分配前细分或计量新鲜、成熟、乳清奶酪、盐水和加工路线及共享服务，不采用类别统一因子。 | `eu-pef-2021` |
| `allocation_whey_and_coproducts` | 奶酪、乳清、稀奶油、细粒和其他有价值共产品 | 首先判断过程细分或可独立计量的物理关系能否避免分配。若仍存在多功能性，记录所选物理或经济关系、场址期间质量与价值以及敏感性结果；不得从 Codex 组成条款推断因子。 | `eu-pef-2021` |
| `allocation_internal_whey` | 转入 `whey_cheese_recovery` 的乳清 | 把乳清作为显式中间转移处理，防止初级奶酪制造与乳清奶酪回收之间重复计算。最终数据集须说明上游负荷如何随该转移传递。 | `eu-pef-2021` |
| `allocation_shared_utilities` | 电力、热能、制冷、水、清洗和废水 | 可获得时使用分表计量；否则采用有文件说明的因果驱动量，例如运行时间、设备负荷、清洗表面、水量平衡或批次产量。记录驱动量并与设施总量对账。 | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `allocation_non_sheep_prohibited` | 混合种属乳制投入 | 分配不得用于把混乳或非绵羊乳制产品重新标记为绵羊乳制奶酪。此类产品不在范围内，必须重新分类。 | `unsd-cpc-3-0-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_lot_records` | `milk_reception_conditioning`; `primary_cheesemaking`; `whey_cheese_recovery`; `salting_ripening_brining`; `processed_cheese_manufacture` | 乳、乳清和奶酪中间产品的投入与转移 | 接收单、批次表、储槽或秤记录、供应商声明 | lot_id; supplier; animal_species; material_state; raw_or_heat_treated_status; gross_mass; tare_mass; net_mass; volume; density_basis; timestamp; destination_batch | 使用经校准的称量或计量并关联批次；保留绵羊来源证据 | kg；适用密度换算的 L 或 m3 | 每次接收和转移 | 声明期间内全部合格批次 | 每个纳入设施和供应商批次 | 按材料和批次汇总验收净质量；拒收和非绵羊乳批次分开 | 秤或仪表校准；供应商种属声明；批次追溯；库存对账 |
| `cp_ingredient_formula_records` | `primary_cheesemaking`; `whey_cheese_recovery`; `processed_cheese_manufacture` | 菌种、凝乳剂、盐、酸化剂、加水和其他配料 | 批准配方、领料单、投加日志 | batch_id; ingredient_id; supplier_lot; dairy_species_origin; issued_mass; returned_mass; dosed_mass; concentration; formulation_revision | 把领用、退回和投加量与批准批次配方对账 | kg；适用密度换算的 L | 每批次 | 全部合格批次 | 各设施的每种产品和配方 | 按批次和配料计算净用量，不以默认配方代替 | 配方批准；批次追溯；投加装置校准；领退对账 |
| `cp_batch_output_records` | `milk_reception_conditioning`; `primary_cheesemaking`; `whey_cheese_recovery`; `salting_ripening_brining`; `processed_cheese_manufacture`; `final_conditioning_packaging` | 中间产品、共产品和可销售输出 | 批次收率表、秤记录、储槽仪表、仓库放行 | batch_id; product_state; entry_mass; output_mass; whey_mass_or_volume; brine_state; ripening_start_end; pack_basis; disposition; timestamp | 直接称量或计量，并关联各过程步骤和去向 | kg；适用密度换算的 L 或 m3 | 每批次或批次移动 | 全部合格批次 | 各纳入过程线 | 按批次和去向汇总实测输出；只有在合格参考质量确定后才归一化 | 校准；批次谱系；仓库对账；保留产品状态声明 |
| `cp_brine_records` | `salting_ripening_brining` | 盐、补充水、再用盐水、奶酪带出盐水和废盐水 | 槽日志、投加日志、实验室记录、排放单 | tank_id; cycle_id; initial_mass_or_volume; salt_addition; water_addition; transferred_in_out; concentration; cheese_lot; spent_brine_mass_or_volume; destination | 计量或称量添加和移出量；当浓度用于过程计算时取样 | kg；m3；记录单位的浓度 | 每个槽循环和奶酪批次 | 全部适用循环 | 各盐水系统 | 按循环进行槽质量平衡；仅用有文件说明的奶酪批次驱动量分配 | 仪表/秤校准；样品结果；槽对账；去向记录 |
| `cp_utility_records` | `facility_utilities_cleaning` | 电力、燃料、热能、水和清洗材料 | 仪表、发票、库存领用、生产日志 | meter_id; opening_closing_reading; carrier; unit; fuel_quality_or_calorific_value; water_use; chemical_id; concentration; operating_time; process_or_line | 可获得时读取分表；对账发票和库存；记录共享服务分配驱动量 | kWh；MJ；kg；m3 | 可计量时按批次，否则每日或每月 | 包含季节与产品组合变化的代表性声明期间 | 各设施和仪表边界 | 扣除经核实的非生产用途；用有文件的因果驱动量分配共享总量；与设施总量对账 | 仪表校准；发票；库存对账；分配工作表；完整性检查 |
| `cp_wastewater_records` | `facility_utilities_cleaning` | 废水和单独管理的水流 | 排放仪表、水平衡、样品和处理记录 | stream_id; destination; volume; sampling_time; pH; temperature; COD_or_TOC; nitrogen; phosphorus; chloride; conductivity; treatment | 尽可能计量排放，否则采用经验证的水平衡；采样与处理和许可情境相关的参数 | m3 和参数特定单位 | 连续或每次排放；代表性采样 | 声明期间 | 各排放点和处理去向 | 按水流和去向汇总；只有流量和浓度数据匹配时才报告负荷 | 仪表校准；实验室方法；采样计划；水平衡对账 |
| `cp_refrigerant_records` | `facility_utilities_cleaning` | 制冷剂损失 | 设备维护和制冷剂库存日志 | equipment_id; refrigerant; opening_charge; additions; recovery; closing_charge; service_date; leak_event | 在声明期间按物质进行质量对账 | kg | 每次维护和期末 | 声明期间 | 服务于纳入操作的全部制冷设备 | 补加量加期初充注量减回收量和期末充注量，并检查无法解释的不平衡 | 维护证书；钢瓶记录；设备清单；对账签核 |
| `cp_packaging_records` | `final_conditioning_packaging` | 初级、次级和三级包装 | 物料清单、领料记录、部件规格、称量样本 | packaging_component; material; supplier; component_mass; count_issued; count_returned; scrap_count; recycled_content_claim; pack_format | 对账领用与退回件数；使用供应商规格或代表性称量换算 | 件；kg | 每种包装形式和批次 | 全部合格生产 | 各产品和包装形式 | 净件数乘以经核实部件质量；材料和包装层级分开 | 当前规格；样本称量记录；领退对账 |
| `cp_loss_waste_records` | 所有纳入过程 | 拒收材料、洒漏、凝乳细粒、残余乳清、废盐水、不合格奶酪、包装废物及其他损失 | 废物秤、生产损失日志、转移单、处理或销售记录 | batch_id; material; mass_or_volume; solids_or_concentration_if_relevant; cause; destination; recovery_status; ticket_id | 转移时称量或计量，否则完成有文件说明的物料平衡 | kg；m3 | 每个事件或批次 | 声明期间 | 各过程和去向 | 按材料、原因和去向汇总；不得用有价值共产品抵减废物 | 秤/仪表证据；去向单据；质量平衡对账；主管复核 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 用同一声明净质量、沥干质量或含包装质量基准的放行参考产品质量，除声明期间或批次数量。 | 行数量；合格放行质量；包装/盐水基准 | 每 1 kg 参考产品数量 | `eu-pef-2021` |
| `calc_product_mass_basis` | 盐水和包装产品 | 声明为沥干/净质量时，参考质量等于实测奶酪质量；声明为含包装时，分别报告奶酪、游离盐水和包装，仅纳入功能单位明确说明的组成。 | 毛重、皮重、沥干奶酪、游离盐水和包装质量 | 所声明参考产品质量和组成披露 | `fao-who-cxs-208-1999`; `eu-pef-2021` |
| `calc_batch_mass_balance` | 每个纳入批次和过程步骤 | 对账实测投入、输出、转移、存货和已识别损失。报告无法解释的差额；不得强行计入乳清、废水或产品收率。 | 期初与期末库存；全部实测投入和输出 | 质量平衡残差和完整性标志 | `mass-balance-identity`; `eu-fdm-bat-2019` |
| `calc_volume_to_mass` | 乳、乳清、盐水和液体配料 | 实测体积乘以批次、温度或供应商适用密度；保留原始体积和密度来源。 | 体积；密度；材料和温度情境 | kg 质量 | `mass-balance-identity` |
| `calc_shared_services` | 共享公用工程和清洗 | 只有在直接计量和细分均不可行后，才使用有文件说明的因果驱动量分配，并将分配总量与设施总量对账。 | 共享总量；驱动量；合格输出质量 | 每参考产品分配服务量 | `eu-pef-2021`; `eu-fdm-bat-2019` |
| `calc_coproduct_allocation` | 剩余多输出过程 | 只有在细分或可测量物理关系不能避免分配时，才应用经评审的场址期间物理或经济关系；保留未分配质量和敏感性结果。 | 共产品质量；物理驱动量或收入；期间；使用经济关系时的货币和价格 | 有文件说明的分配因子和敏感性结果 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_species_traceability` | 所有乳、乳清、奶酪和乳制配料 | 证据必须证明每个批次乳制来源仅为绵羊。任何混合或无法确定的种属来源会阻止使用本 PCR。 | 供应商声明、批次谱系、配方和接收记录 |
| `dq_route_representativeness` | 产品和过程路线 | 数据必须代表所声明新鲜/未成熟、成熟、乳清奶酪、盐水、磨碎/粉状或加工路线及其实际技术、产品组合和运行模式。 | 过程流程图、批次清单、配方修订、技术和运行记录 |
| `dq_temporal_coverage` | 前景清单 | 使用能覆盖相关季节乳组成、产品组合、成熟库占用、清洗和公用工程变化的声明期间；说明排除和异常事件的理由。 | 覆盖范围登记、生产日历、仪表完整性报告 |
| `dq_measurement` | 质量、体积、能量、包装和排放数据 | 识别仪表和秤边界、校准状态、换算、缺失数据处理及对账残差。 | 校准证书、原始读数、换算工作表、质量和水平衡 |
| `dq_no_standard_as_lci` | Codex 和 BAT 参考资料 | 不得把产品许可、质量限值、BAT 适用阈值或指示性性能水平作为前景清单值，除非另有明确记录且适用性匹配的建模决定。 | 来源适用性评审和场址记录对比 |
| `dq_upstream_compatibility` | 绵羊乳和乳制中间产品数据集 | 披露供应商地理、生产体系、时间、种属、原料/加工状态和分配方法；说明代理，避免以山羊乳替代。 | 上游数据集元数据和供应商关联 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 产品流 UUID 必须为 `d2800438-b79a-4065-98ab-b7b0fe10ce97`，流属性 UUID 必须为 `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID 必须为 `93a60a57-a4c8-11da-a746-0800200c9a66`，参考数量必须为 1 kg。 |  |
| `validate_sheep_only` | 产品和投入身份 | 当任何乳制投入来自山羊、牛、水牛、其他动物、混合种属或种属来源未确定时失败。混乳产品必须重新分类。 | `unsd-cpc-3-0-2025`; `fao-who-cxs-206-1999` |
| `validate_required_qualifiers` | 数据集元数据 | 缺少产品状态、相关时的生乳/热处理状态、适用时的成熟/持有时长、盐水质量基准、配料/配方状态、包装基准、设施大门地理或期间时失败。 | `fao-who-cxs-283-1978`; `fao-who-cxs-221-2001`; `fao-who-cxs-208-1999` |
| `validate_route_processes` | 过程图和清单 | 每个纳入操作必须有匹配过程章节和记录；每个被省略的条件操作必须依据所声明路线说明理由。 | `eu-pef-2021`; `eu-fdm-bat-2019` |
| `validate_atomic_inventory` | 清单流卡片 | 任一卡片合并多种能源载体、燃料、用水用途、清洗化学品、制冷剂、废水污染物、包装材料、废物或排放时判定失败。每种具名物质、载体、部件或废物流必须单独成行；仅实例化声明路线实际使用的行。 | `eu-fdm-bat-2019` |
| `validate_mass_reconciliation` | 批次和期间平衡 | 报告投入、输出、转移、库存变化和损失项以及无法解释的残差。当物料流被无说明地强行计入产品、乳清、废水或废物时，完整性校验失败。 | `mass-balance-identity`; `eu-fdm-bat-2019` |
| `validate_no_universal_intensity` | 收率、配方、盐、水、能量和废物数量 | 当 Codex 限值、BAT 背景水平或通用类别值在缺少适用性匹配来源和声明建模角色时被填入场址前景数据，校验失败。 | `fao-who-cxs-283-1978`; `eu-fdm-bat-2019` |
| `validate_allocation` | 多输出和共享服务过程 | 要求提供细分评估、所选因果或分配关系、场址期间输入、对账和敏感性披露；若用分配掩盖非绵羊乳制材料，则校验失败。 | `eu-pef-2021` |
| `validate_sources_and_period` | 前景和上游数据 | 要求来源溯源、时间覆盖、设施与供应商范围、测量或计算方法，以及代理和缺失数据处理披露。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 从已完成且经评审的前景数据包形成的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 用于所声明设施大门状态下仅含绵羊乳制成分奶酪的产品或过程 LCA；用于地理、技术、产品状态和时间兼容的生命周期模型投入 |
| allowed_use | 路线、种属来源、盐水基准、配料、包装、分配和数据质量相匹配的新鲜/未成熟、成熟、乳清奶酪/凝乳、盐水、磨碎/粉状或加工绵羊乳制奶酪 |
| excluded_use | 山羊乳、牛乳、水牛乳、其他动物乳或混乳奶酪；非乳制类似物；在未报告产品状态之间替代；把 Codex 或 BAT 数值用作未经验证的前景清单 |
| required_metadata | PCR id；参考 UUID；CPC 情境；仅含绵羊乳的来源证据；路线和产品状态；相关时的生乳/热处理状态；成熟/持有时长；盐水和包装基准；配方；设施地理和技术；期间；上游关联；分配方法 |
| required_quality_disclosure | 批次和期间覆盖；校准和仪表边界；质量、水和公用工程对账；记录得到的产品和共产品收率；缺失数据和代理处理；上游兼容性；分配驱动量和敏感性；来源适用性 |
| update_trigger | 种属或乳制来源、产品状态、配方、盐水或包装基准、过程技术、设施边界、供应商或上游数据集、分配方法、代表性期间或适用 PCR/来源规则发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《Central Product Classification Version 3.0 Explanatory Notes》，子类 22253，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-12） | 仅限绵羊乳的 CPC 范围；纳入新鲜、乳清/凝乳、磨碎/粉状、加工、蓝纹及其他奶酪状态；排除山羊乳、牛乳、水牛乳和其他动物乳制奶酪 |
| `fao-who-cxs-206-1999` | `standard` | Codex Alimentarius，《General Standard for the Use of Dairy Terms》，CXS 206-1999，2022 年修订。https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+206-1999%2FCXS_206e.pdf（检索于 2026-08-12） | 乳品术语和动物来源声明情境；不是 LCI 数量来源 |
| `fao-who-cxs-283-1978` | `standard` | Codex Alimentarius，《General Standard for Cheese》，CXS 283-1978，2024 年修订。https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+283-1978%2FCXS_283e.pdf（检索于 2026-08-12） | 一般奶酪定义、产品状态和配料适用性以及路线声明；不推断配方、收率或 LCI 数量 |
| `fao-who-cxs-221-2001` | `standard` | Codex Alimentarius，《Group Standard for Unripened Cheese Including Fresh Cheese》，CXS 221-2001，2022 年修订。https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+221-2001%2FCXS_221e.pdf（检索于 2026-08-12） | 对未成熟/新鲜奶酪及相关配料和产品状态声明的适用性；不推断配方或 LCI 数量 |
| `fao-who-cxs-208-1999` | `standard` | Codex Alimentarius，《Group Standard for Cheeses in Brine》，CXS 208-1999，2022 年修订。https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+208-1999%2FCXS_208e.pdf（检索于 2026-08-12） | 盐水奶酪适用性以及声明沥干与含盐水状态的要求；不推断盐或盐水用量 |
| `eu-pef-2021` | `official_guidance` | 欧盟委员会，《Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods》，附件 I Product Environmental Footprint Method。http://data.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-12） | 功能单位和参考流、系统边界、企业特定数据、数据质量、多功能性、分配层级及报告 |
| `eu-fdm-bat-2019` | `official_guidance` | 欧盟委员会，《Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries》。http://data.europa.eu/eli/dec_impl/2019/2031/oj（检索于 2026-08-12） | 过程、水、能源、原材料、废水、废气和废物清单设计；计量和对账；仅作适用性受限的背景检查 |
| `mass-balance-identity` | `method_factor` | 通过 `calc_batch_mass_balance` 实施的质量守恒恒等式；所有项均由前景记录取得。 | 批次完整性、体积转质量支持和无法解释残差报告；不提供类别统一收率因子 |
