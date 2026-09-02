---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.chocolate-and-other-food-preparations-containing-cocoa-except-sweetened-cocoa-powder-in-e3cb3e70
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 巧克力及其他含可可食品制品（散装）

## 1. 范围与适用性

本 PCR 适用于以申明的散装形态离开制造场址、供工业或批发使用的巧克力及其他含可可食品制品的门到门生产。范围包括从已接收的可可原料及其他配方原料开始的配方准备、混合、适用时的粒度细化、适用时的精炼或等效风味与流变性质形成、最终标准化或状态调节、散装灌装，以及可归属的清洗、公用工程、废物、废水和直接排放活动。

前景边界从制造场址接收的可可液块或可可浆、可可脂、可可粉、糖或其他甜味料、乳制原料、允许使用的脂肪、乳化剂、香料及其他配方原料开始。可可豆种植、发酵、干燥、运输，以及可可豆或可可碎仁加工为所接收可可原料的过程由上游数据集表示。若这些操作与目标产品在同一场址进行，应将其保留为单独计量的上游单元过程，并通过可可原料输入传递负荷，避免重复计算。

本 PCR 不覆盖加糖可可粉、作为参考产品出售的未加糖可可粉、单独出售的可可液块或可可脂、无可可固形物的白巧克力或其他糖果、面向消费者的非散装巧克力形态、客户执行的下游成型或涂层、零售包装、制造门外配送、使用及生命终期。数据包应申明适用的市场规范，并通过交付状态、容器或运输系统及净含量说明 `bulk` 的实际含义；本 PCR 不设置全球通用的包装尺寸阈值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.chocolate-and-other-food-preparations-containing-cocoa-except-sweetened-cocoa-powder-in-e3cb3e70 |
| classification_refs | CPC 3.0：23650，仅作为精确映射语境 |
| covered_products | 以液体、糊状、颗粒、巧克力粒、块、片、粉末或其他已申明散装状态供应的散装黑巧克力、甜巧克力、牛奶巧克力、调温巧克力、代可可脂巧克力或其他含可可巧克力浆及含可可食品制品 |
| excluded_products | 加糖可可粉；未加糖可可粉；单独出售的可可液块、可可脂或可可饼；无可可固形物的产品；面向消费者的非散装巧克力或糖果；客户侧成型、涂层、零售包装、配送、使用及生命终期 |
| representative_product | 在制造场址门口已可供工业使用的散装巧克力浆 |
| production_route | 已接收可可原料及配方原料，经计量和混合、需要时细化、需要时精炼或等效处理、标准化、状态调节和散装发运 |
| market_state | 在制造场址门口、按已申明物理状态、温度条件、散装交付形式及法规或客户规范计量的净产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造场址门口供应具有已申明配方和物理状态的散装巧克力或其他散装含可可食品制品 |
| How much | 1 kg 净产品，不包括一次性包装和可重复使用运输设备的质量 |
| How well | 符合已申明产品子类、配方、适用时的可可及乳固体声明、适用法规或客户规范以及放行质量标准 |
| How long or cycle | 在制造门交接点表示一个生产批次；不指定使用期限 |
| reference_flow_link | 制造场址门口 1 kg 已申明散装产品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 散装的巧克力和其他含有可可的食品（加糖的可可粉除外） `7d08586f-18bc-42f3-b262-54f8d559de12` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类；完整配方或配方族标识；总可可固形物及相关可可原料比例；适用时的乳固体和非可可植物脂肪；水分或干物质基准；物理状态；参考点产品温度；散装交付和包装形式；净含量；生产路线；制造地域；适用法规或客户规范；分配方法；数据期间 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按申明门口条件确定产品净质量。排除一次性包装、托盘、中型散装容器、槽车及其他可重复使用运输设备。 |
| `ingredient_mass_basis` | 可可原料和配方原料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录原料接收态质量，并保留配方核算所需的水分或干物质信息。不得在没有明确换算的情况下混用干基组成百分比与接收态质量。 |
| `energy_carrier_separation` | 电力、外购热和燃料 | Energy | kWh 和 MJ | 分开记录电力、外购热或蒸汽及每种现场燃料。保留原始仪表单位并记录每项换算，不得把所有能源载体报告为无法解释的合计。 |
| `water_accounting` | 工艺、冷却和清洗用水 | Mass 或 volume | kg 或 m3 | 区分循环总流量、新鲜水取用量、内部回用水和废水排放量。只有在记录密度和温度假设时才将体积换算为质量。 |
| `packaging_separation` | 散装包装和运输设备 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将一次性散装包装作为独立输入报告。通过使用或分配模型报告可重复使用运输设备，且不得把其全部质量计入 1 kg 参考产品。 |
| `loss_and_rework_accounting` | 中间品和成品损失 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 内部返工留在质量平衡内，不单独给予避免负荷。按实际产品、废物、废水或排放去向记录离开前景边界的物料。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址门口接收的可可原料及全部其他配方原料；每项均申明物理状态、适用时的水分或干物质基准、来源数据集和接收质量 |
| starting_condition_role | 前景制造输入边界；可可种植及加工为所接收可可原料属于上游 |
| product_classification_scope | 已申明散装产品必须符合第 2 节语义范围；CPC 3.0 代码 23650 是映射语境而非规范 PCR 身份来源 |
| recursive_input_rule | 同类别巧克力或含可可制品作为原料时，仅作为带上游数据集的产品输入记录一次；不得在本前景过程中递归重建其制造过程 |
| upstream_dataset_requirement | 为跨越前景边界的每种可可原料、甜味料、乳制原料、脂肪、其他原料、包装材料、电力、外购热、燃料、供水、门前运输及废物或废水处理服务提供上游数据集 |
| disclosure | 申明配方和产品子类、适用时的可可及乳固体信息、起始可可原料形态、现场集成或外包的可可加工、纳入和省略或客户侧执行的步骤、物理交付状态、散装形式、分配、地域、数据期间及任何暂定估算使用情况 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_received_materials` | 前景起点 | 从已接收可可原料和配方原料开始，纳入直至散装发运的全部可归属现场操作，包括清洗、公用工程、废物、废水和直接排放。 | `eu-jrc-fdm-bref-2019`; `codex-cxs-87-1981` |
| `boundary_upstream_links` | 上游供应 | 连接可可、糖或甜味料、乳制原料、脂肪、公用工程、包装和处理服务的上游生产；不得用零负荷输入替代。 | `eu-pef-2021-2279`; `konstantas-et-al-2018` |
| `boundary_integrated_cocoa` | 一体化场址 | 当场址内加工可可豆或碎仁时，将可可准备建模为单独计量的上游单元过程，并通过可可原料输入传递负荷，避免遗漏或重复计算。 | `eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279` |
| `boundary_bulk_gate` | 前景终点 | 在制造场址门口，以已申明交付条件下的净散装产品结束。纳入随产品供应的一次性散装包装；排除客户下游成型、零售包装、配送、使用和生命终期。 | `eu-pef-2021-2279` |
| `boundary_food_specification` | 产品身份 | 采用已申明市场的法规或客户规范。不得把某一 Codex 或 EU 组成阈值视为所有市场或全部其他含可可制品的通用阈值。 | `codex-cxs-87-1981`; `eu-directive-2000-36-ec` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ingredient_batching` | 原料接收、储存、计量和配方准备 | required | 始终纳入已接收配方原料及可归属的接收或配料损失。 | 前景配方形成 | 每 kg 参考产品的配料质量 |
| `mass_manufacture` | 混合、细化、精炼和产品浆标准化 | required | 纳入实际路线；申明未采用的细化、精炼、均质化或等效步骤。 | 将配方前景转化为成品浆 | 每 kg 参考产品的制造产品浆质量 |
| `bulk_conditioning_dispatch` | 最终状态调节、散装储存、灌装和发运准备 | required | 纳入申明交付状态和散装形式所需的物理操作。 | 前景产品完成和参考输出形成 | 1 kg 净散装产品 |
| `cleaning_site_services` | 清洗、场址共享服务、废水、废物和直接排放核算 | required | 纳入可归属共享活动和所有相关跨边界输出；有条件时采用单独计量的过程数据。 | 前景支持和环境控制 | 每 kg 参考产品分配的服务和输出 |

### 过程：原料接收、储存、计量和配方准备（`ingredient_batching`）

#### 输入

##### 产品流

###### 可可原料输入（`cocoa_material_inputs`）

分别记录每种接收的可可液块或可可浆、可可脂、可可粉或其他可可原料，并记录供应商、来源数据集、接收状态和质量。

- 选定流：场址特定可可原料
- 流属性/单位：Mass / kg
- 数量规则：归属于生产批次的每种可可原料实测接收或领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formula_material_records`
- 来源：`codex-cxs-87-1981`; `eu-directive-2000-36-ec`; `konstantas-et-al-2018`
- 数量范围：暂定可可原料筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.05
  - 上限：1.10
  - 单位：kg/kg reference product
  - 基准：每 kg 净散装产品全部可可原料的宽泛配方依赖量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 糖及其他甜味料（`sweetener_inputs`）

按供应态质量记录每种糖、糖浆或其他甜味料；当干物质影响配方核算时保留该信息。

- 选定流：场址特定糖或甜味料
- 流属性/单位：Mass / kg
- 数量规则：归属于生产批次的实测接收或领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formula_material_records`
- 来源：`codex-cxs-87-1981`; `eu-directive-2000-36-ec`; `konstantas-et-al-2018`
- 数量范围：暂定甜味料筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.95
  - 单位：kg/kg reference product
  - 基准：每 kg 净散装产品糖及其他甜味料的宽泛配方依赖量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 乳制原料、脂肪、乳化剂、香料及其他配方原料（`other_recipe_inputs`）

分别记录每种非可可配方原料，不得将其合并为无法解释的平衡流。

- 选定流：场址特定乳制原料、脂肪、乳化剂、香料或其他食品原料
- 流属性/单位：Mass / kg
- 数量规则：归属于生产批次的每种原料实测接收或领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formula_material_records`
- 来源：`codex-cxs-87-1981`; `eu-directive-2000-36-ec`; `konstantas-et-al-2018`
- 数量范围：暂定其他原料筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.80
  - 单位：kg/kg reference product
  - 基准：每 kg 净散装产品乳制原料、非可可脂肪、乳化剂、香料及其他配方原料的宽泛合计量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已配料原料浆（`batched_ingredient_mass`）

根据已领用原料、退回原料以及单独记录的接收或配料损失，计算转入制造步骤的质量。

- 选定流：巧克力或含可可制品已配料原料浆
- 流属性/单位：Mass / kg
- 数量规则：转入制造步骤的计算质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次及每 1 kg 净散装参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_yield_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

###### 原料接收和配料损失（`ingredient_batching_losses`）

记录以废物形式离开过程的洒落、损坏、过期、污染或未回收原料；排除退回库存或内部返工的物料。

- 选定流：场址特定食品物料废物
- 流属性/单位：Mass / kg
- 数量规则：按处理路线计量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_records`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定配料损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.15
  - 单位：kg/kg reference product
  - 基准：每 kg 净散装产品离开配料过程的原料废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：混合、细化、精炼和产品浆标准化（`mass_manufacture`）

#### 输入

##### 产品流

###### 已配料原料浆输入（`batched_mass_input`）

转移计算得到的已配料原料浆，不增加第二次上游负荷。

- 选定流：巧克力或含可可制品已配料原料浆
- 流属性/单位：Mass / kg
- 数量规则：等于 `ingredient_batching` 对应转移输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次及每 1 kg 净散装参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_yield_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 制造用电（`manufacturing_electricity`）

记录混合、细化、精炼或等效处理、泵送及可归属过程控制的计量电力。

- 选定流：场址特定电力供应组合
- 流属性/单位：Energy / kWh
- 数量规则：生产批次的仪表读数或有文件依据的分表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定用电筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：5
  - 单位：kWh/kg reference product
  - 基准：每 kg 净散装产品随路线和技术变化的宽泛制造用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购热或蒸汽（`manufacturing_thermal_energy`）

记录用于熔融、温控、精炼、可归属清洗或其他制造用途的外购热或蒸汽。现场制热时应改为记录现场燃料及其直接排放。

- 选定流：场址特定外购热或蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：归属于生产批次的计量或计算交付热能
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定热能筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg reference product
  - 基准：每 kg 净散装产品随路线和技术变化的宽泛交付热量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷却新鲜水净取用量（`manufacturing_cooling_water`）

将工艺冷却补充新鲜水与循环流量及清洗用水分开记录。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：归属于制造冷却的实测新鲜水补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling_water_records`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定冷却水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg reference product
  - 基准：每 kg 净散装产品的制造冷却新鲜水补充量，不含循环流量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已制造巧克力或含可可制品浆（`manufactured_product_mass`）

记录经实际混合、细化、精炼或等效处理和标准化后转入最终状态调节的质量。

- 选定流：已制造巧克力或含可可制品浆
- 流属性/单位：Mass / kg
- 数量规则：与原料、过程损失及滞留物料核对后的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次及每 1 kg 净散装参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_yield_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

###### 制造损失和不合格产品浆（`manufacturing_losses`）

记录以废物或另售低等级产品形式离开制造步骤的质量。内部返工保留在过程质量平衡内。

- 选定流：场址特定食品物料废物或共产品
- 流属性/单位：Mass / kg
- 数量规则：按去向和法规状态计量的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_yield_records`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定制造损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.15
  - 单位：kg/kg reference product
  - 基准：每 kg 净散装产品以废物或共产品离开制造步骤的物料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 制造空气排放（`manufacturing_air_emissions`）

按物质和排放隔室记录相关实测或计算粉尘、挥发性有机物和其他直接过程排放；此处不包括上游发电排放。

- 选定流：场址特定空气基本排放
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或根据浓度和废气流量记录计算的负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_records`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定直接空气排放筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg/kg reference product
  - 基准：每 kg 净散装产品直接过程空气排放合计的首轮筛选量；实际物质仍须分开
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：最终状态调节、散装储存、灌装和发运准备（`bulk_conditioning_dispatch`）

#### 输入

##### 产品流

###### 已制造产品浆输入（`manufactured_mass_input`）

将已制造产品浆转入最终状态调节和散装发运过程，不重复其上游负荷。

- 选定流：已制造巧克力或含可可制品浆
- 流属性/单位：Mass / kg
- 数量规则：等于 `mass_manufacture` 对应转移输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次及每 1 kg 净散装参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_yield_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 一次性散装包装（`bulk_packaging_input`）

记录随产品交付的内衬、袋、纸箱、桶或其他一次性包装。可重复使用罐体或容器采用有文件依据的使用分配建模。

- 选定流：场址特定散装包装材料
- 流属性/单位：Mass / kg
- 数量规则：包装领用量减未使用退回量，并按净灌装产品分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bulk_dispatch_records`
- 来源：`eu-pef-2021-2279`; `konstantas-et-al-2018`
- 数量范围：暂定散装包装筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.30
  - 单位：kg/kg reference product
  - 基准：每 kg 净散装产品随附的一次性包装；无包装槽车交付时为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 状态调节和灌装用电（`dispatch_electricity`）

记录适用时调温或受控冷却、散装储存温控、泵送和灌装设备的可归属电力。

- 选定流：场址特定电力供应组合
- 流属性/单位：Energy / kWh
- 数量规则：生产批次的仪表读数或有文件依据的分表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定状态调节和灌装用电估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg reference product
  - 基准：每 kg 净散装产品最终状态调节、储存、泵送和灌装的宽泛用电估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净散装参考产品（`bulk_reference_product`）

该流是扣除包装和可重复使用运输设备质量后的归一化参考输出。

- 选定流：散装的巧克力和其他含有可可的食品（加糖的可可粉除外） `7d08586f-18bc-42f3-b262-54f8d559de12`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测灌装或发运质量归一化后的 1 kg 净散装产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bulk_dispatch_records`
- 来源：`codex-cxs-87-1981`; `eu-directive-2000-36-ec`

##### 废物流

###### 灌装次品和包装废物（`bulk_filling_losses`）

按实际去向记录状态调节或灌装中剔除的产品和包装材料；排除返回同一生产批次的内部返工产品。

- 选定流：场址特定食品物料或包装废物
- 流属性/单位：Mass / kg
- 数量规则：按材料和处理路线计量的剔除质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bulk_dispatch_records`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定灌装损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg reference product
  - 基准：每 kg 净散装产品离开最终状态调节和灌装的产品及包装次品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：清洗、场址共享服务、废水、废物和直接排放核算（`cleaning_site_services`）

#### 输入

##### 产品流

###### 清洗用水取用量（`cleaning_water_input`）

扣除内部回用水后记录湿法清洗和原位清洗使用的新鲜水；采用干法清洗或管道清管并不意味着其余湿洗步骤为零用水。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：归属于产品接触设备和生产区域清洗的实测新鲜水取用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定清洗用水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg reference product
  - 基准：每 kg 净散装产品可归属清洗的新鲜水取用量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗剂（`cleaning_agent_inputs`）

按供应态记录每种清洗或消毒化学品，并在需要计算活性物质时保留浓度信息。

- 选定流：场址特定清洗剂或消毒剂
- 流属性/单位：Mass / kg
- 数量规则：归属于清洗活动的领用、投加或采购记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定清洗剂筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg reference product
  - 基准：每 kg 净散装产品的供应态清洗和消毒剂
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 场址共享能源（`shared_site_energy`）

记录尚未计入过程仪表的可归属制冷、压缩空气、通风、清洗、废水处理及其他共享能源。

- 选定流：按载体分别记录的场址特定电力、热或燃料输入
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：单独仪表读数或有文件依据的共享服务能源分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_shared_service_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279`
- 数量范围：暂定共享能源筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg reference product
  - 基准：每 kg 净散装产品可归属共享服务的电力当量筛选值；实际载体仍须分开
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 可归属废水（`wastewater_output`）

按处理路线记录废水质量或体积，排除循环的清洁冷却水，并单独保留相关污染物测量结果。

- 选定流：送场址特定处理的废水
- 流属性/单位：Mass / kg
- 数量规则：归属于生产批次的实测排放量或水量平衡计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_waste_records`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定废水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg reference product
  - 基准：每 kg 净散装产品离开前景系统的可归属废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 固体清洗和处理残余物（`solid_residue_output`）

按物料和去向分别记录回收产品残余物、筛渣、废水处理污泥、废过滤器及其他固体废物。

- 选定流：场址特定固体废物
- 流属性/单位：Mass / kg
- 数量规则：按物料和处理路线计量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_waste_records`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定固体残余物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg reference product
  - 基准：每 kg 净散装产品可归属的固体清洗和处理残余物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 场址共享直接排放（`shared_site_direct_emissions`）

按物质和隔室记录归属于产品的直接燃烧排放、制冷剂损失及相关废水排放。本行不记录上游电力或外购热排放。

- 选定流：场址特定基本排放
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或根据采集的活动数据和有文件依据的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净散装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_records`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定直接排放筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg reference product
  - 基准：每 kg 净散装产品可归属场址共享直接排放合计的首轮筛选量；实际物质和隔室仍须分开
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 多功能过程和共享服务 | 优先通过细分、单独仪表、批次记录或适当的系统扩展避免分配。在应用分配因子之前，先采集可直接归属的输入和输出。 | `eu-pef-2021-2279` |
| `allocation_physical_then_other` | 无法避免的多功能性 | 无法细分或系统扩展时，采用有文件依据的因果物理关系。只有不存在可辩护物理关系时，才使用包括经济价值在内的其他合理关系；报告数量、价格、期间和敏感性。 | `eu-pef-2021-2279` |
| `allocation_internal_rework` | 内部返工 | 将内部返工返回适用过程的质量平衡，不给予共产品抵扣，也不重复增加同一上游负荷。 | `eu-pef-2021-2279` |
| `allocation_saleable_secondary_output` | 可销售不合格物料或回收产品 | 将单独出售的输出视为共产品而非废物；尽可能细分其直接可归属处理，并披露剩余分配方法。 | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | 废物和废水 | 将收集和处理负荷归给产生废物的过程。除非下游研究明确采用并披露兼容的循环或替代方法，否则前景数据集不得主张避免生产抵扣。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_formula_material_records` | `ingredient_batching` | 可可、甜味料、乳制、脂肪及其他配方输入 | 批次配方、仓库领料、接收、退料及供应商记录 | material_id; supplier; upstream_dataset; lot_id; gross_mass; tare_mass; net_mass; moisture_or_dry_matter; returned_mass | 将批准配方与校准秤和库存交易核对 | kg | 每批次或连续生产周期 | 覆盖全部纳入生产批次的代表性报告期 | 为申明产品供料的全部产线和储存点 | 按原料汇总净领用质量并扣除有记录的未使用退料，再按净产品归一化 | 秤具校准；批次追溯；配方批准；库存核对 |
| `cp_batch_yield_records` | `mass_manufacture` | 中间转移、返工和物料损失 | 批次表、罐液位或秤记录、返工日志、废物单据 | batch_id; input_mass; transfer_mass; retained_mass; rework_mass; waste_mass; destination | 对每批次实测转移量和物料处置进行核对 | kg | 每批次或生产周期 | 与产品输出相同期间 | 申明路线使用的全部制造设备 | 按处置汇总并应用 `calc_mass_balance` | 经校准计量；签字批次记录；废物接收单；核对复审 |
| `cp_process_energy_records` | `mass_manufacture` | 制造及状态调节用电、外购热和蒸汽 | 分表、公用工程发票、运行时间和设备记录 | meter_id; carrier; opening_reading; closing_reading; unit; batch_or_time_share; production_mass | 优先采用直接分表，否则采用有文件依据的时间、负荷或产量分配 | kWh 或 MJ | 仪表间隔并按月核对 | 代表性报告期 | 边界内全部过程和最终状态调节设备 | 扣除非生产用途，在归一化前分配有依据的共享用量 | 仪表校准；发票核对；分配工作表；运行日志 |
| `cp_cooling_water_records` | `mass_manufacture` | 冷却水补充和循环 | 水表、冷却循环日志、排污和排放记录 | source; make_up_volume; recirculated_volume; blowdown_volume; unit; density_assumption | 将补充新鲜水和排放量与循环流量分别计量 | kg 或 m3 | 仪表间隔并按月核对 | 代表性报告期 | 服务于纳入设备的全部冷却循环 | 分别报告净取用和废水；不得把循环流量计为新鲜水 | 仪表校准；水量平衡；维护日志 |
| `cp_bulk_dispatch_records` | `bulk_conditioning_dispatch` | 净产品、一次性包装、可重复使用设备使用及灌装次品 | 灌装秤记录、发运单、包装领退日志 | lot_id; gross_filled_mass; tare_mass; net_product_mass; packaging_material; packaging_mass; reusable_container_cycles; reject_mass | 将校准灌装记录与发运净质量及包装库存核对 | kg | 每次灌装或发运批次 | 与产品输出相同期间 | 范围内每条散装灌装和发运路线 | 汇总净产品及各材料包装；按有记录周转次数分配可重复使用设备，再归一化 | 秤具校准；发运记录；包装库存核对；容器使用日志 |
| `cp_cleaning_records` | `cleaning_site_services` | 清洗用水和清洗剂 | CIP 或人工清洗日志、水表、化学品投加记录 | cleaning_event; equipment; water_intake; recycled_water; chemical_id; as_supplied_mass; concentration; start_end_time | 计量或记录每次清洗，并关联到产品或生产周期 | kg 或 m3 | 每次清洗事件 | 代表性报告期 | 产品接触设备及可归属生产区域 | 将直接清洗归给批次；共享清洗按设备清洗时间或产量分配并披露基准 | 仪表和投加校准；卫生记录；化学品库存核对 |
| `cp_shared_service_records` | `cleaning_site_services` | 制冷、压缩空气、通风、水处理及其他共享能源 | 分表、总表、设备运行时间、维护记录 | service; carrier; energy; runtime; load; allocation_driver; production_mass | 有分表时采用分表，否则采用有文件依据的因果驱动因子 | kWh 或 MJ | 仪表间隔并按月核对 | 代表性报告期 | 可归属于纳入生产的全部共享服务 | 扣除单独计量的过程能源，只分配一次剩余量 | 仪表校准；公用工程核对；分配复审；不重复计算检查 |
| `cp_wastewater_waste_records` | `cleaning_site_services` | 废水和固体废物 | 排放计量、实验室记录、废物转移联单、处理记录 | stream; mass_or_volume; pH; temperature; COD_or_TOC; relevant_pollutants; waste_material; treatment_route | 计量各流，并保留相关污染物的代表性分析 | kg、m3 或 kg substance | 连续或事件记录，并定期实验室分析 | 代表性报告期 | 每个纳入排放点和固体废物路线 | 归一化前按流、物质和处理路线汇总 | 仪表校准；实验室方法；样品交接链；联单核对 |
| `cp_direct_emissions_records` | `cleaning_site_services` | 空气、水和土壤直接排放 | 烟气或排放测量、燃料记录、制冷剂日志、批准因子计算 | substance; compartment; measured_concentration; flow; operating_time; activity_amount; factor; factor_source | 法规要求时直接测量；否则用采集活动量乘以有文件依据的适用因子 | kg substance | 与排放源相适应的事件或报告间隔 | 代表性报告期 | 边界内每个相关直接排放源 | 计算各物质负荷，只归给过程或共享服务一次，再归一化 | 校准；实验室报告；因子引用；计算复核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单流 | 归一化数量 = 可归属期间或批次数量 / 同范围净参考产品质量 | 可归属数量；净产品质量 | 每 1 kg 参考产品数量 | `eu-pef-2021-2279` |
| `calc_net_product_mass` | 参考输出 | 净产品质量 = 灌装或发运毛质量 - 包装皮重 - 可重复使用运输设备皮重 | 毛质量；一次性包装皮重；可重复使用设备皮重 | kg 净散装产品 | `eu-pef-2021-2279` |
| `calc_mass_balance` | 每批次和报告期 | 质量平衡差 = 物料输入总量 - 净产品 - 送往返工、共产品、废物、废水固体或直接排放的输出 - 有记录库存变化；调查并披露未解释差异 | 物料输入；产品；返工；共产品；废物；排放；库存变化 | 质量平衡差和核对状态 | `eu-jrc-fdm-bref-2019` |
| `calc_water_balance` | 冷却和清洗用水 | 净取水量 = 新鲜水取用量 - 未改变返回产品系统外的水；循环流量单独披露，并按实测排放或核对平衡计算废水 | 新鲜水；回用水；循环；蒸发；产品水；排放 | 净取水量、循环披露和废水 | `eu-jrc-fdm-bref-2019` |
| `calc_shared_service_allocation` | 共享能源、用水、清洗和处理 | 先归属直接计量量；只对剩余量采用运行时间、设备清洗时间或产量等因果驱动因子分配，并记录驱动因子 | 直接计量数据；共享合计；驱动因子值 | 可归属共享服务数量 | `eu-pef-2021-2279`; `eu-jrc-fdm-bref-2019` |
| `calc_direct_emission_load` | 实测直接排放 | 排放负荷 = 浓度 x 干态或湿态废气/排水流量 x 运行时间，单位兼容且申明参考条件；或采用采集活动量 x 有文件依据因子 | 浓度和流量，或活动量和因子 | 按隔室的 kg substance | `eu-jrc-fdm-bref-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 为每项必需限定信息保留批准规范和批次证据，包括配方族、适用时的可可和乳固体声明、物理状态、温度及散装形式。 | 批准规范；分析证书；批次放行；发运记录 |
| `dq_temporal_representativeness` | 前景记录 | 采用能代表正常生产并覆盖季节、配方和运行变化的期间。优先采用连续十二个月；披露更短期间、停产、试验和异常生产周期。 | 带日期仪表及批次覆盖；生产日历；异常日志 |
| `dq_process_completeness` | 过程图 | 将申明路线与四个过程组核对，并解释每项省略操作、外包步骤或零流。 | 过程流程图；设备清单；范围复审 |
| `dq_meter_and_mass_reconciliation` | 物料、产品、能源和水 | 使用校准仪表或可追溯记录，与发票或库存变动核对总量，并防止同一数量归给多个过程。 | 校准证书；发票核对；库存核对；不重复计算复审 |
| `dq_upstream_datasets` | 可可、甜味料、乳制原料、脂肪、包装、公用工程及处理 | 选择在物料身份、地域、技术和时间方面有代表性的数据集；披露代理数据集及是否纳入可可土地利用变化处理。 | 数据集元数据；供应商来源；代理理由；土地利用变化披露 |
| `dq_emission_and_waste_identity` | 直接排放和处理输出 | 保留物质、隔室、处理路线、测量方法、因子来源以及检出限或缺失数据处理。 | 实验室报告；废物联单；排放计算；因子引用 |
| `dq_provisional_ranges` | 每个 `reasoned_estimate` 范围 | 仅将该范围用作首轮 QA 或初始化辅助，不得替代采集的前景数据；数据集若使用该范围必须明确标记待复审。 | 校验发现；估算登记；替换计划 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity_and_scope` | 产品和参考流 | 如果产品是加糖可可粉、无可可产品、面向消费者的非散装形式，或缺少必需的产品子类、配方、物理状态、散装形式及市场规范限定信息，则完整性校验失败。 | `codex-cxs-87-1981`; `eu-directive-2000-36-ec` |
| `validation_reference_uuid` | 参考产品身份 | 必须使用参考产品流 UUID `7d08586f-18bc-42f3-b262-54f8d559de12`、Mass 流属性 UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 及单位 kg。 |  |
| `validation_reference_mass` | 参考数量 | 扣除包装和可重复使用运输设备皮重后，必须恰为 1 kg 净散装产品。 | `eu-pef-2021-2279` |
| `validation_process_coverage` | 过程清单 | 必须包含四个过程组，或在相应必需组中记录技术上有效的省略理由；全部现场清洗、公用工程、废物、废水和直接排放只归属一次。 | `eu-jrc-fdm-bref-2019` |
| `validation_upstream_completeness` | 产品和公用工程输入 | 除非有文件依据的物理排除理由，否则拒绝可可、糖或甜味料、乳制原料、脂肪、包装、公用工程或处理的零负荷输入。必须提供上游数据集或明确未解决发现。 | `eu-pef-2021-2279`; `konstantas-et-al-2018` |
| `validation_mass_balance` | 每批次和报告期 | 必须报告质量平衡差并调查无法解释的物料；内部返工不得同时作为新增负荷输入和避免负荷输出。 | `eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279` |
| `validation_resource_streams` | 能源和水 | 适用时必须区分电力、外购热、现场燃料、冷却补充水、循环水、清洗水和废水，并披露换算及共享服务分配。 | `eu-jrc-fdm-bref-2019` |
| `validation_allocation` | 多功能性 | 每个共产品或共享服务必须提供细分证据，或有文件依据的物理或其他合理分配关系、因子、期间及敏感性。 | `eu-pef-2021-2279` |
| `validation_provisional_values` | 暂定范围或估算 | 如果 `reasoned_estimate` 被表述为实测或有来源支持，则报告错误。暂定估算替代必需前景记录时，报告校验不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 制造场址门口一个已申明散装巧克力或含可可食品制品的前景制造数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 连接有代表性的上游原料、公用工程、包装、运输和处理数据集，并保留申明产品及边界限定信息的摇篮到大门或更广 LCA 模型 |
| excluded_use | 直接代表加糖可可粉、单独出售的可可原料、无可可固形物白巧克力、面向消费者的非散装糖果、其他配方或市场规范、客户下游加工，或在未增加下游阶段时代表摇篮到坟墓结果 |
| required_metadata | 规范 PCR id 和版本；参考流 UUID；产品子类；配方或配方族 id；适用时的可可、乳固体和非可可脂肪声明；物理状态和温度；散装形式和净含量；制造地域；技术路线；报告期；上游数据集身份；分配因子；数据所有权和复审状态 |
| required_quality_disclosure | 一次数据覆盖；仪表和质量平衡核对；代理数据集；可可来源和土地利用变化处理；纳入和省略步骤；水循环处理；包装和可重复使用容器模型；分配敏感性；暂定估算；数据缺口；异常生产 |
| update_trigger | 配方、可可来源、供应商或上游数据集、生产技术、能源或水系统、散装交付形式、分配、市场规范、场址地域或代表性数据期发生实质变化；或用评审证据替换暂定估算 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-87-1981` | `standard` | FAO and WHO, Standard for Chocolate and Chocolate Products, CXS 87-1981, revised/amended text available at https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B87-1981%2FCXS_087e.pdf, retrieved 2026-08-11 | 产品定义、原料、组成相关限定信息、排除项和市场规范检查 |
| `eu-directive-2000-36-ec` | `standard` | European Parliament and Council, Directive 2000/36/EC relating to cocoa and chocolate products intended for human consumption, ELI https://data.europa.eu/eli/dir/2000/36/oj, retrieved 2026-08-11 | 作为一种适用市场规范的 EU 产品定义、组成和植物脂肪披露 |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/food-drink-and-milk-industries, retrieved 2026-08-11 | 巧克力过程分解；原料、能源、用水、废水、废气和残余物台账；监测；清洗和资源效率规则 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated ELI https://data.europa.eu/eli/reco/2021/2279/2021-12-30, retrieved 2026-08-11 | 功能单位和参考流、系统边界、上游完整性、多功能层级、分配及数据集质量 |
| `konstantas-et-al-2018` | `literature` | Konstantas, A.; Jeswani, H. K.; Stamford, L.; Azapagic, A. Environmental impacts of chocolate production and consumption in the UK. Food Research International 106 (2018) 1012-1025. https://doi.org/10.1016/j.foodres.2018.02.042 | 检查可可、乳制原料、糖、脂肪、制造、包装及土地利用变化披露等巧克力生命周期重要热点的完整性；不用于前景数量范围 |
