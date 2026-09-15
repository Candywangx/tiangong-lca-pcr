---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.beer-made-from-malt
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 麦芽酿制啤酒

## 1. 范围与适用性

本 PCR 适用于 CPC 24310 麦芽酿制的含酒精啤酒前景数据集。前景起点为交付至啤酒厂的配料、包装、公用工程及其他投入，终点为啤酒厂门口已包装或以其他方式完成发运准备的成品啤酒。范围包括麦汁制备、发酵与后处理、灌装或散装准备、清洗、制冷、厂内公用工程、废水、损耗、废物和共产品。

农业生产、制麦、配料与包装制造、入厂运输、分销、零售或使用阶段冷藏、消费损耗和生命末期属于背景阶段，研究边界需要时予以连接。不包括另行分类的无醇啤酒、苹果酒、梨酒、蜂蜜酒、葡萄酒、作为产品的麦芽、工业乙醇发酵液和一般啤酒厂服务。重要的配方、酒精度和包装差异必须采用产品特定数据或披露情景表示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.beer-made-from-malt |
| classification_refs | CPC 3.0：24310，Beer made from malt，exact |
| covered_products | 麦芽酿制的含酒精成品啤酒，包装或散装发运形式 |
| excluded_products | 无醇啤酒；苹果酒；梨酒；蜂蜜酒；葡萄酒；麦芽；工业乙醇发酵液；一般啤酒厂服务 |
| representative_product | 啤酒厂门口工业化生产的麦芽啤酒 |
| production_route | 麦汁制备；发酵与后处理；灌装或散装发运准备 |
| market_state | 符合销售条件的成品啤酒，并声明类型、酒精度、包装形式和保质期 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 啤酒厂门口麦芽酿制的含酒精成品啤酒 |
| How much | 0.1 m3（1 hl） |
| How well | 符合销售条件；声明啤酒类型、酒精体积分数及包装或散装发运形式 |
| How long or cycle | 最低保质期至少一个月；连续 12 个月生产报告期 |
| reference_flow_link | Beer `6da29594-9e39-48eb-82d1-c7a4484d3740` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 0.1 m3 |
| 参考产品流 | 啤酒 `6da29594-9e39-48eb-82d1-c7a4484d3740` |
| 参考流属性 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 啤酒类型；酒精体积分数；包装或散装形式；包装材料及可重复使用性；啤酒厂场址；报告期；最低保质期 |

构建前景数据包时，所有必需限定信息须在元数据或等效产品与过程字段中声明。天工 Beer 流处于有效状态（`state_code=100`）并具有精确 CPC 24310 分类。下游饮用啤酒画像采用 Beer PEFCR 默认 2% 损耗时，每 0.1 m3 饮用量对应 0.102 m3 销售量。仅在产品无法保持性质一个月时采用 7%，或以代表性证据替换默认值。下游缩放不改变厂门口参考流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_volume` | 啤酒参考产品及啤酒中间体 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 在声明的测量温度记录体积；将 L 或 hl 精确换算为 m3，并保留原始读数。 |
| `inventory_mass` | 按质量计量的配料、包装、共产品、废物和排放 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录干基或收到状态，重要时记录含水率；使用已核验的 Units of mass 组 `93a60a57-a4c8-11da-a746-0800200c9a66`。 |
| `energy_sum` | 电力、燃料、蒸汽、热、冷量及其他能源 | Energy | MWh | 保留原生数量、换算因子、热值基准和计量范围；仅在总能源计算时换算为 MWh。 |
| `period_normalization` | 所有前景流 | 参考流属性 | 每 0.1 m3 | 汇总连续 12 个月，核对库存变化和损耗，必要时分配，再归一化至合格啤酒产出。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_brewery_gate` | 前景数据集 | 从交付的啤酒厂投入至完成发运准备的啤酒，包括麦汁制备、发酵、后处理、灌装或散装准备、清洗、制冷、厂内公用工程、废水、损耗、废物和共产品。 | `ec-jrc-fdm-bref-2019`; `brewers-europe-beer-pefcr-2025` |
| `boundary_upstream_inputs` | 生命周期模型 | 连接配料、麦芽、能源、水、化学品、制冷剂、包装和入厂运输的上游数据集；有供应商特定数据时优先采用。 | `brewers-europe-beer-pefcr-2025` |
| `boundary_downstream_profile` | 生命周期模型 | 需要从摇篮到坟墓结果时，加入适用于声明市场和包装系统的分销、冷藏、产品损耗、包装生命末期及其他下游阶段。 | `brewers-europe-beer-pefcr-2025` |
| `boundary_no_cutoff` | 纳入阶段 | 不得按质量、能量或环境显著性阈值省略已识别的重要流。缺失数量应透明估计、标记待替换并测试重要性。 | `brewers-europe-beer-pefcr-2025` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 交付至啤酒厂的麦芽、辅料、啤酒花或其制品、酵母、水、能源、清洗材料、包装及其他投入 |
| starting_condition_role | 啤酒厂接收点的背景—前景接口 |
| product_classification_scope | CPC 24310 麦芽酿制含酒精啤酒 |
| recursive_input_rule | 从其他场址接收的成品啤酒作为上游啤酒数据集；仅本场址执行的后处理、调配或包装留在本地前景。 |
| upstream_dataset_requirement | 为交付材料和公用工程连接代表性生产及运输数据集；有供应商特定数据时予以采用。 |
| disclosure | 声明啤酒厂场址、报告期、起始物料状态、包装系统、外包操作、缺失流、估计及偏离。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `wort_production` | 麦汁制备 | `required` | 所有覆盖的啤酒生产 | 将酿造配料和水转化为冷却加酒花麦汁 | 冷却麦汁转移体积 |
| `fermentation_and_finishing` | 发酵与后处理 | `required` | 所有覆盖的啤酒生产 | 发酵、熟成、过滤或以其他方式完成啤酒后处理 | 成品啤酒转移体积 |
| `filling_and_packaging` | 灌装与包装 | `required` | 未采用零售包装时包括散装发运准备 | 使成品啤酒具备发运条件并提供参考输出 | 0.1 m3 发运就绪啤酒 |

### 过程：麦汁制备（`wort_production`）

#### 输入

##### 产品流

###### 麦芽谷物与辅料（`malted_cereals_and_adjuncts`）

主要可发酵物料在此跨越啤酒厂边界，其数量由收货、配方和库存记录确定。

- 选定流：麦芽谷物与酿造辅料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以一致的干基或收到状态记录每种配料，并核对采购、库存和配方使用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`brewers-europe-beer-pefcr-2025`
- 数量范围：麦芽大麦配方 QA 筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：6.13
  - 上限：16
  - 单位：kg
  - 基准：每 0.1 m3 成品啤酒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`brewers-europe-beer-pefcr-2025`

###### 啤酒花及其制品（`hops_and_hop_products`）

啤酒花、颗粒或浸膏跨入麦汁制备；采购和配方记录确定数量，并保留产品形态和浓度。

- 选定流：啤酒花、啤酒花颗粒或啤酒花浸膏
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按采购基准分别记录每种啤酒花产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`brewers-europe-beer-pefcr-2025`

###### 酿造用水（`wort_brewing_water`）

水跨入糖化、过滤、洗糟和煮沸，其数量由工艺计量或批次体积核对确定。

- 选定流：麦汁制备酿造用水
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量工艺用水，本行不含清洗水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：保守应用于本过程行的总用水筛选上限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.60
  - 单位：m3
  - 基准：每 0.1 m3 成品啤酒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ec-jrc-fdm-bref-2019`

###### 麦汁制备能源（`wort_energy`）

热能和电力跨入粉碎、糖化、煮沸、泵送、分离与冷却，其数量由计量表或设备计算确定。

- 选定流：麦汁制备热能与电力
- 流属性/单位：Energy / MWh
- 数量规则：依据分表或设备负荷与运行时间计算，并使用有记录的因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：临时单项能源筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：MWh
  - 基准：每 0.1 m3 成品啤酒；不是麦汁制备基准值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 冷却麦汁（`cooled_wort`）

冷却加酒花麦汁跨入发酵，其数量由转移体积及密度或浸出物记录确定。

- 选定流：冷却加酒花麦汁
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：在测量温度记录，并核对蒸发、热凝固物和管线损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wort_batch_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 啤酒糟（`brewers_spent_grain`）

啤酒糟离开麦汁分离进入利用或处理，其数量由称量、含水率和发运记录确定。

- 选定流：湿啤酒糟
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录湿质量、含水率、去向和库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_coproduct_records`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：临时湿啤酒糟筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg
  - 基准：每 0.1 m3 成品啤酒的湿质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：发酵与后处理（`fermentation_and_finishing`）

#### 输入

##### 产品流

###### 冷却麦汁输入（`cooled_wort_input`）

该中间体从麦汁制备跨入本过程，其数量由配对的批次转移记录确定。

- 选定流：来自 `wort_production` 的冷却加酒花麦汁
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：扣除明确的转移损耗后，与配对的 `cooled_wort` 输出相等。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：N 输入（`n_input`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 酿酒酵母（`brewing_yeast`）

购入或扩培酵母跨入发酵，其数量由扩培与投加记录确定，并避免内部回用重复计数。

- 选定流：酿酒酵母
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录鲜质量并区分新、扩培、回用和剩余酵母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 发酵与后处理能源（`fermentation_energy`）

能源跨入制冷、泵送、过滤、稳定和碳酸化，其数量由分表或设备记录确定。

- 选定流：发酵与后处理能源
- 流属性/单位：Energy / MWh
- 数量规则：依据分表或设备负荷、罐占用时间和运行时间计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：临时单项能源筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：MWh
  - 基准：每 0.1 m3 成品啤酒；不是发酵基准值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 灌装前成品啤酒（`finished_beer_before_filling`）

成品啤酒跨入灌装或散装准备，其数量由扣除过滤与转移损耗后的罐体转移体积确定。

- 选定流：灌装前成品啤酒
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：在声明的测量温度记录，并核对罐体和过滤损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 剩余酵母（`surplus_yeast`）

剩余酵母离开发酵进入回用、销售或处理，其数量由罐体和发运记录确定。

- 选定流：剩余酵母
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录湿质量、干物质、内部回用和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_coproduct_records`
- 来源：`ec-jrc-fdm-bref-2019`

##### 基本流

###### 发酵二氧化碳（`fermentation_carbon_dioxide`）

生物源二氧化碳在未回收时跨入空气，其产生和排放量由浸出物转化及回收记录确定。

- 选定流：排入空气的生物源二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分别报告产生、回收、内部回用、出售和排放量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fermentation_records`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：临时发酵二氧化碳筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 0.1 m3 成品啤酒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：灌装与包装（`filling_and_packaging`）

#### 输入

##### 产品流

###### 成品啤酒输入（`finished_beer_input`）

成品啤酒从后处理跨入灌装，其数量由配对的罐体转移记录确定。

- 选定流：来自 `fermentation_and_finishing` 的成品啤酒
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：扣除明确转移损耗后，与配对的 `finished_beer_before_filling` 输出相等。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：N 输入（`n_input`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`brewers-europe-beer-pefcr-2025`

###### 初级包装（`primary_packaging_materials`）

瓶、罐、桶、封口、标签及其他包装跨入灌装，其数量由材料清单和生产线记录确定。

- 选定流：初级包装材料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分别记录每种材料与形式、工艺损耗和可重复使用容器周转次数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`brewers-europe-beer-pefcr-2025`
- 数量范围：临时包装质量筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 0.1 m3 成品啤酒；以包装特定核对为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌装与包装公用工程（`packaging_utilities`）

公用工程跨入灌装、容器清洗和包装，其数量由计量表和运行记录确定。

- 选定流：灌装与包装公用工程
- 流属性/单位：Energy / MWh
- 数量规则：电力、热、水、化学品和制冷剂按原生单位记录；仅在能源求和时换算，并另行记录泄漏。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：`brewers-europe-beer-pefcr-2025`; `ec-jrc-fdm-bref-2019`
- 数量范围：临时单项能源筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：MWh
  - 基准：每 0.1 m3 成品啤酒；不是包装基准值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 啤酒参考产品（`beer_reference_product`）

完成发运准备的产品作为定量参考输出跨越啤酒厂门口，其数量由合格体积固定。

- 选定流：啤酒 `6da29594-9e39-48eb-82d1-c7a4484d3740`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：固定为啤酒厂门口 0.1 m3 合格成品啤酒。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：
- 数量范围：固定参考数量检查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：0.1
  - 单位：m3
  - 基准：啤酒厂门口成品啤酒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 啤酒厂废水（`brewery_wastewater`）

废水从啤酒厂操作跨入外部处理或排放，其数量由排水计量或水量平衡确定。

- 选定流：外部处理前啤酒厂废水
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：核对取水、啤酒、蒸发、共产品含水、循环水和其他损耗；另行记录处理和污染物负荷。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`ec-jrc-fdm-bref-2019`; `eu-bat-fdm-2019`
- 数量范围：啤酒厂废水 QA 筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.15
  - 上限：0.60
  - 单位：m3
  - 基准：每 0.1 m3 成品啤酒；超出时调查而非自动拒绝
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ec-jrc-fdm-bref-2019`; `eu-bat-fdm-2019`

###### 包装废物（`packaging_waste`）

包装损耗从灌装跨入回收或处理，其数量由材料核对和废物记录确定。

- 选定流：包装废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料和处理路线记录，并核对采购、库存、已包装产品和废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每啤酒厂门口 0.1 m3 成品啤酒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_coproduct_records`
- 来源：`brewers-europe-beer-pefcr-2025`
- 数量范围：临时包装废物筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 0.1 m3 成品啤酒；以材料核对为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_coproduction` | 共用啤酒厂操作 | 可行时首先细分计量表、批次、生产线、罐体和清洗事件；啤酒特定配料及包装直接归属。 | `brewers-europe-beer-pefcr-2025` |
| `allocation_beverages_by_volume` | 多种饮料 | 剩余共用投入产出按同一期间成品饮料产量体积分配，并披露分母和所含产品。 | `brewers-europe-beer-pefcr-2025` |
| `allocation_feed_coproducts` | 用作饲料的啤酒糟或类似残余物 | 啤酒厂负荷归于啤酒，饲料共产品不分配负荷，同时报告数量和去向；替代产品抵扣须另设披露情景。 | `brewers-europe-beer-pefcr-2025` |
| `allocation_non_feed_coproduct_review` | 回收二氧化碳、酵母、提取物或其他非饲料共产品 | 优先细分或物理因果归属；否则记录功能、可销售性、数量、价格、基准及敏感性，不得自动使用饲料规则。 | `brewers-europe-beer-pefcr-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `wort_production` | 酿造配料 | 采购、配方和库存记录 | material; form; mass; moisture; batch; stock change | 核对采购、转移、配方领用和库存 | kg | 每次收货及每批 | 连续 12 个月 | 啤酒厂及产品 | 年度净使用量除以合格产出 | 发票；配方系统；库存核对 |
| `cp_wort_batch_records` | `wort_production` | 麦汁及残余物 | 糖化间批记录 | volume; temperature; extract; evaporation; residue; transfer loss | 采集糖化、煮沸、分离、冷却和转移记录 | m3; kg | 每批 | 连续 12 个月 | 糖化间及产品 | 汇总合格批次并归一化 | 校准仪器；批次核对 |
| `cp_utility_meters` | `wort_production`; `fermentation_and_finishing`; `filling_and_packaging` | 水与能源 | 计量表及设备记录 | meter value; fuel; steam; heat; runtime; factor; scope | 读取校准计量表或依据设备负荷和记录运行时间计算 | native unit; MWh; m3 | 每日至每月 | 连续 12 个月 | 计量区域及啤酒厂 | 核对场址总量、细分、分配并归一化 | 校准；账单；计量图；计算表 |
| `cp_fermentation_records` | `fermentation_and_finishing` | 麦汁、酵母、啤酒和二氧化碳 | 罐体及实验室记录 | volume; extract; temperature; yeast; transfer; loss; recovered CO2 | 核对进罐、发酵转化、转移、回收和成品体积 | m3; kg | 每罐或每批 | 连续 12 个月 | 发酵系列及产品 | 汇总合格生产并归一化 | 罐体日志；实验室结果；回收计量表 |
| `cp_packaging_records` | `filling_and_packaging` | 啤酒与包装 | 灌装、材料清单及发运记录 | filled volume; rejects; material; package; trip count; loss | 核对灌装计数、包装领用、库存、废品和可销售产出 | m3; kg | 每次生产运行 | 连续 12 个月 | 生产线及产品 | 汇总合格运行并归一化 | 生产线计数；材料领用；发运核对 |
| `cp_waste_coproduct_records` | `wort_production`; `fermentation_and_finishing`; `filling_and_packaging` | 共产品与废物 | 地磅、转移和处理记录 | quantity; moisture; destination; treatment; stock change | 核对实测发运、库存变化、销售、回用和处理 | kg; m3 | 每次移动及每月 | 连续 12 个月 | 啤酒厂 | 年度净输出除以合格啤酒 | 单据；合同；库存盘点；处理记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 所有前景流 | 已分配年度净数量 / 年度合格啤酒体积 x 0.1 m3 | 净流数量；合格啤酒体积 | 每参考流数量 |  |
| `calc_total_energy` | 啤酒厂能源 | 用有记录的因子将电力、燃料、蒸汽、热和制冷换算为 MWh，分配前求和，再应用声明的规则 | 原生能源记录；换算因子；分配数据 | MWh/hl | `eu-bat-fdm-2019` |
| `calc_water_balance` | 啤酒厂水 | 取水 = 啤酒 + 废水 + 蒸发 + 共产品含水 + 其他损耗 + 库存变化；再生水单独报告 | 取水及出口记录 | 核对后的 m3/hl 及差额 | `ec-jrc-fdm-bref-2019` |
| `calc_material_balance` | 酿造与灌装 | 同期核对配料干物质、麦汁体积与浸出物、啤酒转移、损耗、共产品、废物及库存变化 | 过程与库存记录 | 平衡及未解释差额 | `eu-bat-fdm-2019` |
| `calc_fermentation_co2` | 发酵 | 依据实测浸出物转化或有记录的化学计量计算产生量，并分别报告产生、回收、回用、出售和排放量 | 浸出物转化；回收及排放记录 | 按路线的 kg 生物源 CO2/hl | `ec-jrc-fdm-bref-2019` |
| `calc_reusable_packaging` | 可重复使用容器 | 容器制造按有记录的预期周转次数分摊并包括清洗、报废和替换；测试不确定周转次数 | 周转池记录；包装及公用工程数据 | 每 hl 分配的包装与清洗 | `brewers-europe-beer-pefcr-2025` |
| `calc_downstream_scaling` | 饮用啤酒生命周期画像 | 默认 2% 损耗时每 0.1 m3 饮用量使用 0.102 m3 销售量；仅在保质期条件下使用 7%，或以代表性证据替换 | 饮用量；损耗率 | 下游模型销售量 | `brewers-europe-beer-pefcr-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_reporting_period` | 前景记录 | 使用覆盖正常及季节性生产的连续 12 个月期间。 | 带日期的来源系统提取和生产核对 |
| `dq_data_age` | 企业特定数据 | 数据一般不超过三年；更长期间须证明代表性。 | 数据年份及代表性论证 |
| `dq_product_specificity` | 配料与包装 | 按啤酒产品或产品系列采集；使用场址平均值须记录无法细分及分配依据。 | 配方、包装清单、计量图及分配工作表 |
| `dq_inventory_completeness` | 啤酒厂 | 维护由流程图和平衡支持的水、能源、原材料、废水、废气、废物和共产品清单。 | 清单登记、过程图、质量与体积平衡 |
| `dq_traceability` | 重要前景值 | 记录来源系统、计量表或文件、频率、缺失、库存变化、换算、分配分母和不确定性。 | 采集协议证据及审计链 |
| `dq_representativeness` | 上游及 PEF 对齐数据 | 优先供应商特定数据，评估时间、地理、技术以及精度或不确定性质量，并在要求时以企业特定 DQR 不高于 1.5 为目标。 | 供应商记录及质量评估文件 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_qualifiers` | 数据集元数据 | 确认 CPC 24310 含酒精麦芽啤酒，并记录类型、酒精度、包装、场址、期间和保质期；拒绝无醇啤酒和工业乙醇发酵液。 | `brewers-europe-beer-pefcr-2025` |
| `validate_reference_volume` | 参考流 | 定量参考必须恰为 0.1 m3 有效 Beer 流 `6da29594-9e39-48eb-82d1-c7a4484d3740`。 |  |
| `validate_process_completeness` | 前景 | 要求过程图全部三个阶段，并包括公用工程、损耗、废物和共产品。 | `ec-jrc-fdm-bref-2019` |
| `validate_total_energy` | 啤酒厂合计 | 将归一化年度能源与 0.02-0.05 MWh/hl 比较；超出时调查、核对并解释，不得替换实测值。 | `eu-bat-fdm-2019` |
| `validate_water_use` | 啤酒厂合计 | 将总取水与 0.60 m3/hl 筛选上限比较；超出时复核水量平衡和边界。 | `ec-jrc-fdm-bref-2019` |
| `validate_wastewater` | 啤酒厂合计 | 将废水与 0.15-0.60 m3/hl 比较；超出时复核排水、蒸发、产品、共产品含水、循环水和处理边界。 | `ec-jrc-fdm-bref-2019`; `eu-bat-fdm-2019` |
| `validate_mass_volume_balance` | 过程及期间 | 核对配料、水、麦汁、啤酒、二氧化碳、共产品、废物、蒸发、废水、灌装损耗、库存变化及内部转移，并披露残余不确定性。 | `eu-bat-fdm-2019` |
| `validate_allocation` | 多产品场址 | 核实先行细分、啤酒特定材料直接归属、剩余共用饮料操作按体积分配，以及分母和共产品处理均已披露。 | `brewers-europe-beer-pefcr-2025` |
| `validate_temporal_quality` | 前景数据 | 要求连续 12 个月覆盖；企业数据超过三年时须标记，除非代表性得到论证。 | `brewers-europe-beer-pefcr-2025` |
| `validate_downstream_scaling` | 生命周期模型 | 核对销售量与饮用量，验证所声明的 2%、7% 或证据支持的损耗，且不改变厂门口参考流。 | `brewers-europe-beer-pefcr-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 归一化至 0.1 m3 麦芽成品啤酒的厂门口前景数据集 |
| downstream_use | 投影为单位过程，或在 lifecyclemodel 中连接上下游数据集 |
| allowed_use | 啤酒厂清单；热点筛选；供应商数据采集；过程改进；充分披露的从摇篮到大门或从摇篮到坟墓研究 |
| excluded_use | 未满足全部适用影响评价、质量、评审和报告规定的比较性声明或 PEF 声明 |
| required_metadata | 啤酒类型；酒精度；包装或散装形式；啤酒厂场址；报告期；保质期；参考流 UUID；CPC 身份 |
| required_quality_disclosure | 包装组合；分配；共产品去向；回收二氧化碳；数据缺口；临时估计；代表性；偏离 |
| update_trigger | 配方、酒精度、包装组合、生产技术、场址、分配、共产品去向、背景数据或适用外部方法发生重要变化 |

临时 `reasoned_estimate` 范围是可替换的 QA 筛选值，不是类别事实。发布高置信度数据集前，应以经评审证据或产品与场址记录替换。

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `brewers-europe-beer-pefcr-2025` | `standard` | The Brewers of Europe，《Product Environmental Footprint Category Rules for Beer》，2025-03-21 修订批准版，访问于 2026-08-10。https://brewersofeurope.eu/wp-content/uploads/2025/05/FINAL-Revised-draft-updated-PEFCR-as-approved-by-review-panel.pdf | 啤酒身份与性能、生命周期边界、企业数据、分配、啤酒厂操作、数据质量和产品损耗缩放。其 EU PEF 范围宽于本厂门口前景 PCR。 |
| `ec-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre，《Best Available Techniques Reference Document for the Food, Drink and Milk Industries》，2019，访问于 2026-08-10。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf | 酿造过程图、资源与残余物、水、废水、热和运行记录。报告值是欧洲装置筛选证据，不是产品规范。 |
| `eu-bat-fdm-2019` | `standard` | European Commission，Commission Implementing Decision (EU) 2019/2031，2019-11-12，访问于 2026-08-10。https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | 环境清单及啤酒 BAT 相关能源和废水水平；属于装置参考范围，不是固定清单值或产品合格限值。 |
