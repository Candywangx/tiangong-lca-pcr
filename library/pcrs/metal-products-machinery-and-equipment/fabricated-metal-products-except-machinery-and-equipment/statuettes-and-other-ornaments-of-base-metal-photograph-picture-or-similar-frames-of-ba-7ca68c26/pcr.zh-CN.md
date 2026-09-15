---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.statuettes-and-other-ornaments-of-base-metal-photograph-picture-or-similar-frames-of-ba-7ca68c26
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 贱金属制小雕像及其他装饰品；贱金属制照片、图画或类似品框架；贱金属制镜子

## 1. 范围与适用性

覆盖 CPC 42996 的贱金属制成品小雕像、装饰品、照片/图画或类似品框架及镜子，边界从外购金属板材或锭、外购构件进入场址开始，经现场成形或铸造、表面处理、装配、检验，至工厂大门放行。家具、照明设备、没有贱金属制品的玻璃镜、贵金属制品、包装制造、流通、使用和生命末期不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.statuettes-and-other-ornaments-of-base-metal-photograph-picture-or-similar-frames-of-ba-7ca68c26 |
| classification_refs | CPC 3.0: 42996 |
| covered_products | 贱金属制成品小雕像、装饰品、照片/图画或类似品框架及镜子 |
| excluded_products | 贵金属制品；无框玻璃镜；家具；照明设备 |
| representative_product | 一件已声明且处于可销售状态的工厂大门产品 |
| production_route | 板材成形或金属铸造、实际表面处理及装配 |
| market_state | 完工、检验合格、未包装的工厂大门产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | CPC 42996 成品；声明子类型及构成金属 |
| How much | 1 kg 未包装成品净质量 |
| How well | 符合已声明规格和质量等级的可销售产品 |
| How long or cycle | 报告期产品组合；使用寿命不在本边界内 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | CPC 42996 贱金属装饰品、框架或镜子 |
| 参考流属性 | 质量（93a60a56-a3c8-11da-a746-0800200b9a66） |
| 参考单位组 | 质量（93a60a57-a4c8-11da-a746-0800200c9a66） |
| 参考单位 | kg |
| 必需限定信息 | 子类型；金属/合金；尺寸；表面；镜片；地域；期间；包装排除 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| mu_mass | 产品、材料、废物、排放 | 质量 | kg | 使用经校准的质量记录；声明溶液浓度。 |
| mu_energy | 电力 | 净热值 | MJ | 按 3.6 MJ/kWh 换算电表 kWh；声明电网地域。 |
| mu_gas | 天然气 | 体积 | m3 | 声明参照温度和压力。 |

## 5. 系统边界

纳入收料、现场成形/铸造、清洗、机械表面处理、实际进行的电镀/涂装、固化、装配、检验、返工和废物处理。外购材料、能源、水、化学品、镜片和处理服务为输入；产品、废物及直接排放为输出。上游供应采用独立数据集，并披露外包操作。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂大门处的外购金属板材/锭及构件 |
| starting_condition_role | 上游产品输入 |
| product_classification_scope | 仅 CPC 42996 成品 |
| recursive_input_rule | 上游生产不递归并入前景过程 |
| upstream_dataset_requirement | 地域、技术和产品状态具有代表性 |
| disclosure | 披露路线、外包、再生含量、涂层及镜片边界 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| sheet_forming | 板材成形 | conditional | 现场切割或成形板、片或带材时纳入 | 成形构件 | 1 kg 过程输出 |
| metal_casting | 金属铸造 | conditional | 现场铸造构件时纳入 | 铸造构件 | 1 kg 过程输出 |
| surface_finishing | 表面处理 | required | 按实际机械、湿法、电镀或涂装操作建模 | 表面处理构件 | 1 kg 过程输出 |
| final_assembly | 最终装配 | required | 始终纳入；单件式产品包括最终检验 | 放行产品 | 1 kg 过程输出 |

### 过程：板材成形（`sheet_forming`）

#### 输入

##### 产品流

###### 碳钢板（`carbon_steel_sheet`）

从场址记录计量的原子输入交换。

- 选定流：碳钢板
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

###### 铝板材（`aluminium_sheet`）

从场址记录计量的原子输入交换。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

###### 黄铜板带（`brass_plate_strip`）

从场址记录计量的原子输入交换。

- 选定流：黄铜板带 `fff74890-cdbb-4184-84cc-b2d90582b28f`
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

###### 电力（`sheet_fabrication_electricity`）

从场址记录计量的原子输入交换。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

#### 输出

##### 产品流

###### 成形贱金属板材构件（`formed_sheet_component`）

从场址记录计量的原子输出交换。

- 选定流：成形贱金属板材构件
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

#### 输出

##### 废物流

###### 工业后钢废料（`post_industrial_steel_scrap`）

从场址记录计量的原子输出交换。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

###### 铝废料（`aluminium_scrap`）

从场址记录计量的原子输出交换。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

###### 黄铜废料（`brass_scrap`）

从场址记录计量的原子输出交换。

- 选定流：黄铜废料
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

### 过程：金属铸造（`metal_casting`）

#### 输入

##### 产品流

###### 锌合金锭（`zinc_alloy_ingot`）

从场址记录计量的原子输入交换。

- 选定流：锌合金锭
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

###### 电力（`casting_electricity`）

从场址记录计量的原子输入交换。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

###### 气态天然气（`casting_natural_gas`）

从场址记录计量的原子输入交换。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

#### 输出

##### 产品流

###### 铸造贱金属构件（`formed_cast_component`）

从场址记录计量的原子输出交换。

- 选定流：铸造贱金属构件
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

#### 输出

##### 废物流

###### 锌废料（`zinc_scrap`）

从场址记录计量的原子输出交换。

- 选定流：锌废料 `b1629e09-83ea-4027-aab4-3a02406fac02`
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

#### 输出

##### 基本流

###### 二氧化碳（化石源）（`casting_fossil_co2`）

从场址记录计量的原子输出交换。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

### 过程：表面处理（`surface_finishing`）

#### 输入

##### 产品流

###### 成形贱金属构件（`formed_component_input`）

从场址记录计量的原子输入交换。

- 选定流：成形贱金属构件
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

###### 电力（`finishing_electricity`）

从场址记录计量的原子输入交换。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

###### 工艺用水（`finishing_process_water`）

从场址记录计量的原子输入交换。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

###### 氢氧化钠（`finishing_sodium_hydroxide`）

从场址记录计量的原子输入交换。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

###### 粉末涂层（`powder_coating`）

从场址记录计量的原子输入交换。

- 选定流：粉末涂层 `0c581697-0eed-4b86-a070-b94966eb7344`
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

#### 输出

##### 产品流

###### 表面处理后贱金属构件（`finished_component`）

从场址记录计量的原子输出交换。

- 选定流：表面处理后贱金属构件
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

#### 输出

##### 废物流

###### 粉末涂装废弃物（`powder_coating_waste`）

从场址记录计量的原子输出交换。

- 选定流：粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

###### 废碱液（`waste_alkaline_liquor`）

从场址记录计量的原子输出交换。

- 选定流：废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

### 过程：最终装配（`final_assembly`）

#### 输入

##### 产品流

###### 表面处理后贱金属构件（`finished_component_input`）

从场址记录计量的原子输入交换。

- 选定流：表面处理后贱金属构件
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

###### 银镜（`silver_mirror`）

从场址记录计量的原子输入交换。

- 选定流：银镜 `649a8d8c-ee6e-466e-8252-3a4bb54e6fa9`
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

###### 电力（`assembly_electricity`）

从场址记录计量的原子输入交换。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

#### 输出

##### 产品流

###### CPC 42996 贱金属装饰品、框架或镜子（`reference_product`）

从场址记录计量的原子输出交换。

- 选定流：CPC 42996 贱金属装饰品、框架或镜子
- 流属性/单位：质量 / kg
- 数量规则：计量后归一化至 1 kg 过程输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_exchange_records
- 来源：

## 7. 分配与共产品处理

首先按产品系列和路线细分。无法细分时，仅对有据可查的替代功能采用系统扩展；否则按机器时间、处理面积、槽液负荷或质量等物理因果关系分配。经济分配仅作为最后选择，并开展敏感性分析。没有明确的回收约定及接收处理边界，不得给予废金属抵扣。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_exchange_records | all | 每个原子交换 | 仪表、秤、发票、批次或废物联单 | 数值、单位、日期、过程、产品、路线、记录号 | 直接读数与采购、库存变化、产量及发运核对 | 流单位 | 每批或每月 | 有代表性的连续 12 个月 | 所有纳入产线 | 各流求和/合格过程输出质量 | 校准、原始记录、核对和差异审查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | 每个流 | 报告期交换量/合格过程输出质量 | 交换量；输出质量 | 每 kg 输出的数量 |  |
| calc_balance | 每个过程 | 金属输入=产品金属+废料+实测损失，并校正库存变化 | 质量记录 | 差额 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_period | 前景 | 采用有代表性的连续 12 个月；较短期间须说明理由。 | 带日期记录 |
| dq_route | 各过程 | 聚合前分别保留成形、铸造、湿法处理及涂装路线。 | 路由记录 |
| dq_balance | 金属 | 调查并披露质量平衡差额及循环回收核算。 | 核对记录 |

## 9. 校验规则

核查唯一的 1 kg 参考输出；路线完整且无重复；中间产品输出与输入衔接；金属平衡；第 4 节单位；原子流；化石二氧化碳仅限实测现场燃烧；带 UUID 流的身份、类型、属性和单位符合审计；未解决 UUID 行保持明确。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂大门前景生产数据集 |
| downstream_use | 流、过程及生命周期模型构建 |
| allowed_use | 已声明子类型、合金、表面、地域、技术和期间 |
| excluded_use | 未声明产品组合的行业平均；使用或生命末期主张 |
| required_metadata | 参考限定信息、路线份额、再生含量、外包、分配 |
| required_quality_disclosure | 覆盖、计量、估算、平衡、排除项、未解决身份 |
| update_trigger | 产品组合、合金、路线、表面、场址、能源或分配发生实质变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | dataset | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品身份 |
| eu-jrc-smitheries-foundries-bref | official_guidance | https://eippcb.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry | 成形、铸造、机加工、表面处理 |
| eu-jrc-stm-bref-2006 | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf | 电解及化学表面处理 |
| eu-jrc-sts-bref-2020 | official_guidance | https://eippcb.jrc.ec.europa.eu/reference/surface-treatment-using-organic-solvents-including-wood-and-wood-products-preservation | 涂装、涂漆、脱脂 |
| us-epa-ap42-electroplating-2021 | official_guidance | https://www.epa.gov/sites/default/files/2020-11/documents/b12s20.pdf | 清洗、酸洗、水洗、电镀和雾滴 |
| eu-commission-pef-2021 | official_guidance | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021H2279R%2801%29 | 分配和数据质量 |
