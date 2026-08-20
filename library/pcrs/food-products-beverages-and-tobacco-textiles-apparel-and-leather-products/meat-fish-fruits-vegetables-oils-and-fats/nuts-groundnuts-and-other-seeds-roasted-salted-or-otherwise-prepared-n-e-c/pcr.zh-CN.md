---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.nuts-groundnuts-and-other-seeds-roasted-salted-or-otherwise-prepared-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 烘焙、盐渍或以其他方式制备的坚果、花生及其他种子，未另分类

## 1. 范围与适用性

本 PCR 用于生产食用坚果、花生和其他食用种子的前景数据包，其上市状态为烘焙、盐渍或以其他方式制备且未另分类。本规则为通用类别规则：符合要求的数据包必须识别实际坚果或种子种类、配料配方、制备路线、微生物降低处理（如有）、产品水分或水分活度状态、包装形式、地理位置、技术和报告期。

本 PCR 区分三类路线：`roasted`、`salted` 和 `other_preparation`。一种产品可同时采用多条路线，例如烘焙并盐渍的坚果。只有实际发生时才启用路线特定过程和流。CXC 75-2015 仅用于识别水分活度不高于 0.85 的低水分食品相关过程控制和处理后操作边界；它不是 LCA 能耗、产率、损耗或排放因子来源。

前景从门到门边界始于制备设施接收坚果、花生或种子及其他配料，止于完成包装的产品离开该设施。农产品原料、配料、燃料、电力、水和包装的上游生产必须通过上游数据集链接。分销、零售、消费者使用和生命终结不在前景清单内，除非研究明确扩展边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.nuts-groundnuts-and-other-seeds-roasted-salted-or-otherwise-prepared-n-e-c |
| classification_refs | CPC 3.0: 21495 — 烘焙、盐渍或以其他方式制备的坚果、花生及其他种子，未另分类 |
| covered_products | 烘焙、盐渍、调味、包衣、灭菌、渗透脱水、气密保存或采用符合 CPC 21495 的其他路线制成的食用坚果、花生和食用种子；混合产品仅在成品属于本类别时纳入。 |
| excluded_products | 未制备或仅去壳坚果；种用种子；简单干燥的坚果或干果混合物；糖渍产品；冷冻产品；果酱、果冻、果泥和糊；坚果或种子油；坚果或种子粉粕；另行分类的坚果或种子酱；预制餐食；非食用种子产品。 |
| representative_product | 制备设施门口、已声明路线和配方的 1 kg 可销售制备食用坚果或种子。 |
| production_route | 声明 `roasted`、`salted` 和 `other_preparation` 中一条或多条；如适用，进一步声明干烘或油烘、干法加盐或湿法/盐水加盐，以及具体其他制备技术。 |
| market_state | 制备设施门口完成、可销售并已包装的食品；可进入分销或作为食品配料继续使用。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供所声明种类、配方、制备路线和市场质量的制备食用坚果、花生或其他食用种子。 |
| How much | 1 kg 可销售产品净质量，不含包装。 |
| How well | 符合所声明产品规格、路线、盐/调味或包衣配方、水分或水分活度状态和食品安全放行准则。 |
| How long or cycle | 制备设施门口的一个生产批次；不赋予使用期限功能。 |
| reference_flow_link | 参考流与下表定义的 1 kg 净可销售产品输出完全一致。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 可销售制备产品净质量，不含包装 |
| 参考产品流 | 坚果、落花生和其他种子，烘烤、腌制或以其他方式制备（未另列明）。 `eb6332a4-c0e9-4213-a00d-77f9fd3bdacc` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 坚果或种子种类和物理形态；路线类别；烘焙时的介质和技术；盐渍时的方法及盐浓度或配方；适用时的其他制备技术和保存介质；配料配方；产品净质量；相关时的水分或水分活度及测试依据；包装形式；设施地理位置；生产技术；报告期 |

构建前景数据包时，所有`必需限定信息`必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少路线或产品状态限定信息会使参考流不完整，并阻止与其他数据包比较。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1 kg 可销售产品净质量，排除全部一级、二级和三级包装。 |
| `mass_basis_consistency` | 所有物料输入和输出 | Mass | kg | 按一致的接收状态称量所有物料流或换算为 kg；使用干物质或水分修正时单独披露。 |
| `energy_carrier_separation` | 电力、燃料、蒸汽和热能 | Energy 或载能体特定属性 | 按计量使用 kWh、MJ 或 kg | 保留计量的载能体和单位；不得把电力、外购热和可燃燃料合并成一个无区分能耗。 |
| `route_specific_normalization` | 路线特定过程 | Mass | kg | 每个启用路线过程按其自身计量产品输出归一化，再通过中间质量记录与 1 kg 最终参考流核对。 |
| `ingredient_net_mass` | 盐、调味料、包衣油和其他配料 | Mass | kg | 记录实际进入产品的配料质量，并单独记录未使用、回收或废弃物料；不得只按配方目标推断保留量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制备设施接收的坚果、花生或其他食用种子，声明种类、带壳/去壳状态、相关时的水分或水分活度、供应商、来源、批次和先前处理。 |
| starting_condition_role | 进入前景接收和制备过程的上游已准备产品输入。 |
| product_classification_scope | CPC 3.0 子类 21495 内的制备食用坚果、花生和其他食用种子；分类身份不规定单一配方或技术。 |
| recursive_input_rule | 若输入已属于同一制备产品类别，将其作为技术圈产品输入记录，并链接其自身上游数据集和制备状态；不得在本前景系统中递归重建其先前制备。 |
| upstream_dataset_requirement | 农产品原料、已制备同类输入、配料、燃料、电力、水、包装和处理服务须链接具有地理与技术代表性的上游数据集。 |
| disclosure | 声明启用路线、所含单元操作、截断、上游数据集、分配决策、产品和中间质量平衡、水分或水分活度依据、处理控制及对本 PCR 的全部偏离。 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景系统 | 纳入接收/制备、每条启用制备路线、处理后操作、整理、包装、内部产生废物、废水和直接排放，直至设施门口已包装产品。所有跨界产品和服务输入均链接上游数据集。 | eu-pef-2021-2279 |
| `boundary_route_activation` | 路线特定操作 | 仅在声明烘焙或热处理路线时启用烘焙；仅在干盐或湿法/盐水路线时启用盐渍；仅对明确声明的替代操作启用其他制备；不得对所有产品采用通用合并路线。 | unsd-cpc-3-0-21495 |
| `boundary_low_moisture_controls` | 水分活度不高于 0.85 的产品 | 纳入适用原料控制、微生物降低处理、干区控制和处理后操作带来的资源使用、废品和清洁后果。本卫生边界仅在产品和过程属于 CXC 75-2015 时适用，且不提供 LCA 数量。 | codex-cxc-75-2015 |
| `boundary_post_treatment_additions` | 微生物降低步骤后加入的配料 | 纳入配料输入及相关操作、卫生控制、损耗和包装暴露，因为处理后加料会改变相关过程边界。 | codex-cxc-75-2015 |
| `boundary_excluded_stages` | 分销、零售、使用和生命终结 | 从前景从门到门清单中排除这些阶段，除非研究目标明确加入；披露新增阶段并与设施生产分开。 | eu-pef-2021-2279 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | 接收与物理制备 | `required` | 始终纳入。 | 前景接收、检查、清洁、分选，以及设施内实际发生的去壳、去皮或粒径制备。 | kg 已准备坚果或种子输出 |
| `roasting_treatment` | 烘焙或热处理 | `conditional` | 声明路线 `roasted` 或发生热微生物降低处理时纳入。 | 路线特定加热、可选烘焙介质、冷却和处理损失。 | kg 烘焙或处理后中间产品输出 |
| `salting_seasoning` | 盐渍与调味 | `conditional` | 声明路线 `salted` 时纳入，包括干法施加或湿法/盐水施加后沥干或干燥。 | 路线特定盐、调味料、水、混合、沥干和干燥。 | kg 盐渍中间产品输出 |
| `other_preparation` | 其他制备或保存 | `conditional` | 声明路线 `other_preparation` 时纳入并识别实际操作。 | 包衣、灭菌、渗透脱水、气密保存、酸化或其他符合 CPC 的操作。 | kg 其他制备中间产品输出 |
| `finishing_packaging` | 最终操作与包装 | `required` | 始终纳入。 | 处理后检查、适用时混合、金属检测或等效放行控制、包装和转移至发运门口。 | 1 kg 净可销售参考产品 |

### 过程：接收与物理制备（`receiving_preparation`）

#### 输入

##### 产品流

###### 接收的坚果、花生或食用种子（`received_nut_seed_input`）

记录进入设施的每种种类和物理形态，包括已在其他地点制备的输入。数量来自经校准接收秤并与供应商交付记录核对。

- 选定流：设施特定的接收坚果、花生或食用种子产品流
- 流属性/单位：Mass / kg
- 数量规则：按种类、批次和物理形态计量接收状态质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_received_materials`
- 数量范围：暂定路线与配方筛选估算；以核对后的批次质量平衡替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.5
  - 上限：2.0
  - 单位：kg/kg 最终可销售产品
  - 基准：覆盖种类、配料占比和制备损失的宽筛选区间；不是合规最终值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备电力（`preparation_electricity`）

记录接收输送、清洁、分选、去壳、去皮及相关设备的计量或分项计量电力。

- 选定流：地理特定电力供应
- 流属性/单位：Energy / kWh
- 数量规则：计量制备电力；无分项表时才按运行小时分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已准备坚果或种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 数量范围：暂定制备电力筛选估算；当电表数据覆盖报告期时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：2
  - 单位：kWh/kg 已准备输出
  - 基准：有意设置的宽技术筛选区间，不是产品类别默认值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备坚果或种子中间产品（`prepared_intermediate_output`）

记录转移到下一启用路线过程或直接进入最终操作与包装的质量。

- 选定流：设施特定的已准备坚果或种子中间产品
- 流属性/单位：Mass / kg
- 数量规则：按批次核对的转移计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个接收与制备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_outputs`

##### 废物流

###### 壳、皮、异物和制备剔除物（`preparation_rejects`）

分别记录管理的残余物或剔除物流、去向，以及销售、回收、处理或处置状态。

- 选定流：设施特定制备残余物或废物流
- 流属性/单位：Mass / kg
- 数量规则：按去向计量外运残余物和剔除物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 接收坚果或种子输入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 数量范围：暂定制备损失筛选估算；以称量残余物记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 接收坚果或种子输入
  - 基准：覆盖已清洁到带壳输入的宽区间；不是统一损失率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：烘焙或热处理（`roasting_treatment`）

#### 输入

##### 产品流

###### 烘焙坚果或种子进料（`roasting_feed`）

记录转入每个烘焙或热处理批次的已准备进料质量。

- 选定流：设施特定已准备坚果或种子中间产品
- 流属性/单位：Mass / kg
- 数量规则：按批次和种类计量进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 烘焙中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_materials`

###### 烘焙热能或燃料（`roasting_thermal_energy`）

分开保留燃料、蒸汽和外购热载能体。记录启用技术的电表、账单和设备数据，并一致纳入启动、停机和失败批次。

- 选定流：技术和地理特定燃料、蒸汽或热供应
- 流属性/单位：Energy 或载能体质量 / MJ 或 kg
- 数量规则：计量载能体消耗；仅在需要时以有记录的低位热值换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 烘焙中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 数量范围：暂定烘焙能耗筛选估算；以路线特定计量和批次输出替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.1
  - 上限：20
  - 单位：MJ/kg 烘焙输出
  - 基准：覆盖不同技术和水分负荷的有意宽区间；不是统一烘焙值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 烘焙电力（`roasting_electricity`）

记录电加热、驱动、风机、控制、冷却和排气处理的电力，不与热载能体合并。

- 选定流：地理特定电力供应
- 流属性/单位：Energy / kWh
- 数量规则：计量批次电力或有记录的共享电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 烘焙中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 数量范围：暂定烘焙电力筛选估算；以分项计量数据替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：2
  - 单位：kWh/kg 烘焙输出
  - 基准：因电热和燃料技术实质不同而设的宽首轮区间
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 烘焙或热处理中间产品（`roasted_intermediate_output`）

记录达到声明终点并冷却后的计量输出。低水分食品应保留适用处理和处理后控制的执行记录。

- 选定流：设施特定烘焙或热处理坚果或种子中间产品
- 流属性/单位：Mass / kg
- 数量规则：获准进入下一操作的冷却后计量输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个烘焙批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_outputs`
- 来源：codex-cxc-75-2015

##### 废物流

###### 烘焙损失和剔除产品（`roasting_loss_reject`）

分别记录夹带细料、洒落、烧焦或不合格产品等移除物料；水分损失通过质量平衡计算，除非实际收集，否则不作为废物流。

- 选定流：设施特定烘焙剔除物或残余物流
- 流属性/单位：Mass / kg
- 数量规则：按去向称量剔除物和残余物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 烘焙进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 数量范围：暂定烘焙损失筛选估算；以批次质量平衡和水分测量替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 烘焙进料
  - 基准：仅作筛选的宽区间；不规定产率，也不把水分损失与物理废物合并
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：盐渍与调味（`salting_seasoning`）

#### 输入

##### 产品流

###### 盐渍坚果或种子进料（`salting_feed`）

记录进入干盐、浆料、喷洒或盐水施加步骤的中间产品计量质量。

- 选定流：设施特定坚果或种子中间产品
- 流属性/单位：Mass / kg
- 数量规则：按盐渍批次计量进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 盐渍中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_materials`

###### 盐和干调味料（`salt_seasoning_input`）

记录实际领用至批次的每种盐和调味料，并核对未使用或回收物料。

- 选定流：配料特定盐或调味料产品流
- 流属性/单位：Mass / kg
- 数量规则：计量领用量减去单独记录的退回或回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 盐渍中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_use`
- 数量范围：暂定盐和调味料筛选估算；以配方和保留质量记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：0.3
  - 单位：kg/kg 盐渍输出
  - 基准：宽配方筛选区间；不是盐规格或类别平均值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐水或湿法调味用水（`salting_water_input`）

仅湿法或盐水路线纳入，并单独记录回用盐水。不得向干法盐渍分配用水。

- 选定流：地理特定工艺水
- 流属性/单位：Mass / kg
- 数量规则：计量补充水以及进入前景过程的其他水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 湿法盐渍中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_brine`
- 数量范围：暂定湿法盐渍用水筛选估算；以补水和排放计量替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 湿法盐渍输出
  - 基准：路线特定筛选区间，零表示无湿步骤；不得用于干盐路线
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐渍或盐水后干燥能耗（`salting_drying_energy`）

纳入启用路线的混合、泵送和干燥能耗；基础记录中仍须分开电力和热载能体。

- 选定流：路线特定电力、燃料、蒸汽或热供应
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：按载能体计量路线能耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 盐渍中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 数量范围：暂定湿/干盐渍能耗筛选估算；以载能体特定计量记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg 盐渍输出
  - 基准：宽筛选区间；手工干法施加可为零，高区间代表干燥密集路线
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 盐渍或调味中间产品（`salted_intermediate_output`）

记录沥干、干燥或平衡终点后的合格输出。

- 选定流：设施特定盐渍或调味坚果或种子中间产品
- 流属性/单位：Mass / kg
- 数量规则：计量合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个盐渍批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_outputs`

##### 废物流

###### 废盐水、废水和未回收调味料（`salting_wastewater_residue`）

分别记录排放或处理的湿物流和固体调味残余物；可得时记录浓度或干固体信息。

- 选定流：设施特定废水、废盐水或调味残余物流
- 流属性/单位：Mass / kg
- 数量规则：按处理去向计量排放量或称量残余物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 盐渍中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_brine`
- 数量范围：暂定湿物流筛选估算；以路线特定排放和浓度记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 盐渍输出
  - 基准：湿法路线宽筛选区间，干法路线为零；不是废水因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：其他制备或保存（`other_preparation`）

#### 输入

##### 产品流

###### 其他制备坚果或种子进料（`other_preparation_feed`）

记录进入明确命名其他制备操作的中间产品计量质量。

- 选定流：设施特定坚果或种子中间产品
- 流属性/单位：Mass / kg
- 数量规则：按操作和批次计量进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 其他制备中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_materials`

###### 其他配料和加工介质（`other_ingredient_media`）

分别记录包衣油、香味料、酸、气体、渗透介质、加工助剂等物料。不得用本通用行隐藏实质配料。

- 选定流：配料或介质特定产品流
- 流属性/单位：Mass / kg
- 数量规则：每种物料计量领用量减去有记录的退回或回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 其他制备中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_use`
- 数量范围：暂定其他配料筛选估算；以声明配方和保留质量平衡替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 其他制备输出
  - 基准：跨包衣、保存和配方路线的宽筛选区间；不是统一配方
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他制备能耗（`other_preparation_energy`）

按载能体记录灭菌、脱水、泵送、包衣、气密保存或实际声明操作的能耗。

- 选定流：技术和地理特定电力、燃料、蒸汽或热供应
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：按载能体计量操作能耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 其他制备中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 数量范围：暂定其他制备能耗筛选估算；实际技术和计量边界确定后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：30
  - 单位：MJ/kg 其他制备输出
  - 基准：因 CPC 21495 允许实质不同的制备技术而有意设置的宽区间
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 其他制备中间产品（`other_prepared_output`）

记录声明操作终点的合格输出并识别制备方法。

- 选定流：设施特定其他制备坚果或种子中间产品
- 流属性/单位：Mass / kg
- 数量规则：计量合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个制备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_outputs`
- 来源：unsd-cpc-3-0-21495

##### 废物流

###### 其他制备剔除物和流出物（`other_preparation_waste`）

按处理去向分别记录固体、液体和不合格产品，不得把物理废物与蒸发水分合并。

- 选定流：设施特定废物或流出物流
- 流属性/单位：Mass / kg
- 数量规则：按物流和去向计量废物或流出物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 其他制备进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 数量范围：暂定其他制备损失筛选估算；以操作特定质量平衡替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 其他制备进料
  - 基准：跨不同操作的宽筛选区间；不规定产率或流出因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：最终操作与包装（`finishing_packaging`）

#### 输入

##### 产品流

###### 包装前成品混合物（`final_product_bulk_input`）

记录进入包装线的所有中间产品和最终混合比例，保留路线可追溯性。

- 选定流：设施特定制备坚果或种子散装成品
- 流属性/单位：Mass / kg
- 数量规则：计量转移至包装的散装产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 最终可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging`

###### 包装材料（`packaging_material_input`）

按材料分别记录一级、二级和三级包装实际质量；包装不计入净参考质量，但作为清单输入纳入。

- 选定流：材料特定包装产品流
- 流属性/单位：Mass / kg
- 数量规则：计量包装领用量减去有记录的未用退回量，并按可销售单元归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging`
- 数量范围：暂定包装质量筛选估算；以物料清单和包装称重检查替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：0.5
  - 单位：kg/kg 净可销售产品
  - 基准：覆盖散装和小零售包装的宽区间；不是包装默认值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 最终操作与包装电力（`packaging_electricity`）

记录输送、混合、检查、灌装、封口、充气和包装线控制电力。

- 选定流：地理特定电力供应
- 流属性/单位：Energy / kWh
- 数量规则：计量包装线电力或有记录的共享电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 数量范围：暂定最终操作与包装电力筛选估算；以生产线电表数据替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：2
  - 单位：kWh/kg 净可销售产品
  - 基准：宽技术筛选区间，不是类别平均值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售制备坚果或种子（`reference_product_output`）

本行为定量参考输出。记录放行检查后的产品净质量并排除包装质量。

- 选定流：坚果、落花生和其他种子，烘烤、腌制或以其他方式制备（未另列明）。 `eb6332a4-c0e9-4213-a00d-77f9fd3bdacc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 中的 kg
- 数量规则：归一化参考输出恰为 1 kg 净可销售产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 包装剔除物和包装废料（`packaging_rejects`）

按材料和去向分别记录不合格食品和包装废料。

- 选定流：设施特定产品剔除物或包装废物流
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量剔除物和废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 数量范围：暂定包装剔除筛选估算；以生产线剔除和废料记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 净可销售产品
  - 基准：宽筛选区间，不是允许损失率
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 所有多输出和共享公用工程操作 | 首先通过过程细分、单独计量以及对各产品或路线直接按质量或能量归属来避免分配。 | eu-pef-2021-2279 |
| `allocation_residue_classification` | 壳、皮、回收调味料、不合格产品及其他输出 | 按实际控制和去向将每项输出识别为废物、可回收材料或共产品；不得仅因残余物有下游用途就赋予避免负担。 | eu-pef-2021-2279 |
| `allocation_physical_then_economic` | 无法分开的剩余共享负担 | 不能细分或直接确定因果时，使用反映因果关系且有记录的物理关系。仅在没有可辩护物理关系时采用经济分配，并披露价格、期间、地理和敏感性。 | eu-pef-2021-2279 |
| `allocation_recycled_or_reused_brine` | 内部回用盐水、调味料、热或中间物料 | 内部回用保留在前景质量和能量平衡中；只记录跨系统边界的补充输入和实际排放，并核对损失。 | eu-pef-2021-2279 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_received_materials` | `receiving_preparation` | 接收的坚果、种子和配料 | 地磅、秤和供应商批次记录 | species; form; supplier; origin; lot; gross mass; tare; net mass; moisture or water activity when relevant; prior treatment | 经校准秤并与收货及库存记录核对 | kg | 每次交付和批次 | 能代表物料采购和生产变化的报告期 | 声明范围内所有设施和供应商 | 按种类和批次汇总净接收量；另行保留已制备输入 | 校准证书；收货核对；供应商规格 |
| `cp_route_materials` | `roasting_treatment`; `salting_seasoning`; `other_preparation` | 路线进料和转移 | 批次和转移记录 | route; batch; species; input mass; output mass; timestamp; recipe; endpoint; moisture or water activity when relevant | 经校准批次秤和转移计量 | kg | 每个批次 | 报告期内全部批次 | 每条启用生产线和路线 | 按路线汇总且核对转移，不重复计数 | 秤检查；批次谱系；异常日志 |
| `cp_process_energy` | 所有启用过程 | 电力、燃料、蒸汽和热 | 电表、账单和设备记录 | carrier; meter boundary; opening and closing reading; quantity; unit; operating hours; batch; allocation driver; calorific value if converted | 优先分项计量；否则核对设施总表并记录分配 | 原始载能体单位、kWh 或 MJ | 连续或每批；每月核对账单 | 包括正常启动、停机和失败生产的代表性报告期 | 每个纳入生产线和公用工程系统 | 按载能体和过程汇总；按计量过程输出归一化；披露分配 | 电表校准；账单核对；换算来源；分配检查 |
| `cp_ingredient_use` | `salting_seasoning`; `other_preparation` | 盐、调味料、包衣和制备介质 | 配方领用、退回和库存记录 | material identity; lot; issued mass; returned mass; recovered mass; retained estimate; batch | 经校准配料秤并进行库存核对 | kg | 每批 | 全部适用批次 | 每种声明配方和生产线 | 净领用量等于领用减有记录退回或回收；材料分别报告 | 配方版本；秤检查；库存核对 |
| `cp_water_brine` | `salting_seasoning`; `other_preparation` | 水、盐水和废水 | 流量计、槽罐和实验室记录 | makeup water; reused volume or mass; salt concentration; discharge mass or volume; total solids; destination; batch | 经校准流量或槽罐计量；实质相关时取样测浓度 | kg、m3 和浓度单位 | 每批或连续；以代表性频率排放取样 | 报告期全部湿法操作时段 | 每条湿法生产线 | 水和盐质量平衡；以实测或有记录密度换算体积 | 流量计校准；样品链；处理联单；平衡闭合 |
| `cp_intermediate_outputs` | 所有启用制备过程 | 合格中间产品输出 | 批次输出和质量放行记录 | batch; route; output mass; endpoint; moisture; water activity if relevant; reject mass; release status | 经校准输出秤并链接质量放行 | kg | 每个批次 | 报告期全部批次 | 所有启用路线 | 仅汇总合格输出并与下一过程输入核对 | 秤检查；放行记录；批次谱系 |
| `cp_waste_outputs` | 所有启用过程 | 残余物、剔除物、流出物和包装废料 | 废物秤、联单和处理记录 | stream identity; mass; moisture if relevant; hazardous status; destination; sale or fee; batch or period | 经校准秤或有记录承运方计量；液体流使用流量计 | kg 或 m3 | 每次移除或排放 | 报告期 | 所有纳入过程 | 按物流和去向分别汇总；不与产品输入净额处理 | 废物联单；称重记录；去向证据 |
| `cp_final_packaging` | `finishing_packaging` | 散装产品、包装和可销售输出 | 包装线、物料清单和成品记录 | product SKU; route; formulation; bulk input; net saleable output; package material; unit mass; units used; scrap; gas use if applicable | 经校准检重秤、包装 BOM 验证和库存核对 | kg | 每个生产批次和包装变更 | 报告期所有可销售批次 | 所有包装形式和生产线 | 包装和生产线输入按净放行产品质量归一化 | 检重秤检查；BOM 修订；成品核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景流 | 归一化数量 = 纳入产品应归属的流量 / 放行可销售产品净质量 | 应归属流量；放行产品净质量 | 每 1 kg 参考产品的流量 | eu-pef-2021-2279 |
| `calc_route_energy` | 每条启用路线 | 路线能耗强度 = 各载能体路线能耗 / 计量合格路线输出；保留载能体身份并报告共享电表分配 | 载能体计量记录；合格路线输出；需要时的分配动因 | 每 kg 启用路线输出的 kWh 或 MJ | eu-pef-2021-2279 |
| `calc_material_balance` | 每个过程和整个前景系统 | 闭合差 = 总计量质量输入 - 总计量产品输出 - 总计量废物输出 - 单独估计蒸发或库存保留；报告符号和占输入百分比 | 输入、输出、废物、水分和库存变化记录 | 过程和系统质量平衡闭合 |  |
| `calc_brine_balance` | 湿法或盐水盐渍 | 核对补充、回用、产品保留、排放和库存变化中的水与盐；不得将内部循环计为新的边界输入 | 水、盐、浓度、回用、排放和产品记录 | 每 kg 盐渍输出的净水和盐流 |  |
| `calc_allocation` | 剩余共享过程 | 仅在尝试细分和直接归属后应用所选分配规则；使用经济分配时保留动因值和敏感性 | 共享负担；物理动因或价格数据；产品输出 | 已分配前景流量 | eu-pef-2021-2279 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_route_identity` | 参考产品和所有启用路线 | 种类、物理形态、路线类别、配方、技术、产品状态、包装、地理和报告期必须明确且可追溯至生产批次。 | 产品规格；批次谱系；路线声明 |
| `dq_temporal_representativeness` | 所有前景记录 | 使用能代表正常生产以及相关季节、供应商、配方和启停变化的期间；披露实际日期、排除事件和覆盖比例，不假设统一时长。 | 记录覆盖分析；生产计划；异常日志 |
| `dq_measurement_traceability` | 质量、水和能量 | 识别电表或秤边界、校准状态、原始单位、换算和分配方法。共享电表分配必须与设施总量核对。 | 校准记录；计量图；账单；核对工作表 |
| `dq_completeness` | 启用前景过程 | 纳入可能实质影响结果的全部物料、能量、水、产品、废物、废水和直接排放；量化遗漏或明确说明理由。 | 完整性检查；质量和能量核对；废物联单 |
| `dq_low_moisture_scope` | 使用 CXC 75-2015 控制 | 只有水分活度不高于 0.85 且产品属于该规范范围时才应用 CXC 衍生边界控制；披露测试方法，不得将该规范用作定量 LCA 来源。 | 水分活度测试；食品安全计划；codex-cxc-75-2015 |
| `dq_reasoned_estimate_replacement` | 每个 `reasoned_estimate` 范围 | 推理范围仅作筛选辅助。当电表、秤、配方、废物、水分或批次记录可得时，以来源支持或代表性前景证据替换；发布前保留范围必须明确评审和披露。 | 估算登记表；替换决定；评审批准 |
| `dq_upstream_data` | 上游数据集 | 选择对物料身份、地理、技术和时间有代表性的数据集；披露代理和实质限制。 | 数据集元数据和选择记录；eu-pef-2021-2279 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考流 | 确认准确的产品流 UUID、Mass 流属性 UUID、Units of mass UUID、kg 单位和 1 kg 产品净质量；不得计入包装质量。 |  |
| `validation_route_consistency` | 过程图和产品限定信息 | 每条声明路线必须启用对应过程和流；非启用路线不得贡献通用能耗、用水、配料或损失值。 | unsd-cpc-3-0-21495 |
| `validation_scope_classification` | 产品身份 | 确认成品是声明语义边界内的制备坚果、花生或食用种子；拒绝排除的未制备、简单干燥、糖渍、冷冻、糊状、油、粉粕或种用产品。 | unsd-cpc-3-0-21495 |
| `validation_mass_balance` | 每个过程和整个前景系统 | 报告质量平衡闭合并调查对研究有实质影响的差异；区分物理废物、保留产品、库存变化和蒸发。 |  |
| `validation_energy_separation` | 能源清单 | 确认各载能体电力、燃料、蒸汽和外购热记录未合并，并具有一致报告期和生产覆盖。 | eu-pef-2021-2279 |
| `validation_low_moisture_boundary` | 低水分产品 | 引用 CXC 75-2015 时，验证水分活度不高于 0.85、适用处理以及处理后配料/操作控制；否则将此检查标记为不适用。 | codex-cxc-75-2015 |
| `validation_reasoned_estimates` | 所有暂定范围 | 列出每个 `reasoned_estimate`、启用路线、用途、替换触发条件和评审状态。暂定范围不得无提示变成固定值、典型值或允许值。 |  |
| `validation_source_and_data_quality` | 发布数据包 | 验证来源标识可解析、前景记录可追溯、代理和分配已披露，且预期第三方使用具有所需验证证据。 | eu-pef-2021-2279 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 按 1 kg 净可销售产品归一化的前景从门到门制备坚果或种子生产数据集。 |
| downstream_use | `secondary_dataset`；当产品、路线、地理、技术和时间代表性与使用研究匹配时可作为 `background_dataset`。 |
| allowed_use | 在检查必需限定信息和系统边界兼容性后，用于产品碳足迹或 LCA 建模、供应商数据交换、路线特定过程改进和下游食品产品清单。 |
| excluded_use | 在未声明或实质不同的种类、配方、制备路线或包装系统间比较；食品安全声明；把暂定推理范围用作已验证平均值；没有链接上游数据集的农业生产建模。 |
| required_metadata | canonical PCR id；产品流 UUID；种类和形态；路线类别；技术；配方和盐/包衣依据；相关时的水分或水分活度；净质量和包装依据；设施地理；报告期；启用过程清单；分配；上游数据集；记录覆盖；推理估算登记表。 |
| required_quality_disclosure | 电表和秤覆盖、质量平衡闭合、路线特定能耗和损失数据、分配动因、废物去向、上游代理、截断、数据缺口、估算替换状态，以及 CXC 低水分控制是否适用。 |
| update_trigger | 当种类/配方/路线/技术或包装实质变化；代表性前景记录替换推理估算；来源或 UUID 身份变化；质量平衡、分配或数据质量评审发现实质问题；或适用 CPC、Codex 或环境足迹方法变化时更新。 |

## 11. 数据源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21495` | 标准（`standard`） | 联合国统计司，《Central Product Classification Version 3.0, Explanatory Notes》，子类 21495，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-11） | 官方产品类别标题和分类边界；区分其他制备或保存与糖渍、冷冻、简单干燥、果酱、果冻和糊。 |
| `codex-cxc-75-2015` | 标准（`standard`） | Codex Alimentarius，CXC 75-2015，《Code of Hygienic Practice for Low-Moisture Foods》，2015 年通过、2016 年修订、2018 年修正。https://workspace.fao.org/sites/codex/Standards/CXC%2075-2015/CXC_075e.pdf（检索于 2026-08-11） | 条件性低水分食品范围、原料和环境控制、经验证微生物降低处理、作为一种处理的烘焙、处理后暴露和加料边界；不用于 LCA 数量。 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | European Commission，Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods，OJ L 471，2021-12-30。https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-11） | 生命周期系统框架、可靠且可验证的产品数据、类别特定规则、企业特定前景采集、多功能处理、数据质量、披露和验证。 |
