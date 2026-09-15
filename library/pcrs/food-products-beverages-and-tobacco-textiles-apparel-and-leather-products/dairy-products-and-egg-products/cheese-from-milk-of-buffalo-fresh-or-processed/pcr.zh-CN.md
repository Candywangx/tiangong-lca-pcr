---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-buffalo-fresh-or-processed
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 水牛乳制鲜奶酪或加工奶酪

## 1. 范围与适用性

本 PCR 适用于所有乳来源均严格为水牛，且以鲜/未成熟奶酪、成熟奶酪或加工奶酪状态离开报告工厂、供直接消费或进一步加工的奶酪。当已声明参考产品与前景记录明确相应状态时，范围包括散装、零售、餐饮、盐水浸渍、非盐水浸渍、无包装和有包装的市场状态。

本类别对乳动物种类有严格要求。前景数据包必须证明所有乳及乳源性投入均源自水牛。若产品含有源自牛、绵羊、山羊或其他非水牛动物的乳、稀奶油、凝乳、奶酪、乳脂、乳固体、乳清物料或其他乳源性配料，则不得自动纳入本类别。必须依据供应产品及全部贡献动物种类作出明确的分类判定；在记录该判定前，不得把本 PCR 作为精确类别规则使用。

非奶酪产品、植物基仿制品、单独销售的乳清产品、完全由非水牛乳制成的奶酪，以及没有获接受类别判定的混乳奶酪均不在范围内。水牛原乳的农场生产，以及外购配料或包装的生产由上游数据集表示，不在奶酪工厂前景边界内重复建模。

本 PCR 仅使用 Codex 产品标准识别和描述适用的奶酪状态。标准中的组成、质量、卫生、添加剂和标签规定不得转换成默认生命周期清单数量、收率、配方、损耗系数、能耗或排放因子。除非本 PCR 明确给出适用的方法公式，所有此类数量均须来自场址及批次特定记录。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-buffalo-fresh-or-processed |
| classification_refs | CPC 3.0：22252，水牛乳制鲜奶酪或加工奶酪（`unsd-cpc-3-0`） |
| covered_products | 仅以水牛乳及水牛乳源性配料制成的奶酪；鲜/未成熟、成熟或加工状态；盐水浸渍或非盐水浸渍；配料与包装状态已声明 |
| excluded_products | 含任何非水牛乳源性投入且无单独分类判定的奶酪；非奶酪乳制品；植物基仿制品；单独销售的乳清产品 |
| representative_product | 处于声明产品状态的工厂门水牛乳奶酪 |
| production_route | 水牛乳及乳源性物料接收和验证；准备及奶酪制造；适用时排乳清、盐渍或盐水浸渍；适用时成熟或加工奶酪制造；适用时包装和工厂储存 |
| market_state | 声明鲜/未成熟、成熟或加工状态；盐水浸渍或非盐水浸渍；配料/配方状态；有包装或无包装；储存条件；净质量基准 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 处于声明的鲜/未成熟、成熟或加工市场状态的水牛乳奶酪 |
| How much | 报告工厂门的 1 kg 净奶酪产品 |
| How well | 符合声明产品规范及仅含水牛乳来源的声明；任何产品质量阈值均不作为 LCI 因子 |
| How long or cycle | 一个完整生产批次直至声明的工厂门放行点；仅在适用时包括成熟、盐水浸渍、包装和工厂储存 |
| reference_flow_link | 功能单位由下列单一 Tiangong 产品流及质量参考对象实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 新鲜或加工的水牛奶奶酪 `4b760369-5f64-47c7-b922-9dbe4b8abf98` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 乳动物种类及仅含水牛乳的证据；触发时的混乳判定；鲜/未成熟、成熟或加工奶酪状态；命名品种或产品规范；盐及盐水状态；配料和加工助剂；包装形式及有/无包装状态；参考净质量基准；工厂门储存条件；生产批次和报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | 参考奶酪输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的净产品基准测量放行的参考奶酪。1 kg 奶酪参考量不含包装质量和单独存在的游离盐水；二者须单独列入清单。商业记录若采用其他基准，须保留原始记录并说明换算。 |
| `measurement_milk_species` | 乳及乳源性投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按动物种类和供应商批次分别记录。不得把非水牛乳源性物料并入通用乳总量；任何非水牛数量都会触发混乳分类规则。 |
| `measurement_product_state` | 参考产品和中间奶酪 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留各称量点的实测状态，并声明称量是在排液、盐渍/盐水浸渍、成熟、加工及包装之前还是之后。不得采用标准水分、收率或保留系数。 |
| `measurement_brine` | 盐及盐水投入和输出 | 质量或体积及实测密度 | kg 或 m3 | 分别记录补充盐、补充水、外购盐水、内部循环盐水、排放液、产品带出量及废水。只有具备批次或期间特定的密度证据时才可将体积换算为质量。 |
| `measurement_energy` | 电力、燃料、蒸汽、热、制冷和压缩空气 | 交付能量或物理载能物数量 | 按记录使用 kWh、MJ、kg 或 m3 | 保留原始仪表或发票单位及换算系数。仅在用尽单独计量的过程用量后方可分配公用设施；不得使用通用奶酪能耗因子。 |
| `measurement_packaging` | 初级、次级和三级包装 | 质量或件数及实测单件质量 | kg | 按材料和形式记录包装。件数使用供应商规范或实测批次平均单件质量换算为质量，并确保包装不计入奶酪净参考质量。 |

## 5. 系统边界

前景边界始于水牛乳及其他外购物料在报告奶酪工厂接收之时。边界包括身份检查与接收、乳储存和准备、场内实施的热处理或标准化、凝乳及凝块处理、乳清分离、盐渍或盐水浸渍、成熟、加工奶酪操作、包装、工厂储存、清洗、制冷、现场公用设施、直接排放、废物处理，以及为声明产品服务的场内废水处理。水牛乳、配料、能源载体、水、包装和外购服务的上游生产以供应商特定或适当的次级数据集链接表示。声明工厂门之后的配送、零售、消费者使用和生命末期不属于本前景数据集，除非下游生命周期模型透明地增加这些阶段。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告工厂接收的水牛乳及所有其他乳源性投入，按供应商、批次、动物种类、物理状态和数量识别 |
| starting_condition_role | 具有生产数据集链接的上游产品投入；奶酪工厂前景自接收开始 |
| product_classification_scope | CPC 3.0 子类 22252 中仅含水牛乳的奶酪；声明后奶酪状态可为鲜/未成熟、成熟或加工 |
| recursive_input_rule | 用于制造参考产品的外购水牛奶酪或凝乳作为投入记录并链接其上游数据集，不在本前景数据集中递归重建。外购混物种奶酪或凝乳在使用本 PCR 前触发分类判定。 |
| upstream_dataset_requirement | 将水牛乳、外购水牛奶酪/凝乳、其他配料、能源、水、包装及外部处理或运输服务链接至时间、地域和技术有代表性的上游数据集；披露代理数据 |
| disclosure | 声明动物种类证据、乳及乳源性配料组成、奶酪状态、盐/盐水状态、配料和助剂、包装状态、净质量基准、设施及批次覆盖、共产品、分配、排除项及全部上游代理 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_buffalo_origin` | 所有乳及乳源性投入 | 只有供应商及批次证据支持全部乳源性投入均来自水牛时，方可纳入本产品类别。任何非水牛投入均须在建模继续前触发明确分类判定。 | `codex-cxs-206-1999`; `unsd-cpc-3-0` |
| `boundary_route_state` | 前景过程选择 | 仅纳入声明路线实际使用的过程模块，但发生时不得遗漏成熟、盐水浸渍、加工、包装、冷藏、清洗、制冷、废物或废水活动。 | `codex-cxs-283-1978`; `codex-cxs-221-2001`; `eu-fdm-bat-2019` |
| `boundary_upstream_links` | 外购投入和服务 | 通过链接的上游数据集表示接收物料和外购服务的生产，不在奶酪工厂前景内重复。 | `eu-pef-2021` |
| `boundary_bat_applicability` | EU FDM BAT 证据的使用 | 仅当报告设施和运行基准处于该决定所述范围内且引用的乳制品条件适用时，才使用 EU FDM BAT 要求或绩效信息。不得把设施层级或产品质量数值转移为通用奶酪 LCI。 | `eu-fdm-bat-2019` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `milk_reception_preparation` | 水牛乳接收和准备 | required | 始终纳入 | 前景接收、身份控制、储存和准备 | 按批次接收的水牛乳及乳源性物料 kg |
| `cheesemaking_separation` | 奶酪制造和乳清分离 | required | 始终纳入 | 前景凝乳、凝块处理、排液、盐渍和分离 | 按批次的奶酪和共产品输出 kg |
| `ripening_brining` | 成熟和盐水浸渍 | conditional | 声明产品为成熟奶酪或盐水浸渍奶酪，或发生盐水管理时纳入 | 前景成熟、盐水管理、储存和损耗 | 按批次进入和离开操作的奶酪 kg |
| `processed_cheese_manufacture` | 加工奶酪制造 | conditional | 声明参考产品为加工奶酪时纳入 | 前景混合、加热/乳化、成形和冷却 | 按批次的加工奶酪输出 kg |
| `packaging_factory_storage` | 包装和工厂储存 | conditional | 声明工厂门之前发生包装或储存时纳入 | 前景包装、制冷和放行 | 放行的奶酪净质量及包装用量 kg |
| `cleaning_wastewater` | 清洗及场内废水或废物处理 | required | 始终纳入清洗；纳入为产品服务的场内处理操作 | 前景支持和环境控制 | 报告期内的分配活动及输出 |

### 过程：水牛乳接收和准备（`milk_reception_preparation`）

#### 输入

##### 产品流

###### 接收的水牛乳及水牛乳源性物料（`buffalo_milk_inputs`）

记录跨越设施边界的每个供应商批次水牛乳、稀奶油、乳固体或其他水牛乳源性物料。动物种类证据及物理状态须与数量记录一并保留。

- 选定流：Buffalo milk 或适用的水牛乳源性产品；为供应物料选择精确的 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：按供应商批次和物料状态实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考奶酪输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milk_origin_receipts`
- 来源：`codex-cxs-206-1999`

###### 乳准备用水（`preparation_water`）

加入产品或直接用于准备的水须与清洗水分开记录。

- 选定流：与场址供水匹配的 Process water
- 流属性/单位：Volume / m3 或 Mass / kg
- 数量规则：实测批次用量；无默认数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考奶酪输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-fdm-bat-2019`

###### 接收和准备的电力及热公用设施（`preparation_energy`）

记录接收、储存、泵送、热处理、分离或标准化使用的计量电力，以及燃料、蒸汽、热、制冷或压缩空气。

- 选定流：场址特定的电力及能源载体流
- 流属性/单位：Energy / kWh 或 MJ；载能物质量或体积采用原始记录单位
- 数量规则：实测过程用量或有记录的公用仪表分配；无默认数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考奶酪输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utility_records`
- 来源：`eu-fdm-bat-2019`

##### 废物流

###### 拒收乳或接收残留物（`rejected_milk`）

按去向记录拒收、溢出或废弃的乳源性物料；不得与验收投入相抵。

- 选定流：与实际去向匹配的 Rejected milk 或适用有机废物流
- 流属性/单位：Mass / kg
- 数量规则：按批次及去向实测拒收或损失质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考奶酪输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-fdm-bat-2019`

##### 基本流

#### 输出

##### 产品流

###### 供奶酪制造的已准备水牛乳（`prepared_buffalo_milk`）

跟踪内部已准备乳的数量和状态以支持批次质量平衡；场内消耗时不跨越产品系统边界。

- 选定流：内部已准备水牛乳
- 流属性/单位：Mass / kg
- 数量规则：按批次实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次转入奶酪制造的量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：

##### 废物流

##### 基本流

### 过程：奶酪制造和乳清分离（`cheesemaking_separation`）

#### 输入

##### 产品流

###### 已准备水牛乳（`cheesemaking_milk`）

按批次记录进入奶酪槽的已准备水牛乳，并保留其与接收批次的链接。

- 选定流：内部已准备水牛乳
- 流属性/单位：Mass / kg
- 数量规则：按批次实测入槽质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每奶酪制造批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`codex-cxs-283-1978`

###### 发酵剂、凝乳剂、盐、配料和加工助剂（`cheesemaking_ingredients`）

记录加入奶酪、凝块、表面或过程的每种物料，包括发酵剂、凝乳剂、盐、允许配料、添加剂和加工助剂。保留配料功能以及物料最终进入产品、共产品、废水或废物的去向。

- 选定流：配料和配方特定的产品流
- 流属性/单位：Mass / kg 或可审核的原始采购单位
- 数量规则：批次领料或投加记录；不采用标准配方或保留系数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考奶酪输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_dosing_records`
- 来源：`codex-cxs-283-1978`; `codex-cxs-221-2001`

###### 奶酪制造用水和公用设施（`cheesemaking_water_energy`）

记录奶酪制造、凝块处理和分离消耗的过程水、电力、热、蒸汽、制冷和压缩空气。

- 选定流：场址特定的水和公用设施流
- 流属性/单位：采用可审核原始单位的体积、质量或能量
- 数量规则：实测过程用量或有记录的公用仪表分配；无默认数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考奶酪输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy_records`
- 来源：`eu-fdm-bat-2019`

##### 废物流

###### 奶酪制造损失和不合格物料（`cheesemaking_waste`）

按处理或回收路线分别记录凝乳细粒、溢出物料、过滤物和不合格奶酪。

- 选定流：与物料及实际管理路线匹配的废物流
- 流属性/单位：Mass / kg
- 数量规则：按批次或报告期实测或经质量平衡核对的废物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考奶酪输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-fdm-bat-2019`

##### 基本流

#### 输出

##### 产品流

###### 条件性后处理前的水牛乳奶酪（`primary_cheese_output`）

测量离开主要奶酪制造步骤的奶酪，并说明其是作为鲜奶酪放行，还是转入成熟、盐水浸渍、加工奶酪制造或包装。

- 选定流：新鲜或加工的水牛奶奶酪 `4b760369-5f64-47c7-b922-9dbe4b8abf98`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按声明转移状态实测批次输出；无默认收率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每奶酪制造批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_release_records`
- 来源：`codex-cxs-283-1978`; `codex-cxs-221-2001`

###### 乳清及其他乳源性共产品（`whey_coproducts`）

仅当乳清、稀奶油、乳清稀奶油或回收乳固体离开过程用于有记录的有益用途，且符合声明的去向规范时，才作为独立产品输出记录。

- 选定流：与实际状态及去向匹配的共产品特定流
- 流属性/单位：Mass / kg
- 数量规则：按批次及去向实测输出质量；无默认乳清收率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每奶酪制造批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_records`
- 来源：

##### 废物流

###### 送处理的乳清（`whey_to_treatment`）

没有有益产品去向的乳清属于废物输出，不得报告为共产品。

- 选定流：与实际处理路线匹配的乳清废物流
- 流属性/单位：Mass / kg
- 数量规则：按批次及去向实测或核对的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每奶酪制造批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_records`
- 来源：

##### 基本流

### 过程：成熟和盐水浸渍（`ripening_brining`）

#### 输入

##### 产品流

###### 进入成熟或盐水浸渍的奶酪（`ripening_input_cheese`）

记录奶酪进入时的质量和状态，并链接至原始批次。

- 选定流：内部水牛乳奶酪
- 流属性/单位：Mass / kg
- 数量规则：按批次实测进入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每成熟或盐水浸渍批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ripening_brining_records`
- 来源：`codex-cxs-283-1978`

###### 盐水、盐、水及成熟公用设施（`ripening_brine_utilities`）

记录声明操作期间使用的盐水补充与排放成分、清洗或表面处理物料、电力、制冷、热和湿度控制公用设施。

- 选定流：与场址供应匹配的物料及公用设施特定流
- 流属性/单位：采用可审核原始单位的质量、体积或能量
- 数量规则：实测批次或期间用量；内部循环盐水不计为新增外部投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 离开成熟或盐水浸渍操作的奶酪
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ripening_brining_records`
- 来源：`codex-cxs-283-1978`; `eu-fdm-bat-2019`

##### 废物流

#### 输出

##### 产品流

###### 成熟或盐水浸渍水牛乳奶酪（`ripened_brined_cheese`）

记录奶酪质量、成熟时长、盐水状态和放行条件。随市场产品提供的游离盐水仍为单独列入清单的物料，不计入奶酪净质量。

- 选定流：新鲜或加工的水牛奶奶酪 `4b760369-5f64-47c7-b922-9dbe4b8abf98`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次实测放行奶酪质量；无标准成熟损耗因子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每成熟或盐水浸渍批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_release_records`
- 来源：`codex-cxs-283-1978`

##### 废物流

###### 盐水排放及成熟损失（`brine_ripening_waste`）

按去向分别记录废盐水、表面物料、修整料和腐败奶酪。

- 选定流：与物料状态及去向匹配的废物流
- 流属性/单位：Mass / kg 或 Volume / m3
- 数量规则：实测批次或报告期输出；无默认损耗因子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 离开成熟或盐水浸渍操作的奶酪
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-fdm-bat-2019`

##### 基本流

### 过程：加工奶酪制造（`processed_cheese_manufacture`）

#### 输入

##### 产品流

###### 水牛奶酪及声明的配方投入（`processed_cheese_inputs`）

按批次记录每种奶酪、乳制配料、水、盐、乳化盐、添加剂及其他配方投入。所有乳源性投入仍须遵守仅含水牛乳规则。

- 选定流：配料特定流；适用时水牛奶酪使用参考产品流
- 流属性/单位：Mass / kg
- 数量规则：实测批次配方数量；无标准配方
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 加工奶酪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_processed_cheese_batch_records`
- 来源：`codex-cxs-206-1999`

###### 加工用电力和热能（`processed_cheese_energy`）

依据仪表或有记录的公用设施分配，记录混合、加热/乳化、成形和冷却所用能源。

- 选定流：场址特定的电力及能源载体流
- 流属性/单位：Energy / kWh 或 MJ；载能物数量采用原始记录单位
- 数量规则：实测批次或报告期用量；无默认数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 加工奶酪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utility_records`
- 来源：`eu-fdm-bat-2019`

##### 废物流

#### 输出

##### 产品流

###### 加工水牛乳奶酪输出（`processed_cheese_output`）

测量成品加工奶酪，并保留完整配方和动物种类证据。

- 选定流：新鲜或加工的水牛奶奶酪 `4b760369-5f64-47c7-b922-9dbe4b8abf98`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测批次输出；无默认转换收率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每加工奶酪批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_release_records`
- 来源：

##### 废物流

###### 加工奶酪残留和不合格产品（`processed_cheese_waste`）

按回收、返工或废物路线记录残留和不合格输出，不得与产品输出相抵。

- 选定流：与实际去向匹配的废物或返工流
- 流属性/单位：Mass / kg
- 数量规则：按去向实测批次输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每加工奶酪批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

### 过程：包装和工厂储存（`packaging_factory_storage`）

#### 输入

##### 产品流

###### 包装材料（`packaging_materials`）

按材料、形式、供应商和批次或报告期记录初级、次级及分配的三级包装。

- 选定流：包装材料特定的产品流
- 流属性/单位：Mass / kg
- 数量规则：实测领用量，或用供应商/实测单件质量换算的件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考奶酪输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 包装和储存公用设施（`packaging_storage_energy`）

记录工厂门放行前使用的电力、热、制冷、压缩空气及其他公用设施。

- 选定流：场址特定的公用设施流
- 流属性/单位：Energy / kWh 或 MJ；载能物数量采用原始记录单位
- 数量规则：实测过程用量或有记录的公用仪表分配；无默认数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考奶酪输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utility_records`
- 来源：`eu-fdm-bat-2019`

##### 废物流

###### 包装废物和破损产品（`packaging_waste`）

按材料和去向分别记录未使用或破损的包装和产品损失。

- 选定流：与材料及处理路线匹配的废物流
- 流属性/单位：Mass / kg
- 数量规则：实测报告期输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考奶酪输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

###### 工厂制冷剂排放（`refrigerant_emissions`）

根据服务于产品的冷却系统之已核实补加、回收、库存变化和设备记录计算直接制冷剂排放。

- 选定流：制冷剂特定的基本排放流
- 流属性/单位：Mass / kg
- 数量规则：依据采集的维护及库存记录按制冷剂计算损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考奶酪输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-pef-2021`

#### 输出

##### 产品流

###### 工厂门参考奶酪（`reference_cheese_output`）

此为按奶酪净质量基准在工厂门放行的声明鲜/未成熟、成熟或加工水牛乳奶酪。

- 选定流：新鲜或加工的水牛奶奶酪 `4b760369-5f64-47c7-b922-9dbe4b8abf98`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测净放行产品质量；全部清单归一化至 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净参考奶酪输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_release_records`
- 来源：

##### 废物流

##### 基本流

### 过程：清洗及场内废水或废物处理（`cleaning_wastewater`）

#### 输入

##### 产品流

###### 清洗水、化学品及处理物料（`cleaning_treatment_inputs`）

记录服务于所建模生产的原位清洗及其他卫生用水、清洁剂、消毒剂，以及场内废水或废物处理物料。

- 选定流：物料特定的场址供应流
- 流属性/单位：Mass / kg 或 Volume / m3
- 数量规则：按系统实测用量或依据报告期总量进行有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考奶酪输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_treatment_records`
- 来源：`eu-fdm-bat-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水、污泥和处理残留物（`wastewater_residues`）

在实际移交或排放点记录废水体积及相关负荷，并记录污泥和其他残留物。须保持分流乳清、盐水及产品损失可见，不得隐藏在通用废水总量中。

- 选定流：与实际处理及去向匹配的废水或残留物流
- 流属性/单位：适用时为 Volume / m3、Mass / kg 及实测污染物负荷
- 数量规则：实测排放及实验室或处理记录；无默认排放因子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考奶酪输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

##### 基本流

###### 场内操作向空气和水体的直接排放（`direct_site_emissions`）

按物质和方法记录锅炉、制冷、废水处理及其他纳入的场内操作之实测或计算基本排放。

- 选定流：物质及环境介质特定的基本流
- 流属性/单位：Mass / kg
- 数量规则：依据场址测量，或采集的运行记录和适用的成文方法进行计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考奶酪输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bat-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共享操作和公用设施 | 在记录允许时，通过单独计量或其他细分方法避免分配接收、奶酪制造、成熟/盐水浸渍、加工奶酪制造、包装、储存、清洗和处理活动。 | `eu-pef-2021` |
| `allocation_internal_recycling` | 内部乳清、凝块、盐水、返工料和回收热 | 内部循环仅建模一次；未跨越产品系统边界的物料或能源不得产生共产品抵扣。 | `eu-pef-2021` |
| `allocation_coproduct_status` | 乳清及其他乳源性输出 | 只有输出离开系统用于有记录的有益用途并具有上游认可的产品功能时，才作为共产品；否则按实际处理路线作为废物建模。 | `eu-pef-2021` |
| `allocation_residual_burdens` | 细分后的奶酪及共产品 | 若细分或可辩护的物理因果关系无法解决共享负荷，须采用在报告期内一致的成文分配基准，披露数量和价格或物理参数，并对另一相关基准进行敏感性分析。不得规定通用乳清或奶酪分配因子。 | `eu-pef-2021` |
| `allocation_waste_treatment` | 废物和废水处理 | 可追溯时，把处理投入、直接排放和残留物归于产生过程；否则依据废水体积和污染物负荷等实测因果驱动因素分配共用系统，并披露方法。 | `eu-fdm-bat-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_milk_origin_receipts` | `milk_reception_preparation` | 乳及乳源性投入 | 供应商交付、证书和接收记录 | 供应商；批次；物料；动物种类；乳来源声明；质量；物理状态；验收；日期 | 将接收地磅或校准仪表与供应商文件及身份资料进行核对 | kg | 每个交付批次 | 报告期内全部批次 | 所有供应场址和报告设施 | 按物料、种类、批次和状态汇总验收质量；分类检查前绝不合并动物种类 | 校准测量；供应商证书；批次追溯；异常日志 |
| `cp_ingredient_dosing_records` | `cheesemaking_separation` | 配料和加工助剂 | 配方领料、投加和库存记录 | 批次；物料；供应商批次；乳源性物料的动物种类；领用质量；退回质量；功能 | 将批次投加与库存移动和配方核对 | kg 或原始单位 | 每批次 | 覆盖全部声明产品的代表性生产期 | 报告设施 | 按批次和配料计算净领用量；保留去向和乳种 | 批准配方；秤具校准；库存核对 |
| `cp_water_records` | `milk_reception_preparation` | 准备用水 | 仪表、批次表和发票 | 仪表；起止读数；批次；用途；水源；换算时的密度 | 优先直接计量；仅对未计量公用供水使用成文分配 | m3 或 kg | 每批次或仪表区间 | 完整报告期 | 报告设施 | 扣除已核实的非产品用途后归一化至放行奶酪 | 仪表校准；核对；分配记录 |
| `cp_water_energy_records` | `cheesemaking_separation` | 奶酪制造用水和公用设施 | 仪表和运行记录 | 公用设施；仪表；起止读数；批次；运行时数；载能物数量 | 直接过程计量或成文公用仪表分配 | 原始仪表单位 | 批次、班次或仪表区间 | 完整报告期 | 报告设施 | 按公用设施和过程汇总后归一化至放行奶酪 | 校准；发票；仪表覆盖；分配键 |
| `cp_energy_utility_records` | multiple | 过程公用设施 | 仪表、燃料发票和运行记录 | 过程；载能物；仪表；起止读数；采购；库存变化；换算因子 | 将分表总量与设施采购及库存变化核对 | kWh、MJ、kg 或 m3 | 仪表区间及每月核对 | 包括季节性储存的完整报告期 | 报告设施 | 优先过程用量；剩余公用量以成文因果驱动因素分配 | 校准；发票；库存核对；换算来源 |
| `cp_batch_mass_balance` | `cheesemaking_separation` | 内部转移和批次平衡 | 批次生产记录 | 所有物料投入；内部转移；输出；损失；期初及期末库存；状态 | 在规定转移点称量或计量每种物料 | kg | 每批次 | 全部纳入批次 | 报告设施 | 在期间汇总前按批次核对投入、输出和库存变化 | 校准秤具；批次结算；异常调查 |
| `cp_product_release_records` | multiple | 奶酪输出和参考产品 | 批次放行和仓库记录 | 批次；产品；状态；净质量；盐水状态；包装；放行日期；处置 | 经验证的生产秤及放行库存核对 | kg | 每个放行批次 | 报告期内全部放行批次 | 报告设施 | 按声明产品状态汇总放行净奶酪质量；排除游离盐水和包装 | 秤具校准；放行批准；仓库核对 |
| `cp_coproduct_records` | `cheesemaking_separation` | 乳清及乳源性共产品 | 转移和发运记录 | 批次；输出；状态；质量；去向；销售或有益用途证据 | 在转移点计量并核对发运 | kg | 每批次或发运 | 完整报告期 | 报告设施及直接接收方 | 按输出状态和去向分别汇总；无有益用途的输出归类为废物 | 校准仪表或秤具；发运单；接收方证据 |
| `cp_ripening_brining_records` | `ripening_brining` | 奶酪、盐水、盐、水及公用设施 | 批次、盐水管理和储存日志 | 奶酪进出质量；日期；盐水补充；排放；带出；盐；水；公用设施；损失 | 称量奶酪进出，并计量或核对盐水物料和公用设施 | kg、m3、kWh 或 MJ | 每批次及每次盐水干预 | 覆盖放行批次的完整成熟或盐水浸渍时长 | 报告设施 | 将全部记录链接至原始和放行批次；区分循环量和外部投入 | 秤具和仪表校准；盐水日志；库存和批次核对 |
| `cp_processed_cheese_batch_records` | `processed_cheese_manufacture` | 加工奶酪配方 | 批次配方和生产记录 | 各项投入；乳种；质量；输出；返工；用于过程识别的温度/时间 | 将领用配方与实测输出和残留核对 | kg | 每批次 | 全部纳入的加工奶酪批次 | 报告设施 | 仅汇总符合声明配方和仅含水牛乳规则的批次 | 批准配方；校准秤具；批次结算 |
| `cp_packaging_records` | `packaging_factory_storage` | 包装材料 | 包装领用、供应商规范和废品记录 | 材料；形式；供应商批次；领用件数或质量；退回件数；废品；单件质量 | 将包装领用与包装产品及废品核对 | kg 或件 | 每个包装批次并按月核对 | 完整报告期 | 报告设施 | 使用批次特定单件质量换算件数，按材料汇总 | 供应商规范；实测单件质量；库存核对 |
| `cp_waste_records` | multiple | 物料损失和废物 | 废物转移、秤具和去向记录 | 来源过程；物料；状态；质量；去向；回收；日期 | 在收集或发运时计量并与批次或期间平衡核对 | kg 或 m3 | 每次转移并按月核对 | 完整报告期 | 报告设施及直接处理去向 | 按来源、物料和处理路线汇总，不与投入相抵 | 秤具或仪表证据；转移单；处理接收凭证 |
| `cp_cleaning_treatment_records` | `cleaning_wastewater` | 清洗和处理投入 | 清洗计划、投加、仪表和库存记录 | 系统；化学品；水；剂量；运行周期；库存移动；服务过程 | 直接投加及用水计量，或成文分配 | kg 或 m3 | 每清洗周期或仪表区间 | 完整报告期 | 报告设施 | 按服务系统汇总；剩余公用清洗量使用成文驱动因素分配 | 校准；库存核对；清洗日志 |
| `cp_wastewater_records` | `cleaning_wastewater` | 废水和残留物 | 流量计、采样、实验室和处理记录 | 排放体积；采样时间；浓度；污染物负荷；去向；污泥及残留质量 | 流量测量及适合排放特征的代表性采样 | m3、kg 或 mg/L，并计算负荷 | 连续或许可/管理规定频率 | 保留变异性的完整报告期 | 报告设施排放及场内处理 | 依据匹配的流量和浓度数据计算负荷；使用成文因果驱动因素分配 | 仪表校准；实验室 QA；采样代表性；处理核对 |
| `cp_refrigerant_records` | `packaging_factory_storage` | 制冷剂损失 | 设备清单、维护、采购、回收和库存记录 | 制冷剂；设备；期初库存；补加；回收；期末库存；转移 | 按制冷剂和设备系统进行年度或报告期质量平衡 | kg | 每次维护及期末 | 完整报告期 | 服务于纳入操作的系统 | 计算未回收损失，仅按有记录的驱动因素在受服务产品间分配 | 维护证书；钢瓶称量；库存核对 |
| `cp_direct_emission_records` | `cleaning_wastewater` | 场内直接排放 | 监测和运行记录 | 来源；物质；环境介质；实测值；流量；运行时间；方法；计算因子 | 使用适用的监测或计算方法并保留原始观测 | kg 及原始测量单位 | 方法或许可规定的频率 | 完整报告期 | 纳入的场内源 | 按物质计算期间质量，再归属至受服务操作 | 方法记录；校准；实验室 QA；适用性声明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_buffalo_origin_check` | 所有乳源性投入 | 按动物种类列出每项乳源性投入。只有全部投入均有水牛来源证据时才适用。任何非水牛或未知种类结果均为分类复核触发条件，不得静默计入。 | 供应商及批次动物种类记录；配方 | 仅含水牛乳通过，或混合/未知分类触发 | `codex-cxs-206-1999`; `unsd-cpc-3-0` |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 可归属的报告期或批次数量 / 按声明基准放行的净参考奶酪质量 | 可归属数量；放行净奶酪质量 | 每 1 kg 参考奶酪的数量 | `eu-pef-2021` |
| `calc_net_cheese_mass` | 参考产品 | 净奶酪质量 = 市售单元总质量 - 包装质量 - 单独存在的游离盐水质量；须使用同一批次的实测值，并声明不同的商业惯例 | 单元总质量；包装质量；游离盐水质量 | 净奶酪 kg |  |
| `calc_batch_mass_balance` | 乳准备、奶酪制造、成熟/盐水浸渍和加工 | 实测投入 + 期初库存 = 实测输出 + 期末库存 + 实测或核对的损失；须调查无法解释的差异，不得强行套用标准收率 | 批次投入、输出、库存和损失记录 | 经核对的批次平衡及未解释差异 |  |
| `calc_brine_balance` | 盐水浸渍 | 外部盐水投入 = 补充水 + 补充盐 + 外购盐水；输出和库存变化须分别识别产品带出量、排放、废水、回收及期末库存 | 盐水组成、补充、排放、带出和库存记录 | 物料特定的盐水平衡 |  |
| `calc_utility_allocation` | 公用设施 | 可归属公用量 = 实测过程用量；对未计量的剩余量，须在同一期间采用披露的因果驱动因素，并保留设施总量和分配分母 | 仪表；发票；运行驱动因素；产品输出 | 按过程和产品分配的公用量 | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `calc_refrigerant_loss` | 制冷系统 | 各制冷剂损失 = 期初库存 + 补加 + 转入 - 期末库存 - 回收量 - 转出，并与维护事件核对 | 制冷剂库存和维护记录 | 各制冷剂直接排放 kg | `eu-pef-2021` |
| `calc_wastewater_load` | 废水 | 污染物负荷须依据时间匹配的排放流量和实测浓度，使用成文采样及汇总方法计算；不得用奶酪质量或设施基准替代 | 流量；浓度；采样区间 | 报告期污染物 kg | `eu-fdm-bat-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_traceability` | 乳及乳源性投入 | 每项投入须追溯至供应商及批次动物种类证据；未知或非水牛来源会阻止精确使用本 PCR，直至完成分类判定。 | 供应商证书；接收记录；配方和批次链接 |
| `dq_state_traceability` | 参考奶酪 | 将放行质量链接至鲜/未成熟、成熟或加工状态；盐/盐水状态；配方；包装；储存条件和净质量基准。 | 产品规范；批次放行；包装和仓库记录 |
| `dq_measurement` | 前景数量 | 可用时使用校准仪表或秤具，保留原始单位，并记录全部换算和分配。 | 校准证书；仪表覆盖；换算记录 |
| `dq_temporal` | 报告期 | 覆盖代表性生产期，以及可归属至放行批次的完整成熟或储存时长；披露季节、生产活动、停机和产品组合影响。 | 生产日历；批次谱系；报告期核对 |
| `dq_completeness` | 前景边界 | 核对乳、配料、奶酪、共产品、废物、水、能源、盐水、包装、废水和直接排放；披露缺失流和代理。 | 质量及公用设施平衡；完整性清单；异常日志 |
| `dq_source_applicability` | 外部规则和基准 | 使用来源前记录司法辖区、设施阈值、产品组合、过程状态及其他适用条件。产品质量限值及 BAT 设施指标不得作为通用 LCI 数量。 | 与每次使用链接的来源适用性声明 |
| `dq_upstream` | 链接的数据集 | 可用时优先采用供应商特定的水牛乳和物料数据集；否则记录地域、时间和技术代表性及代理局限。 | 数据集元数据；供应商链接；代理理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 必须使用产品流 UUID `4b760369-5f64-47c7-b922-9dbe4b8abf98`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、参考单位 kg 及参考数量 1 kg。 |  |
| `validation_buffalo_only` | 类别适用性 | 只有每项乳及乳源性投入均具备水牛来源证据时，精确类别适用性才通过。 | `codex-cxs-206-1999`; `unsd-cpc-3-0` |
| `validation_mixed_milk` | 类别适用性 | 若存在任何非水牛或未知种类的乳源性投入，必须提供成文分类判定；在判定获接受前，不得把本 PCR 报告为精确匹配。 | `codex-cxs-206-1999`; `unsd-cpc-3-0` |
| `validation_product_state` | 参考产品 | 必须声明鲜/未成熟、成熟或加工状态；命名品种或规范；盐/盐水状态；配料；包装；储存条件及净质量基准。 | `codex-cxs-283-1978`; `codex-cxs-221-2001` |
| `validation_process_coverage` | 过程清单 | 必须纳入两个 required 过程模块，以及声明路线触发的每个 conditional 模块；适用时包括盐水浸渍、成熟、加工奶酪制造、包装、储存、制冷和场内处理。 | `eu-fdm-bat-2019` |
| `validation_mass_balance` | 每条生产路线 | 必须提供经核对的批次或期间质量平衡，并调查和披露无法解释的差异；拒绝使用通用收率或损耗因子替代。 |  |
| `validation_allocation` | 共产品和共享操作 | 必须提供细分证据或成文因果/分配基准、共产品去向证据、在报告期内一致的应用，以及分配重要时的敏感性分析。 | `eu-pef-2021` |
| `validation_source_scope` | 标准和 BAT 证据的使用 | 每项外部来源约束均须有适用性声明。拒绝把 Codex 产品质量限值或 EU FDM BAT 设施指标用作通用配方、收率、能源、水、废水或排放值。 | `codex-cxs-283-1978`; `codex-cxs-221-2001`; `eu-fdm-bat-2019` |
| `validation_foreground_records` | 定量清单 | 所有重要数量均须有场址及批次特定记录或明确 PCR 计算规则。缺失记录属于数据缺口，不得以无出处默认值替代。 | `eu-pef-2021`; `eu-fdm-bat-2019` |
| `validation_inventory_completeness` | 前景数据集 | 必须检查乳和配料、产品和共产品、水和公用设施、盐水、包装、废物、废水及直接排放；须明确报告跳过项和不适用项。 | `eu-fdm-bat-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经复核后适合作为 `secondary_dataset` 或 `background_dataset` 发布的前景生产数据集 |
| downstream_use | 用于声明的仅含水牛乳之鲜/未成熟、成熟或加工奶酪产品的工厂门过程数据集和生命周期模型 |
| allowed_use | 用于乳来源仅为水牛，且产品状态、配方、盐水、包装、储存、地域、技术和时间均与数据集匹配的产品；更广泛使用须进行成文代表性复核 |
| excluded_use | 无分类判定的混乳奶酪；牛乳、绵羊乳、山羊乳或其他非水牛乳奶酪；非奶酪产品；未表示的路线或市场状态；直接把 Codex 质量限值或 BAT 设施指标用作 LCI 默认值 |
| required_metadata | 使用的 PCR id 和版本；Tiangong 参考流 UUID；CPC 背景；设施地域和技术；报告期；动物种类证据；产品状态和规范；盐/盐水、配料、包装、净质量及储存状态；过程覆盖；上游链接；共产品状态及分配 |
| required_quality_disclosure | 初级数据覆盖；校准和核对；时间、地域及技术代表性；缺失流；分配及敏感性；数据源适用性；代理数据集；不确定性和复核状态 |
| update_trigger | 乳种或供应商来源证据、配方、奶酪状态、盐水操作、包装、技术、设施、分配、共产品去向、上游数据集、报告期代表性或重要水/能源/排放绩效发生变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | official_guidance | 联合国统计司，《Central Product Classification Version 3.0》结构及说明注释，子类 22252，https://unstats.un.org/unsd/classifications/Econ/CPC（检索日期 2026-08-12） | 仅用于分类身份及水牛乳产品边界 |
| `codex-cxs-206-1999` | standard | Codex Alimentarius，《General Standard for the Use of Dairy Terms》，CXS 206-1999，2022 年修订，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B206-1999%2FCXS_206e.pdf（检索日期 2026-08-12） | 乳及乳制品定义、动物种类声明和混物种触发；不提供 LCI 数量 |
| `codex-cxs-283-1978` | standard | Codex Alimentarius，《General Standard for Cheese》，CXS 283-1978，2024 年修订，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B283-1978%2FCXS_283e.pdf（检索日期 2026-08-12） | 奶酪身份、成熟和盐水状态描述及候选过程/配料覆盖；组成和质量规定不是 LCI 因子 |
| `codex-cxs-221-2001` | standard | Codex Alimentarius，《Group Standard for Unripened Cheese Including Fresh Cheese》，CXS 221-2001，2022 年修订，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B221-2001%2FCXS_221e.pdf（检索日期 2026-08-12） | 鲜/未成熟产品状态身份及候选配料/过程覆盖；质量规定不是 LCI 因子 |
| `eu-pef-2021` | official_guidance | 欧盟委员会，《Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods》，附件 I Product Environmental Footprint method，http://data.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-12） | 生命周期边界、数据、分配、计算、质量和披露原则；不提供奶酪特定默认数量 |
| `eu-fdm-bat-2019` | official_guidance | 欧盟委员会，《Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries》，http://data.europa.eu/eli/dec_impl/2019/2031/oj（检索日期 2026-08-12） | 适用乳制品过程覆盖、资源和排放清单、水/废水、能源和监测主题；使用前须核对设施范围和运行条件 |
