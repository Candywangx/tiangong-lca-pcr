---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-other
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 玉米（非种用）

## 1. 范围与适用性

本 PCR 用于构建非种用玉米籽粒的前景数据包，包括带壳或散装销售的马齿型玉米、硬粒型玉米、田间玉米、饲用玉米、食用玉米、工业用玉米以及类似的收获玉米籽粒，交付边界可以是农场、干燥设施、储存设施、粮库或区域交付点。

本 PCR 覆盖田间作物生产、收获、必要的脱粒或剥粒、干燥、清选、分级、储存、装载以及至声明门点的交付。排除播种用玉米种子、饲草和青贮玉米、作为蔬菜收获的甜玉米、玉米粉、玉米糁、淀粉、油、乙醇、玉米片、玉米粕等加工产品，以及下游饲喂、制粉、发酵或食品制造。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-other` |
| classification_refs | CPC 3.0 `01122`, `Maize (corn), other` |
| covered_products | 非种用玉米籽粒；马齿型玉米；硬粒型玉米；田间玉米；饲用玉米；食用玉米；加工前工业用玉米籽粒 |
| excluded_products | 播种用玉米种子；饲草和青贮玉米；作为蔬菜收获的甜玉米；作为独立产品的玉米秸秆或玉米芯；玉米粉、玉米糁、玉米粕、淀粉、油、乙醇、玉米片和预制食品 |
| representative_product | 按声明水分基准清选和干燥后的玉米籽粒 |
| production_route | 玉米田间生产，加上收获、脱粒或剥粒、干燥、清选、分级、储存和声明门点发运 |
| market_state | 未加工整粒玉米，散装或包装，在声明的农场、仓储、粮库或区域交付门点 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 非种用玉米籽粒 |
| How much | 1 kg |
| How well | 声明水分基准、相关时的籽粒类别或品种、等级或质量规格、预期用途类别和声明门点 |
| How long or cycle | 一个玉米作物周期；纳入干燥、储存和交付时，应另行声明持续时间 |
| reference_flow_link | 见下方参考数量和产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| Required qualifiers | moisture basis; grain class or variety where relevant; grade or quality specification; intended use category; production geography; crop year; declared gate; bulk or packaged state; drying and storage inclusion status |

构建前景数据包时，`Required qualifiers` 中列出的项目必须在数据集元数据、过程说明、参考流备注、产品描述或等效字段中声明。缺少这些限定信息时，该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须表示为按声明水分基准计的 kg 清选玉米籽粒。 |
| `moisture_basis` | harvested, dried, stored, and delivered maize grain | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg as received and kg at declared moisture basis | 对收获籽粒、干燥籽粒、储存损失和交付籽粒记录水分含量或水分基准；比较或汇总前按一致基准换算。 |
| `fertilizer_n_basis` | nitrogen fertilizer inputs and nitrogen emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计算氮排放时，氮肥应同时记录 kg 产品和 kg N。 |
| `energy_inventory` | diesel, electricity, drying fuel, and storage energy | Energy | MJ, kWh, or kg fuel | 每条清单行应声明能源单位，并保留足够信息以换算到声明排放因子基准。 |
| `grain_quality_reporting` | reference product and saleable output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg by grade or lot | 当等级、杂质、破损粒、水分和预期用途影响产品等价或市场分配时，应报告这些信息。 |

## 5. 系统边界

默认边界为非种用玉米籽粒生产至声明门点的前景数据采集：

1. 当纳入前景数据包时，记录种子、肥料、土壤改良剂、灌溉水、植保产品、燃料、电力、干燥燃料、包装和入厂运输。
2. 田间生产：整地、播种、施肥、适用时灌溉、植保、中耕、收获和田间收集。
3. 收获后处理：必要的脱粒或剥粒、干燥、清选、分级、储存、储粮虫害控制、装载和至声明门点的交付。
4. 共产品和残余物：当玉米秸秆、玉米芯、苞叶、筛下物、破碎粒、粉尘和变质粮跨越前景边界或获得产品信用时，应记录。

前景数据包覆盖玉米籽粒生产至声明门点。下游制粉、饲料使用、乙醇生产、淀粉生产、食品制造、零售、烹调和动物生产不属于本 PCR，除非作为下游用途另行建模。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | planted_maize_crop |
| starting_condition_role | 作物周期边界锚点，对应首个前景田间作业记录 |
| product_classification_scope | 当前 CPC 3.0 产品类别 `01122`, `Maize (corn), other` |
| recursive_input_rule | 若同一产品类别的输入流会导致递归追踪，则作为带上游数据集的外购玉米籽粒输入记录，不在同一前景过程中重新展开本 PCR |
| upstream_dataset_requirement | 对种子、肥料、土壤改良剂、植保产品、燃料、电力、灌溉供水、干燥燃料、包装、运输服务和外购玉米籽粒输入使用上游数据集 |
| disclosure | 记录作物年度、地理范围、田块或供应商范围、声明门点、水分基准、籽粒等级或预期用途、干燥和储存纳入情况、残余物去向以及共产品分配方法 |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_maize_production` | Field Maize Production | required | include for all datasets producing maize grain from planted crop | foreground | kg harvested maize grain at field moisture basis |
| `harvest_and_postharvest_handling` | Harvest and Post-harvest Handling | required | include harvest, shelling or threshing, drying, cleaning, grading, and storage when they occur before the declared gate | foreground | kg saleable maize grain at declared moisture basis |
| `storage_and_delivery` | Storage and Delivery | conditional | include when the declared gate is after storage, elevator handling, packaging, or regional delivery | foreground/downstream | kg delivered maize grain |

### 过程：Field Maize Production (`field_maize_production`)

#### 输入

##### 产品流

###### 玉米种子投入（`maize_seed_input`）

玉米种子投入作为建立作物周期的产品输入记录。

- 选定流：Corn Seeds `23f01fdc-33b5-4cc9-bd0f-b0cb39d7daa6`
- 流属性/单位：Mass / kg
- 数量规则：实测种子质量，或将种子粒数换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获玉米籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_input_records`
- 数量范围：暂定玉米种子投入筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.002
  - 上限：0.06
  - 单位：kg seed/kg harvested maize grain
  - 基准：每 kg 收获籽粒的宽泛首轮种子质量估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 氮肥载体（`nitrogen_fertilizer_carrier`）

氮肥载体按实测产品质量和养分含量记录。

- 选定流：Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性/单位：Mass / kg
- 数量规则：实测产品质量和 kg N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获玉米籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：暂定氮肥筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg fertilizer product/kg harvested maize grain
  - 基准：每 kg 收获籽粒的宽泛首轮氮肥载体质量估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 磷肥（`phosphate_fertilizer`）

磷肥在施用于玉米田时记录。

- 选定流：Phosphate fertilizer `9c196b01-6aad-4252-a6e8-f853853a830c`
- 流属性/单位：Mass / kg
- 数量规则：实测产品质量，并在可得时记录养分含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获玉米籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_input_records`
- 数量范围：暂定磷肥筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.3
  - 单位：kg fertilizer product/kg harvested maize grain
  - 基准：每 kg 收获籽粒的宽泛首轮磷肥质量估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 钾肥（`potassium_fertilizer`）

钾肥在施用于玉米田时记录。

- 选定流：Potassium fertilizer `dd008d87-16e4-4e85-a048-b9949f6fbca6`
- 流属性/单位：Mass / kg
- 数量规则：实测产品质量，并在可得时记录养分含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获玉米籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_input_records`
- 数量范围：暂定钾肥筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.3
  - 单位：kg fertilizer product/kg harvested maize grain
  - 基准：每 kg 收获籽粒的宽泛首轮钾肥质量估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作为产品投入的灌溉水（`irrigation_water_supplied_as_product_input`）

当灌溉水跨越受管理供水边界时，作为产品输入记录。

- 选定流：Irrigation water `4ad684b1-8e85-4dee-8d9c-55d1fa2d4432`
- 流属性/单位：Mass / kg
- 数量规则：实测灌溉水质量，或将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获玉米籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_water_records`
- 数量范围：暂定灌溉水筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：m3/kg harvested maize grain
  - 基准：每 kg 收获籽粒的宽泛首轮灌溉供水估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间机械燃料（`field_machinery_fuel`）

田间机械燃料覆盖田间作业使用的柴油或等效燃料。

- 选定流：Diesel, burned in agricultural machinery `57e0b1a3-2d05-46b2-b61b-cf7b5b167c6f`
- 流属性/单位：Mass / kg
- 数量规则：按作业实测田间燃料使用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获玉米籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_fuel_records`
- 数量范围：暂定田间机械燃料筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：L diesel-equivalent/kg harvested maize grain
  - 基准：每 kg 收获籽粒的宽泛首轮田间机械燃料估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保产品（`crop_protection_product`）

植保产品包括除草剂、杀虫剂、杀菌剂、田间建植使用的种子处理产品以及类似产品。

- 选定流：Herbicide `c1370404-9e2b-4ed6-ba96-c094f74e0f2d`
- 流属性/单位：Mass / kg
- 数量规则：按施用记录实测有效成分或制剂产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按有效成分或制剂产品，并按每 1,000 kg 收获玉米籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 数量范围：暂定植保产品筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.04
  - 单位：kg active substance or product/kg harvested maize grain
  - 基准：每 kg 收获籽粒的宽泛首轮植保有效成分或制剂产品估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

田间玉米生产通常不需要废物输入。只有当粪肥、堆肥、沼渣或回收灌溉水跨越前景边界且研究范围将其作为废物流处理时，才作为废物衍生输入纳入。

##### 基本流

###### 土地占用（`land_occupation`）

土地占用按种植玉米面积和作物持续时间记录。

- 选定流：Select applicable elementary flow for land occupation
- 流属性/单位：Area-time / ha a
- 数量规则：实测田块面积和作物持续时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_use_records`

###### 取水（`water_withdrawal`）

纳入灌溉时，取水量由灌溉水记录计算。

- 选定流：water `419682fe-60fb-4b43-be89-bf2824b51104`
- 流属性/单位：Mass / kg
- 数量规则：按灌溉水来源、体积和换算基准计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获玉米籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_water_records`
- 数量范围：暂定取水筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：m3/kg harvested maize grain
  - 基准：每 kg 收获籽粒的宽泛首轮取水估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 收获玉米籽粒（`harvested_maize_grain`）

收获玉米籽粒是田间过程输出，位于收获后干燥和清选调整之前。

- 选定流：Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- 流属性/单位：Mass / kg
- 数量规则：按记录水分基准实测收获质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：田间子过程定量参考
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvested_grain_records`
- 数量范围：收获籽粒输出恒等关系
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg field process reference output
  - 基准：田间子过程定量参考输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 玉米秸秆、玉米芯、苞叶或田间残余物（`maize_stover_cobs_husks_or_field_residue`）

玉米残余物只有在移出田间并获得信用或出售时作为产品输出。

- 选定流：Maize stover, cobs, husks, or field residue
- 流属性/单位：Mass / kg
- 数量规则：跨越边界时实测残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获玉米籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_management_records`
- 数量范围：暂定玉米残余物移除筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kg residue/kg harvested maize grain
  - 基准：每 kg 收获籽粒移出的宽泛首轮秸秆、玉米芯、苞叶或田间残余物估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

田间废物、移除塑料、空农化品容器或被拒收残余物作为废物离开田间边界时，应单独声明。

##### 基本流

###### 进入空气的直接土壤 N2O 排放（`direct_soil_n2o_emission_to_air`）

直接土壤 N2O 排放按氮输入和土壤排放方法计算。

- 选定流：nitrous oxide, emissions to air unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：使用声明的 IPCC tier 或经审查区域方法，由 N 输入计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：通用（`generic`）
- 归一化基准：按 N 输入
- 基准类型：氮输入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：暂定直接土壤 N2O 筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.02
  - 单位：kg N2O/kg harvested maize grain
  - 基准：应用氮排放方法后，每 kg 收获籽粒的宽泛首轮直接土壤 N2O 估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进入水体的硝酸盐淋失（`nitrate_leaching_to_water`）

当声明的氮方法或研究范围包含淋失和径流时，计算硝酸盐淋失。

- 选定流：nitrate, emissions to fresh water `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：场址特定或区域排放方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按 N 输入
- 基准类型：氮输入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：暂定硝酸盐淋失筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg nitrate/kg harvested maize grain
  - 基准：应用氮淋失方法后，每 kg 收获籽粒的宽泛首轮硝酸盐淋失估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间能源产生的化石二氧化碳（`fossil_carbon_dioxide_from_field_energy`）

田间能源产生的化石二氧化碳按田间燃料记录和声明排放因子计算。

- 选定流：carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按田间燃料记录和排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：通用（`generic`）
- 归一化基准：按燃料清单
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_fuel_records`
- 数量范围：暂定田间能源化石 CO2 筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kg CO2/kg harvested maize grain
  - 基准：每 kg 收获籽粒的宽泛首轮田间燃料和能源化石二氧化碳估计
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：Harvest and Post-harvest Handling (`harvest_and_postharvest_handling`)

#### 输入

##### 产品流

###### 收获玉米籽粒输入（`harvested_maize_grain_input`）

收获玉米籽粒从田间生产转入干燥、脱粒、清选、分级或储存。

- 选定流：Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- 流属性/单位：Mass / kg
- 数量规则：按声明水分基准调整的实测收获质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售玉米籽粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_harvested_grain_records`
- 来源：`fao-maize-postharvest-operations`, `fao-grain-drying-storage`
- 数量范围：收获后输入质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.4
  - 单位：kg harvested maize grain/kg saleable maize grain
  - 基准：经水分调整、清选和损失后，每 kg 可销售籽粒所需收获籽粒输入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥与处理能源（`drying_and_handling_energy`）

干燥与处理能源包括电力、热燃料、风机、输送、脱粒或剥粒、清选、分级和粮库设备用能。

- 选定流：alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value / MJ or kWh
- 数量规则：按过程线实测电力、燃料或设备小时计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售玉米籽粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_energy_records`
- 来源：`fao-grain-drying-storage`
- 数量范围：暂定干燥与处理能源筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg saleable maize grain
  - 基准：每 kg 可销售籽粒的宽泛首轮干燥、脱粒、清选、分级和处理能源估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 储粮虫害控制或熏蒸产品（`storage_pest_control_or_fumigation_product`）

储粮虫害控制或熏蒸产品仅在声明边界内施用时记录。

- 选定流：Insecticide `ba2ec0c8-d5da-4ca8-bf9f-317478a1ce1b`
- 流属性/单位：Mass / kg
- 数量规则：实测有效成分或制剂产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按处理粮食质量或储存期间
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_treatment_records`
- 数量范围：暂定储粮处理产品筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.01
  - 单位：kg active substance or product/kg treated maize grain
  - 基准：每 kg 处理籽粒的宽泛首轮储粮虫害控制或熏蒸产品估计
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

收获和收获后处理通常不需要废物输入。

##### 基本流

当设施记录显示直接排放或直接资源使用时，纳入直接粉尘排放、燃烧排放和用水。

#### 输出

##### 产品流

###### 可销售玉米籽粒（`saleable_maize_grain`）

可销售玉米籽粒是按声明水分基准清选、干燥、分级并验收的输出。

- 选定流：Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- 流属性/单位：Mass / kg
- 数量规则：按声明水分基准实测可销售籽粒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：PCR 参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_saleable_grain_records`
- 来源：`codex-cxs-153-1985`
- 数量范围：参考输出恒等关系
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg PCR reference output
  - 基准：声明参考产品输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 筛下物、破碎粒、粉尘和变质粮（`screenings_broken_grain_dust_and_spoiled_grain`）

筛下物、破碎粒、粉尘和变质粮按去向记录。

- 选定流：Rejects `e6d6aa78-105e-4acc-a84b-46f68765a1cc`
- 流属性/单位：Mass / kg
- 数量规则：实测拒收物质量并声明去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售玉米籽粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_and_loss_records`
- 来源：`fao-maize-postharvest-operations`
- 数量范围：暂定收获后拒收物和损失筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.3
  - 单位：kg reject or loss/kg saleable maize grain
  - 基准：每 kg 可销售籽粒的宽泛首轮筛下物、破碎粒、粉尘和变质粮估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 收获后能源产生的化石二氧化碳（`fossil_carbon_dioxide_from_postharvest_energy`）

收获后能源产生的化石二氧化碳按干燥、处理和储存能源记录计算。

- 选定流：carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按收获后能源记录和声明排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：通用（`generic`）
- 归一化基准：按燃料清单
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_postharvest_energy_records`
- 数量范围：暂定收获后能源化石 CO2 筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kg CO2/kg saleable maize grain
  - 基准：每 kg 可销售籽粒的宽泛首轮干燥、处理和储存能源化石二氧化碳估计
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：Storage and Delivery (`storage_and_delivery`)

#### 输入

##### 产品流

###### 储存用电（`storage_electricity`）

当声明门点包含干燥和清选后的储存时，记录储存用电。

- 选定流：alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value / MJ or kWh
- 数量规则：实测储存用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_energy_records`
- 数量范围：暂定储存用电筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg stored maize grain
  - 基准：声明储存时长内每 kg 储存籽粒的宽泛首轮储存用电估计
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交付运输燃料（`delivery_transport_fuel`）

当声明门点为交付粮食地点时，记录交付运输燃料。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：实测交付燃料或路线燃料估算
- 数值来源模式：模型估计（`modelled_estimate`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：按 tonne-km 或交付籽粒质量
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_transport_records`
- 数量范围：暂定交付运输燃料筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：L diesel-equivalent/kg delivered maize grain
  - 基准：路线筛查中每 kg 交付籽粒的宽泛首轮交付运输燃料估计
  - 基准类型：运输服务（`transport_service`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

通常不需要废物输入。

##### 基本流

只有当直接储存排放被测量或研究目标要求时才纳入。

#### 输出

##### 产品流

###### 声明交付玉米籽粒（`declared_delivered_maize_grain`）

当参考流为交付籽粒时，声明交付玉米籽粒作为输出。

- 选定流：Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- 流属性/单位：Mass / kg
- 数量规则：按声明水分基准实测交付籽粒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：当参考流为交付籽粒时
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivered_grain_records`

##### 废物流

###### 储存损失或受损籽粒（`storage_loss_or_damaged_grain`）

当储存期间籽粒损失、变质、拒收或处置时，记录储存损失或受损籽粒。

- 选定流：Rejects `e6d6aa78-105e-4acc-a84b-46f68765a1cc`
- 流属性/单位：Mass / kg
- 数量规则：实测储存损失或受损籽粒质量并声明去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 储存玉米籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_loss_records`
- 数量范围：暂定储存损失筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg stored maize grain
  - 基准：每 kg 储存籽粒的宽泛首轮储存损失或受损籽粒估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 储存或运输能源产生的化石二氧化碳（`fossil_carbon_dioxide_from_storage_or_transport_energy`）

储存或运输能源产生的化石二氧化碳按储存能源和交付运输记录计算。

- 选定流：carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按储存能源和交付运输记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：通用（`generic`）
- 归一化基准：按过程清单
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_delivery_transport_records`
- 数量范围：暂定储存和运输化石 CO2 筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kg CO2/kg delivered maize grain
  - 基准：每 kg 交付籽粒的宽泛首轮储存和交付能源化石二氧化碳估计
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

按以下顺序处理分配：

1. 当记录允许时，优先通过细分田间生产、收获后处理、残余物管理以及储存或交付过程避免分配。
2. 当玉米秸秆、玉米芯、苞叶、筛下物、破碎粒、变质粮和粉尘被丢弃或无产品信用地处理时，作为废物处理。
3. 当玉米籽粒和移除残余物均为共产品且无法进一步因果细分时，使用物理质量分配。
4. 只有在玉米籽粒、秸秆、玉米芯、筛下物或其他输出具有市场共产品属性且有价格证据时，才使用经济分配。
5. 任何替代或避免负担处理都必须单独披露，并提供被替代产品和市场的证据。

残余物去向必须声明为还田、移除用于饲料、垫料、燃料、土壤改良剂、露天焚烧、废物处理或其他有证据支持的路线。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_seed_input_records | field_maize_production | maize seed input | planting record | seed product; variety or hybrid; seed count or mass; field id; planting date | invoice, seed tag, planter monitor, or farm log | kg or seed count converted to kg | per planting event | crop cycle | maize field | sum seed input and normalize to harvested grain output | invoice, seed tag, farm log, or planter monitor |
| cp_fertilizer_input_records | field_maize_production | fertilizer inputs | fertilizer application record | product; nutrient content; product mass; application date; field id | invoice, applicator record, or farm operation log | kg product and kg nutrient | per application | crop cycle | maize field | sum product and nutrient mass and normalize to harvested grain output | invoice, applicator record, or farm log |
| cp_irrigation_water_records | field_maize_production | irrigation water | irrigation record | water source; volume or mass; pumping period; field id | meter reading, pumping log, or water invoice | kg or m3 converted to kg | per irrigation event | crop cycle | irrigated maize field | sum irrigation water and convert to mass where needed | meter record, pumping log, or water invoice |
| cp_field_fuel_records | field_maize_production | field machinery fuel | field operation fuel record | operation; machine; fuel type; fuel quantity; field id | fuel log, invoice, or machine telematics | kg or L converted to kg | per field operation | crop cycle | maize field | sum fuel by operation and normalize to harvested grain output | fuel log, invoice, or telematics record |
| cp_crop_protection_records | field_maize_production | crop protection product | crop protection application record | product; active ingredient; formulated product mass; application date; field id | spray log, applicator record, or product invoice | kg active ingredient or kg product | per application | crop cycle | maize field | sum active ingredient or product mass and normalize to harvested grain output | spray log, product label, applicator record |
| cp_land_use_records | field_maize_production | land occupation | field area record | field id; planted area; crop duration | farm field record or GIS area record | ha and crop duration | per crop cycle | crop cycle | maize field | multiply area by crop duration where area-time is required | field map, GIS record, or farm record |
| cp_harvested_grain_records | field_maize_production | harvested maize grain | harvest and receiving record | field id; harvest date; harvested mass; moisture content; grain destination | combine monitor, weighbridge, calibrated scale, or elevator ticket | kg at recorded moisture basis | per harvest event | crop cycle | maize field and receiving point | sum harvested mass and convert to declared moisture basis | scale ticket, elevator ticket, or harvest log |
| cp_residue_management_records | field_maize_production | maize stover, cobs, husks, or field residue | residue handling record | field id; residue stream; mass or area; fate | baling ticket, scale record, field log, or residue management plan | kg, bale count converted to kg, or ha | per residue handling event | crop cycle | maize field | sum residue mass crossing the boundary and declare fate | scale record, baling ticket, or field log |
| cp_postharvest_energy_records | harvest_and_postharvest_handling | drying and handling energy | facility energy record | meter id; fuel type; energy quantity; process line; grain mass and moisture change | meter reading, utility bill, fuel invoice, dryer log, or equipment log | kWh, MJ, kg fuel, or L fuel | per drying batch, storage campaign, or reporting period | post-harvest campaign | dryer, cleaner, storage, or elevator facility | allocate energy to maize grain and normalize to saleable grain output | meter record, fuel invoice, dryer log, or utility bill |
| cp_storage_treatment_records | harvest_and_postharvest_handling | storage pest-control or fumigation product | treatment record | product; active ingredient; dose; treated mass; storage bin; date | treatment log or contractor certificate | kg active ingredient or kg product | per treatment | storage period | storage bin or facility | sum treatment mass and normalize by treated grain mass or storage duration | treatment log, product label, or contractor certificate |
| cp_saleable_grain_records | harvest_and_postharvest_handling | saleable maize grain | saleable output record | lot id; accepted mass; moisture basis; grade; destination | calibrated scale, elevator ticket, or dispatch record | kg | per lot or shipment | post-harvest campaign | declared gate | sum accepted saleable grain at declared moisture basis | scale calibration, grade record, and dispatch ticket |
| cp_reject_and_loss_records | harvest_and_postharvest_handling | screenings, broken grain, dust, and spoiled grain | reject or loss record | batch id; reject stream; mass; fate | scale record, bin reconciliation, or waste contractor record | kg | per batch or reporting period | post-harvest campaign | dryer, cleaner, or storage facility | sum reject and loss streams by fate | scale ticket, inventory reconciliation, or waste record |
| cp_storage_energy_records | storage_and_delivery | storage electricity | storage energy record | meter id; energy quantity; storage period; stored mass | meter reading or utility bill | kWh or MJ | per storage period | declared storage duration | storage site | allocate storage energy by stored mass and duration | meter record or utility bill |
| cp_delivery_transport_records | storage_and_delivery | delivery transport fuel | transport service record | route; distance; vehicle; fuel quantity or tonne-km; delivered mass | fuel log, carrier invoice, dispatch record, or route model | kg fuel or tonne-km | per shipment | delivery period | declared delivery route | sum route-specific transport service and normalize to delivered grain | carrier invoice, dispatch record, or fuel log |
| cp_delivered_grain_records | storage_and_delivery | declared delivered maize grain | delivery or dispatch record | lot id; delivered mass; delivery date; receiver or gate; moisture basis | weighbridge, calibrated scale, or dispatch record | kg | per shipment | delivery period | declared delivery route | sum delivered grain mass at declared moisture basis | dispatch record, scale ticket, or delivery note |
| cp_storage_loss_records | storage_and_delivery | storage loss or damaged grain | storage loss record | lot id; loss mass; damage category; fate | inventory reconciliation, scale record, or disposal record | kg | per storage period or lot | declared storage duration | storage site | sum storage loss and declare fate | inventory reconciliation, scale record, or disposal record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_harvested_grain | harvested grain mass | 将收获质量从记录水分换算到声明水分基准，再归一化到参考输出 | cp_harvested_grain_records; cp_saleable_grain_records | kg harvested maize grain per reference output | `fao-maize-postharvest-operations` |
| calculate_water_withdrawal | irrigation water withdrawal | 将计量灌溉体积换算为质量，并按收获籽粒输出归一化 | cp_irrigation_water_records; cp_harvested_grain_records | kg water withdrawal per reference output |  |
| calculate_soil_n2o | managed soil N2O | 使用合成氮、有机氮、残余物氮、矿化氮以及所需的淋失或挥发参数，应用声明的 IPCC tier 或经审查区域方法 | cp_fertilizer_input_records; cp_residue_management_records | kg N2O per reference output | `ipcc-2019-managed-soils-n2o` |
| calculate_field_energy_co2 | field energy fossil CO2 | 燃料数量乘以声明燃料排放因子，并按收获籽粒输出归一化 | cp_field_fuel_records; cp_harvested_grain_records | kg fossil CO2 from field energy per reference output |  |
| calculate_postharvest_energy_co2 | post-harvest energy fossil CO2 | 干燥、处理和储存能源乘以声明排放因子，并按可销售籽粒输出归一化 | cp_postharvest_energy_records; cp_saleable_grain_records | kg fossil CO2 from post-harvest energy per reference output |  |
| reconcile_grain_mass_balance | grain, residue, and loss mass balance | 核对收获籽粒输入与可销售籽粒、水分变化、筛下物、粉尘、破碎粒、变质粮和储存损失 | cp_harvested_grain_records; cp_saleable_grain_records; cp_reject_and_loss_records; cp_storage_loss_records | mass-balance reconciliation and loss rate | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_grain_identity | reference product and saleable output | 必须声明 CPC 01122 范围、非种用状态、作物年度、地理范围、声明门点、籽粒类别或预期用途、水分基准以及等级或质量规格。 | elevator ticket, grade certificate, sale contract, or dispatch record |
| dq_mass_records | mass records | 质量数值必须标识记录日期、场址或批次、单位、相关时的水分基准以及测量设备或来源记录。 | calibration record, weighbridge ticket, scale log, combine monitor, or supplier primary activity record |
| dq_moisture_conversion | moisture adjustment | 水分调整必须声明实测水分、目标水分基准以及使用的公式或工具。 | moisture meter record, dryer log, grade record, or calculation sheet |
| dq_temporal_coverage | crop-cycle data | 田间生产数据应覆盖声明的玉米作物周期；对天气敏感的比较研究应披露使用一年数据还是多年平均数据。 | crop-year production records |
| dq_nitrogen_method | nitrogen emissions | 氮输入、残余物氮假设、挥发、淋失以及所选 IPCC tier 或区域方法必须形成文件，N2O 或硝酸盐值才能作为最终值。 | fertilizer logs, residue records, soil method calculation, IPCC or regional method sheet |
| dq_loss_and_residue_fate | residues and losses | 玉米秸秆、玉米芯、苞叶、筛下物、粉尘、破碎粒、变质粮和储存损失必须声明去向，之后才能最终确定分配或废物处理。 | residue management record, scale ticket, waste record, sale record, or storage reconciliation |

## 9. 验证规则

发布使用本 PCR 的前景数据包之前，应检查：

- 参考流使用按声明水分基准计的 kg 非种用玉米籽粒
- 数据集元数据将 CPC 01122 玉米籽粒与玉米种子、饲草玉米、甜玉米和加工玉米产品区分开
- 声明作物年度、地理范围、声明门点、等级或预期用途、是否纳入储存以及是否纳入交付
- 记录允许时，将田间生产和收获后处理分开
- 范围内的肥料、燃料、灌溉、植保、干燥能源、储存能源、运输和包装投入已处理
- 范围内的 N2O、硝酸盐、化石 CO2、取水、土地占用和残余物去向已考虑
- 收获籽粒、可销售籽粒、水分变化、拒收物和储存损失完成质量平衡核对
- 当秸秆、玉米芯、筛下物或其他共产品获得产品信用时，声明分配方法
- 超出有来源支持或内部审查范围的数值包含方法说明和证据理由

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当非种用玉米籽粒、水分基准、地理范围、作物年度和声明门点与数据集元数据匹配时，可用于下游饲料、食品、粮食处理、制粉、乙醇、淀粉、油或工业玉米数据构建 |
| excluded_use | 播种用玉米种子、饲草或青贮玉米、甜玉米、玉米粉、玉米糁、玉米粕、淀粉、油、乙醇、玉米片，以及需要被省略下游制造或动物饲喂负担的研究 |
| required_metadata | reference flow; CPC 01122 scope; geography; crop year; moisture basis; grade or intended use; declared gate; drying and storage inclusion; residue fate; allocation method; collection protocol coverage; DQR |
| required_quality_disclosure | 记录覆盖度、计算规则、测量设备或一手记录、水分换算、未解决遗漏和数据质量评分 |
| update_trigger | 当 CPC 映射变化，Tiangong 玉米籽粒、玉米种子、残余物、肥料、水、能源或废物流身份更新，Codex、FAO、IPCC 或等效农业指南变化，或经审查前景数据集提供更好的来源支持范围时修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-153-1985` | standard | <https://www.fao.org/fao-who-codexalimentarius/sh-proxy/jp/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B153-1985%252FCXS_153e.pdf> | 玉米籽粒范围、质量、包装、卫生和产品规格背景 |
| `fao-maize-postharvest-operations` | official_guidance | <https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_MAIZE.pdf> | 玉米收获、脱粒、干燥、储存、虫害控制和收获后损失背景 |
| `fao-grain-drying-storage` | official_guidance | <https://www.fao.org/4/i2433e/i2433e10.pdf> | 粮食干燥、处理、储存、水分和设备背景 |
| `ipcc-2019-managed-soils-n2o` | official_guidance | <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | 管理土壤 N2O 和氮排放计算背景 |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for process reference outputs, grain drying, moisture adjustment, losses, and batch reconciliation. | 参考输出和质量平衡检查的 QA 校验 |
