---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.spirits-liqueurs-and-other-spirituous-beverages-of-an-alcoholic-strength-by-volume-of-a-33de9cd9
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 酒精度约40%（体积分数）的烈酒、利口酒及其他蒸馏酒

## 1. 范围与适用性

本 PCR 适用于酒精度声明约为 40% vol 的待售烈酒、利口酒及其他蒸馏酒。前景数据包必须且只能声明下列一条路线：（A）发酵醪蒸馏烈酒；或（B）以购入的农业来源中性乙醇配制利口酒。路线 A 包括原料处理与适用时的糖化、发酵、蒸馏、适用时的熟成、调配与降度、过滤和包装。路线 B 包括配料准备与溶糖、适用时的浸渍或香味提取、调配、过滤和包装。不得默认两条路线同时运行。

本 PCR 不包括啤酒、葡萄酒及其他非蒸馏发酵饮料；变性或工业乙醇；不符合所声明约 40% vol 酒精度规格的产品；前景工厂门以外的分销、零售、消费者使用和包装生命末期；以及除通过上游数据集连接之外的农业生产或包装制造。产品特定法律定义和地理标志规范仍是附加合规要求。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.spirits-liqueurs-and-other-spirituous-beverages-of-an-alcoholic-strength-by-volume-of-a-33de9cd9 |
| classification_refs | CPC 3.0：24131 |
| covered_products | 酒精度声明约 40% vol 的待售烈酒、利口酒及其他蒸馏酒 |
| excluded_products | 啤酒、葡萄酒及其他非蒸馏发酵饮料；变性或工业乙醇；不符合所声明约 40% vol 酒精度规格的产品 |
| representative_product | 酒精度约 40% vol 的包装烈酒或利口酒 |
| production_route | 必须且只能声明一条路线：`distilled_from_fermented_mash` 或 `liqueur_from_purchased_neutral_alcohol`；不得默认两者同时适用 |
| market_state | 已过滤、包装、贴标且可销售的液态饮料 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供所声明饮料配方与感官功能的待售烈酒、利口酒或其他蒸馏酒 |
| How much | 1 kg 包装产品 |
| How well | 声明产品身份、配方、法定名称、包装形式及 20 °C 下的酒精度；酒精度约为 40% vol |
| How long or cycle | 在包装工厂门交付的一个生产批次；不指定使用期限 |
| reference_flow_link | 下列参考数量是离开前景包装过程的包装产品质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 酒精度约 40% vol 的包装烈酒、利口酒或其他蒸馏酒 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| 参考单位 | kg |
| 必需限定信息 | 选定路线；法定或商业产品名称；20 °C 下的酒精度；配料配方；农业原料或中性酒精原料身份；熟成状态和时长；过滤技术；一级与二级包装组成；生产地域和时期；共产品处理 |

构建前景数据包时，每项必需限定信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 包装参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部前景交换归一化到 1 kg 待售包装饮料。 |
| `abv_at_20c` | 产品酒精度 | 体积分数酒精度 | % vol | 将酒精度测量或记录为 20 °C 下纯酒精体积与产品总体积之比；保留批次检测或认证规格。 |
| `volume_to_mass` | 以体积记录的液体 | 质量和批次实测密度 | kg | 只有在密度对应相同产品、温度和批次并经测量或记录时才将体积换算为质量；不得默认使用水的密度。 |
| `pure_alcohol_balance` | 发酵、蒸馏、熟成与调配 | 纯酒精体积和饮料质量 | LPA 和 kg | 跟踪进入系统、进入产品与共产品以及损失到空气或废水的酒精；保留测量基准和换算温度。 |
| `residue_state` | 酒糟、酒糟液、蒸馏残液和污泥 | 质量 | kg | 记录湿质量及水分或固形物含量；只有保留实测换算基准时才换算为干物质。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | 前景生产 | 只纳入一条已声明产品路线及其适用的共用后处理工序；除非数据包明确建模两个独立产品，不得合并两条路线。 | `eu-spirit-drinks-regulation-2019`; `eu-fdm-bref-2019` |
| `boundary_foreground_gate` | 制造系统 | 路线 A 从接收农业或糖质原料开始；路线 B 从接收农业来源中性酒精及配方原料开始；均以包装待售产品结束。 | `eu-fdm-bref-2019` |
| `boundary_complete_inventory` | 所有前景过程 | 纳入所有环境相关的材料、能源、水、包装、废物及基本流交换，包括实测损失和处理产物。 | `eu-pef-method-2021` |
| `boundary_upstream_links` | 购入投入 | 为每项购入原料、配料、化学品、燃料、公用工程、木桶、过滤介质和包装组件连接上游数据集；不得递归重建同一产品类别。 | `eu-pef-method-2021` |
| `boundary_downstream_exclusion` | 分销与使用 | 分销、零售、消费者使用和包装生命末期不纳入前景数据包，除非所声明研究将其作为独立下游过程添加。 | `whiskey-lca-ireland-2025` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 路线 A：接收具名农业或糖质原料；路线 B：接收农业来源中性乙醇及具名配方原料 |
| starting_condition_role | 前景制造工厂门；上游生产由链接数据集表示 |
| product_classification_scope | 酒精度约 40% vol 的烈酒、利口酒及其他蒸馏酒；CPC 3.0 代码 24131 仅是分类语境而非 PCR 身份 |
| recursive_input_rule | 购入的同类别烈酒作为投入记录并连接单独识别的上游数据集，不触发其生产过程的递归重建 |
| upstream_dataset_requirement | 所有购入材料、公用工程、燃料和包装均须使用与供应商、地域和时期相符的数据集 |
| disclosure | 声明路线、原料和配方、过程技术、熟成、共产品状态、分配、地域、时期、排除项及所有代理数据集 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_preparation` | 原料处理与糖化 | conditional | 路线 A；糖化仅适用于淀粉原料 | 前景生产 | 已制备可发酵醪 |
| `fermentation` | 酒精发酵 | conditional | 路线 A | 前景生产 | 发酵醪 |
| `distillation` | 蒸馏与热力供应 | conditional | 路线 A | 前景生产 | 新酒或未熟成烈酒 |
| `maturation` | 橡木桶熟成 | conditional | 仅路线 A 且所声明产品需要熟成 | 调质 | 熟成烈酒 |
| `liqueur_preparation` | 中性酒精配料准备与溶糖 | conditional | 路线 B | 前景生产 | 已制备利口酒基液 |
| `maceration_extraction` | 浸渍或香味提取 | conditional | 仅路线 B 且前景场址实施该工序 | 前景生产 | 已增香利口酒基液 |
| `blending_reduction` | 调配与酒精度调整 | required | 选定路线完成后均适用 | 前景生产 | 达到声明酒精度的饮料 |
| `filtration` | 产品过滤 | required | 适用于声明的后处理技术 | 调质 | 已过滤饮料 |
| `packaging` | 灌装、贴标与装箱 | required | 所有产品均适用 | 前景生产 | 包装参考产品 |
| `site_cleaning_treatment` | 清洗与场内废水处理 | required | 所有前景场址均适用 | 辅助生产 | 分配给产品的场址服务 |

### 过程：原料处理与糖化（`raw_material_preparation`）

#### 输入

##### 产品流

###### 麦芽大麦原料（`malted_barley_input`）

记录声明的谷物烈酒配方所接收的麦芽大麦；选定路线 A 配方不含该原料时不适用。

- 选定流：麦芽大麦籽粒
- 流属性/单位：Mass / kg
- 数量规则：按生产批次实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_records`
- 来源：`eu-fdm-bref-2019`

###### 玉米原料（`maize_grain_input`）

记录声明的谷物烈酒配方所接收的玉米籽粒；配方不含该原料时不适用。

- 选定流：玉米籽粒
- 流属性/单位：Mass / kg
- 数量规则：按生产批次实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_records`
- 来源：`eu-fdm-bref-2019`

###### 甘蔗糖蜜原料（`cane_molasses_input`）

当甘蔗糖蜜是声明的可发酵糖质原料时记录。

- 选定流：甘蔗糖蜜
- 流属性/单位：Mass / kg
- 数量规则：按生产批次实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_records`
- 来源：`eu-spirit-drinks-regulation-2019`; `eu-fdm-bref-2019`

###### 葡萄醪原料（`grape_must_input`）

当葡萄醪是声明的可发酵水果原料时记录。

- 选定流：葡萄醪
- 流属性/单位：Mass / kg
- 数量规则：按生产批次实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_records`
- 来源：`eu-fdm-bref-2019`

###### 马铃薯原料（`potato_input`）

当马铃薯是声明的淀粉原料时记录。

- 选定流：马铃薯
- 流属性/单位：Mass / kg
- 数量规则：按生产批次实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_records`
- 来源：`eu-fdm-bref-2019`

###### 糖化用水（`mashing_water_input`）

记录研磨、蒸煮、糖化或制浆时添加的水。

- 选定流：饮用级工艺水
- 流属性/单位：Mass / kg
- 数量规则：计量值或批次配方用水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_records`
- 来源：`eu-fdm-bref-2019`

###### α-淀粉酶（`alpha_amylase_input`）

使用外加液化酶时记录配制的 α-淀粉酶制剂。

- 选定流：α-淀粉酶制剂
- 流属性/单位：Mass / kg
- 数量规则：批次领用或投加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_records`
- 来源：`eu-fdm-bref-2019`

###### 糖化酶（`glucoamylase_input`）

使用外加糖化酶时记录配制的糖化酶制剂。

- 选定流：糖化酶制剂
- 流属性/单位：Mass / kg
- 数量规则：批次领用或投加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_records`
- 来源：`eu-fdm-bref-2019`

#### 输出

##### 产品流

###### 已制备可发酵醪（`prepared_mash_output`）

记录转入发酵过程的湿质量。

- 选定流：已制备可发酵醪
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或以批次密度将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_records`
- 来源：`eu-fdm-bref-2019`

##### 废物流

###### 酒糟（`spent_grain_output`）

无论作为饲料销售、能源回收、处理或弃置，均记录分离的酒糟；不得因其具有价值而省略。

- 选定流：湿酒糟
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量并记录水分或干物质含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_records`
- 来源：`eu-fdm-bref-2019`; `whiskey-lca-ireland-2025`

### 过程：酒精发酵（`fermentation`）

#### 输入

##### 产品流

###### 已制备发酵醪（`fermentation_mash_input`）

记录进入发酵罐的已制备醪液。

- 选定流：已制备可发酵醪
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或以批次密度将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_records`
- 来源：`eu-fdm-bref-2019`

###### 发酵酵母（`yeast_input`）

记录投加到醪液中的声明酵母制剂。

- 选定流：酿酒酵母制剂
- 流属性/单位：Mass / kg
- 数量规则：按发酵批次领用或投加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_records`
- 来源：`eu-spirit-drinks-regulation-2019`; `eu-fdm-bref-2019`

###### 酵母营养盐（`yeast_nutrient_input`）

只有磷酸氢二铵作为发酵营养盐使用时才记录。

- 选定流：磷酸氢二铵
- 流属性/单位：Mass / kg
- 数量规则：按发酵批次投加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_records`
- 来源：

###### 发酵用水（`fermentation_water_input`）

记录发酵期间直接添加的饮用级工艺水。

- 选定流：饮用级工艺水
- 流属性/单位：Mass / kg
- 数量规则：计量值或配方用水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_records`
- 来源：`eu-fdm-bref-2019`

###### 发酵用电（`fermentation_electricity_input`）

记录搅拌、泵送、控制及发酵设备用电。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或按文件化方法从场址总表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_records`
- 来源：`eu-fdm-bref-2019`

###### 发酵冷却水（`fermentation_cooling_water_input`）

记录跨越过程边界的补充或直流水；总投入中不计内部循环水。

- 选定流：冷却水
- 流属性/单位：Mass / kg
- 数量规则：计量的补充水或直流水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_records`
- 来源：`eu-fdm-bref-2019`

#### 输出

##### 产品流

###### 发酵醪（`fermented_mash_output`）

记录转入蒸馏的发酵醪。

- 选定流：蒸馏酒发酵醪
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或以批次密度将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_records`
- 来源：`eu-fdm-bref-2019`

##### 废物流

###### 废酵母（`spent_yeast_output`）

记录作为饲料、回收料或废物离开过程的分离酵母浆。

- 选定流：废酵母浆
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量并记录固形物含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_records`
- 来源：`eu-fdm-bref-2019`

##### 基本流

###### 发酵二氧化碳（`fermentation_co2_output`）

记录排放到空气的二氧化碳；任何捕集量另作共产品记录。

- 选定流：排放到空气的生物源二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或由采集的糖、产品酒精和捕集二氧化碳进行碳平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fermentation_records`
- 来源：`eu-fdm-bref-2019`

### 过程：蒸馏与热力供应（`distillation`）

#### 输入

##### 产品流

###### 发酵醪进料（`distillation_mash_input`）

记录加入蒸馏器的发酵醪。

- 选定流：蒸馏酒发酵醪
- 流属性/单位：Mass / kg
- 数量规则：实测投料质量，或以批次密度将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每蒸馏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`

###### 蒸馏蒸汽（`distillation_steam_input`）

记录输送到蒸馏器的购入或场内产生蒸汽，不与锅炉燃料合并。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量的蒸汽能量，或以实测压力和焓值将蒸汽质量换算为能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`; `whiskey-lca-ireland-2025`

###### 蒸馏用电（`distillation_electricity_input`）

记录泵、控制、冷凝器和蒸馏设备用电。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或按文件化方法从场址总表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`; `whiskey-lca-ireland-2025`

###### 蒸馏冷却水（`distillation_cooling_water_input`）

记录用于冷凝酒精蒸气的补充水或直流水。

- 选定流：冷却水
- 流属性/单位：Mass / kg
- 数量规则：计量的补充水或直流水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`

###### 天然气燃料（`natural_gas_input`）

使用天然气产生蒸馏蒸汽或直接供热时记录。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：计量燃气体积并以供应商低位热值换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`; `whiskey-lca-ireland-2025`

###### 燃料油（`fuel_oil_input`）

只有蒸馏供热实际使用燃料油时才记录，不与天然气合并。

- 选定流：重质燃料油
- 流属性/单位：Mass / kg
- 数量规则：计量或采购质量并与罐存核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`

###### 生物质燃料（`biomass_pellet_input`）

只有蒸馏供热实际使用木颗粒时才记录，并保留水分和低位热值。

- 选定流：木颗粒
- 流属性/单位：Mass / kg
- 数量规则：由交付与库存记录实测消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`

#### 输出

##### 产品流

###### 新酒（`new_make_spirit_output`）

记录熟成或调配前保留馏分的质量和 LPA。

- 选定流：新蒸馏烈酒
- 流属性/单位：Mass / kg
- 数量规则：实测保留馏分质量及 20 °C 下的酒精度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每蒸馏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-spirit-drinks-regulation-2019`; `eu-fdm-bref-2019`

###### 杂醇油共产品（`fusel_oil_output`）

只有杂醇油被回收并作为有用产品离开系统时，才记录为共产品。

- 选定流：杂醇油
- 流属性/单位：Mass / kg
- 数量规则：按批次实测回收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`

##### 废物流

###### 酒糟液（`pot_ale_output`）

将酒糟液与其他液体残余物分开记录，并声明其作为饲料、回收料或废物的状态。

- 选定流：酒糟液
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量，或以密度和固形物含量将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`; `whiskey-lca-ireland-2025`; `scottish-whisky-byproducts-lca-2018`

###### 蒸馏残液（`spent_wash_output`）

将塔式蒸馏或糖蜜蒸馏产生的蒸馏残液与酒糟液分开记录。

- 选定流：蒸馏酒生产残液
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量，或以密度和固形物含量将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`

##### 基本流

###### 燃烧产生的化石二氧化碳（`combustion_co2_fossil_output`）

依据每种已采集化石燃料记录和文件化燃料因子计算化石二氧化碳。

- 选定流：排放到空气的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：由实测天然气和燃料油用量进行燃料特定计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`

###### 燃烧产生的生物源二氧化碳（`combustion_co2_biogenic_output`）

依据木颗粒用量计算生物源二氧化碳，并与化石二氧化碳分开记录。

- 选定流：排放到空气的生物源二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：由实测生物质用量进行燃料特定计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`

###### 燃烧氮氧化物（`nitrogen_oxides_output`）

对每种燃料和燃烧装置分别记录烟气实测值或计算氮氧化物。

- 选定流：排放到空气的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：烟气测量，或将燃料特定因子应用于实测燃料用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`

###### 燃烧二氧化硫（`sulfur_dioxide_output`）

对含硫燃料记录二氧化硫；只有经燃料组成或监测核实时才可记为零。

- 选定流：排放到空气的二氧化硫
- 流属性/单位：Mass / kg
- 数量规则：烟气测量，或由实测燃料用量进行硫平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`

###### 燃烧颗粒物（`particulate_matter_output`）

记录适用燃烧装置的颗粒物，尤其是生物质或燃料油燃烧。

- 选定流：排放到空气的颗粒物
- 流属性/单位：Mass / kg
- 数量规则：烟气测量，或将技术特定因子应用于实测燃料用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`

###### 蒸馏乙醇排放（`distillation_ethanol_air_output`）

记录蒸馏和酒液处理过程中排放到空气的未冷凝乙醇。

- 选定流：排放到空气的乙醇
- 流属性/单位：Mass / kg
- 数量规则：实测排放或纯酒精质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_distillation_records`
- 来源：`eu-fdm-bref-2019`
### 过程：橡木桶熟成（`maturation`）

#### 输入

##### 产品流

###### 熟成用新酒（`maturation_spirit_input`）

记录装桶酒液的质量及装桶时 LPA。

- 选定流：新蒸馏烈酒
- 流属性/单位：Mass / kg
- 数量规则：实测装桶质量及 20 °C 下的酒精度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每熟成批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maturation_records`
- 来源：`eu-spirit-drinks-regulation-2019`; `whiskey-lca-ireland-2025`

###### 橡木桶（`oak_cask_input`）

记录每只橡木桶或分配的木桶使用量，并包括新/旧状态、容量、此前用途及周转次数。

- 选定流：橡木桶
- 流属性/单位：Mass / kg
- 数量规则：按有记录的使用次数分配木桶质量；不重复使用时采用一次使用质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_maturation_records`
- 来源：`eu-spirit-drinks-regulation-2019`; `whiskey-lca-ireland-2025`

###### 熟成用电（`maturation_electricity_input`）

记录按声明熟成期分配的仓库用电。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：以木桶占用体积与时间的乘积对仓库计量电力进行分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_maturation_records`
- 来源：`whiskey-lca-ireland-2025`

#### 输出

##### 产品流

###### 熟成烈酒（`matured_spirit_output`）

记录出桶熟成烈酒的质量、LPA 与熟成时长。

- 选定流：熟成蒸馏烈酒
- 流属性/单位：Mass / kg
- 数量规则：实测出桶质量及 20 °C 下的酒精度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每熟成批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maturation_records`
- 来源：`eu-spirit-drinks-regulation-2019`; `whiskey-lca-ireland-2025`

##### 基本流

###### 熟成乙醇排放（`maturation_ethanol_air_output`）

依据装桶与出桶酒精之差计算排放到空气的乙醇，并校正转移量和取样量。

- 选定流：排放到空气的乙醇
- 流属性/单位：Mass / kg
- 数量规则：木桶或批次纯酒精质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_maturation_records`
- 来源：`eu-fdm-bref-2019`

### 过程：中性酒精配料准备与溶糖（`liqueur_preparation`）

#### 输入

##### 产品流

###### 农业来源中性酒精（`neutral_alcohol_input`）

按质量和 LPA 记录购入的农业来源中性乙醇；路线 B 必须记录此项。

- 选定流：农业来源中性乙醇
- 流属性/单位：Mass / kg
- 数量规则：接收质量及经认证的 20 °C 酒精度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liqueur_preparation_records`
- 来源：`eu-spirit-drinks-regulation-2019`

###### 蔗糖配料（`sucrose_input`）

声明配方含蔗糖时，记录用于甜化利口酒的蔗糖。

- 选定流：精制蔗糖
- 流属性/单位：Mass / kg
- 数量规则：领用质量并与批次配方核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liqueur_preparation_records`
- 来源：`eu-spirit-drinks-regulation-2019`

###### 蜂蜜配料（`honey_input`）

使用蜂蜜作为甜味配料时单独记录。

- 选定流：蜂蜜
- 流属性/单位：Mass / kg
- 数量规则：领用质量并与批次配方核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liqueur_preparation_records`
- 来源：`eu-spirit-drinks-regulation-2019`

###### 香草香味提取物（`vanilla_extract_input`）

香草提取物是声明香味配料时单独记录。

- 选定流：香草提取物
- 流属性/单位：Mass / kg
- 数量规则：领用质量并与批次配方核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liqueur_preparation_records`
- 来源：`eu-spirit-drinks-regulation-2019`

###### 焦糖色（`caramel_colour_input`）

使用普通焦糖色时单独记录。

- 选定流：普通焦糖色 E150a
- 流属性/单位：Mass / kg
- 数量规则：投加质量并与批次配方核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liqueur_preparation_records`
- 来源：`eu-spirit-drinks-regulation-2019`

###### 利口酒配制用水（`liqueur_water_input`）

记录溶糖及配制利口酒基液所用饮用级工艺水。

- 选定流：饮用级工艺水
- 流属性/单位：Mass / kg
- 数量规则：计量值或配方用水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liqueur_preparation_records`
- 来源：`eu-spirit-drinks-regulation-2019`; `eu-fdm-bref-2019`

###### 利口酒配制用电（`liqueur_electricity_input`）

记录搅拌、泵送和控制用电。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或按文件化方法从场址总表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liqueur_preparation_records`
- 来源：`eu-fdm-bref-2019`

###### 利口酒配制蒸汽（`liqueur_steam_input`）

加热溶糖时记录蒸汽。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量能量，或以实测压力和焓值将蒸汽质量换算为能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liqueur_preparation_records`
- 来源：`eu-fdm-bref-2019`

#### 输出

##### 产品流

###### 已制备利口酒基液（`prepared_liqueur_base_output`）

记录转入浸渍或调配的混合溶解基液。

- 选定流：已制备利口酒基液
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量及 20 °C 下的酒精度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每配制批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liqueur_preparation_records`
- 来源：`eu-spirit-drinks-regulation-2019`

### 过程：浸渍或香味提取（`maceration_extraction`）

#### 输入

##### 产品流

###### 提取用利口酒基液（`maceration_base_input`）

记录进入浸渍或提取过程的已制备基液。

- 选定流：已制备利口酒基液
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每提取批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maceration_records`
- 来源：`eu-spirit-drinks-regulation-2019`

###### 酸樱桃配料（`sour_cherry_input`）

声明产品浸渍酸樱桃时单独记录。

- 选定流：酸樱桃
- 流属性/单位：Mass / kg
- 数量规则：投入提取批次的验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maceration_records`
- 来源：`eu-spirit-drinks-regulation-2019`

###### 橙皮配料（`orange_peel_input`）

声明产品浸渍或提取橙皮时单独记录。

- 选定流：橙皮
- 流属性/单位：Mass / kg
- 数量规则：投入提取批次的验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maceration_records`
- 来源：`eu-spirit-drinks-regulation-2019`

###### 杜松子配料（`juniper_berry_input`）

以杜松子进行浸渍、浸泡或增香蒸馏时单独记录。

- 选定流：杜松子
- 流属性/单位：Mass / kg
- 数量规则：投入提取批次的验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maceration_records`
- 来源：`eu-spirit-drinks-regulation-2019`

#### 输出

##### 产品流

###### 已增香利口酒基液（`flavoured_liqueur_base_output`）

记录转入调配的澄清提取液或浸渍基液。

- 选定流：已增香利口酒基液
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量及 20 °C 下的酒精度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每提取批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maceration_records`
- 来源：`eu-spirit-drinks-regulation-2019`

##### 废物流

###### 废酸樱桃（`spent_sour_cherry_output`）

使用酸樱桃时单独记录提取后的固体。

- 选定流：废酸樱桃固体
- 流属性/单位：Mass / kg
- 数量规则：实测沥干湿质量并记录水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maceration_records`
- 来源：

###### 废橙皮（`spent_orange_peel_output`）

使用橙皮时单独记录提取后的固体。

- 选定流：废橙皮
- 流属性/单位：Mass / kg
- 数量规则：实测沥干湿质量并记录水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maceration_records`
- 来源：

###### 废杜松子（`spent_juniper_output`）

使用杜松子时单独记录提取后的固体。

- 选定流：废杜松子
- 流属性/单位：Mass / kg
- 数量规则：实测沥干湿质量并记录水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maceration_records`
- 来源：

### 过程：调配与酒精度调整（`blending_reduction`）

#### 输入

##### 产品流

###### 路线 A 烈酒投入（`route_a_spirit_input`）

记录进入调配的路线 A 熟成或未熟成烈酒；路线 B 不适用。

- 选定流：调配用蒸馏烈酒
- 流属性/单位：Mass / kg
- 数量规则：实测质量及 20 °C 下的酒精度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每调配批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_records`
- 来源：`eu-spirit-drinks-regulation-2019`

###### 路线 B 利口酒基液投入（`route_b_liqueur_base_input`）

记录进入调配的路线 B 已制备或已增香基液；路线 A 不适用。

- 选定流：调配用利口酒基液
- 流属性/单位：Mass / kg
- 数量规则：实测质量及 20 °C 下的酒精度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每调配批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_records`
- 来源：`eu-spirit-drinks-regulation-2019`

###### 降度用水（`reduction_water_input`）

记录为达到声明灌装酒精度而添加的饮用级工艺水。

- 选定流：饮用级工艺水
- 流属性/单位：Mass / kg
- 数量规则：计量值或配方质量，并与酒精度和产品质量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_records`
- 来源：`eu-spirit-drinks-regulation-2019`; `eu-fdm-bref-2019`

###### 调配蔗糖（`blending_sucrose_input`）

仅在允许且实际使用时，单独记录后处理阶段添加的蔗糖。

- 选定流：精制蔗糖
- 流属性/单位：Mass / kg
- 数量规则：投加质量并与配方核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_records`
- 来源：`eu-spirit-drinks-regulation-2019`

###### 调配焦糖色（`blending_caramel_input`）

仅在允许且实际使用时，单独记录后处理阶段添加的普通焦糖色。

- 选定流：普通焦糖色 E150a
- 流属性/单位：Mass / kg
- 数量规则：投加质量并与配方核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_records`
- 来源：`eu-spirit-drinks-regulation-2019`

###### 调配用电（`blending_electricity_input`）

记录罐体、搅拌、泵送和控制用电。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或按文件化方法从场址总表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_records`
- 来源：`eu-fdm-bref-2019`

#### 输出

##### 产品流

###### 达到声明酒精度的饮料（`blended_beverage_output`）

记录转入过滤的调配饮料质量和认证酒精度。

- 选定流：酒精度约 40% vol 的调配蒸馏酒饮料
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量及 20 °C 下的酒精度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每调配批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_records`
- 来源：`eu-spirit-drinks-regulation-2019`

### 过程：产品过滤（`filtration`）

#### 输入

##### 产品流

###### 过滤前饮料（`unfiltered_beverage_input`）

记录进入所声明过滤技术的调配饮料。

- 选定流：酒精度约 40% vol 的调配蒸馏酒饮料
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每过滤批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filtration_records`
- 来源：

###### 硅藻土助滤剂（`diatomaceous_earth_input`）

使用硅藻土助滤时单独记录。

- 选定流：硅藻土
- 流属性/单位：Mass / kg
- 数量规则：按过滤批次领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filtration_records`
- 来源：

###### 活性炭过滤介质（`activated_carbon_input`）

使用活性炭时单独记录。

- 选定流：活性炭
- 流属性/单位：Mass / kg
- 数量规则：按过滤批次领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filtration_records`
- 来源：

###### 纤维素过滤介质（`cellulose_filter_input`）

使用纤维素滤板或滤材时单独记录。

- 选定流：纤维素过滤介质
- 流属性/单位：Mass / kg
- 数量规则：按过滤批次消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filtration_records`
- 来源：

###### 过滤用电（`filtration_electricity_input`）

记录泵、冷却机和过滤设备用电。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或按文件化方法从场址总表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filtration_records`
- 来源：`eu-fdm-bref-2019`

###### 氨制冷剂补充量（`ammonia_refrigerant_input`）

当氨制冷系统服务于冷冻过滤或产品冷却时，单独记录购入的补充氨；未使用该制冷剂时省略本行。

- 选定流：无水氨制冷剂
- 流属性/单位：Mass / kg
- 数量规则：分配至所声明过滤和冷却负荷的购入或充注补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filtration_records`
- 来源：`eu-fdm-bref-2019`

###### HFC-134a 制冷剂补充量（`hfc134a_refrigerant_input`）

当 HFC-134a 制冷系统服务于冷冻过滤或产品冷却时，单独记录购入的 HFC-134a 补充量；未使用该制冷剂时省略本行。

- 选定流：1,1,1,2-四氟乙烷制冷剂
- 流属性/单位：Mass / kg
- 数量规则：分配至所声明过滤和冷却负荷的购入或充注补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filtration_records`
- 来源：`eu-fdm-bref-2019`

#### 输出

##### 产品流

###### 已过滤饮料（`filtered_beverage_output`）

记录转入包装的已过滤饮料。

- 选定流：酒精度约 40% vol 的已过滤蒸馏酒饮料
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量及 20 °C 下的酒精度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每过滤批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filtration_records`
- 来源：

##### 废物流

###### 废硅藻土（`spent_diatomaceous_earth_output`）

将夹带产品的废硅藻土与其他过滤废物分开记录。

- 选定流：废硅藻土
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量并记录夹带液体含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filtration_records`
- 来源：

###### 废活性炭（`spent_activated_carbon_output`）

将废活性炭与其他过滤废物分开记录。

- 选定流：废活性炭
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量并记录夹带液体含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filtration_records`
- 来源：

###### 废纤维素过滤介质（`spent_cellulose_filter_output`）

将废纤维素介质与其他过滤废物分开记录。

- 选定流：废纤维素过滤介质
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量并记录夹带液体含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filtration_records`
- 来源：

##### 基本流

###### 排放至大气的氨制冷剂（`ammonia_refrigerant_air_output`）

对适用的氨制冷系统，将排放至大气的氨泄漏量与制冷剂补充量及其他大气排放分别记录。

- 选定流：氨，排放至大气
- 流属性/单位：Mass / kg
- 数量规则：实测泄漏量，或采用文件化的制冷剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_filtration_records`
- 来源：`eu-fdm-bref-2019`

###### 排放至大气的 HFC-134a 制冷剂（`hfc134a_refrigerant_air_output`）

对适用的 HFC-134a 制冷系统，将排放至大气的 HFC-134a 泄漏量与制冷剂补充量及其他大气排放分别记录。

- 选定流：1,1,1,2-四氟乙烷，排放至大气
- 流属性/单位：Mass / kg
- 数量规则：实测泄漏量，或采用文件化的制冷剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_filtration_records`
- 来源：`eu-fdm-bref-2019`

### 过程：灌装、贴标与装箱（`packaging`）

#### 输入

##### 产品流

###### 灌装用已过滤饮料（`packaging_beverage_input`）

记录进入灌装机的已过滤饮料。

- 选定流：酒精度约 40% vol 的已过滤蒸馏酒饮料
- 流属性/单位：Mass / kg
- 数量规则：实测灌装机进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 玻璃瓶（`glass_bottle_input`）

按接收质量记录空玻璃瓶并包括破损量。

- 选定流：玻璃瓶
- 流属性/单位：Mass / kg
- 数量规则：领用瓶数乘以核实的单瓶质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 铝制瓶盖（`aluminium_closure_input`）

使用铝制瓶盖时单独记录。

- 选定流：铝制瓶盖
- 流属性/单位：Mass / kg
- 数量规则：领用数量乘以核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 塑料瓶盖（`plastic_closure_input`）

使用塑料瓶盖时单独记录，不与铝制瓶盖合并。

- 选定流：聚丙烯瓶盖
- 流属性/单位：Mass / kg
- 数量规则：领用数量乘以核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 纸标签（`paper_label_input`）

纸标签与纸箱分开记录。

- 选定流：涂布纸标签
- 流属性/单位：Mass / kg
- 数量规则：领用数量乘以核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 瓦楞纸箱（`corrugated_carton_input`）

运输用瓦楞纸箱与标签分开记录。

- 选定流：瓦楞纸板箱
- 流属性/单位：Mass / kg
- 数量规则：领用数量乘以核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 聚乙烯缠绕膜（`polyethylene_film_input`）

托盘化使用缠绕膜时单独记录。

- 选定流：线性低密度聚乙烯缠绕膜
- 流属性/单位：Mass / kg
- 数量规则：领用卷质量减去退回卷和卷芯质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 木托盘（`wooden_pallet_input`）

记录分配的托盘使用量，包括重复使用次数和损耗。

- 选定流：木托盘
- 流属性/单位：Mass / kg
- 数量规则：按有记录的使用次数分配托盘质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 包装用电（`packaging_electricity_input`）

记录灌装、封盖、贴标、输送和装箱用电。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：生产线电表计量，或按运行时间进行文件化分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-method-2021`

#### 输出

##### 产品流

###### 包装参考产品（`packaged_product_output`）

记录包装工厂门的合格包装产品。

- 选定流：酒精度约 40% vol 的包装烈酒、利口酒或其他蒸馏酒
- 流属性/单位：Mass / kg
- 数量规则：合格包装产出的固定参考数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`

##### 废物流

###### 不合格饮料（`off_spec_spirit_output`）

单独记录不合格饮料，并声明返工、回收或弃置去向。

- 选定流：不合格蒸馏酒饮料
- 流属性/单位：Mass / kg
- 数量规则：实测质量并记录去向和回收状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 废玻璃（`waste_glass_output`）

单独记录破损和报废玻璃。

- 选定流：废包装玻璃
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量，或用瓶数和单瓶质量核算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 废铝（`waste_aluminium_output`）

单独记录报废铝制瓶盖。

- 选定流：废铝包装
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量，或以数量和单件质量核算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 废聚乙烯薄膜（`waste_plastic_output`）

将报废的聚乙烯缠绕膜边角料与瓶盖废物分开记录。

- 选定流：废聚乙烯包装
- 流属性/单位：Mass / kg
- 数量规则：实测聚乙烯废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 废聚丙烯瓶盖（`waste_polypropylene_closure_output`）

将报废聚丙烯瓶盖与聚乙烯薄膜及其他聚合物分开记录。

- 选定流：废聚丙烯包装
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量，或用瓶盖数量和单件质量核算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 废纸标签（`waste_paper_label_output`）

将报废涂布纸标签与瓦楞纸箱分开记录。

- 选定流：废涂布纸标签
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量，或用标签数量和单件质量核算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 废纸板（`waste_paperboard_output`）

将报废瓦楞纸箱与纸标签分开记录。

- 选定流：废瓦楞纸板
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 废木材（`waste_wood_output`）

将退出使用的托盘作为废木包装记录，与可重复使用托盘库存分开。

- 选定流：废木包装
- 流属性/单位：Mass / kg
- 数量规则：实测报废托盘质量并按产品产量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

### 过程：清洗与场内废水处理（`site_cleaning_treatment`）

#### 输入

##### 产品流

###### 清洗用水（`cleaning_water_input`）

记录清洗和消毒用水，包括原位清洗补充水。

- 选定流：饮用级工艺水
- 流属性/单位：Mass / kg
- 数量规则：计量的清洗水质量并分配到产品批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_utility_waste_records`
- 来源：`eu-fdm-bref-2019`

###### 清洗用电（`cleaning_electricity_input`）

记录原位清洗泵和废水处理用电。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或按文件化方法从场址总表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_utility_waste_records`
- 来源：`eu-fdm-bref-2019`

###### 清洗蒸汽（`cleaning_steam_input`）

将清洗液加热蒸汽与蒸馏蒸汽分开记录。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量能量，或以压力和焓值将蒸汽质量换算为能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_utility_waste_records`
- 来源：`eu-fdm-bref-2019`

###### 氢氧化钠清洗剂（`sodium_hydroxide_input`）

记录碱性清洗所用氢氧化钠的活性物质量。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：溶液质量乘以供应商活性浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_site_utility_waste_records`
- 来源：`eu-fdm-bref-2019`

###### 硝酸清洗剂（`nitric_acid_input`）

记录酸性清洗所用硝酸的活性物质量。

- 选定流：硝酸
- 流属性/单位：Mass / kg
- 数量规则：溶液质量乘以供应商活性浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_site_utility_waste_records`
- 来源：`eu-fdm-bref-2019`

###### 过氧乙酸消毒剂（`peracetic_acid_input`）

记录消毒所用过氧乙酸的活性物质量。

- 选定流：过氧乙酸
- 流属性/单位：Mass / kg
- 数量规则：溶液质量乘以供应商活性浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_site_utility_waste_records`
- 来源：`eu-fdm-bref-2019`

#### 输出

##### 废物流

###### 工艺废水（`wastewater_output`）

记录内部回用后的综合排放工艺废水，并在原始记录中保留各贡献过程。

- 选定流：蒸馏酒生产废水
- 流属性/单位：Mass / kg
- 数量规则：实测排放质量，或以密度将体积换算为质量，并保留 COD、BOD、悬浮固体、pH 和酒精浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_utility_waste_records`
- 来源：`eu-fdm-bref-2019`

###### 废水处理污泥（`wastewater_sludge_output`）

记录脱水处理污泥的湿质量和干固体含量。

- 选定流：废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量和干固体比例，并按处理的产品污染负荷分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_site_utility_waste_records`
- 来源：`eu-fdm-bref-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用过程和公用工程 | 首先通过分表计量并细分路线、过程和产品特定记录来避免分配；只有明确附加功能和报告范围时才可采用系统扩展。 | `eu-pef-method-2021` |
| `allocation_physical_second` | 不可分割的共用负荷 | 无法细分或系统扩展时，采用能因果表示共用服务的文件化物理关系，如过程时间、交付热量或木桶占用体积与时间的乘积。 | `eu-pef-method-2021` |
| `allocation_other_last` | 其余多功能过程 | 只有说明细分、系统扩展和物理分配均不可行后，才使用经济分配等其他关系；保留价格、时期、地域和敏感性。 | `eu-pef-method-2021` |
| `allocation_distillery_coproducts` | 酒糟、酒糟液、蒸馏残液、捕集二氧化碳和杂醇油 | 选择废物或共产品状态前逐项记录产出。不得默认使用避免负荷。声明去向，并对上游和前景负荷一致应用所声明的分配方法。 | `eu-fdm-bref-2019`; `whiskey-lca-ireland-2025`; `scottish-whisky-byproducts-lca-2018` |
| `allocation_rework` | 不合格饮料 | 不合格饮料在系统内返工时，其负荷保留在产品系统；外送回收或处置在材料离开前景边界处建模。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_material_records` | `raw_material_preparation` | 具名原料、水、酶、已制备醪和酒糟 | 地磅单、批次单、仪表和实验室记录 | 批次号；材料身份；验收质量；用水；酶剂量；醪液转移量；酒糟湿质量；水分 | 按批次核对接收、领用、转移和残余物 | kg | 每批 | 代表性连续 12 个月并覆盖全部季节性生产 | 所有纳入的原料处理线 | 按产品批次汇总投入产出后归一化到包装产出 | 经校准秤/表；供应商身份；水分方法；核对记录 |
| `cp_fermentation_records` | `fermentation` | 醪、酵母、营养盐、水、电、冷却、发酵醪、废酵母和二氧化碳 | 批次、仪表和实验室记录 | 发酵罐；投料质量；各剂量；公用工程；酒精度；转移质量；捕集 CO2；酵母残余物 | 采集每个发酵批次并核对碳和酒精 | kg; kWh; % vol | 每批 | 代表性连续 12 个月 | 所有纳入的发酵罐 | 只汇总分配给声明产品的批次 | 校准；酒精度方法；批次完整性；碳平衡 |
| `cp_distillation_records` | `distillation` | 醪、蒸汽、电、冷却水、每种燃料、烈酒、残余物、共产品和空气排放 | 蒸馏日志、仪表、罐存和监测记录 | 投料；保留馏分；酒精度；蒸汽；电；冷却水；分燃料用量；残余物；烟气数据 | 采集每次蒸馏并核对质量和纯酒精 | kg; MJ; kWh; LPA | 每次；连续仪表按月 | 代表性连续 12 个月 | 服务于产品的所有蒸馏器和热力设备 | 优先分表；否则用文件化因果驱动量分配 | 仪表校准；燃料证书；酒精度检测；监测方法；平衡闭合 |
| `cp_maturation_records` | `maturation` | 木桶、酒液库存、电和乙醇损失 | 木桶台账、仓库电表和盘点 | 木桶号；质量；此前用途；装/出桶日期；装/出桶质量和酒精度；用电 | 从装桶到出桶跟踪每只木桶或均质熟成批次 | kg; LPA; kWh; day | 每次木桶移动；月度电表 | 完整声明熟成期 | 所有存放该产品的仓库 | 按木桶占用体积与时间的乘积分配仓库服务 | 木桶可追溯；盘点；电表校准；损失核对 |
| `cp_liqueur_preparation_records` | `liqueur_preparation` | 中性酒精、每项配料、水、电、蒸汽和已制备基液 | 接收证书、配方、投料和仪表记录 | 批次号；酒精质量及酒精度；各配料质量；水；公用工程；转移质量 | 将认证接收量和实际投料量核对至已制备基液 | kg; LPA; kWh; MJ | 每批 | 代表性连续 12 个月 | 所有配制容器 | 只汇总声明配方的批次 | 供应商证书；校准投料；批准配方；酒精度检测 |
| `cp_maceration_records` | `maceration_extraction` | 基液、每项植物配料、已增香基液和各废植物料 | 批次和称量记录 | 批次号；基液质量；植物身份和质量；时长；产出质量；废植物湿质量和水分 | 跟踪每个提取批次并分开保留各植物记录 | kg; day | 每批 | 代表性连续 12 个月 | 所有提取容器 | 将声明产品批次归一化到包装产出 | 材料身份；经校准秤；批次核对 |
| `cp_blending_records` | `blending_reduction` | 路线特定基液、降度水、后处理配料、电和调配饮料 | 批次、配方、仪表和实验室记录 | 路线；各投入质量和酒精度；水；添加物；电；产出质量和酒精度 | 按调配批次核对质量和纯酒精 | kg; LPA; kWh | 每批 | 代表性连续 12 个月 | 所有调配罐 | 只汇总声明产品的合格批次 | 批准配方；20 °C 酒精度检测；经校准仪表；平衡闭合 |
| `cp_filtration_records` | `filtration` | 饮料、每种过滤介质、电、已过滤饮料和各废介质 | 领用、仪表、转移和废物记录 | 技术；投入/产出质量；各介质质量；电；废介质湿质量 | 采集每次过滤并分开保留各介质 | kg; kWh | 每次 | 代表性连续 12 个月 | 服务于产品的所有过滤器 | 核对投入、产出、夹带产品和废物 | 秤表校准；废物联单；批次完整性 |
| `cp_packaging_records` | `packaging` | 饮料、每项包装组件、电、包装产出、不合格品和各包装废物 | 物料清单、线计数、单件质量、电表和废物记录 | SKU；灌装质量；组件数量和单件质量；电；合格件数；不合格质量；分材料废物 | 核对领用组件和饮料与合格产出及不合格品 | kg; kWh; item | 每包装批次 | 代表性连续 12 个月 | 该 SKU 的所有包装线 | 用核实单件质量和数量计算材料质量；按周转次数分配托盘 | 批准物料清单；检重秤；单件质量抽样；废物联单 |
| `cp_site_utility_waste_records` | `site_cleaning_treatment` | 清洗水、电、蒸汽、每种化学品、废水和污泥 | CIP 日志、仪表、化学品领用、排放和处理记录 | 回路；水；蒸汽；电；溶液质量及浓度；排放量；COD/BOD/TSS/pH/酒精；污泥湿质量和干质量 | 计量每个清洗回路及处理产出并保留来源过程标签 | kg; kWh; MJ | 每次清洗；连续排水用混合样 | 代表性连续 12 个月 | 所有纳入的前景过程和处理设施 | 优先分表；否则按清洗循环或实测污染负荷分配 | 校准；化学品证书；实验室 QA；排放和污泥记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项交换 | 归一化交换量 = 分配给合格产品的交换量 / 合格包装产品质量 | 已分配交换量；包装产品质量 | 每 1 kg 参考产品的交换量 | `mass-balance-identity` |
| `calc_abv_lpa` | 酒精平衡 | 纯酒精体积 = 20 °C 下饮料体积 × 酒精度分数；质量与体积换算时保留密度 | 体积；20 °C 酒精度；需要时的密度 | LPA 和酒精平衡字段 | `eu-spirit-drinks-regulation-2019` |
| `calc_route_exclusivity` | 过程纳入 | 必须且只能选择一条路线；不得将路线 A 和路线 B 的过程记录归一化到同一个参考产品 | 路线声明；process_id | 路线合规结果 | `eu-spirit-drinks-regulation-2019` |
| `calc_mass_balance` | 每个过程与批次 | 投入质量 = 产品产出 + 共产品产出 + 废物产出 + 量化排放/损失 + 库存变化，并处于文件化不确定度内 | 采集的投入、产出、损失和库存 | 闭合率和未解释差异 | `mass-balance-identity` |
| `calc_combustion_emissions` | 每种热力燃料 | 将燃料特定实测组成或文件化排放因子应用于实测燃料用量；化石和生物源二氧化碳分开 | 分燃料用量；热值；排放因子或烟气结果 | 各项燃烧排放 | `eu-fdm-bref-2019` |
| `calc_maturation_loss` | 熟成 | 乙醇损失 = 装桶酒精 + 添加酒精 − 出桶酒精 − 取样 − 文件化转移，并换算为乙醇质量 | 木桶/批次 LPA 记录 | 排放到空气的乙醇 | `eu-fdm-bref-2019` |
| `calc_cask_pallet_reuse` | 可重复使用橡木桶和木托盘 | 分配质量 = 物品质量 × 损耗或一次服务份额 / 核实的寿命周转次数；披露分配约定 | 物品质量；周转次数；损耗；产品产量 | 分配的物品质量 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留法定/商业名称、路线、配方、20 °C 酒精度、包装物料清单和批次可追溯性。 | 产品规格、批次放行和批准物料清单 |
| `dq_primary_manufacturing_data` | 所有前景过程 | 制造过程使用公司特定活动数据，并使用产品特定物料清单。 | 仪表、批次记录、发票、配方和生产线记录；`eu-pef-method-2021` |
| `dq_temporal_coverage` | 年度数据集 | 覆盖代表性连续 12 个月或季节性年度全部生产批次；披露停机、启动和缺失时期。 | 带日期的原始数据登记表和覆盖评估 |
| `dq_technology_geography` | 前景及上游链接 | 匹配蒸馏器类型、热源、熟成、过滤、场址地域、电力市场、配料产地和包装技术；说明每个代理。 | 技术清单和数据集选择日志 |
| `dq_completeness` | 清单 | 覆盖每项适用的原子流，并分别解释已核实为零、不适用和记录缺失。 | 完整性矩阵及质量/酒精平衡；`eu-pef-method-2021` |
| `dq_measurement` | 实测和计算数量 | 为每项材料数量保留校准、采样、实验室方法、密度/温度基准、排放因子和不确定度。 | 校准证书、实验室 QA 和计算工作簿 |
| `dq_coproduct_destination` | 酒糟、酒糟液、蒸馏残液、捕集 CO2 和杂醇油 | 保留数量、水分或浓度、法律状态、接收方、去向和分配决定。 | 外运联单、合同和分配记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_route_exactly_one` | 产品和过程图 | 未选择路线、同时选择两条路线，或静默合并两条路线清单时失败。 | `eu-spirit-drinks-regulation-2019` |
| `validate_reference_product` | 参考流 | 除非产出为 1 kg 包装待售产品，且声明产品身份、包装和 20 °C 下约 40% vol 的酒精度，否则失败。 | `unsd-cpc-3-0-24131`; `eu-spirit-drinks-regulation-2019` |
| `validate_atomic_inventory` | 每项清单行 | 选定流合并材料、公用工程、燃料、制冷剂、废物、包装或排放时失败；每项交换必须单独命名。 | `eu-pef-method-2021` |
| `validate_mass_alcohol_balance` | 每个过程和生产批次 | 报告闭合情况；未解释材料或纯酒精不平衡超出场址文件化测量不确定度时失败。 | `mass-balance-identity` |
| `validate_applicability` | 条件行和过程 | 要求由路线、配方和技术支撑的明确适用/不适用决定；缺少记录不等于零。 | `eu-fdm-bref-2019` |
| `validate_energy_emissions` | 热力供应 | 要求逐项记录每种燃料，并要求相应的化石/生物源二氧化碳及适用的 NOx、SO2 和颗粒物计算或监测结果。 | `eu-fdm-bref-2019` |
| `validate_residues_wastewater` | 残余物和处理 | 要求按适用性记录酒糟、酒糟液/蒸馏残液、废水、污泥、不合格品和每种包装废物的实测数量及去向。 | `eu-fdm-bref-2019`; `whiskey-lca-ireland-2025` |
| `validate_data_quality` | 数据集 | 要求完整性、技术/地域/时间代表性、精度、文档、命名和审查证据；披露数据缺口和代理。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 酒精度约 40% vol 的包装蒸馏酒饮料的产品特定前景制造数据集 |
| downstream_use | `secondary_dataset`；经审查可代表市场时为 `background_dataset` |
| allowed_use | 当路线、配方、技术、地域、时期、包装和分配相容时，用于产品碳足迹或 LCA 建模 |
| excluded_use | 不经调整而用于所有烈酒或利口酒的通用代表；在酒精度、包装、熟成或系统边界不同时进行比较；用于工业乙醇建模 |
| required_metadata | PCR id 和版本；路线；法定/商业身份；20 °C 酒精度；配方；原料；蒸馏器和热力技术；熟成；过滤；包装物料清单；地域；时期；分配和共产品去向 |
| required_quality_disclosure | 初级数据占比；仪表和采样覆盖；质量和酒精平衡闭合；缺失流；代理数据集；代表性；不确定度；审查状态 |
| update_trigger | 配方、酒精来源、蒸馏或能源系统、熟成、过滤、包装、场址、分配、共产品去向、年度数据期或适用产品法律发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-24131` | official_guidance | 联合国统计司，《中央产品分类》第 3.0 版，2025 年 6 月 30 日结构，子类 24131。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-08-24）。 | 官方分类标题与范围坐标 |
| `eu-spirit-drinks-regulation-2019` | standard | 欧盟法规 (EU) 2019/787，合并文本更新至 2024 年 5 月 13 日。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02019R0787-20240513（检索日期：2026-08-24）。 | 蒸馏酒定义；农业来源酒精；蒸馏、甜化、增香、熟成、利口酒和酒精度规则 |
| `eu-fdm-bref-2019` | official_guidance | 欧盟委员会联合研究中心，《食品、饮料和乳品行业最佳可行技术参考文件》，JRC118627，2019。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf（检索日期：2026-08-24）。 | 蒸馏饮料过程图；材料、水、能源、冷却、清洗、残余物、废水和空气排放纳入要求 |
| `eu-pef-method-2021` | official_guidance | 欧盟委员会关于环境足迹方法的建议 (EU) 2021/2279，附件 I 和 II，2022 年勘误。https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230（检索日期：2026-08-24）。 | 公司特定制造数据、物料清单、完整性、数据质量、分配层级和校验 |
| `whiskey-lca-ireland-2025` | literature | Umego, E. C., Byrne, M., and Barry-Ryan, C. (2025). Life Cycle Assessment of Single Malt Irish Whiskey: A Case Study in Ireland. Environmental Quality Management 34(4), e70100. https://doi.org/10.1002/tqem.70100；核验全文：https://pure.tudublin.ie/ws/portalfiles/portal/67075181/Environmental_Quality_Mgmt_-_2025_-_Umego_-_Life_Cycle_Assessment_of_Single_Malt_Irish_Whiskey_A_Case_Study_in_Ireland.pdf（检索日期：2026-08-24）。 | 核验真实场址过程边界、初级数据采集、能源投入、熟成、酒糟与酒糟液管理 |
| `scottish-whisky-byproducts-lca-2018` | official_guidance | Ricardo Energy & Environment 为 ClimateXChange 和苏格兰政府编制（2018），Whisky by-products in renewable energy。https://www.climatexchange.org.uk/wp-content/uploads/2023/09/revised-february-2018-whisky-by-products-life-cycle-analysis-report-v02-03.pdf（检索日期：2026-08-24）。 | 酒糟与酒糟液的副产品身份、去向情景及显式 LCA 处理要求 |
| `mass-balance-identity` | method_factor | 质量守恒与纯酒精平衡恒等式。 | 参考归一化与过程闭合计算 |
