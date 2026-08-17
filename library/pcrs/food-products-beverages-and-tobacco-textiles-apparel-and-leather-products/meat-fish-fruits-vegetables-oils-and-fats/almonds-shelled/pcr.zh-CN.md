---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.almonds-shelled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 去壳扁桃仁

## 1. 范围与适用性

本 PCR 覆盖从接收已声明的去壳扁桃仁批次开始，经过批次验收、清理、分选和分级、条件性水分调节、包装以及任何纳入的储存所形成的前景生产。参考产品是以商业状态供应的扁桃仁；数据集必须声明批次身份、产地、已知时的作物年份或收获期、已知时的品种或商业类型、处理方式、水分状态、缺陷/等级类别、规格标示或分级方法、包装形式以及纳入的储存时长。

种植、果园建立、采收、脱青皮和去壳位于前景边界之外。调味、烘烤、去皮、切片、研磨、榨油、杏仁膏及其他进一步加工的扁桃仁产品不在本 PCR 范围内。接收的去壳扁桃仁、能源、水、包装及其他采购投入仍须连接上游数据集。

分选后，一个批次只能采用一条路线：已达到声明商业状态时直接包装，或在进行水分调整时先调湿再包装。同一质量不得同时分配到两个分支。标记为 `reasoned_estimate` 的数值范围仅为有条件的候选阶段筛查值；一旦获得获接受的来源支持范围或至少连续 12 个代表性生产批次的前景证据，即应予以替换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.almonds-shelled |
| classification_refs | CPC 3.0 子类 21422，去壳扁桃仁 |
| covered_products | 以去壳扁桃仁销售、处于已声明商业状态并采用已声明包装形式的整粒或破碎食用扁桃仁 |
| excluded_products | 带壳扁桃；种植、采收、脱青皮或去壳产物；烘烤、去皮、调味、切片、研磨、糊状、糖果、饮料和油类产品 |
| representative_product | 可发运的包装去壳扁桃仁 |
| production_route | 接收与批次界定；清理、分选和分级；直接包装或条件性水分调节后包装；纳入时声明储存 |
| market_state | 具有已声明水分状态、缺陷/等级类别、规格标示或分级方法、处理方式、包装形式及批次限定信息的商业状态去壳扁桃仁 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可发运的商业状态去壳扁桃仁 |
| How much | 1 kg 去壳扁桃仁净质量 |
| How well | 符合生产者声明的商业状态、水分状态、缺陷/等级类别、规格标示或分级方法、处理方式及包装规格 |
| How long or cycle | 包装门口；声明发运前任何已纳入的储存时长 |
| reference_flow_link | 参考流为 `packaging_and_storage` 的包装去壳扁桃仁输出，归一化为 1 kg 扁桃仁净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净质量 |
| 参考产品流 | Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 批次标识；供应商或产地；已知时的作物年份或收获期；已知时的品种或商业类型；处理方式；接收时水分状态及测量方法；缺陷/等级类别；规格标示或分级方法；直接包装或调湿路线；包装形式与净质量；纳入的储存时长与条件 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量不含包装、外来杂质和单独报告的剔除物的扁桃仁净质量；归一化前保留测量精度。 |
| `moisture_condition` | 接收、分级、调湿和包装扁桃仁 | 质量分数 | kg/kg 或质量 % | 记录水分采用湿基还是干基、取样时间及测量方法；未经明确换算不得比较或合并不同基准的数值。 |
| `mass_balance_basis` | 扁桃仁投入与产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每批次均在一个已声明水分基准上核对投入、可售产出、剔除物、样品及测得的质量变化。 |
| `packaging_conversion` | 以件数计的包装 | Mass | kg | 使用实际包装形式的实测或供应商特定单件质量将件数换算为质量，并保留换算记录。 |
| `storage_normalization` | 储存公用工程与损失 | Energy 或 Mass | 已声明单位 | 记录储存时长和条件；按扁桃仁净质量和纳入的储存时间共同归一化储存公用工程与损失。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收的已去壳扁桃仁批次，并在可得范围内声明供应商或产地、批次标识、处理方式、水分状态、缺陷/等级信息和规格信息 |
| starting_condition_role | 前景门口投入及可追溯性锚点；本 PCR 前景中不重复去壳过程 |
| product_classification_scope | CPC 3.0 子类 21422 下用于商业供应的去壳扁桃仁 |
| recursive_input_rule | 同类别去壳扁桃仁投入仅作为已声明接收批次记录一次，连接上游数据集，不再按本 PCR 展开为前景生产 |
| upstream_dataset_requirement | 接收的去壳扁桃仁以及纳入所声明产品系统的全部采购能源、水、包装、处理材料和运输均须使用上游数据集 |
| disclosure | 声明投入批次状态、纳入的单元操作、直接包装或调湿路线、湿法清洗状态、储存时长与条件、处理及熏蒸状态、剔除物去向，以及任何省略的操作或流 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_start_shelled` | 所有数据集 | 前景边界从接收去壳扁桃仁开始；不得将种植、脱青皮或去壳作为前景操作纳入。 | `unsd-cpc-3-0-21422`; `unece-ddp-06-2024` |
| `sb_route_exclusivity` | 分选后批次 | 每一质量部分只能分配到直接包装路线，或调湿后包装路线；不得对同一质量同时建模两个分支。 |  |
| `sb_upstream_inputs` | 采购投入 | 将接收扁桃仁、能源、水、包装及其他采购投入连接至适当上游数据集，并披露数据集替代。 | `eu-pef-2021-2279` |
| `sb_completeness` | 前景操作 | 记录所有已纳入的材料和能源投入、产品、剔除物和废物产出以及实测直接排放；披露排除项和缺失数据，不采用无依据的数值截断。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `reception_and_lot_definition` | 接收与批次界定 | required | 所有前景数据集 | 建立接收扁桃仁的质量、状态、来源及验收/拒收质量 | kg 已验收接收扁桃仁 |
| `cleaning_sorting_and_grading` | 清理、分选和分级 | required | 所有前景数据集；仅实际进行湿法清洗时纳入该操作 | 去除外来杂质和不合格扁桃仁，并建立可售等级和规格类别 | kg 分级扁桃仁 |
| `moisture_conditioning` | 水分调节 | conditional | 仅在包装前对批次进行干燥或其他水分调节时纳入；直接包装分支省略 | 调整并核验已声明商业水分状态 | kg 调湿后扁桃仁 |
| `packaging_and_storage` | 包装与储存 | required | 始终纳入包装；仅对发运前已声明时长纳入储存清单 | 生产参考产品并核算包装及已纳入储存 | 1 kg 包装扁桃仁净质量 |

### 过程：接收与批次界定（`reception_and_lot_definition`）

#### 输入

##### 产品流

###### 接收的去壳扁桃仁批次（`received_shelled_almond_lot`）

已去壳扁桃仁批次以其质量和商业状态限定信息跨越前景门口。每批次测量其数量并连接上游数据集。

- 选定流：Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量进入批次验收的接收时扁桃仁净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收接收扁桃仁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception_mass_and_lot`
- 来源：`unsd-cpc-3-0-21422`; `unece-ddp-06-2024`
- 数量范围：有条件的暂定进料质量筛查范围；取得获接受的来源支持范围或连续 12 个代表性批次后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg/kg 已验收接收扁桃仁
  - 基准：每 kg 已验收接收扁桃仁的宽泛候选阶段质量平衡筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收接收扁桃仁（`accepted_received_kernels`）

已验收扁桃仁携带声明的批次身份和状态进入清理与分选。

- 选定流：Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在已声明水分基准上，以进料批次质量减去接收剔除物和留存样品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接收的去壳扁桃仁批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_reception_mass_and_lot`
- 来源：
- 数量范围：有条件的暂定验收得率筛查范围；取得获接受的来源支持范围或连续 12 个代表性批次后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1
  - 单位：kg/kg 接收的去壳扁桃仁批次
  - 基准：每 kg 接收批次的宽泛候选阶段验收质量筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 接收剔除物与留存样品（`reception_rejects_and_samples`）

在记录允许时，按去向分别记录被拒收的批次部分、接收时去除的外来物以及破坏性或留存样品。

- 选定流：场址特定剔除物或废物流
- 流属性/单位：Mass / kg
- 数量规则：测量未进入清理与分选的拒收及取样质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接收的去壳扁桃仁批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception_mass_and_lot`
- 来源：`unece-ddp-06-2024`
- 数量范围：有条件的暂定接收剔除筛查范围；取得获接受的来源支持范围或连续 12 个代表性批次后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 接收的去壳扁桃仁批次
  - 基准：每 kg 接收批次的宽泛候选阶段剔除质量筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：清理、分选和分级（`cleaning_sorting_and_grading`）

#### 输入

##### 产品流

###### 进入清理与分选的已验收扁桃仁（`kernels_to_cleaning_sorting`）

已验收接收扁桃仁是本过程唯一的同类别投入。

- 选定流：Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从接收记录转入的已验收质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 分级扁桃仁
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sorting_records`
- 来源：
- 数量范围：有条件的暂定分选进料筛查范围；取得获接受的来源支持范围或连续 12 个代表性批次后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg/kg 分级扁桃仁
  - 基准：每 kg 分级扁桃仁的宽泛候选阶段投入质量筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清理与分选能源（`cleaning_sorting_energy`）

按能源载体分别记录清理、光学或人工分选、输送和分级所用的计量电力及其他采购能源载体。

- 选定流：场址特定电力及能源载体流
- 流属性/单位：Energy / kWh 或 MJ，并保留载体特定单位
- 数量规则：分表计量或按发票核对并归属于加工批次的能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 分级扁桃仁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting_records`
- 来源：
- 数量范围：有条件的暂定分选能源筛查范围；取得获接受的来源支持范围或连续 12 个代表性批次后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg 分级扁桃仁
  - 基准：每 kg 分级扁桃仁的宽泛候选阶段采购能源当量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 湿法清洗用水（`wet_cleaning_water`）

仅在实际进行湿法清洗时记录用水；干法清理路线必须报告为零并说明干法操作。

- 选定流：场址特定供水流
- 流属性/单位：Volume / m3
- 数量规则：计量或按批次记录的湿法清洗供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：湿法清洗批次每 1 kg 分级扁桃仁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting_records`
- 来源：
- 数量范围：仅用于湿法清洗的有条件暂定用水筛查范围；取得获接受的来源支持范围或连续 12 个代表性批次后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：m3/kg 分级扁桃仁
  - 基准：仅适用于湿法清洗路线的宽泛候选阶段用水估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 分级去壳扁桃仁（`graded_shelled_almond_kernels`）

按已声明商业状态、缺陷/等级类别、规格标示或分级方法以及处理状态对可售扁桃仁进行分类。

- 选定流：Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按等级和规格类别测量分级扁桃仁质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 进入清理与分选的已验收扁桃仁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting_records`
- 来源：`unece-ddp-06-2024`
- 数量范围：有条件的暂定分选得率筛查范围；取得获接受的来源支持范围或连续 12 个代表性批次后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1
  - 单位：kg/kg 进入清理与分选的已验收扁桃仁
  - 基准：每 kg 分选投入的宽泛候选阶段分级产出质量筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分选剔除物与外来杂质（`sorting_rejects_and_foreign_matter`）

当去向或组成不同时，分别记录不符合声明等级的扁桃仁、壳碎片、石块、作为废物收集的粉尘及其他去除物。

- 选定流：场址特定剔除物或废物流
- 流属性/单位：Mass / kg
- 数量规则：按组分和去向测量剔除质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 进入清理与分选的已验收扁桃仁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting_records`
- 来源：`unece-ddp-06-2024`
- 数量范围：有条件的暂定分选剔除筛查范围；取得获接受的来源支持范围或连续 12 个代表性批次后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 进入清理与分选的已验收扁桃仁
  - 基准：每 kg 分选投入的宽泛候选阶段剔除质量筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 湿法清洗废水（`wet_cleaning_wastewater`）

仅对湿法清洗路线记录进入现场处理或排放之前的废水。

- 选定流：场址特定废水流
- 流属性/单位：Volume / m3
- 数量规则：计量排放量，或以用水投入减去实测滞留水和蒸发水计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：湿法清洗批次每 1 kg 分级扁桃仁
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sorting_records`
- 来源：
- 数量范围：仅用于湿法清洗的有条件暂定废水筛查范围；取得获接受的来源支持范围或连续 12 个代表性批次后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：m3/kg 分级扁桃仁
  - 基准：仅适用于湿法清洗路线的宽泛候选阶段废水估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：水分调节（`moisture_conditioning`）

#### 输入

##### 产品流

###### 需要调湿的分级扁桃仁（`kernels_requiring_conditioning`）

本投入仅存在于分配至调湿分支的批次；直接包装批次绕过整个过程。

- 选定流：Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅分配至调湿的分级质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 调湿后扁桃仁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`unece-ddp-06-2024`
- 数量范围：仅在调湿发生时使用的有条件暂定调湿进料筛查范围；取得获接受的来源支持范围或连续 12 个代表性批次后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg/kg 调湿后扁桃仁
  - 基准：每 kg 调湿后扁桃仁的宽泛候选阶段投入质量筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调湿能源（`conditioning_energy`）

仅在实施调湿时，按载体分别记录计量电力和采购热能。

- 选定流：场址特定电力和热能载体流
- 流属性/单位：Energy / kWh 或 MJ，并保留载体特定单位
- 数量规则：计量或按发票核对并归属于调湿批次的能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 调湿后扁桃仁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：
- 数量范围：仅在调湿发生时使用的有条件暂定调湿能源筛查范围；取得获接受的来源支持范围或连续 12 个代表性批次后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg 调湿后扁桃仁
  - 基准：每 kg 调湿后扁桃仁的宽泛候选阶段采购能源当量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调湿后去壳扁桃仁（`conditioned_shelled_almond_kernels`）

调湿后扁桃仁达到生产者声明的水分状态，并保留批次、等级、规格和处理限定信息。

- 选定流：Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：放行至包装时测量调湿后扁桃仁质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 分配至调湿的分级扁桃仁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`unece-ddp-06-2024`
- 数量范围：仅在调湿发生时使用的有条件暂定调湿得率筛查范围；取得获接受的来源支持范围或连续 12 个代表性批次后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1
  - 单位：kg/kg 分配至调湿的分级扁桃仁
  - 基准：每 kg 调湿投入的宽泛候选阶段产出质量筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 调湿剔除物（`conditioning_rejects`）

按质量和去向记录调湿后剔除的扁桃仁及任何收集的固体残留物。

- 选定流：场址特定剔除物或废物流
- 流属性/单位：Mass / kg
- 数量规则：实测调湿剔除质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 分配至调湿的分级扁桃仁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：
- 数量范围：仅在调湿发生时使用的有条件暂定调湿剔除筛查范围；取得获接受的来源支持范围或连续 12 个代表性批次后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 分配至调湿的分级扁桃仁
  - 基准：每 kg 调湿投入的宽泛候选阶段剔除质量筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 调湿直接排放（`direct_conditioning_emissions`）

仅在现场燃料燃烧或其他直接排放源服务于调湿时，按载体记录特定直接排放；上游排放保留在采购能源数据集中。

- 选定流：适用的场址特定基本排放流
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或依据计量燃料和已披露的获接受因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 调湿后扁桃仁
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：仅适用于相应直接排放源的有条件暂定排放筛查范围；在接受源特定因子或测量值后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 调湿后扁桃仁
  - 基准：每 kg 调湿后扁桃仁的宽泛候选阶段载体特定排放筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：包装与储存（`packaging_and_storage`）

#### 输入

##### 产品流

###### 进入包装的可售扁桃仁（`saleable_kernels_to_packaging`）

采用直接包装分支的分级扁桃仁，或调湿分支的调湿后扁桃仁；同一质量部分绝不同时采用两者。

- 选定流：Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由已声明互斥路线放行至包装的实测扁桃仁净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装去壳扁桃仁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_records`
- 来源：
- 数量范围：有条件的暂定包装进料筛查范围；取得获接受的来源支持范围或连续 12 个代表性批次后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.2
  - 单位：kg/kg 包装去壳扁桃仁净质量
  - 基准：每 kg 参考产品的宽泛候选阶段投入质量筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

按材料和包装形式分别记录一级、二级和分摊的三级包装。

- 选定流：材料特定包装流
- 流属性/单位：Mass / kg
- 数量规则：实测包装质量，或以包装件数乘以实测或供应商特定单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装去壳扁桃仁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_records`
- 来源：
- 数量范围：有条件的暂定包装质量筛查范围；取得供应商规格、实测包装质量或获接受的来源支持范围后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 包装去壳扁桃仁净质量
  - 基准：每 kg 参考产品的宽泛候选阶段包装质量估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装与储存能源（`packaging_storage_energy`）

按载体和用途分别记录包装线能源，以及已声明纳入储存期间使用的能源。

- 选定流：场址特定电力及能源载体流
- 流属性/单位：Energy / kWh 或 MJ，并保留载体特定单位
- 数量规则：包装和已纳入储存的计量能源或按时间分配的设施能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装去壳扁桃仁净质量及已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_records`
- 来源：
- 数量范围：有条件的暂定包装与储存能源筛查范围；取得获接受的来源支持范围或相同储存条件下连续 12 个代表性批次后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 包装去壳扁桃仁净质量
  - 基准：已声明包装和储存期间的宽泛候选阶段能源估计
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装去壳扁桃仁（`packaged_shelled_almonds`）

本流是包装门口的参考产品，仅包括发运前已声明的储存期。

- 选定流：Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：参考流恰为 1 kg 扁桃仁净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 采集协议：
- 来源：`unsd-cpc-3-0-21422`; `unece-ddp-06-2024`
- 数量范围：参考流恒等关系
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg 扁桃仁净质量
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：来源规则（`source_rule`）
  - 来源：`unsd-cpc-3-0-21422`; `unece-ddp-06-2024`

##### 废物流

###### 包装损失与废物（`packaging_losses_and_waste`）

按材料和去向分别记录受损扁桃仁、散落产品、包装边角料、不合格包装及废弃包装。

- 选定流：场址特定产品损失与包装废物流
- 流属性/单位：Mass / kg
- 数量规则：测量质量，或按实际包装形式将件数换算为质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装去壳扁桃仁净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_records`
- 来源：
- 数量范围：有条件的暂定包装损失筛查范围；取得获接受的来源支持范围或连续 12 个代表性批次后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 包装去壳扁桃仁净质量
  - 基准：每 kg 参考产品的宽泛候选阶段产品损失与包装废物合计筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 储存制冷剂排放（`storage_refrigerant_emissions`）

仅在纳入冷藏且设备泄漏可归属于已声明储存期间时记录制冷剂排放。

- 选定流：制冷剂特定基本排放流
- 流属性/单位：Mass / kg
- 数量规则：实测制冷剂损失，或将经核验的设备泄漏按质量和储存时长分配计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装去壳扁桃仁净质量及已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：仅用于冷藏的有条件暂定制冷剂排放筛查范围；取得经核验的设备泄漏记录或源特定因子后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 包装去壳扁桃仁净质量
  - 基准：已声明储存期间的宽泛候选阶段制冷剂损失估计
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | 所有前景过程 | 优先采用过程细分、直接计量和批次级质量平衡，以避免分配。 | `eu-pef-2021-2279` |
| `alloc_route_specific` | 共用设备与公用工程 | 使用可得的最具物理代表性的驱动因素分配实测共用公用工程，如设备时间、计量能源、加工质量或储存质量-时间；披露驱动因素及受影响流。 | `eu-pef-2021-2279` |
| `alloc_reject_destinations` | 剔除物、样品与回收材料 | 按有文件记录的去向和经济功能处理产出；无与研究目标一致且有来源支持的分配或替代规则时，不得赋予避免负担或共产品抵扣。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reception_mass_and_lot` | `reception_and_lot_definition` | 接收质量、限定信息、验收质量、剔除物、样品 | 地磅或经校准秤记录；接收检验；实验室或快速水分记录 | lot_id; supplier_or_origin; crop_year_or_period; variety_or_type; treatment; received_net_mass; accepted_mass; reject_mass; sample_mass; moisture_value; moisture_basis; method; grade; size | 采集每个接收批次，并以秤单和检验记录核对验收记录 | kg; kg/kg 或质量 % | 每批次 | 报告期内全部批次 | 所有前景接收点 | 按批次和去向汇总质量；归一化前保留批次级结果 | 校准状态；票据或批次记录；取样记录；水分方法；审核者签字 |
| `cp_sorting_records` | `cleaning_sorting_and_grading` | 转入扁桃仁、能源、条件性用水、分级产出、剔除物、废水 | 批次质量记录；分表或发票分配；水表；等级和规格检验 | lot_id; input_mass; energy_by_carrier; wet_cleaning_flag; water_input; graded_mass_by_class; reject_mass_by_fraction; wastewater_volume | 采集每批次并保留等级、规格、处理和湿法清洗路线 | kg; kWh; MJ; m3 | 每批次及每个计量期间 | 报告期内全部批次 | 所有前景分选线 | 核对批次投入与分级产出、剔除物、样品、废水及实测质量变化；按已披露驱动因素分配共用公用工程 | 秤和仪表校准；等级检验；分配工作表；质量平衡复核 |
| `cp_conditioning_records` | `moisture_conditioning` | 调湿路线质量、能源、调湿后产出、剔除物、直接排放 | 路线分配；批次秤；水分试验；能源仪表；燃料记录；获接受的排放因子或测量 | lot_id; conditioning_flag; input_mass; input_moisture; output_mass; output_moisture; energy_by_carrier; reject_mass; fuel_quantity; emission_factor_id; measured_emission | 仅记录调湿批次，并将直接包装批次排除在本协议之外 | kg; kg/kg 或质量 %; kWh; MJ; 载体特定排放单位 | 每个调湿批次及每个计量期间 | 报告期内全部调湿批次 | 所有前景调湿设备 | 按调湿后产出归一化；仅使用采集的燃料或测量字段及已披露获接受因子计算直接排放 | 路线检查；秤、水分和仪表校准；因子来源；质量平衡复核 |
| `cp_packaging_storage_records` | `packaging_and_storage` | 路线特定扁桃仁投入、包装、能源、参考产出、损失、制冷剂排放 | 包装批次记录；包装规格或实测单件质量；能源仪表；仓库库存；制冷剂服务日志 | lot_id; source_route; kernel_input_mass; packaged_net_mass; package_material; package_count; mass_per_item; packaging_energy; storage_energy; storage_start; storage_end; temperature_condition; loss_mass; waste_mass; refrigerant_type; refrigerant_loss | 采集每个包装批次和纳入的储存区间；核验来源路线互斥 | kg; item; kWh; MJ; day; degC; 载体特定排放单位 | 每个包装批次；储存及制冷剂记录按月 | 报告期内全部包装批次及纳入的储存天数 | 所有前景包装和纳入的储存设施 | 将件数换算为质量；按净质量-时间分配储存公用工程和泄漏；归一化为 1 kg 包装产出 | 包装称量记录；仪表记录；库存核对；服务日志；路线和时长复核 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 所有清单行 | 归一化数量 = 批次或期间数量除以包装扁桃仁净质量；储存行还须保留纳入的质量-时间分母 | 行数量；packaged_net_mass；适用时的储存时长 | 每 1 kg 参考流的数量，并披露储存时间 | `eu-pef-2021-2279` |
| `calc_reception_balance` | 接收 | accepted_mass = received_net_mass - reject_mass - sample_mass；仅在需要有文件记录的水分基准换算时调整 | received_net_mass; reject_mass; sample_mass; 水分值及基准 | 已验收接收扁桃仁质量 |  |
| `calc_sorting_balance` | 清理与分选 | 核对 input_mass 与 graded_mass_by_class、reject_mass_by_fraction、样品质量及实测水分相关质量变化；报告未解释差异 | 投入和产出质量字段；水分字段 | 分级产出、剔除物及质量平衡差异 |  |
| `calc_conditioning_balance` | 调湿路线 | 在已声明水分基准上核对调湿投入与产出，并将蒸发或加入的水同固体剔除物分开 | input_mass; output_mass; input_moisture; output_moisture; reject_mass | 调湿后产出、水分相关质量变化、剔除物 |  |
| `calc_packaging_mass` | 包装材料 | 对每种材料和形式，包装质量 = package_count 乘以实测或供应商特定 mass_per_item | package_count; mass_per_item; package_material | 每 1 kg 参考流的包装 kg 数 |  |
| `calc_storage_allocation` | 纳入的储存 | 按包装净质量乘以储存时长分配储存能源和经核验的制冷剂损失，除非有文件记录的更具代表性实测驱动因素 | 储存能源；制冷剂损失；包装质量；储存时长 | 每 1 kg 参考流和已声明时长的储存清单 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_and_condition` | 所有批次 | 保留批次身份和可得的商业状态限定信息，包括水分方法、缺陷/等级类别、规格标示或方法、处理方式和包装形式。 | 接收、检验、实验室及包装记录；`unece-ddp-06-2024` |
| `dq_route_exclusivity` | 分选后的每一质量部分 | 证明该质量采用直接包装，或调湿后包装，且无重复。 | 路线分配和包装来源路线核对 |
| `dq_measurement` | 质量、水分、能源、水及直接排放记录 | 适用时使用经校准或核验的仪器，保留单位和水分基准，并记录共用仪表的分配。 | 校准证书、仪表检查、实验室方法及分配工作表 |
| `dq_temporal_and_site_coverage` | 报告期 | 覆盖声明报告期内所有前景场址和全部批次；披露排除项、停机、异常批次和储存区间。 | 批次登记、生产日历、场址清单及异常日志 |
| `dq_mass_balance` | 每批次 | 核对投入、可售产出、剔除物、样品、废物及水分相关质量变化，并调查未解释差异。 | 经签字的批次质量平衡工作表 |
| `dq_provisional_range_replacement` | 每个 `reasoned_estimate` 范围 | 将该范围视为有条件和临时值；一旦获得获接受的来源支持范围或至少连续 12 个代表性批次记录即予替换，并记录替换决定。 | 来源复核记录或保留的批次序列分析 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_identity` | 参考产品与数据集元数据 | 所选参考产品流 UUID、质量属性 UUID、单位组 UUID、CPC 引用及已声明产品限定信息必须与本 PCR 一致。 | `unsd-cpc-3-0-21422`; `unece-ddp-06-2024` |
| `val_reference_mass` | 参考流 | 产出必须等于 1 kg 扁桃仁净质量；包装、外来物、剔除物和样品不得计入该质量。 |  |
| `val_route_exclusive` | 分选后路线 | 每一质量部分必须显示为直接包装，或调湿后包装，绝不得同时采用两者。 |  |
| `val_process_conditions` | 条件性操作 | `moisture_conditioning`、湿法清洗流、储存清单、调湿直接排放和制冷剂排放仅可在其声明纳入条件成立时出现。 |  |
| `val_mass_balance` | 每个前景过程 | 投入和产出必须在已声明水分基准上核对；未解释差异必须量化并披露。 | `eu-pef-2021-2279` |
| `val_inventory_completeness` | 前景数据包 | 每个纳入过程必须报告材料和能源投入、产品、剔除物和废物产出、适用的直接排放、采集协议链接、单位及归一化基准；排除项与缺失值必须明确。 | `eu-pef-2021-2279` |
| `val_provisional_ranges` | `reasoned_estimate` 范围 | 确认每个暂定范围均标记为有条件、具有替换触发器，且未取代已有场址记录或获接受的来源支持证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景单元过程数据包，汇总形成包装去壳扁桃仁生产数据集 |
| downstream_use | secondary_dataset；经方法审查并核验路线、地理、技术和时间代表性后可作为 background_dataset |
| allowed_use | 对接收去壳扁桃仁在已声明直接包装或调湿路线及已声明储存条件下生产包装去壳扁桃仁进行建模 |
| excluded_use | 种植、带壳扁桃生产、脱青皮、去壳、烘烤、去皮、调味、切割、研磨、制糊、制饮料、榨油或未披露的路线替代 |
| required_metadata | canonical PCR id；参考 UUID；CPC 引用；地理；报告期；设施覆盖；批次和商业状态限定信息；直接包装或调湿路线；湿法清洗状态；处理方式；包装形式；储存时长和条件；分配驱动因素；上游数据集引用 |
| required_quality_disclosure | 前景与上游数据占比；仪器和水分方法质量；时间和场址覆盖；质量平衡差异；缺失数据与替代；条件性操作；暂定 `reasoned_estimate` 范围及替换状态 |
| update_trigger | 产品范围、处理方式、商业状态规格、路线、技术、包装形式、储存条件、分配方法、上游数据集、获接受的外部证据发生变化，或出现可替换暂定范围的代表性批次数据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21422` | official_guidance | 联合国统计司，《中央产品分类》第 3.0 版，子类 21422，去壳扁桃仁 | 产品类别身份，以及排除带壳或进一步加工的产品 |
| `unece-ddp-06-2024` | standard | 联合国欧洲经济委员会，关于扁桃仁营销和商业质量控制的 UNECE DDP-06 标准，2024 年版 | 扁桃仁身份以及商业状态、水分、缺陷/等级、规格、包装和批次限定信息；不作为清单默认数量 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会关于使用环境足迹方法的建议（EU）2021/2279，包括产品环境足迹方法 | 通用生命周期清单完整性、数据质量、分配层级、归一化和披露原则 |
