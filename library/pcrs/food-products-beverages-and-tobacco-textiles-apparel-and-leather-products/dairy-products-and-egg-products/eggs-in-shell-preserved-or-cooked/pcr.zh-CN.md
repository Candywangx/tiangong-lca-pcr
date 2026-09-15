---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.eggs-in-shell-preserved-or-cooked
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 带壳保藏蛋或熟制蛋

## 1. 范围与适用性

本 PCR 适用于在离开加工设施前已保藏或熟制且保留蛋壳的禽蛋。覆盖路线包括经验证的带壳巴氏处理、带壳熟制、食用油涂膜，以及成品仍保留蛋壳的碱性或硅酸钠保藏。前景边界从接收未经处理的带壳蛋开始，经过必要的冷却与储存，至加工设施门口的包装成品结束。

新鲜未处理蛋、种用蛋、用于液态或干制蛋制品的破壳蛋、去壳熟蛋、调制蛋食品、零售、消费者制备和包装报废均不在范围内。必须声明禽种、处理路线、处理验证依据、蛋壳状态、包装形式和储存条件。一个数据包只有在分别计量和报告产品变体时，才可建模多种处理路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.eggs-in-shell-preserved-or-cooked |
| classification_refs | CPC 3.0: 22300, Eggs, in shell, preserved or cooked |
| covered_products | 带壳熟制、经验证的带壳巴氏处理、食用油涂膜或明确的碱性/硅酸钠保藏后仍保留蛋壳的禽蛋 |
| excluded_products | 新鲜未处理蛋；种用蛋；不带壳蛋；去壳熟蛋；液态、冷冻、浓缩或干制蛋制品；以蛋内容物调制的食品 |
| representative_product | 蛋壳完整、可上市的保藏或熟制鸡蛋 |
| production_route | 接收与分级；适用时干式清洁或受控清洗/消毒；一种明确的保藏、巴氏处理或熟制路线；需要时冷却；包装与储存 |
| market_state | 在明确的常温、冷藏或其他经验证储存条件下，于加工设施门口完成包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供保留蛋壳的保藏或熟制食用禽蛋 |
| How much | 1 kg 可上市带壳蛋净质量，不含运输和销售包装 |
| How well | 符合所声明的禽种、处理路线和经验证的安全目标，并声明蛋壳完整性、等级、包装形式和储存条件 |
| How long or cycle | 一个在加工设施门口交付的加工批次；声明货架期，但不计入使用时长收益 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 带壳保藏蛋或熟制蛋 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 禽种；蛋等级或大小等级；处理路线；处理时间-温度或其他经验证的工艺规范；病原控制或保藏目标；保留蛋壳及完整性判据；包装形式；储存温湿度条件；声明货架期；设施门口地理范围；产品净质量基准 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有按质量归一化的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按设施门口 1 kg 合格带壳蛋净质量归一化。排除包装质量，并在独立清单行中报告。 |
| `count_to_mass` | 仅有蛋枚数或打数的记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测批次蛋净质量换算枚数。有批次质量时不得使用通用单枚质量。 |
| `utility_units` | 电力、蒸汽、外购热和燃料 | Energy | kWh 或 MJ | 保留计量单位，声明燃料低位或高位热值口径，并在归一化前一致换算。 |
| `water_mass_volume` | 工艺水和冷却水 | Mass 或 volume | kg 或 m3 | 使用实测质量或体积；换算时记录所用密度和温度假设。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_steps` | 前景加工 | 纳入接收与分级、适用的蛋壳清洁、明确的熟制/巴氏处理/保藏处理、必要冷却、包装和储存。对不适用路线步骤记录不适用及理由。 | `codex-cxc-15-1976`; `shenga-et-al-2010-in-shell-pasteurization` |
| `boundary_upstream_eggs` | 未处理带壳蛋投入 | 链接供应商特定或具代表性的未处理带壳蛋上游数据集；不得在本前景加工数据集中重建养殖生产。 | `unsd-cpc-22300` |
| `boundary_downstream` | 设施门口产出 | 排除零售、消费者熟制、餐饮使用和包装报废；研究明确扩展边界时须单独报告新增部分。 | `unsd-cpc-22300` |
| `boundary_route_separation` | 多种处理路线 | 按分别计量的熟制、巴氏处理、涂油和碱性/硅酸盐保藏路线细分。除非保留产量占比和路线特定清单，否则不得平均。 | `iso-14044-2006` |
| `boundary_waste_emissions` | 前景损失与排放 | 将破损蛋、散落蛋壳、废水、污泥、包装边角料、制冷剂损失以及每种实测直接燃烧或处理排放分别列为交换。 | `iso-14044-2006` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工设施接收的未处理食用带壳蛋，并声明供应商、禽种、可得的产蛋日期或蛋龄、批次质量、蛋壳状态和入厂储存条件 |
| starting_condition_role | 保藏或熟制前景过程的上游产品投入 |
| product_classification_scope | 保留蛋壳并成为保藏或熟制产品的蛋；新鲜蛋和不带壳蛋不在本 PCR 范围内 |
| recursive_input_rule | 若带壳保藏蛋或熟制蛋作为另一范围内步骤的投入，只在接收点记录一次并链接其上游数据集；不得递归重建其较早的保藏或熟制清单 |
| upstream_dataset_requirement | 有条件时使用供应商特定的未处理带壳蛋数据；否则使用地理和技术上具代表性的上游数据集，并披露替代 |
| disclosure | 声明禽种、来源地理、入厂等级/状态、处理路线、路线占比、处理验证依据、清洁路线、包装形式、储存条件、损失以及任何排除或共享作业 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `egg_receiving_grading` | 带壳蛋接收、照蛋、挑选与分级 | required | 始终纳入 | 前景接收与质量分流 | kg 接收未处理蛋和 kg 接受蛋 |
| `shell_cleaning` | 干式清洁或受控清洗、消毒、干燥与可选涂油 | conditional | 纳入实际获准的清洁路线；禁止或无需清洁时明确记录未清洁 | 前景蛋壳准备 | kg 进入清洁的蛋 |
| `in_shell_treatment` | 带壳熟制、巴氏处理或保藏 | required | 仅纳入明确的产品路线；并行路线须细分 | 前景产品转化 | kg 经处理可上市蛋 |
| `post_treatment_cooling` | 热处理后冷却 | conditional | 处理或产品规范要求冷却时纳入 | 前景调理 | kg 进入冷却的热处理蛋 |
| `packing_and_storage` | 包装与发运前储存 | required | 始终纳入；仅在安装并使用时纳入制冷投入 | 前景包装与储存 | kg 最终可上市带壳蛋 |

### 过程：带壳蛋接收、照蛋、挑选与分级（`egg_receiving_grading`）

#### 输入

##### 产品流

###### 接收的未处理带壳蛋（`raw_shell_eggs_receipt`）

记录跨越设施边界的未处理食用带壳蛋净质量。

- 选定流：未处理食用带壳禽蛋
- 流属性/单位：Mass / kg
- 数量规则：实测接收批次质量，不含入厂包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可上市带壳蛋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_grading_records`
- 来源：`codex-cxc-15-1976`

###### 接收与分级用电（`receiving_electricity`）

记录输送、照蛋、裂纹检测、分级及控制系统的计量用电。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分配至批次的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可上市带壳蛋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_electricity`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的分级带壳蛋（`graded_shell_eggs`）

记录挑选分级后送往清洁或直接处理的合格质量。

- 选定流：验收合格的分级带壳禽蛋
- 流属性/单位：Mass / kg
- 数量规则：实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每接收过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_grading_records`
- 来源：`codex-cxc-15-1976`

##### 废物流

###### 分级产生的破损或漏液蛋废物（`broken_egg_waste_grading`）

记录内容物仍与破损或漏液蛋废物流合并的剔除蛋。

- 选定流：破损或漏液禽蛋废物
- 流属性/单位：Mass / kg
- 数量规则：送往明确废物处理路线的实测剔除质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每接收过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_grading_records`
- 来源：`codex-cxc-15-1976`

###### 分级产生的散落蛋壳废物（`eggshell_waste_grading`）

记录与破蛋内容物分别收集的蛋壳碎片。

- 选定流：禽蛋壳废物
- 流属性/单位：Mass / kg
- 数量规则：实测单独收集的蛋壳碎片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每接收过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_grading_records`
- 来源：

##### 基本流

### 过程：干式清洁或受控清洗、消毒、干燥与可选涂油（`shell_cleaning`）

#### 输入

##### 产品流

###### 进入清洁的分级带壳蛋（`graded_eggs_cleaning`）

记录进入明确干式或湿式清洁路线的合格蛋。

- 选定流：验收合格的分级带壳禽蛋
- 流属性/单位：Mass / kg
- 数量规则：实测进入清洁的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每清洁过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_material_records`
- 来源：`codex-cxc-15-1976`

###### 蛋清洗与漂洗用水（`cleaning_water`）

仅在获准湿式清洁路线中纳入；记录进入过程的补充水和漂洗水。

- 选定流：工艺水
- 流属性/单位：Volume / m3
- 数量规则：计量清洗与漂洗水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每清洁过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_material_records`
- 来源：`codex-cxc-15-1976`

###### 清洁、刷洗、泵送与干燥用电（`cleaning_electricity`）

记录干式清洁设备或湿式清洗、泵送、消毒和干燥设备用电。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分配至清洁的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每清洁过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_utility_records`
- 来源：

###### 清洗水加热用蒸汽（`cleaning_steam`）

仅在蒸汽为清洗水加热跨越过程边界时纳入。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：分配至清洁的计量或计算交付蒸汽能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每清洁过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_utility_records`
- 来源：

###### 氢氧化钠清洗剂（`sodium_hydroxide_detergent`）

仅在设施配方使用适用于蛋的氢氧化钠碱性清洗剂时纳入。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：投加至清洗液的实测活性氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每清洁过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_material_records`
- 来源：`codex-cxc-15-1976`

###### 次氯酸钠消毒剂（`sodium_hypochlorite_sanitizer`）

仅在次氯酸钠为设施使用的获准蛋壳消毒剂时纳入。

- 选定流：次氯酸钠
- 流属性/单位：Mass / kg
- 数量规则：投加至消毒液的实测活性次氯酸钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每清洁过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_material_records`
- 来源：`codex-cxc-15-1976`

###### 清洁后食用级矿物油（`food_grade_mineral_oil_cleaning`）

在干式清洁或清洗后施加食用级矿物油涂层时纳入。

- 选定流：食用级矿物油
- 流属性/单位：Mass / kg
- 数量规则：施用于蛋的实测补充油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每清洁过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_material_records`
- 来源：`codex-cxc-15-1976`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 清洁后的带壳蛋（`cleaned_shell_eggs`）

记录经干式清洁或清洗、消毒、干燥及可选涂油后离开清洁过程的蛋。

- 选定流：清洁后的带壳禽蛋
- 流属性/单位：Mass / kg
- 数量规则：实测离开清洁过程的合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每清洁过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_output_records`
- 来源：`codex-cxc-15-1976`

##### 废物流

###### 蛋清洗废水（`cleaning_wastewater`）

记录转移至厂内或厂外处理的废水；不得与污泥合并。

- 选定流：蛋清洗废水
- 流属性/单位：Volume / m3
- 数量规则：计量离开清洁过程的废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每清洁过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_output_records`
- 来源：

###### 蛋清洗污泥（`cleaning_sludge`）

将蛋清洗水沉降或过滤产生的固体作为独立废物流记录。

- 选定流：蛋清洗污泥
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量，并披露干物质分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每清洁过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_output_records`
- 来源：

###### 清洁产生的破损蛋废物（`broken_egg_waste_cleaning`）

记录清洁过程中破损且内容物保留在剔除废物流中的蛋。

- 选定流：破损禽蛋废物
- 流属性/单位：Mass / kg
- 数量规则：实测剔除质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每清洁过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_output_records`
- 来源：`codex-cxc-15-1976`

###### 清洁产生的散落蛋壳废物（`eggshell_waste_cleaning`）

记录清洁破损中单独收集的蛋壳碎片。

- 选定流：禽蛋壳废物
- 流属性/单位：Mass / kg
- 数量规则：实测蛋壳碎片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每清洁过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_output_records`
- 来源：

##### 基本流

### 过程：带壳熟制、巴氏处理或保藏（`in_shell_treatment`）

#### 输入

##### 产品流

###### 进入处理的带壳蛋（`cleaned_eggs_treatment`）

记录进入明确带壳熟制、巴氏处理或保藏路线的蛋。

- 选定流：准备处理的带壳禽蛋
- 流属性/单位：Mass / kg
- 数量规则：实测进入处理路线的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_recipe_records`
- 来源：`codex-cxc-15-1976`; `shenga-et-al-2010-in-shell-pasteurization`

###### 带壳热处理用水（`treatment_water`）

纳入热水熟制或湿热巴氏处理系统的用水。

- 选定流：工艺水
- 流属性/单位：Volume / m3
- 数量规则：计量投入处理的补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_utility_records`
- 来源：`shenga-et-al-2010-in-shell-pasteurization`

###### 处理设备用电（`treatment_electricity`）

记录加热器、微波或射频设备、泵、输送机、搅拌器和控制系统用电。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分配至明确处理路线的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_utility_records`
- 来源：`chiozzi-et-al-2022-thermal-nonthermal`

###### 热处理用蒸汽（`treatment_steam`）

仅在交付蒸汽跨越处理边界时纳入。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量或计算的交付蒸汽能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_utility_records`
- 来源：`chiozzi-et-al-2022-thermal-nonthermal`

###### 现场处理供热用天然气（`treatment_natural_gas`）

纳入现场燃烧用于处理供热的天然气；不得与其他燃料合并。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：按明确热值口径计量的天然气消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_utility_records`
- 来源：`chiozzi-et-al-2022-thermal-nonthermal`

###### 现场处理供热用液化石油气（`treatment_lpg`）

纳入现场燃烧的液化石油气；不得与天然气合并。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：按明确热值口径计量的液化石油气消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_utility_records`
- 来源：

###### 蛋壳保藏用硅酸钠（`sodium_silicate_preservative`）

仅在明确的硅酸钠保藏浸液或涂层路线中纳入。

- 选定流：硅酸钠
- 流属性/单位：Mass / kg
- 数量规则：实测硅酸钠投加量，并声明商品质量或活性质量口径
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_recipe_records`
- 来源：

###### 碱性保藏用氢氧化钙（`calcium_hydroxide_preservative`）

仅在明确碱性保藏配方中投加氢氧化钙时纳入。

- 选定流：氢氧化钙
- 流属性/单位：Mass / kg
- 数量规则：实测氢氧化钙投加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_recipe_records`
- 来源：

###### 保藏用氯化钠（`sodium_chloride_preservative`）

仅在明确保藏配方中投加氯化钠时纳入。

- 选定流：氯化钠
- 流属性/单位：Mass / kg
- 数量规则：实测氯化钠投加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_recipe_records`
- 来源：

###### 保藏用食用级矿物油（`food_grade_mineral_oil_preservative`）

仅在涂油是明确保藏处理、而非清洁后步骤时纳入。

- 选定流：食用级矿物油
- 流属性/单位：Mass / kg
- 数量规则：实测施用的矿物油补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_recipe_records`
- 来源：`codex-cxc-15-1976`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 保留蛋壳的处理蛋（`treated_shell_eggs`）

记录经明确处理且保留蛋壳的合格蛋。

- 选定流：经处理的带壳禽蛋
- 流属性/单位：Mass / kg
- 数量规则：实测合格处理蛋质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_output_records`
- 来源：`codex-cxc-15-1976`; `shenga-et-al-2010-in-shell-pasteurization`

##### 废物流

###### 处理废水（`treatment_wastewater`）

记录转移处理的废热处理水或水性保藏废液。

- 选定流：带壳蛋处理废水
- 流属性/单位：Volume / m3
- 数量规则：计量离开处理过程的废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_output_records`
- 来源：

###### 处理污泥（`treatment_sludge`）

将保藏浸液或处理水系统沉降固体与废水分别记录。

- 选定流：带壳蛋处理污泥
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量，并披露干物质分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_output_records`
- 来源：

###### 处理产生的破损蛋废物（`broken_egg_waste_treatment`）

记录处理过程中破损且内容物仍与废物合并的不合格蛋。

- 选定流：破损的经处理禽蛋废物
- 流属性/单位：Mass / kg
- 数量规则：实测剔除质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_output_records`
- 来源：

###### 处理产生的散落蛋壳废物（`eggshell_waste_treatment`）

记录处理破损中单独收集的蛋壳碎片。

- 选定流：禽蛋壳废物
- 流属性/单位：Mass / kg
- 数量规则：实测蛋壳碎片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_output_records`
- 来源：

##### 基本流

###### 现场燃料燃烧产生的化石二氧化碳（`fossil_carbon_dioxide_air`）

仅纳入现场天然气或液化石油气燃烧，不含上游燃料生产排放。

- 选定流：化石二氧化碳，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气排放或由计量燃料和有出处的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_combustion_emissions`
- 来源：

###### 现场燃料燃烧产生的一氧化碳（`carbon_monoxide_air`）

将实测或因子计算的一氧化碳作为独立直接排放纳入。

- 选定流：一氧化碳，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气排放或由计量燃料和有出处的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_combustion_emissions`
- 来源：

###### 现场燃料燃烧产生的氮氧化物（`nitrogen_oxides_air`）

将实测或因子计算的氮氧化物作为独立直接排放纳入。

- 选定流：氮氧化物，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气排放或由计量燃料和有出处的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_combustion_emissions`
- 来源：

###### 现场燃料燃烧产生的化石甲烷（`fossil_methane_air`）

将实测或因子计算的未燃化石甲烷作为独立直接排放纳入。

- 选定流：化石甲烷，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气排放或由计量燃料和有出处的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_combustion_emissions`
- 来源：

###### 现场燃料燃烧产生的细颗粒物（`pm25_air`）

将实测或因子计算的粒径不大于 2.5 微米颗粒物作为独立直接排放纳入。

- 选定流：小于 2.5 微米的颗粒物，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气排放或由计量燃料和有出处的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每处理过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_combustion_emissions`
- 来源：

### 过程：热处理后冷却（`post_treatment_cooling`）

#### 输入

##### 产品流

###### 进入冷却的热处理蛋（`hot_treated_shell_eggs`）

记录进入冷却作业的热处理带壳蛋。

- 选定流：热处理带壳禽蛋
- 流属性/单位：Mass / kg
- 数量规则：实测进入冷却的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每冷却过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling_records`
- 来源：

###### 冷却水（`cooling_water`）

纳入浸没、喷淋或一次通过冷却中跨越边界的水。

- 选定流：冷却水
- 流属性/单位：Volume / m3
- 数量规则：计量供给冷却的补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每冷却过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling_records`
- 来源：

###### 冷却用电（`cooling_electricity`）

记录冷水机、泵、风机、输送机和控制系统用电。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分配至冷却的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每冷却过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling_records`
- 来源：

###### 冷却系统氨制冷剂补充（`ammonia_refrigerant_cooling`）

仅在冷却系统使用 R-717 氨时纳入。

- 选定流：无水氨
- 流属性/单位：Mass / kg
- 数量规则：按库存平衡分配至冷却设备的补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每冷却过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_refrigerant_balance`
- 来源：

###### 冷却系统 HFC-134a 制冷剂补充（`hfc134a_refrigerant_cooling`）

仅在冷却系统使用 HFC-134a 时纳入。

- 选定流：1,1,1,2-四氟乙烷
- 流属性/单位：Mass / kg
- 数量规则：按库存平衡分配至冷却设备的补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每冷却过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_refrigerant_balance`
- 来源：

###### 冷却系统 R-404A 制冷剂补充（`r404a_refrigerant_cooling`）

仅在冷却系统使用 R-404A 制冷剂混合物时纳入。

- 选定流：R-404A 制冷剂
- 流属性/单位：Mass / kg
- 数量规则：按库存平衡分配至冷却设备的补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每冷却过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_refrigerant_balance`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷却后的处理蛋（`cooled_shell_eggs`）

记录达到声明温度、离开冷却的合格处理蛋。

- 选定流：冷却后的带壳处理禽蛋
- 流属性/单位：Mass / kg
- 数量规则：实测离开冷却的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每冷却过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling_records`
- 来源：`codex-cxc-15-1976`

##### 废物流

###### 冷却废水（`cooling_wastewater`）

记录排往厂内或厂外处理的冷却水。

- 选定流：蛋冷却废水
- 流属性/单位：Volume / m3
- 数量规则：计量离开冷却的废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每冷却过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling_records`
- 来源：

##### 基本流

###### 冷却过程释放的氨制冷剂（`ammonia_air_cooling`）

仅记录分配至冷却设备的 R-717 泄漏。

- 选定流：氨，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：制冷剂库存平衡损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每冷却过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_refrigerant_balance`
- 来源：

###### 冷却过程释放的 HFC-134a（`hfc134a_air_cooling`）

仅记录分配至冷却设备的 HFC-134a 泄漏。

- 选定流：1,1,1,2-四氟乙烷，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：制冷剂库存平衡损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每冷却过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_refrigerant_balance`
- 来源：

###### 冷却过程释放的 R-404A（`r404a_air_cooling`）

仅记录分配至冷却设备的 R-404A 混合制冷剂泄漏。

- 选定流：R-404A 制冷剂，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：制冷剂库存平衡损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每冷却过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_refrigerant_balance`
- 来源：

### 过程：包装与发运前储存（`packing_and_storage`）

#### 输入

##### 产品流

###### 进入包装的处理蛋（`cooled_eggs_packing`）

记录进入包装的处理蛋，无论其已冷却或处于另一经验证条件。

- 选定流：待包装的带壳处理禽蛋
- 流属性/单位：Mass / kg
- 数量规则：实测进入包装的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每最终产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_output_records`
- 来源：

###### 包装用电（`packing_electricity`）

记录包装、喷码、检重和输送设备用电。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分配至包装的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每最终产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_energy_records`
- 来源：

###### 发运前储存用电（`storage_electricity`）

记录明确储存库房、制冷、风机、照明和控制系统用电。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：按占用容量和储存时间分配的计量储存用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每最终产品产出
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_energy_records`
- 来源：`codex-cxc-15-1976`

###### 模塑纸浆蛋托（`molded_pulp_tray`）

纳入交付包装中模塑纸浆蛋托的净质量。

- 选定流：模塑纸浆蛋托
- 流属性/单位：Mass / kg
- 数量规则：数量乘供应商单托质量，并与采购记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每最终产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_records`
- 来源：

###### 瓦楞纸板运输箱（`corrugated_fiberboard_box`）

纳入交付包装中瓦楞纸箱的净质量。

- 选定流：瓦楞纸板箱
- 流属性/单位：Mass / kg
- 数量规则：数量乘供应商单箱质量，并与采购记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每最终产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_records`
- 来源：

###### PET 蛋盒（`pet_egg_carton`）

仅在使用聚对苯二甲酸乙二醇酯蛋盒的包装形式中纳入。

- 选定流：聚对苯二甲酸乙二醇酯蛋盒
- 流属性/单位：Mass / kg
- 数量规则：数量乘供应商单盒质量，并与采购记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每最终产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_records`
- 来源：

###### 聚乙烯外包膜（`polyethylene_overwrap`）

仅在成品包装施用聚乙烯薄膜时纳入。

- 选定流：聚乙烯包装膜
- 流属性/单位：Mass / kg
- 数量规则：领用薄膜质量减去单独计量的边角料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每最终产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_records`
- 来源：

###### 纸质包装标签（`paper_label`）

纳入粘贴于交付包装的纸质标签。

- 选定流：纸质标签
- 流属性/单位：Mass / kg
- 数量规则：标签数量乘供应商单张标签质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每最终产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_records`
- 来源：

###### 水性丙烯酸标签胶粘剂（`acrylic_label_adhesive`）

仅在现场将该胶粘剂施用于包装标签时纳入。

- 选定流：水性丙烯酸胶粘剂
- 流属性/单位：Mass / kg
- 数量规则：实测消耗的胶粘剂补充量，并披露含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每最终产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：

###### 储存系统氨制冷剂补充（`ammonia_refrigerant_storage`）

仅在发运前储存使用 R-717 氨时纳入。

- 选定流：无水氨
- 流属性/单位：Mass / kg
- 数量规则：按库存平衡分配至储存制冷的补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每最终产品产出
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigerant_balance`
- 来源：

###### 储存系统 HFC-134a 制冷剂补充（`hfc134a_refrigerant_storage`）

仅在发运前储存使用 HFC-134a 时纳入。

- 选定流：1,1,1,2-四氟乙烷
- 流属性/单位：Mass / kg
- 数量规则：按库存平衡分配至储存制冷的补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每最终产品产出
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigerant_balance`
- 来源：

###### 储存系统 R-404A 制冷剂补充（`r404a_refrigerant_storage`）

仅在发运前储存使用 R-404A 制冷剂混合物时纳入。

- 选定流：R-404A 制冷剂
- 流属性/单位：Mass / kg
- 数量规则：按库存平衡分配至储存制冷的补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每最终产品产出
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigerant_balance`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考产品（`reference_product`）

记录设施门口保留蛋壳的保藏蛋或熟制蛋可上市净质量。

- 选定流：带壳保藏蛋或熟制蛋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 来源：`unsd-cpc-22300`

##### 废物流

###### 模塑纸浆包装边角料（`molded_pulp_waste`）

单独记录模塑纸浆蛋托边角料和废品。

- 选定流：模塑纸浆包装废物
- 流属性/单位：Mass / kg
- 数量规则：送往明确处理路线的实测边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每最终产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_output_records`
- 来源：

###### 瓦楞纸板包装边角料（`corrugated_fiberboard_waste`）

单独记录瓦楞纸箱边角料和废品。

- 选定流：瓦楞纸板包装废物
- 流属性/单位：Mass / kg
- 数量规则：送往明确处理路线的实测边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每最终产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_output_records`
- 来源：

###### PET 包装边角料（`pet_packaging_waste`）

将废弃 PET 蛋盒与其他包装边角料分别记录。

- 选定流：聚对苯二甲酸乙二醇酯包装废物
- 流属性/单位：Mass / kg
- 数量规则：送往明确处理路线的实测边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每最终产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_output_records`
- 来源：

###### 聚乙烯薄膜边角料（`polyethylene_film_waste`）

将聚乙烯薄膜切边和废品与 PET、纤维包装废物分别记录。

- 选定流：聚乙烯包装膜废物
- 流属性/单位：Mass / kg
- 数量规则：送往明确处理路线的实测边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每最终产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_output_records`
- 来源：

###### 包装与储存产生的破损蛋废物（`broken_egg_waste_packing`）

记录内容物仍与剔除产品合并的破损蛋。

- 选定流：破损的经处理禽蛋废物
- 流属性/单位：Mass / kg
- 数量规则：实测剔除质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每最终产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_output_records`
- 来源：

###### 包装与储存产生的散落蛋壳废物（`eggshell_waste_packing`）

记录包装或储存破损中单独收集的蛋壳碎片。

- 选定流：禽蛋壳废物
- 流属性/单位：Mass / kg
- 数量规则：实测蛋壳碎片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每最终产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_output_records`
- 来源：

##### 基本流

###### 储存过程释放的氨制冷剂（`ammonia_air_storage`）

仅记录分配至发运前储存的 R-717 泄漏。

- 选定流：氨，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：制冷剂库存平衡损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每最终产品产出
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigerant_balance`
- 来源：

###### 储存过程释放的 HFC-134a（`hfc134a_air_storage`）

仅记录分配至发运前储存的 HFC-134a 泄漏。

- 选定流：1,1,1,2-四氟乙烷，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：制冷剂库存平衡损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每最终产品产出
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigerant_balance`
- 来源：

###### 储存过程释放的 R-404A（`r404a_air_storage`）

仅记录分配至发运前储存的 R-404A 混合制冷剂泄漏。

- 选定流：R-404A 制冷剂，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：制冷剂库存平衡损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每最终产品产出
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigerant_balance`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享作业和多种产品 | 首先通过过程细分、路线特定计量和独立批次记录避免分配。 | `iso-14044-2006` |
| `allocation_direct_assignment` | 清洁、处理、冷却、包装与储存 | 将实测材料、公用工程、废物和排放记录直接归属到引起它们的产品路线。 | `iso-14044-2006` |
| `allocation_shared_storage` | 共享冷藏或常温储存 | 按占用容量乘经核实储存时间分配储存用电和制冷剂损失；披露任何替代因果驱动量。 | `iso-14044-2006` |
| `allocation_waste_default` | 破损蛋、蛋壳、污泥和包装边角料 | 默认在产生点作为废物处理并纳入其处理。若某流被出售或有意作为共产品生产，须记录状态变更，尽可能细分，并一致采用有依据的物理或经济分配。 | `iso-14044-2006` |
| `allocation_no_avoided_burden` | 回收或资源化主张 | 除非适用研究方法明确要求替代且记录被替代产品、质量和因子，否则不得在前景清单内计入避免产品收益。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_grading_records` | `egg_receiving_grading` | 接收、合格、破损蛋和蛋壳碎片质量 | 地磅、秤、分级机与剔除日志 | lot_id; species; supplier; incoming_condition; received_mass; accepted_mass; broken_egg_mass; shell_fragment_mass | 校准称量并与批次和分级记录核对 | kg | 每批 | 有代表性的连续生产期 | 所有纳入的接收线 | 按批次求和后按最终合格质量归一化 | 校准记录；批次核对；剔除物去向 |
| `cp_receiving_electricity` | `egg_receiving_grading` | 电力 | 分表或设备日志 | meter_start; meter_end; production_time; lot_id | 优先使用分表；否则采用额定负荷与运行时间计算 | kWh | 每班次或批次 | 与生产质量相同期间 | 所有纳入的接收/分级设备 | 扣除空载基线并按处理质量分配 | 电表校准或设备额定值与运行日志 |
| `cp_cleaning_material_records` | `shell_cleaning` | 蛋、水、清洗剂、消毒剂和油 | 批次表、流量计、投加日志和秤 | route; egg_mass_in; water_in; chemical_product_mass; active_fraction; oil_mass | 计量或称量每种投入，并保留配方和批准记录 | kg 或 m3 | 每批或班次 | 与清洁产出相同期间 | 每条清洁线 | 汇总实际路线投入并按清洁产出归一化 | 仪表校准；供应商规范；投加核验 |
| `cp_cleaning_utility_records` | `shell_cleaning` | 电力和蒸汽 | 公用工程分表与蒸汽日志 | electricity; steam_mass; pressure; temperature; condensate_return | 计量公用工程，并由记录状态计算交付蒸汽能量 | kWh 或 MJ | 每班次 | 与清洁产出相同期间 | 每条清洁线 | 扣除空载并按清洁产出归一化 | 公用工程账单；仪表校准；蒸汽状态记录 |
| `cp_cleaning_output_records` | `shell_cleaning` | 清洁蛋、废水、污泥、破损蛋和蛋壳碎片 | 秤、排水流量计、过滤/污泥日志和剔除日志 | cleaned_mass; wastewater_volume; sludge_wet_mass; sludge_dry_fraction; broken_egg_mass; shell_mass | 分别计量每项产出并保留处理去向 | kg 或 m3 | 每批或班次 | 与清洁投入相同期间 | 每条清洁线 | 按清洁产出归一化质量/体积合计 | 平衡核对；去向凭证；取样记录 |
| `cp_treatment_recipe_records` | `in_shell_treatment` | 蛋和保藏配方投入 | 处理批次记录与配方表 | route; egg_mass_in; chemical_product_mass; active_fraction; oil_mass; recipe_id | 称量每项投料并链接明确处理路线 | kg | 每批 | 与处理产出相同期间 | 每条处理线 | 按路线汇总并按处理产出归一化 | 校准秤；获准配方；批次追溯 |
| `cp_treatment_utility_records` | `in_shell_treatment` | 水、电力、蒸汽、天然气和液化石油气 | 流量计、分表、燃料表与批次控制器 | water; electricity; steam_mass; steam_state; natural_gas; lpg; heating_value_basis; route; batch_id | 每种公用工程和燃料分别计量 | m3、kWh、MJ 或燃料采购单位 | 每批或班次 | 与处理产出相同期间 | 每条处理线和热源 | 一致换算并按路线产出归一化 | 仪表校准；账单核对；控制器记录 |
| `cp_treatment_output_records` | `in_shell_treatment` | 处理蛋、废水、污泥、破损蛋和蛋壳碎片 | 秤、排水流量计、污泥日志和剔除日志 | treated_mass; wastewater_volume; sludge_wet_mass; sludge_dry_fraction; broken_egg_mass; shell_mass | 分别计量产出并记录去向 | kg 或 m3 | 每批 | 与处理投入相同期间 | 每条处理线 | 按路线汇总并按处理产出归一化 | 质量平衡；处理记录；去向凭证 |
| `cp_direct_combustion_emissions` | `in_shell_treatment` | 直接燃烧排放 | 烟气测试或燃料因子计算 | fuel_type; fuel_quantity; heating_value_basis; emission_factor; factor_source; measured_concentration; flue_gas_volume | 优先采用代表性烟气实测；否则采用有出处的燃料特定因子 | kg | 测试活动及每生产期 | 代表性运行状态 | 每台现场燃烧设备 | 每种污染物分别计算并按处理产出归一化 | 烟气报告或因子来源；燃料表核对 |
| `cp_cooling_records` | `post_treatment_cooling` | 蛋、水、电力、废水和出口温度 | 批次日志、流量计、分表与温度记录仪 | egg_mass_in; egg_mass_out; water_in; wastewater_out; electricity; inlet_temperature; outlet_temperature; time | 计量公用工程和质量；连续记录关键时间-温度值 | kg、m3、kWh、°C 和时间 | 每批 | 报告期内所有冷却批次 | 每项冷却设备 | 按冷却产出归一化 | 校准温度记录仪；仪表校准；批次放行记录 |
| `cp_cooling_refrigerant_balance` | `post_treatment_cooling` | 制冷剂补充与释放 | 制冷剂库存与维修日志 | refrigerant_identity; opening_charge; additions; recoveries; closing_charge; equipment_id; allocation_basis | 按具名制冷剂和设备进行年度或生产期质量平衡 | kg | 每次维修及报告期 | 完整报告期 | 仅冷却设备 | 损失 = 期初 + 补充 - 回收 - 期末；按因果设备使用分配 | 维修发票；回收记录；充注核验 |
| `cp_packaging_material_records` | `packing_and_storage` | 每个包装组件 | 采购、领用、物料清单与供应商质量记录 | component_identity; count; unit_mass; issued_mass; returned_mass; scrap_mass | 分别称量或计数每个组件并与库存核对 | kg | 每批或班次 | 与最终产品相同期间 | 所有纳入包装线 | 纳入质量 = 领用 - 退回 - 边角料 | 供应商规范；库存核对；秤校准 |
| `cp_packing_energy_records` | `packing_and_storage` | 包装电力 | 分表或设备日志 | meter_start; meter_end; runtime; product_mass | 优先使用分表；否则采用额定负荷计算 | kWh | 每班次 | 与包装产出相同期间 | 纳入的包装设备 | 扣除空载基线并按包装产出归一化 | 电表校准或设备额定值与运行时间 |
| `cp_storage_energy_records` | `packing_and_storage` | 储存电力 | 库房分表与占用日志 | electricity; storage_time; occupied_capacity; product_mass; room_id | 计量每个库房并记录产品占用-时间 | kWh 和 kg·h | 每日或班次 | 完整声明储存期 | 所有纳入库房 | 按占用容量 × 核实时间分配 | 分表校准；库存时间戳；库房日志 |
| `cp_storage_refrigerant_balance` | `packing_and_storage` | 制冷剂补充与释放 | 制冷剂库存与维修日志 | refrigerant_identity; opening_charge; additions; recoveries; closing_charge; equipment_id; allocation_basis | 按具名制冷剂和设备进行年度或生产期质量平衡 | kg | 每次维修及报告期 | 完整报告期 | 仅储存制冷 | 损失 = 期初 + 补充 - 回收 - 期末；按占用容量-时间分配 | 维修发票；回收记录；充注核验 |
| `cp_packing_output_records` | `packing_and_storage` | 最终产品、包装边角料、破损蛋和蛋壳碎片 | 检重秤、边角料秤、剔除日志与发运记录 | product_mass; package_mass; each_scrap_mass; broken_egg_mass; shell_mass; dispatch_time | 分别计量每项产出并与包装投入核对 | kg | 每批 | 与包装投入相同期间 | 所有纳入包装线和库房 | 按最终可上市产品质量归一化 | 秤校准；发运记录；废物去向凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单交换 | 归一化交换量 = 期间交换量 ÷ 合格参考产品净 kg | 交换记录；最终产品质量 | 每 1 kg 参考产品的交换量 | `iso-14044-2006` |
| `calc_count_mass` | 蛋枚数记录 | 使用实测样本或总批次净质量确定批次蛋质量；枚数仅用于核对，不作为通用质量因子 | 枚数；实测批次质量 | kg 蛋 |  |
| `calc_active_chemical` | 氢氧化钠、次氯酸钠、硅酸钠及其他配制化学品 | 活性质量 = 商品质量 × 供应商声明活性分数；同时保留商品质量和活性质量 | 商品质量；活性分数 | kg 活性物质和 kg 商品 |  |
| `calc_steam_energy` | 蒸汽投入 | 交付热量 = 蒸汽质量 × 入口蒸汽焓与返回冷凝水焓之差；记录状态假设 | 蒸汽质量；压力；温度；冷凝水状态 | MJ 交付蒸汽能量 |  |
| `calc_storage_allocation` | 共享储存电力和制冷剂损失 | 产品份额 = 产品占用容量-时间 ÷ 总占用容量-时间 | 产品质量或托盘位；进出时间；库房总量 | 分配 kWh 或 kg 制冷剂损失 | `iso-14044-2006` |
| `calc_refrigerant_loss` | 每种具名制冷剂 | 损失 = 期初充注 + 补充 - 回收量 - 期末充注；分别报告每种制冷剂 | 充注与维修记录 | kg 具名制冷剂排放至空气 |  |
| `calc_mass_balance` | 每个过程 | 平衡闭合 = 投入 - 分别计量的产品产出 - 废物产出 - 留存或蒸发质量；调查重大无法解释残差 | 所有质量投入和产出 | 平衡闭合及解释 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品与处理路线 | 从入厂带壳蛋到最终产品保留批次身份，并声明禽种、路线、蛋壳状态、等级和储存条件。 | 批次谱系、生产与发运记录 |
| `dq_temporal` | 前景记录 | 覆盖有代表性的生产，包括对路线有实质影响的启动、正常运行、清洁、换产和停机。 | 带日期的仪表、批次记录和生产计划 |
| `dq_completeness` | 清单 | 核对所有具名材料、公用工程、包装、废物、制冷剂和直接排放记录；不得将未计量项隐藏在聚合占位项中。 | 完整性清单及过程质量/能量核对 |
| `dq_treatment_validation` | 熟制、巴氏处理或保藏 | 保留经验证路线规范、关键限值、监测结果、偏差、纠正措施和产品放行决定。 | 经批准验证研究和批次控制器记录 |
| `dq_measurement` | 秤、仪表和温度记录仪 | 使用适合运行量程的校准设备，并保留报告期校准状态。 | 校准证书和核查记录 |
| `dq_waste_destination` | 废水、污泥、蛋壳、破损蛋和包装边角料 | 识别每个接收处理或回收路线，并在适用时记录干湿基准。 | 联单、发票、处理合同或厂内日志 |
| `dq_refrigerant` | 冷却与储存 | 按化学品或商品混合物识别实际制冷剂并保留维修事件质量平衡；不得报告通用“制冷剂”。 | 设备台账、维修日志、采购与回收记录 |
| `dq_source_currency` | 外部方法证据 | 使用所列版本或 DOI，并披露与 Codex 清洁或储存指南的任何司法辖区差异。 | 来源登记和偏差说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | 产品身份 | 最终产品若为新鲜未处理蛋、不带壳蛋或在参考流门口前已去壳，则校验失败。 | `unsd-cpc-22300` |
| `validate_reference_mass` | 参考流 | 确认恰为 1 kg 不含包装的可上市蛋净质量，并从批次记录核实枚数到质量换算。 |  |
| `validate_process_route` | 过程图 | 要求接收/分级、一种明确带壳处理路线、包装/储存，以及每个有条件适用的清洁或冷却过程。 | `codex-cxc-15-1976`; `shenga-et-al-2010-in-shell-pasteurization` |
| `validate_atomic_exchange` | 清单行 | 拒绝任何合并的公用工程、燃料、化学品、包装、废物、制冷剂或排放行；每个选定流必须是一个可解析交换。 |  |
| `validate_treatment` | 处理批次 | 确认监测路线条件符合获准的熟制、巴氏处理或保藏规范，偏差批次已剔除或纠正。 | `codex-cxc-15-1976`; `shenga-et-al-2010-in-shell-pasteurization` |
| `validate_mass_balance` | 每个过程 | 核对实测投入与产品、废物、留存和释放产出，重大不平衡必须解释。 | `iso-14044-2006` |
| `validate_waste_emissions` | 前景产出 | 确认适用的废水、污泥、破损蛋、蛋壳、包装边角料、每种制冷剂释放及每种直接燃烧排放均有独立记录和去向。 | `iso-14044-2006` |
| `validate_bilingual_rows` | 英文和中文 PCR | 确认有相同有序 process id、row id、方向、flow type、受控值和来源 id，并确认每个无 UUID 的中文选定流是准确译名。 |  |
| `validate_range_evidence` | 数量范围 | 除非至少两份独立原文在边界、单位、产品状态和归一化口径上兼容，或权威来源明确规定区间，否则不得增加经验 range。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 保留蛋壳的保藏蛋或熟制蛋前景加工数据集 |
| downstream_use | `secondary_dataset`；审查发布后可作 `background_dataset` |
| allowed_use | 产品碳足迹、LCA、供应链建模、设施改进及产品限定信息和系统边界匹配时的路线比较 |
| excluded_use | 新鲜蛋、不带壳蛋、去壳熟蛋、养殖生产、消费者熟制，或没有路线特定前景数据的另一处理路线 |
| required_metadata | PCR id 和版本；禽种；供应商地理；入厂状态；路线及路线占比；清洁路线；处理验证依据；包装组件；储存条件与时长；分配方法；参考年份；设施地理 |
| required_quality_disclosure | 仪表覆盖；计算值与实测值占比；未解决 Tiangong 身份；质量平衡闭合；处理偏差；废物去向；制冷剂身份与平衡；来源版本；数据缺口 |
| update_trigger | 禽种组合、处理技术或配方、能源、清洁许可或做法、包装形式、制冷系统、储存时长、分配、供应商地理或经验证安全目标发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-22300` | official_guidance | United Nations Statistics Division. Central Product Classification detail, code 22300, “Eggs, in shell, preserved or cooked.” https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/22300（检索日期 2026-08-24）。 | 类别纳入与排除；设施门口产品身份 |
| `codex-cxc-15-1976` | official_guidance | Codex Alimentarius. Code of Hygienic Practice for Eggs and Egg Products, CXC 15-1976. https://workspace.fao.org/sites/codex/Standards/CXC%2015-1976/CXC_015e.pdf（检索日期 2026-08-24）。 | 接收、挑选、分级、干式清洁、清洗、消毒、干燥、涂油、壳内处理、包装、储存、分流和验证规则 |
| `shenga-et-al-2010-in-shell-pasteurization` | literature | Shenga, E.; Singh, R. P.; Yadav, A. S. Effect of pasteurization of shell egg on its quality characteristics under ambient storage. Journal of Food Science and Technology 47, 420–425. https://doi.org/10.1007/s13197-010-0069-2. | 完整带壳蛋的干热、湿热和微波巴氏处理路线证据；处理条件与产品质量监测 |
| `chiozzi-et-al-2022-thermal-nonthermal` | literature | Chiozzi, V.; Agriopoulou, S.; Varzakas, T. Advances, Applications, and Comparison of Thermal (Pasteurization, Sterilization, and Aseptic Packaging) against Non-Thermal (Ultrasounds, UV Radiation, Ozonation, High Hydrostatic Pressure) Technologies in Food Processing. Applied Sciences 12(4), 2202. https://doi.org/10.3390/app12042202. | 一般热/非热处理分类及采集处理能量与用水记录的必要性；不用于蛋类特定数量 range |
| `iso-14044-2006` | standard | ISO 14044:2006. Environmental management — Life cycle assessment — Requirements and guidelines. https://www.iso.org/standard/38498.html（2022 年确认现行；检索日期 2026-08-24）。 | 边界一致性、细分、分配层级、清单完整性和质量平衡校验 |
