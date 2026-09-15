---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.powders-and-flakes-of-nickel
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 镍粉及片状粉末

## 1. 范围与适用性

本 PCR 适用于在生产工厂门口交付的单质镍粉和片状镍粉。范围包括报告设施内实施的羰基分解、由纯化镍溶液进行的加压氢还原、镍粉湿法机械片状化，以及路线特定的减排、干燥、分级、混合和销售包装。

本 PCR 不将镍矿石及精矿、高冰镍、氧化镍烧结物和其他上游冶金中间品作为参考产品；也不包括致密未锻轧镍、未单独声明并按成分建模的镍合金粉、镀镍颗粒、含镍浆料、压块、烧结件、催化剂、电池电极及下游粉末冶金制品。采矿、选矿、冶炼及外购原料生产由上游数据集表示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.powders-and-flakes-of-nickel |
| classification_refs | CPC 3.0：41521，镍粉及片状粉末 |
| covered_products | 单质镍粉；片状单质镍粉；在粒度分布、形貌、纯度、松装密度或表面状态方面不同且已声明的牌号 |
| excluded_products | 镍矿石或精矿；作为参考产品的高冰镍或氧化镍烧结物；致密未锻轧镍；未单独按成分建模的镍合金粉；镀镍颗粒；浆料；压块；烧结件或加工件 |
| representative_product | 符合已声明规格的可销售单质镍粉或片状镍粉 |
| production_route | 羰基分解；由纯化镍溶液进行的加压氢还原；镍粉湿法机械片状化；其他路线仅在完整过程图及路线特定交换均已披露时纳入 |
| market_state | 采用已声明包装的干燥可销售镍粉或片状粉末，并声明水分、钝化、粒度分布、形貌、纯度和包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供具有已声明技术质量的可销售单质镍粉或片状镍粉 |
| How much | 1,000 kg 可销售产品净质量，不含包装 |
| How well | 符合已声明的镍含量、合金状态、粒度分布、形貌、松装密度、表面处理或钝化、水分及污染物限值 |
| How long or cycle | 工厂门口的一个生产批次；不为该半成品材料指定使用寿命 |
| reference_flow_link | `reference_nickel_powder_flake` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 可销售产品净质量 |
| 参考产品流 | 镍粉及片状粉末（Tiangong UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 单质镍或已声明镍合金状态；粉状或片状形貌；生产路线；镍含量及相关杂质；粒度分布；适用时的松装密度；表面处理或钝化；水分；地理和时间范围；再生原料比例；包装类型；净质量与毛质量基准 |

所有必需限定信息必须在数据集元数据、产品说明或等效字段中声明。缺失限定信息将使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及质量交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有报告交换归一化至 1,000 kg 可销售镍粉或片状粉末净质量；参考数量不含包装质量。 |
| `gas_basis` | 氢气、一氧化碳、天然气及烟气流 | Mass 或 Volume | kg 或 m3 | 保留实测基准。体积换算为质量时，报告气体组成、压力、温度、干湿基准及换算系数。 |
| `electricity_basis` | 电力 | Net calorific value | MJ | 保留计量电能并记录 kWh 至 MJ 的换算；不得将电力按质量处理。 |
| `metal_balance_basis` | 含镍原料、可销售产品、共产品、废物及镍直接排放 | Mass | kg | 适用时同时报告湿基或毛质量及镍含量，并在一致的分析和水分基准上计算含镍量。 |

## 5. 系统边界

前景边界始于含镍原料、过程化学品、公用工程和包装跨越报告设施边界，终于可销售镍粉或片状粉末、共产品、送处理或回收的废物及基本流排放。内部循环的一氧化碳、硫酸铵、水、溶剂、不合格粉末和收集粉尘不得重复计为外部交换；应保留总回收量和补充量记录。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂门口含镍原料：羰基路线的一氧化镍、加压氢还原路线的纯化硫酸镍溶液，或片状化路线的镍粉；声明化学形态、纯度、水分、供应商、再生成分及监管边界 |
| starting_condition_role | 前景制粉或片状化过程的上游产品输入 |
| product_classification_scope | 单质镍粉及片状粉末；上游矿石、高冰镍、氧化物烧结物和致密镍属于不同产品类别 |
| recursive_input_rule | 外购镍粉用于生产片状镍粉时，使用供应商数据集仅记录一次上游产品输入；内部生产并转至片状化的镍粉属于内部转移，不递归展开，也不计作外部输入 |
| upstream_dataset_requirement | 对每项外购含镍原料、化学品、能源载体、包装组件和场外处理服务，使用与路线、地理、技术、再生成分、组成及产品状态相适配的数据集 |
| disclosure | 声明路线、原料状态、内部循环、减排配置、产品形貌和规格、分配决定、纳入的包装，以及由其他组织运行的过程步骤 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景生产 | 纳入报告设施运行的路线特定制粉、减排、后处理、内部回收和销售包装；上游原料生产及场外处理使用独立数据集表示。 | `eu-jrc-nfm-bref-2017`; `epo-metal-flake-ep0097017a2` |
| `boundary_route_disclosure` | 路线选择 | 仅纳入实际发生的路线过程并披露未采用的替代路线；没有产量加权记录时，不得平均羰基、氢还原和片状化路线。 | `eu-jrc-nfm-bref-2017`; `epo-metal-flake-ep0097017a2` |
| `boundary_recycle` | 内部循环 | 内部循环不计入外部总量，同时保留足以核对质量和排放的总循环、回收、吹扫和补充记录。 | `eu-jrc-nfm-bref-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `carbonyl_powder` | 羰基镍粉生产及尾气处理 | conditional | 报告设施内生成羰基镍并将其热分解为粉末时纳入。 | 前景制粉及减排 | 按该路线归属的每 1,000 kg 可销售产品净质量 |
| `hydrogen_reduction_powder` | 纯化镍溶液加压氢还原 | conditional | 报告设施内以氢气将纯化镍溶液还原为金属粉末时纳入。 | 前景制粉、溶液回收及减排 | 按该路线归属的每 1,000 kg 可销售产品净质量 |
| `wet_flaking` | 湿法机械片状化 | conditional | 以白油溶剂或单独建模的等效液体介质研磨镍粉生产片状产品时纳入。 | 前景形貌转化、分离及干燥 | 每 1,000 kg 可销售片状镍粉净质量 |
| `finishing_packaging` | 干燥、分级、混合及包装 | required | 纳入已声明可销售产品实际实施的步骤；不适用的直燃干燥或用水行以零值和设备证据记录。 | 前景后处理及参考产品输出 | 每 1,000 kg 可销售产品净质量 |

### 过程：羰基镍粉生产及尾气处理（`carbonyl_powder`）

#### 输入

##### 产品流

###### 一氧化镍原料（`carbonyl_nickel_monoxide`）

一氧化镍作为该路线特定的含镍原料跨越羰基过程边界。

- 选定流：一氧化镍 `3e78d4a3-6ff2-4726-b43c-d761ff8624b0`
- 流属性/单位：Mass / kg
- 数量规则：按已声明水分基准计量交付质量，并记录镍含量及内部返回比例。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbonyl_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 氧化物还原用氢气（`carbonyl_hydrogen`）

氢气作为将氧化物原料还原为粗镍金属的还原气跨越边界。

- 选定流：工业氢气（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量进入氧化物还原的氢气净补充量，并单独记录回收量或吹扫量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbonyl_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 一氧化碳补充量（`carbonyl_carbon_monoxide`）

一氧化碳补充量跨越边界，用于弥补密闭羰基循环的损失。

- 选定流：一氧化碳 `69422d71-f1a5-4c70-bb58-126262b8ddc2`
- 流属性/单位：Mass / kg
- 数量规则：计量回收一氧化碳循环后的净补充量，并保留总循环量和吹扫量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbonyl_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 电力（`carbonyl_electricity`）

电力跨越边界，用于运行羰基路线及其气体输送和减排设备。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量归属于还原、羰基形成、分离、分解、气体输送、过滤及辅助设备的电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbonyl_records`
- 来源：

###### 后燃烧器用天然气（`carbonyl_natural_gas`）

天然气作为单独计量的后燃烧器燃料跨越边界。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量供给后燃烧器的天然气，记录参考状态；不得将回收氢气与外购天然气合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbonyl_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 工艺用水（`carbonyl_process_water`）

工艺用水作为冷却、粉尘处理及相关操作的净补充水跨越边界。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量气体冷却、粉尘制浆及相关操作的工艺用水净补充量；内部循环水不计作外部补充。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbonyl_records`
- 来源：`eu-jrc-nfm-bref-2017`

#### 输出

##### 废物流

###### 送往场外的一氧化镍过滤粉尘（`carbonyl_nickel_oxide_filter_dust`）

仅当收集的一氧化镍粉尘送往场外回收或处置时，该废物流才跨越边界。

- 选定流：羰基尾气处理产生的一氧化镍过滤粉尘（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：称量离开设施送回收或处置的一氧化镍粉尘；未跨越边界而内部返回的粉尘不计入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbonyl_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 排入空气的残余化石源一氧化碳（`carbonyl_co_fossil_air`）

残余化石源一氧化碳经羰基尾气处理后跨越环境边界。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：使用经验证的减排后烟气浓度和相应运行时间内的干标气流量计算排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_carbonyl_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 排入空气的化石源二氧化碳（`carbonyl_co2_fossil_air`）

直接燃料燃烧和一氧化碳氧化产生的化石源二氧化碳跨越环境边界。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据计量化石燃料及被氧化的化石源一氧化碳，以记录在案的碳平衡计算直接排放；不含上游电力排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_carbonyl_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 排入空气的羰基镍（`carbonyl_nickel_carbonyl_air`）

任何经监测的残余羰基镍均作为化学形态明确的空气排放跨越环境边界。

- 选定流：排入空气的羰基镍（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：根据经验证监测或记录在案的检出限处理计算受控残余排放；不得以总元素镍替代。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_carbonyl_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 排入空气的镍（`carbonyl_nickel_air`）

过滤后颗粒物中的元素镍作为空气排放跨越环境边界。

- 选定流：排入空气未指定子类的镍（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：根据经验证的过滤后颗粒物镍浓度和烟气流量记录计算元素镍质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_carbonyl_records`
- 来源：`eu-jrc-nfm-bref-2017`

### 过程：纯化镍溶液加压氢还原（`hydrogen_reduction_powder`）

#### 输入

##### 产品流

###### 硫酸镍原料（`hydred_nickel_sulfate`）

硫酸镍随纯化含镍原料溶液跨越加压还原过程边界。

- 选定流：硫酸镍 `7249a3b5-f72e-4195-af83-4c058ac5cc94`
- 流属性/单位：Mass / kg
- 数量规则：记录硫酸镍当量质量以及溶液质量、浓度、镍分析值、水分和上游纯化边界。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydred_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 氢气（`hydred_hydrogen`）

氢气作为供给加压反应釜的还原气跨越边界。

- 选定流：工业氢气（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量供给还原反应釜的氢气净量，并披露压力、纯度、回收气和吹扫量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydred_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 氨（`hydred_ammonia`）

氨作为路线特定试剂及酸中和投入跨越边界。

- 选定流：氨 `f5325a9a-4bdc-46ea-b878-b88700767ddd`
- 流属性/单位：Mass / kg
- 数量规则：按无水 NH3 当量记录氨净补充量，并披露供货浓度和物态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydred_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 硫酸铵补充量（`hydred_ammonium_sulfate_makeup`）

内部回收后，外部硫酸铵仅以净补充量跨越边界。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性/单位：Mass / kg
- 数量规则：记录外部硫酸铵净补充量；内部回收物属于内部循环，除非作为共产品离开设施。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydred_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 电力（`hydred_electricity`）

电力跨越边界，用于运行加压还原、分离、回收和减排设备。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量溶液输送、反应釜、气体压缩、过滤、结晶、干燥、洗涤及辅助设备的电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydred_records`
- 来源：

###### 工艺用水（`hydred_process_water`）

工艺用水作为配液、洗涤和气体洗涤的净补充水跨越边界。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量配液、洗涤和气体洗涤的工艺用水净补充量；不含内部循环水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydred_records`
- 来源：`eu-jrc-nfm-bref-2017`

#### 输出

##### 产品流

###### 回收硫酸铵共产品（`hydred_ammonium_sulfate_output`）

回收硫酸铵仅在作为共产品销售或转移时跨越边界。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性/单位：Mass / kg
- 数量规则：称量作为可销售或转移共产品离开设施的干硫酸铵，并记录水分、纯度和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydred_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 排入空气的氨（`hydred_ammonia_air`）

残余氨经气体洗涤后跨越环境边界。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据经验证的洗涤后浓度和气体流量记录计算排放量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hydred_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 排入空气的镍（`hydred_nickel_air`）

减排后颗粒物中的元素镍作为空气排放跨越环境边界。

- 选定流：排入空气未指定子类的镍（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：根据经验证的减排后颗粒物镍浓度和烟气流量记录计算元素镍。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hydred_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 排入水体的镍（`hydred_nickel_water`）

元素镍随报告设施最终排水跨越环境边界。

- 选定流：镍 `08a91e70-3ddc-11dd-96ce-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据经验证的最终排水浓度和排水体积记录计算元素镍；适用时单独建模场外处理。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hydred_records`
- 来源：`eu-jrc-nfm-bref-2017`

### 过程：湿法机械片状化（`wet_flaking`）

#### 输入

##### 产品流

###### 镍粉原料（`flake_nickel_powder_input`）

外购单质镍粉作为湿法片状化原料跨越边界；内部镍粉属于内部转移。

- 选定流：单质镍粉（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：称量外购镍粉；内部生产的镍粉作为内部转移，仅保留其质量用于过程核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售片状镍粉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flaking_records`
- 来源：`epo-metal-flake-ep0097017a2`

###### 白油溶剂研磨液（`flake_white_spirit`）

白油溶剂在内部溶剂回收后以研磨液净补充量跨越边界。

- 选定流：白酒和特殊沸点工业酒精 `5fb93398-c4c6-4b60-bb16-ca956bc35985`
- 流属性/单位：Mass / kg
- 数量规则：计量回收溶剂循环后的白油溶剂净补充量，并披露牌号和回收比例。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售片状镍粉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flaking_records`
- 来源：`epo-metal-flake-ep0097017a2`

###### 电力（`flake_electricity`）

电力跨越边界，用于运行研磨、分离、干燥、真空及辅助设备。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量研磨、固液分离、真空系统、干燥、保护气体输送及辅助设备用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售片状镍粉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flaking_records`
- 来源：`epo-metal-flake-ep0097017a2`

#### 输出

##### 废物流

###### 送往场外的废白油溶剂（`flake_spent_white_spirit`）

废白油溶剂仅在送往场外回收或处置时跨越边界。

- 选定流：镍粉片状化研磨产生的废白油溶剂（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：称量离开设施送回收或处置的含溶剂液体；内部回收溶剂不计入外部废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售片状镍粉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flaking_records`
- 来源：`epo-metal-flake-ep0097017a2`

### 过程：干燥、分级、混合及包装（`finishing_packaging`）

#### 输入

##### 产品流

###### 电力（`finish_electricity`）

电力跨越边界，用于运行产品后处理、除尘和包装设备。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量干燥、筛分、分级、混合、除尘、输送及包装用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：

###### 直燃干燥用天然气（`finish_natural_gas`）

仅在采用直燃干燥或加热时，天然气才跨越边界。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：仅在采用直燃干燥或加热时计量天然气；否则以设备证据记录零值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：

###### 工艺用水（`finish_process_water`）

仅在后处理或除尘设备消耗净补充水时，工艺用水才跨越边界。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量后处理或除尘设备使用的工艺用水净补充量；不使用时以设备证据记录零值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：

###### 钢制包装桶（`finish_steel_drum`）

钢桶作为随产品供应的具体包装组件跨越边界。

- 选定流：钢制包装桶（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：称量随参考产品供应的钢桶，包括桶盖和封口件；有证据时记录可重复使用周次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：

###### 聚乙烯袋内衬（`finish_polyethylene_bag`）

聚乙烯袋作为随产品供应的具体内衬或包装组件跨越边界。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass / kg
- 数量规则：称量随参考产品供应的袋或内衬；仅在已记录另一种单独建模的包装配置时才可记零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：

#### 输出

##### 产品流

###### 可销售镍粉及片状粉末（`reference_nickel_powder_flake`）

合格镍粉或片状粉末作为工厂门口参考产品跨越边界。

- 选定流：镍粉及片状粉末（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：符合已声明规格的可销售产品净质量固定参考输出为 1,000 kg；不含包装质量。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 来源：

##### 基本流

###### 后处理排入空气的镍（`finish_nickel_air`）

后处理减排后排气中的元素镍作为空气排放跨越环境边界。

- 选定流：排入空气未指定子类的镍（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：根据后处理环节经验证的减排后颗粒物镍浓度和排气流量记录计算元素镍。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-nfm-bref-2017`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | 多条制粉路线或一体化片状化 | 优先划分过程并采用路线特定的实测输入、输出和减排记录；合理划分前不得分配设施混合总量。 | `eu-jrc-nfm-bref-2017`; `epo-metal-flake-ep0097017a2` |
| `allocation_internal_recycle` | 一氧化碳、氢气、溶剂、水、硫酸铵、粉尘及不合格粉末循环 | 将内部回收作为内部转移；外部补充、吹扫、销售和处置只报告一次，并保留总循环数据用于质量平衡验证。 | `eu-jrc-nfm-bref-2017` |
| `allocation_coproduct` | 可销售硫酸铵或其他外送含镍物料 | 过程划分后，仅在反映因果关系时使用已声明物理关系；否则采用具有代表性价格期间的经济分配，并报告不分配或替代方案敏感性。 | `eu-jrc-nfm-bref-2017` |
| `allocation_waste` | 送往场外回收或处置的材料 | 除非采用的 LCA 系统模型明确要求，否则不得在前景清单内计入避免初级生产信用；披露废物状态、处理路线及负担或信用约定。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_carbonyl_records` | `carbonyl_powder` | 羰基路线原料、公用工程、废物及空气排放 | 仪表、称重单、批次日志、分析、烟气监测、减排日志 | 原料质量和镍分析；H2 与 CO 补充/循环/吹扫；电力；天然气；水；产品；粉尘；烟气浓度、流量、时间、水分、氧及参考状态 | 核对校准仪表和批次记录；由经验证浓度和流量计算烟气排放质量 | kg, m3, MJ, kg Ni, mg/Nm3, Nm3 | 按批次或连续；按月和年度汇总 | 至少连续 12 个有代表性的月份，较短完整生产期须说明 | 所有羰基设备及按实测驱动量分摊的共用减排设备 | 汇总外部交换；仅扣除有记录的内部返回；按合格产品净质量归一化 | 校准、分析 QA/QC、烟气报告、检出限、停机及质量平衡核对 |
| `cp_hydred_records` | `hydrogen_reduction_powder` | 溶液还原原料、公用工程、共产品及排放 | 交付记录、溶液流量计、批次日志、分析、气表、结晶记录、烟气和废水监测 | 溶液质量/体积/浓度/镍分析；H2；NH3；硫酸铵；电力；水；产品和共产品；排气浓度/流量；排水体积和镍 | 核对批次与公用工程记录；换算为已声明化学当量；由经验证浓度和流量计算排放 | kg, m3, MJ, kg Ni, mg/Nm3, mg/L | 每批或连续；按月和年度汇总 | 至少连续 12 个有代表性的月份，较短完整生产期须说明 | 所有还原、结晶、干燥、洗涤及共用设备 | 汇总外部输入和跨边界输出；按合格产品净质量归一化 | 校准、实验室方法、分析证书、洗涤器记录、检出限及镍平衡 |
| `cp_flaking_records` | `wet_flaking` | 镍粉、白油溶剂、电力及废溶剂 | 称重单、批次表、溶剂罐存、回收记录、电表 | 镍粉原料；溶剂装料、回收、补充、吹扫及场外废物；电力；片状产品；水分 | 按批次和期间闭合溶剂及镍平衡 | kg, MJ | 每批；按月和年度汇总 | 至少连续 12 个有代表性的月份，较短完整生产期须说明 | 所有研磨、分离、干燥及溶剂回收设备 | 外购原料和溶剂净补充量只计一次；按合格片状产品净质量归一化 | 校准、溶剂核对、废物转移联单及产品分析 |
| `cp_finishing_records` | `finishing_packaging` | 后处理公用工程、包装、参考输出及镍排放 | 仪表、包装领用记录、生产和质量日志、烟气测试 | 电力；天然气；水；钢桶和内衬质量；产品毛/净质量；不合格品/循环；粒度、水分和镍分析；排气浓度和流量 | 核对可销售输出、后处理输入和不合格品；由经验证浓度和流量计算排放 | kg, MJ, m3, kg Ni, mg/Nm3 | 每批或连续；按月和年度汇总 | 至少连续 12 个有代表性的月份，较短完整生产期须说明 | 所有干燥、分级、混合、除尘及包装设备 | 将外部交换归一化至 1,000 kg 合格产品净质量 | 校准、包装规格、质量证书、烟气测试、不合格品日志及产品质量平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 所有清单交换 | 归一化量 = 报告期跨边界交换量 / 合格产品净质量 × 1,000 kg | 交换量；合格产品净质量 | 每 1,000 kg 参考产品的数量 |  |
| `calc_contained_nickel` | 含镍物料 | 含镍量 = 干物料质量 × 实测镍质量分数 | 毛质量；水分；镍分析 | kg 含镍量 |  |
| `calc_stack_release` | CO、羰基镍、镍及氨空气排放 | 排放质量 = 经验证浓度 × 相应运行时间内干标排气体积，并记录换算 | 浓度；气体流量；时间；水分；参考状态；检出限处理 | kg 排放物质 | `eu-jrc-nfm-bref-2017` |
| `calc_water_release` | 排入水体的镍 | 排放质量 = 最终排水镍浓度 × 相应期间排水体积 | 镍浓度；排水体积；低于检出限的处理 | kg 排入水体的镍 | `eu-jrc-nfm-bref-2017` |
| `calc_fossil_co2` | 化石源二氧化碳直接排放 | 汇总化石天然气燃烧及化石源 CO 氧化的碳平衡 CO2；不含上游电力和物料排放 | 燃料碳；被氧化 CO；氧化系数 | kg 排入空气的化石源 CO2 | `eu-jrc-nfm-bref-2017` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 报告组成、粉状/片状形貌、粒度分布、适用时松装密度、表面状态、水分、路线、批次及不含包装的净质量。 | 规格、分析证书、粒度报告和批次记录 |
| `dq_route_completeness` | 过程图 | 证明实际发生的路线，并纳入所有场内制粉、减排、后处理、循环和包装步骤。 | 过程流程图、设备清单和运行记录 |
| `dq_temporal` | 前景清单 | 使用至少连续 12 个有代表性的月份，或说明较短完整生产期；披露停机、异常事件和利用率。 | 带日期仪表、批次、维护和生产记录 |
| `dq_measurement` | 质量、能源、气体和排放 | 使用校准仪器及经验证方法；披露参考状态、水分基准、检出限、替代数据和估算层级。 | 校准和 QA/QC 记录、实验室方法及监测报告 |
| `dq_completeness` | 镍、碳、溶剂和硫酸铵平衡 | 核对原料、产品、共产品、循环、废物及排放总量；调查差额，不得以未指定流隐藏。 | 签署的平衡表和纠正措施记录 |
| `dq_background` | 外购输入及场外服务 | 匹配地理、技术、产品状态、浓度、再生成分、电力结构、气体基准和处理路线；披露代理数据。 | 数据集元数据和供应商记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 产品输出 | 确认不含包装的可销售镍粉或片状粉末净输出恰为 1,000 kg，并核验所有必需限定信息。 | `un-cpc-3-0-structure-2025` |
| `validate_route_inventory` | 过程图及清单 | 确认每个已纳入过程具有路线特定的原子输入、输出、减排及采集证据；拒绝伞形公用工程、化学品、废物或排放。 | `eu-jrc-nfm-bref-2017`; `epo-metal-flake-ep0097017a2` |
| `validate_nickel_balance` | 含镍交换 | 核对原料、产品、共产品、废物、内部循环和直接排放中的含镍量并调查差额。 |  |
| `validate_carbonyl_safety_emissions` | 羰基路线 | 要求 CO 和羰基镍监测或合理的检出限处理、后燃烧器及过滤器运行证据，并单独报告元素镍颗粒物。 | `eu-jrc-nfm-bref-2017` |
| `validate_no_double_counting` | 循环及背景 | 确认内部循环未计为外部输入或输出，且上游生产排放未复制为前景直接排放。 | `eu-jrc-nfm-bref-2017` |
| `validate_unresolved_uuid` | UUID 空缺行 | 在直接审核到精确的公开 state-100 Tiangong 流之前，禁止自动解析身份；保留具体名称、属性、单位、路线条件及未解决状态。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已声明牌号单质镍粉或片状镍粉的工厂门口前景生产数据集 |
| downstream_use | 审查和发布后的 `secondary_dataset`；`background_dataset` |
| allowed_use | 使用在路线、牌号、地理、技术、再生成分和时间方面具有代表性的镍粉或片状镍粉输入的从摇篮到工厂门口产品系统 |
| excluded_use | 镍矿、精矿、高冰镍、氧化物烧结物、致密镍、未声明合金粉、镀层颗粒、浆料、压块、烧结件，或无产量加权的路线平均 |
| required_metadata | 路线；地理；期间；原料身份及再生成分；组成；形貌；粒度分布；表面处理；水分；适用时松装密度；产品净质量；包装；减排；分配；背景数据；未解决 UUID |
| required_quality_disclosure | 覆盖率、校准、分析、检出限、质量平衡差额、循环处理、分配敏感性、代理使用、共用设备分摊、异常运行及范围证据缺口 |
| update_trigger | 路线、原料、牌号或形貌、再生成分、能源系统、减排、溶剂回收、包装、分配、设施范围发生实质变化，或数据超过项目审查间隔 |

## 11. 数据源

| 来源 ID | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 正式指南（`official_guidance`） | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 正式产品分类身份及层级 |
| `eu-jrc-nfm-bref-2017` | 正式指南（`official_guidance`） | 欧盟委员会联合研究中心，《有色金属工业最佳可行技术参考文件》，2017，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf | 羰基及氢还原过程、路线输入、共产品回收、排放、减排和监测 |
| `epo-metal-flake-ep0097017a2` | 文献（`literature`） | 欧洲专利公开 EP0097017A2，Production of metal flake，https://patents.google.com/patent/EP0097017A2/en | 镍粉湿法片状化、分离、干燥及保护气氛过程分解 |
| `china-mof-duty-free-research-goods-2026` | 正式指南（`official_guidance`） | 中华人民共和国财政部，《免税科研货物清单》，财关税〔2026〕1号附件，2026 年 1 月 14 日，https://gss.mof.gov.cn/gzdt/zhengcefabu/202601/P020260114634207037460.pdf | 专业中文术语：第 187 行将税则号列 7504 列为“镍粉及片状粉末” |
