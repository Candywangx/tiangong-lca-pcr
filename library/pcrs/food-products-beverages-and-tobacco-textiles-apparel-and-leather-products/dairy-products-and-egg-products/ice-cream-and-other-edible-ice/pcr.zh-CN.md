---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.ice-cream-and-other-edible-ice
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冰淇淋及其他食用冰

## 1. 范围与适用性

本 PCR 适用于冰淇淋及其他食用冰语义范围内成品冷冻食用甜品的工厂生产。范围包括乳基冰淇淋与冷冻乳制甜品、作为食用冰产品销售的植物基冷冻甜品，以及雪葩、风味冰、水冰和冷冻棒冰等水基冷冻甜品或新颖产品。产品可为原味，也可含可可、水果、坚果、糖果颗粒、酱料或其他已声明配料。

前景边界从配料、包装材料、公用工程和制冷剂补充量进入生产场址开始，到产品完成灌装、硬化或等效冷冻稳定，并完成纳入范围的场内冷冻储存、准备出厂为止。适用路线可包括配方与混合、经验证的微生物杀灭或其他危害控制、均质或调理、带或不带充气的冻结、配料添加、灌装、包装、硬化、冷冻储存、清洗和废水处理。

本 PCR 不包括用于冷却而非食用的普通冰、未冷冻乳饮料、以未冷冻状态销售的酸奶及其他发酵乳、餐厅或冰淇淋店服务活动，以及未明确扩展边界时的出厂后配送、零售储存、消费者使用和生命末期。本 PCR 不把乳基配方强加于水基或植物基产品；必须声明具体产品族的配方、工艺、冷链和包装事实。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.ice-cream-and-other-edible-ice |
| classification_refs | CPC 3.0：22270，Ice cream and other edible ice（exact） |
| covered_products | 乳基冰淇淋和冷冻乳制甜品；植物基冷冻食用甜品；包括雪葩、风味冰、水冰和冷冻新颖产品在内的水基食用冰；含已声明可可、水果、坚果、糖果、酱料或类似配料的产品 |
| excluded_products | 冷却或工业用冰；未冷冻乳饮料；未冷冻酸奶或发酵乳；餐饮制备或销售服务；不具备所声明冷冻食用甜品功能的产品 |
| representative_product | Ice cream 是代表性的乳基形态，但不是所有覆盖配方的静默代理。水基、植物基、软冰淇淋、新颖产品及其他变体必须声明真实身份；存在更具体的公开 Tiangong flow 时必须替换。 |
| production_route | 配料接收与配方；混合；需要时实施经验证的危害控制；可选均质和调理；冻结和可选充气；可选配料添加；灌装与包装；硬化或等效冷冻稳定；场内冷冻储存；清洗与废水处理 |
| market_state | 完成硬化或等效稳定及纳入范围的场内储存后，在工厂门交付的冷冻成品；包装或散装状态按声明确定 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 具备已声明产品族和配方、可从生产场址发运的冷冻食用甜品成品 |
| How much | 1 kg 可食产品净重，不含一级、二级和三级包装质量 |
| How well | 满足已声明的配方、感官和微生物放行规范；充气产品满足膨胀率或密度规范，并满足配料与冷冻状态放行要求 |
| How long or cycle | 已完成所声明硬化或冷冻稳定步骤及所声明场内冷冻储存周期的工厂门状态；不表示消费者使用寿命 |
| reference_flow_link | `reference_product_ice_cream` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 可食产品净重 |
| 参考产品流 | Ice cream `00b6b084-f103-4934-9d2a-cf449572cf12` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品族：乳基、植物基或水基；配方及主要配料来源；适用时的脂肪和总固形物规范；适用时的充气或膨胀率及实测密度；热处理或其他危害控制路线；配料类型与比例；冻结出料与硬化路线；放行温度；场内冷冻储存时长与温度曲线；包装配置；生产地域；数据期间 |

所选 Tiangong flow 是 CPC 22270 的精确产品流，适合作为乳基冰淇淋的代表身份。若覆盖产品的真实身份不是乳基冰淇淋，数据生产者必须在存在时检索并选用更具体的公开产品流。若不存在精确公开流，前景数据包必须使用产品特定流身份，并说明未把代表性的 Ice cream flow 当作配方声明。

构建前景数据包时，`必需限定信息` 中的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中明确声明。缺少必需限定信息时，该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1 kg 可食产品净重；排除全部包装质量，并将包装作为独立投入列入清单。 |
| `volume_to_mass_conversion` | 以体积记录的生产、销售或计量数据 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用在已声明温度和过程状态下实测的批次或产品特定密度把体积换算为质量；不同充气程度或产品族不得共用一个默认密度。 |
| `overrun_and_density` | 充气产品 | 质量与实测体积 | kg 和已声明体积单位 | 在一致温度基准下记录未冻结混合料与成品的质量和体积；按已声明工厂约定计算膨胀率并保留方程，定量参考仍为质量输出。 |
| `energy_conversion` | 电力、燃料、蒸汽和制冷能耗 | 计量能量或燃料数量 | 原始计量单位及换算后的 kWh 或 MJ | 保留原始仪表或发票单位、换算因子和分配基准；不得在无明确换算时合并电力、热能和燃料质量或体积。 |
| `refrigerant_accounting` | 冻结、硬化和冷冻储存 | 制冷剂质量 | kg | 记录制冷剂身份、可得时的期初和期末库存、采购、补充、回收和转移；用质量平衡计算未解释损失，不得仅依据设备铭牌充注量推断泄漏。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 满足已声明配方规范的配料与添加剂、包装材料、公用工程供应和制冷剂补充量在生产场址边界接收，其生产由相链接的上游数据集表示。 |
| starting_condition_role | 生产冷冻食用成品的前景制造工厂门投入状态 |
| product_classification_scope | 冰淇淋及其他食用冰的完整语义类别，包括乳基、植物基和水基路线；仅在相关时应用路线特定步骤并披露适用性。 |
| recursive_input_rule | 外购冰淇淋、食用冰、来自其他场址的返工料或其他同类产品，只作为一次产品投入并链接自身上游数据集；不得在同一前景系统内递归应用本 PCR，也不得重复计算该投入已承载的负荷。 |
| upstream_dataset_requirement | 为跨越边界的每种重要配料、包装材料、电力组合、燃料或热公用工程、供水、制冷剂补充量以及场外废物或废水处理链接上游数据集。 |
| disclosure | 声明产品族、配方、场址、生产路线、不适用或省略步骤、危害控制方法、包装状态、硬化与储存条件、分配方法、返工处理、截断，以及边界止于工厂门还是明确扩展。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `system_boundary_01` | 前景制造 | 纳入配料接收与制备、配方与混合、所需危害控制、冻结与后处理、灌装与包装、硬化或等效稳定、纳入范围的场内冷冻储存、清洗，以及场内废物和废水处理。 | `uoguelph-ice-cream-manufacture`; `codex-cxc-57-2004`; `konstantas-et-al-2019` |
| `system_boundary_02` | 上游投入 | 使用具体上游数据集表示配料、包装、能源、水、制冷剂和场外处理负荷；不得因只有制造是前景而将其视为零负荷。 | `ec-jrc-fdm-bref-2019`; `konstantas-et-al-2019` |
| `system_boundary_03` | 产品变体 | 应用配方和技术特定步骤。不得把乳基热处理与均质序列静默赋给水基食用冰，也不得为植物基产品推断乳或蛋投入。省略任何常见步骤均需路线理由。 | `codex-gsfa-category-03`; `uoguelph-ice-cream-manufacture` |
| `system_boundary_04` | 排放与损失 | 纳入不合格混合料和产品、配料与包装损失、清洗水、废水、适用时的直接废水排放，以及冻结和冷冻储存设备的制冷剂损失。 | `ec-jrc-fdm-bref-2019`; `konstantas-et-al-2019` |
| `system_boundary_05` | 下游阶段 | 工厂门数据集排除出厂后配送、零售储存、餐饮服务、消费者储存或食用和生命末期；若明确建模扩展情景，必须单独报告。 | `ghg-protocol-product-standard-2011`; `konstantas-et-al-2019` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `mix_preparation_and_control` | 混合料制备与经验证危害控制 | `required` | 所有产品均需声明配方、混合和经验证的食品安全控制路线；具体控制技术取决于产品和司法辖区。 | 制备安全且已声明、可供冻结的混合料或溶液 | 离开过程的 kg 制备混合料 |
| `freezing_and_finishing` | 冻结、充气与后处理 | `required` | 适用于所有产品；仅在实际使用时记录充气、均质、调理和配料添加。 | 形成冷冻食用产品及其所声明结构 | 离开冻结设备的 kg 未包装或散装冷冻产品 |
| `packaging_hardening_storage` | 灌装、包装、硬化与场内冷冻储存 | `required` | 已声明散装转移时可不包装；硬化可由其他经验证冷冻稳定路线替代，但放行状态和储存时长仍必须记录。 | 在工厂门交付参考产品 | 1 kg 可食参考产品净重 |
| `cleaning_and_wastewater` | 清洗、卫生与废水处理 | `required` | 适用于所有生产路线；共享 CIP 或卫生系统使用实测因果驱动量分配。 | 支撑前景卫生与环境控制 | 每 kg 受支持参考产品 |

### 过程：混合料制备与经验证危害控制（`mix_preparation_and_control`）

#### 输入

##### 产品流

###### 配方配料与添加剂（`recipe_ingredients`）

分别记录实际使用的乳基或植物基原料、产品内加水、糖或甜味剂、脂肪或油、可可、水果、稳定剂、乳化剂、香料、色素、蛋及其他组分；不得把重要且不同的配料合并为通用混合料投入。

- 选定流：每种实际配料对应的产品与供应商特定 Tiangong product flow；本类别级 PCR 不规定通用配料 UUID
- 流属性/单位：Mass / kg
- 数量规则：每种配料每批次实测领用量减去有记录的未改变退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 制备混合料，并进一步归一到每 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_recipe_and_mass`
- 来源：`codex-gsfa-category-03`; `uoguelph-ice-cream-manufacture`

###### 混合料处理公用工程（`mix_treatment_utilities`）

记录混合、巴氏杀菌或其他经验证危害控制、均质、冷却和调理消耗的电力、燃料、蒸汽、热水或其他公用工程；拆分载能介质并保留原始计量单位。

- 选定流：按实际供应选择场址和载能介质特定的电力、燃料、蒸汽或热产品流
- 流属性/单位：Energy 或载能介质特定属性 / 原始计量单位，并保留换算因子换算为 kWh 或 MJ
- 数量规则：所声明批次和路线的分表计量，或有记录的共享仪表分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开本过程的制备混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_runtime`
- 来源：`codex-cxc-57-2004`; `ec-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备混合料或溶液（`prepared_mix`）

记录转入冻结步骤的食品安全混合料或溶液，其身份和配方必须与已声明的乳基、植物基或水基路线一致。

- 选定流：所声明配方特定的前景中间产品流；不规定通用公开 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或用配料加入量、容器残留、取样、返工和损失核对后的批次计算质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次和每 kg 制备混合料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_recipe_and_mass`
- 来源：`mass-balance-identity`

##### 废物流

###### 混合料制备损失（`mix_preparation_losses`）

记录泄漏、过滤残渣、未作为受控返工返回的不合格混合料及其他以废物离开本过程的食品材料。

- 选定流：与实际物料状态和处理去向匹配的废物流
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量，或在分别识别容器残留、取样和受控返工后的质量平衡残差
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备混合料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rework`
- 来源：`mass-balance-identity`

##### 基本流

### 过程：冻结、充气与后处理（`freezing_and_finishing`）

#### 输入

##### 产品流

###### 制备混合料投入（`prepared_mix_input`）

记录从前一过程转入的制备混合料，不重复计算其中已承载的上游配料负荷。

- 选定流：与 `prepared_mix` 相同的前景中间产品身份
- 流属性/单位：Mass / kg
- 数量规则：进入冻结与后处理生产线的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 散装冷冻产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_recipe_and_mass`
- 来源：`mass-balance-identity`

###### 后处理配料（`finishing_inclusions`）

把混合料制备后加入的水果、坚果、可可制品、糖果颗粒、酱料、纹理酱、涂层或其他材料分别记录为实际产品投入。

- 选定流：每种实际配料对应的产品特定 Tiangong product flow；未使用后处理配料时才省略本行
- 流属性/单位：Mass / kg
- 数量规则：批次实测领用量减去有记录的未改变退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 散装冷冻产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_recipe_and_mass`
- 来源：`uoguelph-ice-cream-manufacture`

###### 冻结与后处理公用工程（`freezing_finishing_utilities`）

记录冻结、充气、泵送、配料喂入和后处理的电力及其他载能介质；制冷剂补充量与能源分开记录。

- 选定流：按实际供应选择场址和载能介质特定的电力或能源产品流
- 流属性/单位：Energy 或载能介质特定属性 / 原始计量单位，并保留换算因子换算为 kWh 或 MJ
- 数量规则：分表计量，或对共享制冷和生产线能源作有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 散装冷冻产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_runtime`
- 来源：`konstantas-et-al-2019`; `ec-jrc-fdm-bref-2019`

###### 冻结设备制冷剂补充量（`freezing_refrigerant_makeup`）

记录向冻结设备或共享制冷设备补充的每种制冷剂，并链接设备边界和核算期间。

- 选定流：与实际充注物质匹配的制冷剂特定产品流
- 流属性/单位：Mass / kg
- 数量规则：服务于本过程设备的制冷剂采购或转入补充质量；仅在设备共享时分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一制冷剂核算期内每 kg 散装冷冻产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_chain_and_refrigerant`
- 来源：`konstantas-et-al-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 散装冷冻食用产品（`bulk_frozen_product`）

记录最终包装与硬化前离开冻结设备的产品；使用充气时记录实测密度或膨胀率。

- 选定流：所声明产品族和配方特定的前景中间流
- 流属性/单位：Mass / kg
- 数量规则：实测输出质量，并与制备混合料、后处理配料、滞留产品、受控返工和不合格品核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 散装冷冻产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_recipe_and_mass`
- 来源：`mass-balance-identity`; `uoguelph-ice-cream-manufacture`

##### 废物流

###### 冻结与后处理不合格品（`freezing_finishing_rejects`）

记录不合格产品、开停机排料、掉落配料及其他未作为受控返工返回的食品材料。

- 选定流：与实际食品材料和处理去向匹配的废物流
- 流属性/单位：Mass / kg
- 数量规则：实测不合格品质量，与受控返工分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装冷冻产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rework`
- 来源：`mass-balance-identity`

##### 基本流

###### 冻结步骤直接制冷剂损失（`freezing_refrigerant_loss`）

仅在设备级或已分配制冷剂质量平衡支持时记录每种制冷剂对空气的直接损失；存在转移或库存变化时，不得自动把全部补充量等同于当期排放。

- 选定流：与实际损失物质匹配的制冷剂特定空气排放基本流
- 流属性/单位：Mass / kg
- 数量规则：期初库存 + 采购 + 转入 - 期末库存 - 回收 - 转出 - 有记录的非排放用途，并按因果设备服务分配至本过程
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制冷剂核算期内每 kg 散装冷冻产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cold_chain_and_refrigerant`
- 来源：`konstantas-et-al-2019`

### 过程：灌装、包装、硬化与场内冷冻储存（`packaging_hardening_storage`）

#### 输入

##### 产品流

###### 散装冷冻产品投入（`bulk_frozen_product_input`）

记录转入的散装冷冻产品，不重复计算中间流已承载的负荷。

- 选定流：与 `bulk_frozen_product` 相同的前景中间身份
- 流属性/单位：Mass / kg
- 数量规则：进入灌装或散装转移的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可食参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_recipe_and_mass`
- 来源：`mass-balance-identity`

###### 包装材料（`packaging_materials`）

记录工厂门边界内使用的每种一级、二级和三级包装，包括容器、包材、棒、盖、封口、标签、纸箱及分配后的托盘或薄膜使用量。

- 选定流：每个实际包装组件对应的材料和形式特定 Tiangong product flow
- 流属性/单位：Mass / kg；采购记录以件数为基础时保留件数和实测单件质量
- 数量规则：领用件数 × 经核实单件质量 - 未改变退回量，并单独记录包装损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可食参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`konstantas-et-al-2019`

###### 硬化与冷冻储存公用工程（`hardening_storage_utilities`）

记录硬化、鼓风冻结、冷库、输送机、风机、除霜和纳入范围场内储存的电力及其他能源，并保留储存时长、温度曲线、占用量和吞吐量。

- 选定流：按实际供应选择场址和载能介质特定的电力或能源产品流
- 流属性/单位：Energy 或载能介质特定属性 / 原始计量单位，并保留换算因子换算为 kWh 或 MJ
- 数量规则：分表计量，或按实测设备运行时间、储存占用、质量吞吐量和储存时长分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：所声明场内储存时长内每 1 kg 可食参考产品净重
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cold_chain_and_refrigerant`
- 来源：`konstantas-et-al-2019`; `ec-jrc-fdm-bref-2019`

###### 硬化与储存制冷剂补充量（`storage_refrigerant_makeup`）

记录向硬化和冷冻储存系统补充的每种制冷剂，并保留所服务设备和核算期间。

- 选定流：与实际充注物质匹配的制冷剂特定产品流
- 流属性/单位：Mass / kg
- 数量规则：服务于硬化与储存设备的制冷剂采购或转入补充质量；仅在设备共享时分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制冷剂核算期内每 1 kg 可食参考产品净重
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_chain_and_refrigerant`
- 来源：`konstantas-et-al-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考产品：冰淇淋或其他食用冰成品（`reference_product_ice_cream`）

记录工厂门放行的可食净质量。所选公开 Ice cream flow 代表乳基冰淇淋；其他覆盖产品存在更具体流时必须替换，并始终声明真实产品族与配方。

- 选定流：Ice cream `00b6b084-f103-4934-9d2a-cf449572cf12`；更具体覆盖产品适用条件替换规则
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：所声明工厂门放行状态下恰好 1 kg 可食产品净重
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

- 数量范围：参考流身份检查
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每个已声明参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 包装与最终产品损失（`packaging_and_product_losses`）

记录破损包装、边角料、标签与薄膜损失、泄漏或受损产品和不合格包装产品，并按处理路线区分食品与包装材料。

- 选定流：每种实际损失流对应的材料和处理特定废物流
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量，或件数乘以经核实单件质量；食品废物与包装废物不得合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可食参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`mass-balance-identity`

##### 基本流

###### 硬化与储存直接制冷剂损失（`storage_refrigerant_loss`）

使用制冷剂质量平衡规则和与冷冻储存活动一致的核算期，记录每种制冷剂对空气的直接损失。

- 选定流：与实际损失物质匹配的制冷剂特定空气排放基本流
- 流属性/单位：Mass / kg
- 数量规则：按因果设备服务分配给硬化与储存的制冷剂质量平衡损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制冷剂核算期内每 1 kg 可食参考产品净重
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cold_chain_and_refrigerant`
- 来源：`konstantas-et-al-2019`

### 过程：清洗、卫生与废水处理（`cleaning_and_wastewater`）

#### 输入

##### 产品流

###### 清洗水、清洗剂与公用工程（`cleaning_inputs`）

记录生产相关清洗和卫生消耗的水、洗涤剂、消毒剂、电力、热和其他材料；完成清单时必须拆分水、每种化学品和每种载能介质。

- 选定流：实际场址特定供水、清洗剂和公用工程产品流；完成数据集不得使用单一合并流
- 流属性/单位：Mass、Volume、Energy 或载能介质特定属性 / 原始计量或采购单位，并记录换算
- 数量规则：计量或采购与库存平衡后的消耗量，按清洗事件、回路体积、运行时间或其他实测因果驱动量分配到产品线
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 受支持可食参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_and_effluent`
- 来源：`codex-cxc-57-2004`; `ec-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送处理废水（`wastewater_to_treatment`）

记录送往场内或场外处理的工艺与清洗废水，保留路线、体积或质量，并将监测负荷参数与直接基本流排放区分。

- 选定流：与实际处理路线和组成类别匹配的废水流
- 流属性/单位：Volume 或 Mass / 原始监测单位并保留换算
- 数量规则：生产期间实测废水量或经验证水量平衡估算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 受支持可食参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_and_effluent`
- 来源：`ec-jrc-fdm-bref-2019`

###### 食品残渣与处理固体（`cleaning_residues`）

按实际去向记录捕集产品残渣、筛渣、污泥及其他处理固体，排除已作为过程不合格品记录的材料。

- 选定流：与实际残渣和处理去向匹配的废物流
- 流属性/单位：Mass / kg
- 数量规则：实测收集质量或有记录的处理系统质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 受支持可食参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_and_effluent`
- 来源：`ec-jrc-fdm-bref-2019`

##### 基本流

###### 直接废水排放（`direct_effluent_releases`）

当前景边界内处理水直接排入环境时，将每个监测物质作为独立基本流记录；全部废水均以技术系统废物流离开时省略本行。

- 选定流：依据实际监测参数选择物质和接收环境区室特定基本流
- 流属性/单位：Mass / kg，或保留换算因子的监测质量单位
- 数量规则：实测排水体积乘以代表性浓度，并保留采样与汇总方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 受支持可食参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_and_effluent`
- 来源：`ec-jrc-fdm-bref-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | 共享生产与公用工程过程 | 在可行时通过分表计量、批次追踪及细分混合料制备、冻结、包装、清洗和冷储操作避免分配。 | `ghg-protocol-product-standard-2011` |
| `allocation_02` | 无法避免的共享负荷 | 使用因果物理驱动量：配方和生产线操作采用实测质量或批次时间；冻结和硬化采用计量能源或设备运行时间；冷库采用储存占用量乘时长；卫生过程采用清洗事件或回路体积。 | `ghg-protocol-product-standard-2011` |
| `allocation_03` | 多种可销售产品 | 无法建立物理关系时，仅在记录为何不能细分和采用物理分配后使用经济或其他有理由的关系；披露价格、期间、地域及对替代分配的敏感性。 | `ghg-protocol-product-standard-2011` |
| `allocation_04` | 返工与内部循环 | 将受控返工料返回接收批次，不创建第二个产品输出，也不重复上游负荷；记录跨期或跨产品转移，并使用接收生产相同的因果分配基准。 | `mass-balance-identity` |
| `allocation_05` | 废物与回收材料 | 无经济价值的输出按废物处理并纳入其处理负荷。若回收输出出售或作为共产品使用，披露数量、去向、价值状态及分配或替代方法，不得给予无记录抵扣。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_recipe_and_mass` | `mix_preparation_and_control`; `freezing_and_finishing`; `packaging_hardening_storage` | 配料、后加料、中间产品、参考产品及批次质量流 | 批生产与配方记录 | 产品代码；批次 id；配料和后加料 id；供应商与来源；领用和退回质量；混合料转移质量；冻结输出质量；包装净质量；密度；膨胀率约定；取样和容器残留；时间戳 | 经校准秤、配方系统、灌装检查和批次核对 | kg；密度使用时的已声明体积单位 | 每批次或生产周期 | 覆盖已声明配方和季节性生产的代表期间 | 范围内每个生产场址和生产线 | 按产品汇总有效批次记录并除以放行可食净质量；在有理由的汇总规则前分开配方变体 | 秤校准；配方批准；批次核对；放行记录；密度或灌装质量检查 |
| `cp_energy_and_runtime` | `mix_preparation_and_control`; `freezing_and_finishing` | 电力、燃料、蒸汽、热和生产线运行时间 | 仪表、发票与设备日志 | 仪表 id；期初期末读数；载能介质；单位；换算因子；设备运行时间；批次 id；吞吐量；共享用户；分配驱动量 | 优先分表；否则用场址仪表核对发票并按实测运行时间或吞吐量分配 | 原始仪表单位；kWh；MJ；载能介质质量或体积 | 每个仪表间隔和生产周期 | 与产品输出相同期间，含代表性开停机 | 范围内每场址、公用工程系统和生产线 | 有证据时扣除非生产使用，再按有记录因果驱动量分配共享使用并归一化到输出 | 仪表校准或核查；发票核对；运行日志；换算因子来源 |
| `cp_cold_chain_and_refrigerant` | `freezing_and_finishing`; `packaging_hardening_storage` | 冻结、硬化、冷储能源、时长、温度和制冷剂 | 仪表、仓储、维护和制冷剂台账 | 设备 id；制冷剂物质；铭牌充注量；期初期末库存；采购；补充；回收；转移；仪表读数；运行时间；入出库时间；储存质量；温度曲线；除霜事件 | 设备或系统仪表、制冷剂质量平衡台账和仓储记录 | kg 制冷剂；kWh 或 MJ；kg 产品；小时或日；°C | 连续或每个仪表间隔；制冷剂至少按声明数据期核对 | 完整的已声明生产与场内储存期间 | 服务产品的每套制冷系统、冻结机、硬化装置和冷库 | 质量平衡计算系统损失；按因果设备服务、占用、吞吐量和时长分配能源与损失；共享系统保留不确定性 | 维护发票；校准秤；检漏与回收记录；仪表检查；仓储移动和温度日志 |
| `cp_packaging_records` | `packaging_hardening_storage` | 包装投入、包装损失和包装产品损失 | 采购、物料清单、计数和废物记录 | 组件 id；材料；供应商；件数；经核实单件质量；领用与退回件数；损坏件数；废物质量；产品损失质量；托盘和薄膜分配 | 采购核对、代表性单件称重、生产线计数器和分类废物称重 | 件；kg | 每个包装批次和生产周期 | 与产品输出相同期间 | 范围内每条包装线和包装形式 | 用经核实单件质量把件数转为质量；按发运件数或质量分配共享三级包装并记录复用周期 | 秤校准；供应商规范；生产线计数检查；废物凭证；物料清单版本 |
| `cp_waste_and_rework` | `mix_preparation_and_control`; `freezing_and_finishing` | 食品损失、不合格品、取样、容器残留和受控返工 | 批次处置与废物记录 | 批次 id；材料状态；数量；原因；去向；返工来源与接收批次；废物凭证；处理路线 | 分类称重与批次处置追踪 | kg | 每事件和每批次 | 与产品输出相同期间 | 范围内每场址和生产线 | 按材料状态和去向汇总；返工只链接一次接收批次并防止重复记录为废物或产品输出 | 秤检查；处置批准；接收批次链接；废物承包商记录 |
| `cp_cleaning_and_effluent` | `cleaning_and_wastewater` | 清洗水、清洗剂、能源、废水、残渣和直接排放 | 清洗事件、公用工程、库存、流量和分析记录 | 清洗回路与事件；水表；化学品期初期末库存；采购；能源仪表；排水量；采样时间；浓度；参数；接收区室；污泥与残渣质量；处理路线 | 事件日志、仪表、库存平衡、代表性采样和实验室分析 | m3 或 kg 水；kg 清洗剂或残渣；kWh 或 MJ；kg 污染物 | 每清洗事件和监测间隔 | 含产品切换和卫生周期的代表期间 | 每个相关回路、处理系统和排口 | 按实测事件、回路体积、运行时间或接触生产分配共享清洗；直接排放按排水量乘代表性浓度计算 | 仪表与加药校准；化学品库存核对；采样计划；实验室 QA/QC；排放许可或处理记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 参考产品 | 可食净质量 = 灌装单元毛质量 - 包装皮重；仅汇总放行单元。 | 灌装毛质量；包装皮重；放行件数 | kg 可食参考产品净重 | `mass-balance-identity` |
| `calc_volume_to_mass` | 体积产品记录 | 产品质量 = 实测体积 × 已声明温度与状态下批次或产品特定密度。 | 体积；实测密度；温度；过程状态 | kg 产品 | `mass-balance-identity` |
| `calc_overrun` | 充气产品 | 使用工厂声明的膨胀率方程和成对未冻结混合料与成品单位体积质量测量；保留方程、温度基准和重复测量，不假设通用值。 | 混合料质量与体积；成品质量与体积；温度 | 已声明膨胀率与不确定性 | `uoguelph-ice-cream-manufacture` |
| `calc_process_mass_balance` | 每个生产过程 | 投入 = 产品输出 + 受控返工 + 实测废物与取样 + 库存变化 + 已披露未解释差异。 | 批次材料投入；输出；返工；废物；取样；在制品期初期末 | 经核对过程质量平衡和未解释差异 | `mass-balance-identity` |
| `calc_refrigerant_loss` | 制冷系统 | 损失 = 期初库存 + 采购 + 转入 - 期末库存 - 回收 - 转出 - 有记录非排放用途；仅分配服务于产品系统的份额。 | 制冷剂台账字段；设备服务分配 | 按物质和过程的 kg 制冷剂损失 | `konstantas-et-al-2019` |
| `calc_direct_effluent` | 直接排放 | 排放质量 = 排水体积 × 代表性浓度，并记录单位换算、采样代表性和未检出值处理。 | 排水体积；浓度；采样元数据；单位因子 | 排向指定接收区室的 kg 物质 | `ec-jrc-fdm-bref-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 产品与参考流 | 保留产品代码、产品族、完整配方版本、配料与包装形式、乳基或非乳基状态、适用时的密度或膨胀率、危害控制路线、放行状态以及替换参考流的理由。 | 已批准规范、配方、标签、批记录和 Tiangong flow 回读 |
| `dq_temporal_representativeness` | 全部前景数据 | 使用一个共同声明期间，覆盖代表性产品组合、开停机、切换、除霜、清洗和季节效应；披露排除项或较短周期数据。 | 带日期的生产、仪表、仓储、维护和清洗记录 |
| `dq_measurement_traceability` | 质量、能源、水、温度、制冷剂和分析数据 | 识别测量设备、单位、校准或核查状态、读数频率、数据缺口、替代和换算因子。 | 校准证书、仪表检查、实验室 QA/QC、发票和数据缺口日志 |
| `dq_completeness` | 过程图与清单 | 核算每个必需过程以及每项重要配方、包装、公用工程、制冷剂、废物、废水和直接排放流，或明确说明缺失或不适用理由。 | 与物料清单、仪表、采购记录、废物凭证和过程图交叉引用的完整性清单 |
| `dq_mass_balance` | 批次与期间汇总 | 核对材料投入、产品输出、返工、废物、取样和库存变化；报告未解释差异的绝对值和相对值，不得强制调为零。 | 已签署批次核对和期间质量平衡报告 |
| `dq_shared_systems` | 公用工程、清洗、储存和制冷 | 记录共享用户、因果分配驱动量、分子与分母、数据期间以及对合理替代分配的敏感性。 | 仪表拓扑、运行或占用记录、分配工作表和敏感性结果 |
| `dq_source_and_geography` | 上游数据集 | 尽可能匹配配料来源、电力地域、燃料和供水、包装材料、制冷剂物质和废物处理路线，并披露代理。 | 供应商记录、发票、来源声明、上游数据集元数据和代理清单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_01` | 参考流 | 确认参考数量恰为 1 kg 可食产品净重，使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，且排除包装质量。 | `mass-balance-identity` |
| `validation_02` | 代表产品覆盖 | 确认 Ice cream `00b6b084-f103-4934-9d2a-cf449572cf12` 未被用作水基、植物基或其他更具体产品的未声明配方代理；必须提供真实产品族和 flow 替换决定。 | `un-cpc-3-0-22270`; `codex-gsfa-category-03` |
| `validation_03` | 必需限定信息 | 产品族、配方、密度或膨胀率适用性、危害控制路线、配料、放行温度、硬化或稳定路线、储存时长、包装、地域或数据期间缺失时，数据包不完整。 | `codex-cxc-57-2004`; `uoguelph-ice-cream-manufacture` |
| `validation_04` | 过程覆盖 | 确认四个必需过程均已表示；只有提供产品路线理由时，才允许把变体特定操作标记为不适用。 | `uoguelph-ice-cream-manufacture`; `codex-cxc-57-2004` |
| `validation_05` | 质量平衡与返工 | 校验批次和期间质量平衡，确保受控返工只链接一次接收批次，并要求披露未解释差异。 | `mass-balance-identity` |
| `validation_06` | 能源与冷链 | 确认混合料处理、冻结、硬化、场内储存、储存时长、温度曲线以及制冷剂身份与损失分别核算；无质量平衡时不得把铭牌充注量作为排放量。 | `konstantas-et-al-2019`; `ec-jrc-fdm-bref-2019` |
| `validation_07` | 包装、清洗与排放 | 确认包装质量与可食参考质量分离，并核算清洗投入、废水、食品残渣、包装损失和直接废水排放且无重复计算。 | `ec-jrc-fdm-bref-2019`; `konstantas-et-al-2019` |
| `validation_08` | 分配 | 确认在经济或其他分配前尝试细分或因果物理分配，并要求披露共享系统驱动量和敏感性。 | `ghg-protocol-product-standard-2011` |
| `validation_09` | 边界一致性 | 工厂门结果不得静默纳入或省略出厂后配送、零售储存、消费者储存或食用及生命末期；扩展情景必须单独报告。 | `ghg-protocol-product-standard-2011`; `konstantas-et-al-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 冰淇淋或其他已声明食用冰产品在工厂门的产品特定前景制造数据集 |
| downstream_use | 当产品身份、地域、技术、配方、包装和时间具有代表性时，可作为食品、餐饮、零售、冷链、包装和 lifecyclemodel 系统的 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 与已声明边界和分配一致的归因型工厂门生产建模、热点分析、单独建模下游冷链的情景分析、内部改进和供应链研究。 |
| excluded_use | 乳基、植物基和水基产品族之间的未声明替代；营养或感官等效声明；缺少共同功能等效性、边界、分配、数据质量和评审框架的公开比较声明；包装负荷已嵌入且不可拆分时作为未包装产品使用。 |
| required_metadata | PCR id 和版本状态；产品和 flow 身份；完整必需限定信息；配方与包装版本；场址和地域；生产技术；危害控制路线；参考期间；截断；分配；上游数据集版本；放行温度；硬化和场内储存条件；数据质量与不确定性声明。 |
| required_quality_disclosure | 前景与二手数据占比；仪表覆盖；质量平衡未解释差异；代理清单；缺失数据与替代；共享系统分配；制冷剂核算基础；储存时长；配方覆盖；时间、地域和技术代表性；评审状态。 |
| update_trigger | 产品族或配方、主要配料来源、包装形式、危害控制或冻结技术、制冷剂物质或制冷系统、硬化或储存条件、场址或能源供应、分配基准、上游数据集、法规或会实质改变清单的证据发生变化。 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-22270` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 22270, Ice cream and other edible ice, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-11） | 分类范围与类别身份 |
| `codex-gsfa-category-03` | `official_guidance` | FAO/WHO Codex Alimentarius, General Standard for Food Additives Online, Food Category 03.0, Edible ices, including sherbet and sorbet. https://www.fao.org/gsfaonline/foods/details.html?id=52&print=true（检索日期 2026-08-11） | 水基食用冰范围及其与主要乳基冷冻甜品的区分 |
| `codex-cxc-57-2004` | `official_guidance` | FAO/WHO Codex Alimentarius, CXC 57-2004, Code of Hygienic Practice for Milk and Milk Products. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B57-2004%252FCXC_057e.pdf（检索日期 2026-08-11） | 经验证微生物杀灭控制、危害控制、卫生和乳基路线数据要求 |
| `uoguelph-ice-cream-manufacture` | `handbook` | University of Guelph, Ice Cream Technology e-Book, Ice Cream Manufacture. https://books.lib.uoguelph.ca/icecreamtechnologyebook/part/ice-cream-manufacture-2/（检索日期 2026-08-11） | 典型冰淇淋过程序列、条件适用的均质与老化、冻结、包装和硬化 |
| `ec-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, EUR 29978 EN, JRC118627, 2019, DOI: 10.2760/243911. https://publications.jrc.ec.europa.eu/repository/handle/JRC118627（检索日期 2026-08-11） | 食品与乳制品制造的能源和用水监测、清洗、废水、排放与环境绩效 |
| `konstantas-et-al-2019` | `literature` | Konstantas, A.; Stamford, L.; Azapagic, A. (2019), Environmental impacts of ice cream, Journal of Cleaner Production 209: 259-272. DOI: 10.1016/j.jclepro.2018.10.237 | 冰淇淋生命周期过程分解，以及配料、制造能源、包装、深冷、储存时长、制冷剂类型与损失的重要性 |
| `ghg-protocol-product-standard-2011` | `standard` | WRI and WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf（检索日期 2026-08-11） | 边界披露、数据质量和分配层级 |
| `mass-balance-identity` | `method_factor` | 应用于批次、过程、包装、返工、制冷剂和废水平衡的质量守恒恒等式 | 不含经验默认因子的计算与 QA 规则 |
