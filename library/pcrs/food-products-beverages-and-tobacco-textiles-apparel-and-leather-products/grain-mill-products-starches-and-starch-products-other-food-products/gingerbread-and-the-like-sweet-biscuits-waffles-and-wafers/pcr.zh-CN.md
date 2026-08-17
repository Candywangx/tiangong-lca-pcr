---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.gingerbread-and-the-like-sweet-biscuits-waffles-and-wafers
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 姜饼、甜饼干、华夫和威化

## 1. 范围与适用性

本候选 PCR 覆盖 CPC 23420 产品族：姜饼及类似产品、甜饼干、华夫和威化。下述前景路线有意窄于整个类别，仅代表由两片烘烤饼壳和非冷冻油脂-糖基夹心组成的常温稳定奶油夹心甜饼干。Tiangong 产品流 `Sandwich Cookie` 仅作为该代表路线的参考身份，不得解释为类别内所有产品的完整过程模型。

前景边界始于配料和包装材料进入制造场址，止于可销售的包装夹心饼干离开包装线。配料、燃料、电力、水、包装和处理服务的上游生产通过上游数据集连接。除非下游研究明确加入，否则配送、零售、消费者储存和食用及报废处置不在本前景数据集内。

本候选尚未提供姜饼、无夹心甜饼干、威化片产品、冰淇淋夹心、冷藏乳脂夹心、咸味薄脆饼、脆面包、糕点、蛋糕或面包的产品特定路线。生产者不得将代表性夹心饼干清单原样用于这些产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.gingerbread-and-the-like-sweet-biscuits-waffles-and-wafers` |
| classification_refs | CPC 3.0 `23420`，精确分类语境；分类不是规范 PCR 身份 |
| covered_products | 姜饼及类似产品；甜饼干；华夫；威化 |
| excluded_products | 脆面包、面包干和烘烤面包制品；糕点和蛋糕；面包和其他烘焙制品；CPC 23420 之外的咸味薄脆饼；冰淇淋夹心及其他冷冻甜品 |
| representative_product | 由 Tiangong 流 `Sandwich Cookie` 表示的常温稳定奶油夹心甜饼干 |
| production_route | 配料接收与计量；面团混合；成形；隧道炉烘烤；冷却；奶油夹心制备；夹心沉积与组合；初级包装；共用清洁与公用工程 |
| market_state | 制造场址包装线出口的可销售、常温稳定、已包装食品；产品净质量不含包装质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产供人食用的常温稳定奶油夹心甜饼干 |
| How much | 包装线出口 1 kg 可销售夹心饼干净质量，不含包装质量 |
| How well | 产品符合所声明的配方族、饼壳类型、夹心类型及质量分数、最终水分或水分活度规格、尺寸或件数-质量基准和可销售质量标准 |
| How long or cycle | 一个声明的生产批次并归一化至 1 kg 输出；声明保质期，但保质期内下游储存不在前景边界内 |
| reference_flow_link | 过程 `primary_packaging` 中的参考产品输出行 `packaged_sandwich_biscuit` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 产品净质量 |
| 参考产品流 | Sandwich Cookie `80a32a82-0f7d-4112-a92e-5adcc89f1db3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类 = 奶油夹心甜饼干；饼壳配方和几何形态；夹心类型与夹心质量分数；最终水分或水分活度；净质量和件数-质量基准；包装配置；返工政策；生产技术；场址地理；数据期；市场状态 = 常温稳定包装产品 |

构建前景数据包时，所有`必需限定信息`应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息会使参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有清单量归一化至 1 kg 饼干可销售净质量；参考产品质量不含初级、次级和运输包装，这些材料另行列清单。 |
| `count_to_mass_conversion` | 按件数记录的产量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按每个声明产品和批次对代表性样本测定平均净质量；保留样本件数、毛重、皮重和变异。 |
| `energy_carrier_separation` | 电力、燃料、蒸汽和购入热 | 载能体特定能量属性 | 电力用 kWh；燃料和热用 MJ | 各载能体分开记录，采用有文件依据的换算因子，不得合并为无说明的总能量。 |
| `water_mass_basis` | 配料、清洁和公用工程用水 | Mass | kg | 按用途记录用水；体积换算为质量时记录密度和温度假设。 |
| `recipe_mass_basis` | 面粉、糖、油脂、夹心、水和小料 | Mass | kg | 记录进入前景过程的实际使用质量；披露供应商水分或固形物修正，不得默认为干基。 |
| `packaging_mass_separation` | 初级和次级包装 | Mass | kg | 各包装材料按每 1 kg 产品的实测或物料清单质量记录；包装不计入参考产品质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 配料、加工助剂、包装材料、水、燃料和购入公用工程到达制造场址，并声明数量、供应商或数据集身份、材料状态及相关规格。 |
| starting_condition_role | 门到门前景起始条件；上游负荷由配料、能源、水、包装和处理数据集提供。 |
| product_classification_scope | CPC 3.0 `23420` 类别语境，详细过程指导仅限声明的奶油夹心甜饼干代表路线。 |
| recursive_input_rule | 外购饼干、威化片、夹心制品或同类别其他投入保持为可见产品投入并连接单独上游数据集；不得在同一前景包内递归重建。 |
| upstream_dataset_requirement | 每项材料和服务投入应有地理、技术和时间上具有代表性的上游数据集或明确数据缺口；质量和能量流不得在前景入口消失。 |
| disclosure | 声明产品配方族、夹心分数、产线技术、烤炉直接或间接加热、内部返工、包装范围、共用公用工程分配、场址地理、数据期及每个条件过程的纳入或排除。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start_at_site_receipt` | foreground_system_boundary | 纳入代表路线所用全部配料和生产助剂的场内接收、计量、储存损失与转运。 | `eu-jrc-fdm-bref-2019` |
| `boundary_include_core_manufacturing` | foreground_system_boundary | 纳入面团混合、坯件成形、烘烤、冷却、夹心制备、夹心沉积、组合、包装、清洁及直接归属的公用工程。 | `eu-jrc-fdm-bref-2019`; `us-epa-energy-star-baking-2012` |
| `boundary_include_upstream_links` | foreground_system_boundary | 购入配料、能源、水、包装和处理服务保持为可见产品流或废物流并连接上游数据集。 | `iso-14044-2006`; `environdec-pcr-2025-03` |
| `boundary_include_direct_releases` | foreground_system_boundary | 发生时纳入场内燃烧、制冷剂泄漏、废水和废物处理的实测或计算直接排放，并披露因子来源和计算方法。 | `eu-jrc-fdm-bref-2019` |
| `boundary_include_losses_and_treatment` | foreground_system_boundary | 记录配料洒落、面团和饼干不合格品、夹心损失、包装废料、废水及其实际回用、回收或处理路线；内部返工在毛记录中保持可见。 | `eu-jrc-fdm-bref-2019`; `ghg-protocol-product-standard-2011` |
| `boundary_exclude_downstream_by_default` | foreground_system_boundary | 默认排除配送、零售、消费者储存和食用及报废处置；下游生命周期模型可显式加入且不得重复计算。 | `environdec-pcr-2025-03`; `ghg-protocol-product-standard-2011` |
| `boundary_limit_representative_route` | foreground_system_boundary | 不得将本详细清单原样用于姜饼、无夹心威化、冰淇淋夹心、冷藏夹心或其他实质不同产品；使用前须记录并评审路线变化。 | `eu-jrc-fdm-bref-2019` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ingredient_and_dough_preparation` | 配料计量与面团制备 | `required` | 代表路线始终适用 | 前景材料制备 | kg 混合面团 |
| `forming_and_baking` | 坯件成形与隧道炉烘烤 | `required` | 代表路线始终适用 | 前景热加工 | kg 烘烤饼壳 |
| `cooling` | 饼壳冷却 | `required` | 代表路线始终适用 | 前景调质 | kg 冷却饼壳 |
| `filling_and_assembly` | 夹心制备与组合 | `required` | 代表性奶油夹心路线始终适用 | 前景二次加工 | kg 组合夹心饼干 |
| `primary_packaging` | 初级包装 | `required` | 声明的包装市场状态始终适用 | 前景终结及参考输出 | 1 kg 可销售夹心饼干净质量 |
| `shared_cleaning_and_utilities` | 清洁、卫生与共用公用工程 | `required` | 始终适用；按因果记录分配 | 前景支持 | 归一化至 1 kg 净产品的生产批次 |

### 过程：配料计量与面团制备（`ingredient_and_dough_preparation`）

#### 输入

##### 产品流

###### 进入饼壳配方的面粉（`flour_input`）

按批次配方和称量记录实际使用的面粉质量，并声明面粉类型、水分基准及供应商或上游数据集。

- 选定流：小麦粉或其他声明谷物粉；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测批次面粉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售夹心饼干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_and_batch_mass`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定面粉投入筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.25
  - 上限：0.75
  - 单位：kg/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量的面粉质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 糖及其他热量甜味料（`sweetener_input`）

上游数据集不同时分别记录各甜味料，保留组分质量后方可汇总。

- 选定流：声明的糖或糖浆；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测批次甜味料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售夹心饼干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_and_batch_mass`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定甜味料投入筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.10
  - 上限：0.45
  - 单位：kg/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量的甜味料质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饼壳用油脂（`shell_fat_input`）

按实际使用质量和规格记录各油脂；除非原始记录无法区分且披露局限，不得与夹心油脂合并。

- 选定流：声明的食用油脂；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测饼壳批次油脂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售夹心饼干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_and_batch_mass`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定饼壳油脂筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.03
  - 上限：0.30
  - 单位：kg/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量的饼壳油脂质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 面团用水（`dough_water_input`）

面团加水与清洁和公用工程用水分开记录；烘烤蒸发水纳入质量平衡。

- 选定流：Process water；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测面团加水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售夹心饼干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_and_batch_mass`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定面团用水筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.02
  - 上限：0.35
  - 单位：kg/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量的面团用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 小料和加工助剂（`minor_ingredients_input`）

盐、膨松剂、乳化剂、香料、可可、乳固体和其他配方组分在具有实质影响或不同上游数据集时分别记录。

- 选定流：声明的小料或加工助剂；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按配料实测或批次表数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售夹心饼干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_and_batch_mass`
- 来源：`eu-jrc-fdm-bref-2019`

###### 计量与混合用电（`dough_preparation_electricity`）

优先使用分表；否则按运行时间和核验设备负荷因果分配产线用电。

- 选定流：声明电网或供应商组合的电力；Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：分表或因果分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 混合面团，再换算至参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_meters`
- 来源：`us-epa-energy-star-baking-2012`
- 数量范围：暂定混合用电筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.005
  - 上限：0.20
  - 单位：kWh/kg 净产品
  - 基准：每 1 kg 净产品的配料计量与面团制备用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 配料洒落和未回收制备废物（`dough_preparation_waste`）

记录未内部返工而离开过程的材料，并识别处理路线。

- 选定流：有机食品生产废物；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测处置或外部回收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 混合面团
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_rework_and_waste`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定制备废物筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 混合面团
  - 基准：每 kg 混合面团的离开制备过程废物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 混合饼干面团（`mixed_dough_output`）

记录成形前面团毛产量，并与配方投入、容器残留、洒落和取样核对。

- 选定流：Mixed biscuit dough；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测批次输出或按配方质量扣除实测损失计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个面团批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_recipe_and_batch_mass`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定混合面团输出筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.65
  - 上限：1.30
  - 单位：kg/kg 净产品
  - 基准：生产每 1 kg 可销售夹心饼干所需混合面团
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：坯件成形与隧道炉烘烤（`forming_and_baking`）

#### 输入

##### 产品流

###### 进入成形的混合面团（`dough_to_forming`）

从 `mixed_dough_output` 转移面团毛质量，不重复计算上游配料。

- 选定流：Mixed biscuit dough；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测转入成形线的面团质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 烘烤饼壳
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_rework_and_waste`
- 来源：`eu-jrc-fdm-bref-2019`

###### 烘烤热能（`baking_thermal_energy`）

天然气、其他燃料、蒸汽和购入热分开记录。外部范围仅用于烘焙行业筛查，不能替代场址计量。

- 选定流：声明的烤炉燃料、蒸汽或购入热；Tiangong UUID 未解析
- 流属性/单位：Energy / MJ
- 数量规则：按载能体计量烤炉热投入，共用时分配至声明批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 烘烤饼壳，再换算至参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_meters`
- 来源：`eu-jrc-fdm-bref-2019`; `us-epa-energy-star-baking-2012`
- 数量范围：已发布烘焙炉热能筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.396
  - 上限：7.2
  - 单位：MJ/kg 烘烤产品
  - 基准：51 台烘焙炉报告的 0.110–2 kWh 热/kg 换算值，仅作宽泛行业筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-jrc-fdm-bref-2019`

###### 成形与烘烤用电（`forming_baking_electricity`）

通过分表或因果分配记录成形驱动、输送、烤炉风机、控制及电加热炉用电。

- 选定流：声明电网或供应商组合的电力；Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：分表或因果分配的成形与烘烤用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 烘烤饼壳，再换算至参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_meters`
- 来源：`eu-jrc-fdm-bref-2019`; `us-epa-energy-star-baking-2012`
- 数量范围：已发布烘焙线烘烤用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.125
  - 上限：0.167
  - 单位：kWh/kg 烘烤产品
  - 基准：烘焙线烘烤用电；须评审对声明饼干线的适用性
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

#### 输出

##### 产品流

###### 烘烤饼壳（`baked_shell_output`）

测量离炉并进入冷却前的合格饼壳，记录残余水分或水分活度取样基准。

- 选定流：Baked sweet biscuit shells；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测离炉合格饼壳质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个成形烘烤批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_rework_and_waste`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定烘烤饼壳产率筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.45
  - 上限：0.90
  - 单位：kg/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干的合格烘烤饼壳
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 离开前景路线的烘烤不合格品（`baking_reject_waste`）

记录未作为内部返工返回的焦化、欠烤、破碎或污染饼壳。

- 选定流：Rejected biscuit waste；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按去向实测不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 烘烤饼壳
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_rework_and_waste`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定烘烤不合格品筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 烘烤饼壳
  - 基准：每 kg 烘烤饼壳输出的离开过程不合格品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 烤炉直接燃烧排放（`direct_oven_emissions`）

场内燃烧燃料时，直接烟气排放与上游燃料生产分开计算和报告；保留燃料量、组成、因子来源、氧化假设和烟气测量。

- 选定流：载能体特定的直接燃烧排放；Tiangong UUID 未解析
- 流属性/单位：各基本流 Mass / kg
- 数量规则：计量燃料量乘以经批准的载能体和技术特定因子；需要时由实测排放替代
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 烘烤饼壳，再换算至参考流
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel_meters`
- 来源：`eu-jrc-fdm-bref-2019`

### 过程：饼壳冷却（`cooling`）

#### 输入

##### 产品流

###### 进入冷却的烘烤饼壳（`shells_to_cooling`）

将烤炉出口合格饼壳实测质量转入冷却阶段。

- 选定流：Baked sweet biscuit shells；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测进入冷却的饼壳质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却饼壳
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_rework_and_waste`
- 来源：`eu-jrc-fdm-bref-2019`

###### 冷却用电（`cooling_electricity`）

纳入归属于饼壳冷却的输送、风机、除湿和调节空气负荷。

- 选定流：声明电网或供应商组合的电力；Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：分表或因果分配的冷却用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷却饼壳，再换算至参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_meters`
- 来源：`eu-jrc-fdm-bref-2019`; `us-epa-energy-star-baking-2012`
- 数量范围：暂定冷却用电筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.005
  - 上限：0.30
  - 单位：kWh/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量的冷却用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷却饼壳（`cooled_shell_output`）

按声明的时间、温度和水分或水分活度检查后记录放行至夹心工序的饼壳。

- 选定流：Cooled sweet biscuit shells；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测合格冷却饼壳质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个冷却批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_rework_and_waste`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

###### 未内部返工的破碎饼壳（`cooling_breakage_waste`）

记录离开路线的破碎或污染饼壳，并区分外部回收和处置。

- 选定流：Rejected biscuit waste；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按去向实测破碎质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷却饼壳
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_rework_and_waste`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定冷却破损筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 冷却饼壳
  - 基准：每 kg 冷却饼壳输出的离开冷却过程破损
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：夹心制备与组合（`filling_and_assembly`）

#### 输入

##### 产品流

###### 组合用冷却饼壳（`cooled_shells_to_assembly`）

转入冷却饼壳质量，不重复计算饼壳配料或上游负荷。

- 选定流：Cooled sweet biscuit shells；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测发至组合线的饼壳质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 组合夹心饼干
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_and_assembly`
- 来源：`eu-jrc-fdm-bref-2019`

###### 夹心配料（`filling_material_input`）

上游数据集不同时分别记录夹心油脂、糖、可可、乳配料、香料和乳化剂。本代表路线排除冷冻冰淇淋和冷藏高水分夹心。

- 选定流：声明的常温稳定奶油夹心配料；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按夹心配料实测批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售夹心饼干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_and_assembly`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定夹心质量分数筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.10
  - 上限：0.50
  - 单位：kg/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量的夹心配料质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 夹心与组合用电（`assembly_electricity`）

纳入常温稳定夹心的混合或调温、泵、沉积机、组合设备、输送和直接归属调节负荷。

- 选定流：声明电网或供应商组合的电力；Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：分表或因果分配的夹心与组合用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 组合夹心饼干
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_meters`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定组合用电筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：0.15
  - 单位：kWh/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量的夹心与组合用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 组合夹心饼干（`assembled_biscuit_output`）

测量包装前合格组合产品毛产量，并记录夹心分数、件数和净质量检查。

- 选定流：Unpackaged sandwich biscuits；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测合格组合饼干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个组合批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_and_assembly`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定组合产率筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.85
  - 上限：1.00
  - 单位：kg/kg 饼壳与夹心毛投入
  - 基准：合格组合输出除以饼壳与夹心毛投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 夹心与组合损失（`assembly_loss_waste`）

按实际去向记录未返工夹心残留、错配饼干和污染产品。

- 选定流：有机食品生产废物；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测离开路线的损失质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 组合夹心饼干
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_rework_and_waste`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定组合损失筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 组合夹心饼干
  - 基准：每 kg 合格组合输出的离开夹心与组合过程损失
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：初级包装（`primary_packaging`）

#### 输入

##### 产品流

###### 进入包装的组合饼干（`biscuits_to_packaging`）

将实测组合输出转入包装，并保留投入、可销售输出、样品和不合格品之间的核对。

- 选定流：Unpackaged sandwich biscuits；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测进入包装的未包装饼干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_and_output`
- 来源：`eu-jrc-fdm-bref-2019`

###### 初级包装材料（`primary_packaging_material`）

薄膜、托盘、纸盒、标签、油墨和封口件按材料及实测或物料清单质量分别记录。

- 选定流：声明的初级包装材料；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：包装物料清单与领用及废料记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售夹心饼干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_and_output`
- 来源：`environdec-pcr-2025-03`
- 数量范围：暂定初级包装筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.005
  - 上限：0.20
  - 单位：kg/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量的初级包装质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装用电（`packaging_electricity`）

纳入包装机、装盒机、贴标机、检重机、检测和直接归属输送用电。

- 选定流：声明电网或供应商组合的电力；Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：分表或因果分配的包装用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售夹心饼干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_meters`
- 来源：`us-epa-energy-star-baking-2012`
- 数量范围：暂定包装用电筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：0.15
  - 单位：kWh/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量的包装用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 包装可销售夹心饼干（`packaged_sandwich_biscuit`）

本行是定量参考输出。记录扣除全部包装质量后的饼干净质量。

- 选定流：Sandwich Cookie `80a32a82-0f7d-4112-a92e-5adcc89f1db3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考量 1 kg 可销售饼干净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：
- 数量范围：参考产品质量平衡恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：归一化后的必需参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-2006`

##### 废物流

###### 包装废料（`packaging_scrap`）

按材料和去向记录开机薄膜、边料、不合格包装、标签、纸盒和其他包装废料。

- 选定流：按材料分类的包装废物；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测包装废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售夹心饼干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_and_output`
- 来源：`environdec-pcr-2025-03`
- 数量范围：暂定包装废料筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量的包装废料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装工序产品损失（`packaging_product_loss`）

记录未内部返工的压碎、污染、欠重或其他不合格产品。

- 选定流：Rejected biscuit waste；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按去向实测产品损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售夹心饼干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_rework_and_waste`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定包装产品损失筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量的包装过程产品损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：清洁、卫生与共用公用工程（`shared_cleaning_and_utilities`）

#### 输入

##### 产品流

###### 清洁与卫生用水（`cleaning_water`）

清洁、卫生和受控湿清洁用水与配方水分开记录；共用清洁按清洁设备面积、清洁时间、批次数或其他因果驱动分配。

- 选定流：Process water；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：计量或因果分配的清洁用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产批次，再换算至参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_chemicals_and_effluent`
- 来源：`eu-jrc-fdm-bref-2019`; `us-epa-energy-star-baking-2012`
- 数量范围：暂定清洁用水筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.02
  - 上限：5.0
  - 单位：kg/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量的清洁与卫生用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洁化学品（`cleaning_chemical_input`）

洗涤剂、消毒剂和其他清洁化学品按供应产品质量记录，并披露稀释计算。

- 选定流：声明的清洁化学品；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：采购或领用记录与浓度和投加日志核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产批次，再换算至参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_water_chemicals_and_effluent`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定清洁化学品筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.0001
  - 上限：0.05
  - 单位：kg/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量的供应态清洁化学品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 共用设施电力和热（`shared_utility_energy`）

纳入未分配给其他过程的压缩空气、暖通、照明、清洁热和共用公用工程，避免与过程分表能量重复。

- 选定流：电力和热分开记录；Tiangong UUID 未解析
- 流属性/单位：Energy / kWh 电力和 MJ 热
- 数量规则：按有文件依据的因果驱动分配计量共用公用工程
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产批次，再换算至参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel_meters`
- 来源：`us-epa-energy-star-baking-2012`
- 数量范围：暂定共用设施用电筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.50
  - 单位：kWh/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量的共用设施用电，不含过程分表用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送处理的废水（`cleaning_wastewater`）

记录实测排放质量或体积、去向及相关负荷指标；考虑蒸发、留存水和其他用途后方可与用水量核对。

- 选定流：送往声明处理的废水；Tiangong UUID 未解析
- 流属性/单位：Mass / kg 或 Volume / m3，并记录换算
- 数量规则：按因果基础将计量排放分配至批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产批次，再换算至参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_chemicals_and_effluent`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定废水筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5.0
  - 单位：kg/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量送处理的废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 固体清洁残渣（`solid_cleaning_waste`）

按去向记录扫集碎屑、过滤残渣、污染吸附物和其他固体清洁废物。

- 选定流：固体食品生产或清洁废物；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或记录容器质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产批次，再换算至参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_chemicals_and_effluent`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定固体清洁废物筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 净产品
  - 基准：每 1 kg 可销售夹心饼干净质量的固体清洁废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 可单独计量的过程和批次 | 能独立测量代表产品时，通过分表、分批记录或过程细分避免分配。 | `ghg-protocol-product-standard-2011`; `iso-14044-2006` |
| `allocation_physical_causality_first` | 不可避免的多输出分配 | 无法避免时采用反映因果关系的物理关系，如产品质量、机器时间、热需求或清洁面积，并说明驱动与资源使用和排放的关系。 | `ghg-protocol-product-standard-2011` |
| `allocation_shared_utilities` | 共用电力、热、压缩空气、暖通、清洁和废水 | 优先使用核验分表；否则采用设备运行时间与负荷、批次时长、清洁面积或其他因果驱动。不得仅按收入分配全部公用工程。 | `us-epa-energy-star-baking-2012`; `ghg-protocol-product-standard-2011` |
| `allocation_economic_fallback` | 无可用物理关系的共产品 | 仅在无法建立物理因果时采用经济或其他合理关系；披露价值、价格期、地理、敏感性及物理分配失败原因。 | `ghg-protocol-product-standard-2011` |
| `allocation_internal_rework` | 同批次返回的面团、饼壳、夹心和组合饼干 | 将内部返工作为内部回路：保留毛投入和损失记录，不产生外部共产品抵扣，并纳入返工额外能源和材料。 | `ghg-protocol-product-standard-2011` |
| `allocation_waste_and_recovery` | 不合格品、食品残渣、包装废料和废水 | 无经济价值的输出为废物，不分配上游负荷，但纳入处理；出售或具有功能用途的回收输出作为共产品并声明分配和去向。 | `ghg-protocol-product-standard-2011`; `iso-14044-2006` |
| `allocation_consistency` | 重复批次和类似流 | 对类似投入和输出持续采用相同分配方法；方法改变时披露理由，并按下游研究要求重算比较基线。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_recipe_and_batch_mass` | `ingredient_and_dough_preparation` | 配方配料与混合面团 | 批次配方、称量记录、领料记录、水分规格 | batch_id; product_id; ingredient_id; supplier_lot; gross_mass; tare_mass; net_mass; moisture_basis; timestamp; dough_output_mass | 校准秤记录与批准配方和领料记录核对 | kg | 每批 | 完整声明数据期，含开机和换产批次 | 所有生产声明产品的产线和批次 | 按批汇总配料和面团质量，完成批次核对后归一化 | 秤校准；批准配方版本；批号追溯；异常日志 |
| `cp_energy_and_fuel_meters` | `ingredient_and_dough_preparation`; `forming_and_baking`; `cooling`; `filling_and_assembly`; `primary_packaging`; `shared_cleaning_and_utilities` | 电力、燃料、蒸汽、热、压缩空气和直接燃烧排放 | 公用工程表、燃料发票、分表、运行日志、排放因子记录 | meter_id; carrier; opening_reading; closing_reading; unit; start_time; end_time; product_output; equipment_runtime; factor_id; factor_value | 在批次边界读取校准表或使用区间数据，并与场址总量和燃料采购核对 | kWh; MJ; 载能体单位; kg 排放 | 每批或不长于一个月的区间并分配到批次 | 条件允许时至少 12 个代表月；否则覆盖完整较短周期并披露季节性局限 | 制造场址及所有直接支持公用工程 | 扣除非生产及已分表负荷，剩余共用量按有文件依据的因果驱动分配并归一化 | 仪表校准；发票核对；设备运行时间；因子来源和版本；场址能量平衡 |
| `cp_outputs_rework_and_waste` | `ingredient_and_dough_preparation`; `forming_and_baking`; `cooling`; `filling_and_assembly`; `primary_packaging` | 过程输出、内部返工、不合格品和废物去向 | 生产计数、称量单、不合格品日志、返工日志、废物联单 | batch_id; process_id; gross_output_mass; acceptable_output_mass; rework_mass; waste_mass; destination; moisture_or_aw; timestamp | 在各过程转移点测量输出和损失，内部返工与离开前景路线的材料分开 | kg | 每批或每班 | 完整声明数据期 | 所有代表路线产线和废物去向 | 按过程核对投入、合格输出、返工、废物、样品和已记录蒸发 | 校准秤；签字废物记录；质量放行；质量平衡异常调查 |
| `cp_filling_and_assembly` | `filling_and_assembly` | 夹心配方、饼壳投入、夹心分数和组合输出 | 夹心批次表、称量、沉积机设定、检重记录 | filling_batch_id; ingredient_id; ingredient_mass; shell_mass; filling_mass; assembled_mass; unit_count; sample_net_mass; reject_mass | 夹心批次配料与沉积质量和组合饼干输出核对；代表性取样核验夹心分数 | kg; count; fraction | 每夹心批次和产品换产 | 完整声明数据期 | 代表路线内全部声明产品变体 | 由实测夹心和最终产品质量计算夹心分数，并按可销售输出加权 | 秤和检重机校准；批准夹心配方；取样方案；偏差记录 |
| `cp_packaging_material_and_output` | `primary_packaging` | 包装材料、包装废料和参考输出 | 包装物料清单、领用、废料、检重和成品记录 | material_id; material_mass; packs_produced; net_mass_per_pack; packaging_scrap_mass; product_reject_mass; saleable_net_product_mass | 包装领用与可销售包装、废料和余料核对，食品净质量单独确定 | kg; count | 每包装批次 | 完整声明数据期 | 范围内所有初级包装格式 | 材料特定包装质量汇总后除以可销售产品净质量；包装不计入参考质量 | 批准包装规格；检重校准；库存核对；废料去向记录 |
| `cp_cleaning_water_chemicals_and_effluent` | `shared_cleaning_and_utilities` | 清洁用水、化学品、废水和固体残渣 | 水表、化学品领用、清洁日志、废水表或样品、废物记录 | cleaning_event_id; equipment_or_area; water_volume; water_temperature; chemical_product_mass; dilution; effluent_volume; COD_or_other_load; solid_waste_mass; destination | 可行时计量用水和废水，化学品与投加记录核对；共用事件按清洁面积、时长或批次数分配 | kg; m3; concentration; kg load | 每次清洁并按月核对 | 完整声明数据期，含重大卫生事件 | 服务声明路线的设备和区域 | 采用有文件依据的密度换算体积；仅按因果驱动分配共用部分并归一化 | 仪表校准；清洁计划；投加核验；实验室报告；处理发票或联单 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 所有清单量 | 归一化量 = 批次流量 / 可销售饼干净质量；分母不含包装 | 批次流量；`saleable_net_product_mass` | 每 1 kg 净产品的流量 | `environdec-pcr-2025-03`; `iso-14044-2006` |
| `calc_count_to_mass` | 件数产量 | 产品净质量 = 件数 × 代表性平均单件净质量；按产品和批次计算并保留样本变异 | unit_count; sample gross mass; tare mass; sample count | 可销售产品净质量 kg | `iso-14044-2006` |
| `calc_filling_fraction` | 代表产品身份 | 夹心质量分数 = 实测沉积或配方核对夹心质量 / 组合夹心饼干质量 | filling_mass; assembled_mass | 夹心质量分数 | `eu-jrc-fdm-bref-2019` |
| `calc_process_mass_balance` | 各前景过程 | 质量平衡差 = 实测投入 - 合格输出 - 外部废物 - 样品 - 实测转移 - 已记录蒸发水；调查而非强制归零 | 过程投入输出；返工；废物；样品；蒸发基准 | 过程质量平衡差和闭合说明 | `iso-14044-2006`; `eu-jrc-fdm-bref-2019` |
| `calc_shared_energy` | 共用公用工程 | 分配公用工程 = 共用计量量 × 声明因果驱动份额；分配前扣除过程分表量 | 共用表差；过程分表；运行时间和负荷；批次产量 | 各载能体每参考流分配能量 | `us-epa-energy-star-baking-2012`; `ghg-protocol-product-standard-2011` |
| `calc_combustion_releases` | 场内燃料燃烧 | 直接排放 = 计量燃料量 × 声明的载能体和技术特定因子，并按测量或氧化假设修正；各基本流分开报告 | 燃料量；组成；因子身份和值；可用烟气测量 | 每参考流直接基本流质量 | `eu-jrc-fdm-bref-2019` |
| `calc_packaging_mass` | 初级包装 | 每参考流包装质量 = 包装领用 - 退库 - 材料特定废料，再除以可销售饼干净质量，并与物料清单核对 | 包装领用；退库；废料；包装件数；产品净质量 | kg 包装材料/kg 净产品 | `environdec-pcr-2025-03` |
| `calc_rework_netting` | 内部返工 | 保持返工产生与返回毛量可见；内部转移不作为外部投入输出，但保留额外资源和未返工损失 | 返工产生；返工返回；返工资源；返工处置 | 净外部废物和透明内部回路记录 | `ghg-protocol-product-standard-2011` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_reference_identity` | 参考流 | 使用声明的 Sandwich Cookie UUID、Mass 属性 UUID、质量单位组 UUID、kg 单位及全部限定信息；PCR 和前景身份不存储 Tiangong 数据集版本。 | PCR 外保留精确 Tiangong 身份回读；前景元数据与参考流备注 |
| `dq_route_representativeness` | 产品与过程范围 | 证明产品为声明路线生产的常温稳定奶油夹心甜饼干；否则标记 PCR 不是产品特定指导并进行路线评审。 | 产品规格；配方；过程流程图；产线与夹心说明 |
| `dq_primary_data` | 自有或控制的前景过程 | 对每个必需过程以及重要材料、能源、水、废物和直接排放使用原始记录。 | 采集协议；校准记录；核对结果；异常日志 |
| `dq_temporal_coverage` | 前景数据期 | 优先连续 12 个代表月；较短周期应覆盖完整批次并披露季节性、开停机和产品组合局限。 | 带日期原始记录；生产日历；周期覆盖说明 |
| `dq_completeness` | 过程与流覆盖 | 核对必需过程输出和全部重要流；明确区分零、不适用、缺失和估算值。 | 过程图；质量与能量平衡；缺失数据清单 |
| `dq_upstream_quality` | 购入投入与服务 | 上游数据集尽可能匹配配料规格、地理、技术和时间；披露代理和实质数据缺口。 | 数据集引用；供应商规格；代理理由 |
| `dq_uncertainty_and_estimates` | 暂定范围与模型值 | `reasoned_estimate` 与前景值分开；披露不确定性，发布前以评审证据替换或明确接受暂定范围。 | 范围证据类型；评审记录；不确定性说明 |
| `dq_allocation_transparency` | 共用和多输出过程 | 保留分配驱动值、方法、因果理由及可能实质影响结果时的敏感性。 | 仪表与驱动记录；分配计算；敏感性结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | foreground_dataset_conformance | 参考输出应严格为 1 kg 净产品，使用 Sandwich Cookie `80a32a82-0f7d-4112-a92e-5adcc89f1db3`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg；包装质量应排除。 | `iso-14044-2006`; `environdec-pcr-2025-03` |
| `validate_required_qualifiers` | foreground_dataset_conformance | 应声明产品子类、饼壳配方与几何、夹心类型与分数、水分或水分活度、件数-质量基准、包装、返工政策、技术、地理、周期和市场状态。 | `eu-jrc-fdm-bref-2019` |
| `validate_representative_route` | foreground_dataset_conformance | 数据集应证明常温稳定奶油夹心甜饼干路线；实质不同的姜饼、威化、冷冻、冷藏或无夹心路线不符合产品特定要求。 | `eu-jrc-fdm-bref-2019` |
| `validate_process_coverage` | foreground_dataset_conformance | 每个 `required` 过程应有前景记录或可评审的不适用结论；必需材料和能量流不得静默省略。 | `eu-jrc-fdm-bref-2019`; `us-epa-energy-star-baking-2012` |
| `validate_mass_balance` | foreground_dataset_conformance | 配料、面团、饼壳、夹心、包装产品、返工、废物、样品和已记录蒸发应在场址声明容差内核对；异常应调查和披露。 | `iso-14044-2006`; `eu-jrc-fdm-bref-2019` |
| `validate_energy_completeness` | foreground_dataset_conformance | 电力与各热能载体分开报告；烤炉直接燃料、过程能量和共用公用工程应与仪表或采购核对且不重复。 | `us-epa-energy-star-baking-2012`; `eu-jrc-fdm-bref-2019` |
| `validate_losses_and_treatment` | foreground_dataset_conformance | 内部返工、外部食品废物、包装废料、废水及各去向应区分；未声明共产品或回收方法不得给予外部抵扣。 | `ghg-protocol-product-standard-2011`; `eu-jrc-fdm-bref-2019` |
| `validate_allocation` | foreground_dataset_conformance | 首先避免分配；不可避免的物理或后备分配应说明驱动、数值、因果理由及敏感性或局限。 | `ghg-protocol-product-standard-2011`; `iso-14044-2006` |
| `validate_upstream_links` | foreground_dataset_conformance | 每个购入材料、能源、水、包装和处理流应连接上游数据集或明确数据缺口；同类别投入不得静默展开或省略。 | `iso-14044-2006`; `environdec-pcr-2025-03` |
| `validate_provisional_ranges` | foreground_dataset_conformance | 前景值超出筛选范围会触发评审而非自动否决；`reasoned_estimate` 保持暂定，未评审不得成为发布关键证据。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 常温稳定奶油夹心甜饼干的前景制造数据包；评审前为候选方法学 |
| downstream_use | `secondary_dataset`；完成方法学、翻译、UUID 和证据评审后可作 `background_dataset` |
| allowed_use | 门到门制造清单；连接完整上游数据集后的配料至工厂出口生命周期建模；保持声明路线和限定信息的情景与热点分析 |
| excluded_use | 直接作为姜饼、无夹心威化、冷冻或冷藏夹心产品、咸味薄脆饼、蛋糕或面包的产品特定指导；功能性能和下游范围未对齐的比较声明；在 UUID 或关键暂定范围未解决时发布 |
| required_metadata | 规范 PCR id；产品和路线限定；参考 UUID 与单位；配方和夹心分数；产线和烤炉技术；包装配置；场址地理；数据期；产量；分配方法；上游数据集引用；返工和废物去向 |
| required_quality_disclosure | 原始数据覆盖；时间和技术代表性；质量与能量平衡；仪表与秤质量；分配驱动；缺失数据和代理；推理估算；不确定性；偏离代表路线的情况 |
| update_trigger | 配方或夹心分数、饼壳类型、烤炉或夹心技术、场址能源、包装、返工或废物路线、分配方法、参考流身份、来源 PCR 或数据期发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `environdec-pcr-2025-03` | `standard` | International EPD System，PCR 2025:03 Food and beverage products (main PCR)，version 1.0.1，有效注册至 2030-07-14，https://environdec.com/pcr-library/pcr_fbd3e8c6-483c-48f5-d22f-08da0b49f7f5（检索于 2026-08-11） | 食品饮料通用 PCR 语境、声明单位、上游与包装披露、数据集画像 |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre，Best Available Techniques Reference Document for the Food, Drink and Milk Industries，JRC118627，2019，特别是 16.2.1 和 16.8.1 节，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf（检索于 2026-08-11） | 饼干配料与过程分解、奶油夹心二次加工、烤炉能耗筛选、水、废物、排放与监测要求 |
| `us-epa-energy-star-baking-2012` | `official_guidance` | Masanet, E.; Therkelsen, P.; Worrell, E.，Energy Efficiency Improvement and Cost Saving Opportunities for the Baking Industry，LBNL-6112E，U.S. EPA ENERGY STAR 与 Lawrence Berkeley National Laboratory，2012，https://www.energystar.gov/sites/default/files/buildings/tools/Baking_Guide.pdf（检索于 2026-08-11） | 饼干与薄脆饼过程和能量结构、计量重点、共用公用工程、冷却和包装能耗 |
| `ghg-protocol-product-standard-2011` | `standard` | World Resources Institute 与 World Business Council for Sustainable Development，Product Life Cycle Accounting and Reporting Standard，2011，第 9 章，https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf（检索于 2026-08-11） | 过程图报告、原始数据、避免分配及分配层级、一致性、回收与废物处理 |
| `iso-14044-2006` | `standard` | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，ISO 于 2022 年确认继续有效，含 Amd 1:2017 与 Amd 2:2020，https://www.iso.org/standard/38498.html（检索于 2026-08-11） | LCA/LCI 范围、清单完整性、分配、解释、报告与评审框架 |
