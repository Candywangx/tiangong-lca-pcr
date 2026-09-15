---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.coffee-decaffeinated-or-roasted
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 脱咖啡因或焙炒咖啡

## 1. 范围与适用性

本 PCR 规定 CPC 3.0 类别 23911 的前景制造数据：脱咖啡因绿咖啡、焙炒整豆咖啡和焙炒研磨咖啡，包括在焙炒前完成脱咖啡因的焙炒咖啡。边界自制造场址接收绿咖啡开始，涵盖准备、适用时的场内脱咖啡因、适用时的焙炒与冷却、适用时的研磨，直至工厂门口包装。

种植、咖啡鲜果初加工及至工厂运输属于上游，须通过关联数据集表示。零售、饮料制备、使用和寿命终止不在前景边界内。速溶咖啡、咖啡提取物/香精/浓缩物/调制品、作为销售产品的非脱咖啡因绿咖啡、咖啡代用品，以及作为产品销售的咖啡壳或皮不在本 PCR 范围内。

数据集须声明一个产品形态和一条路线。只有前景实际实施脱咖啡因时才选择脱咖啡因路线；水、二氧化碳、乙酸乙酯、二氯甲烷和咖啡油路线互为替代，不得作为默认并用投入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.coffee-decaffeinated-or-roasted` |
| classification_refs | CPC 3.0 `23911`，精确 |
| covered_products | 脱咖啡因绿咖啡；焙炒整豆咖啡；焙炒研磨咖啡；焙炒前完成脱咖啡因的咖啡 |
| excluded_products | 作为销售产品的非脱咖啡因绿咖啡；速溶咖啡；咖啡提取物、香精、浓缩物及调制品；咖啡代用品；咖啡饮料；作为产品销售的壳和皮 |
| representative_product | 包装工厂门口的已声明 CPC 23911 咖啡产品 |
| production_route | 已准备绿咖啡；恰好一条声明路线的条件性脱咖啡因；条件性焙炒与冷却；条件性研磨；包装 |
| market_state | 准备离开制造场址的净咖啡产品，包装另行列入清单 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已声明的脱咖啡因绿咖啡、焙炒整豆咖啡或焙炒研磨咖啡产品 |
| How much | 1 kg 净咖啡产品，不含包装质量 |
| How well | 符合声明的产品形态、焙炒规格、咖啡因声明、水分基准、适用时的粒度规格及放行质量规格 |
| How long or cycle | 一个制造报告期，归一化为 1 kg 合格净产品产出 |
| reference_flow_link | `unresolved_reference_product_flow` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 制造工厂门口 1 kg 净咖啡产品 |
| 参考产品流 | 脱咖啡因或焙炒咖啡 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态；脱咖啡因状态；适用时的脱咖啡因路线；适用时的焙炒规格；物种、拼配与产地声明；水分基准；适用时的研磨粒度规格；咖啡因试验方法或声明依据；包装配置；场址、地理、技术和报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品与咖啡物料转移 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有前景交换均归一化为恰好 1 kg 净合格咖啡产品；分母不含包装质量。 |
| `moisture_basis` | 绿咖啡、脱咖啡因咖啡、焙炒咖啡和研磨咖啡质量 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录原状质量和实测水分；声明所有干物质换算，不得混用水分基准。 |
| `utility_units` | 电力、蒸汽、外购热、燃料、过程水和液态二氧化碳 | 原始计量单位及可换算 SI 单位 | 适用时为 kWh、MJ、kg 或 m3 | 保留原始表计单位、换算因子、燃料低位或高位热值基准以及归一化结果。 |
| `packaging_mass` | 各包装组件 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每种材料组件分别记录；包装质量不得计入 1 kg 咖啡参考数量。 |
| `caffeine_result` | 声称脱咖啡因的产品 | 方法结果 | 实验室声明单位 | 记录采样基准、结果、检出限或定量限及方法标识；适用时可采用 ISO 20481。 |
| `quality_results` | 焙炒咖啡水分和研磨咖啡粒度 | 方法结果 | 实验室声明单位 | 方法结果须关联批次；适用时可采用 ISO 11817 和 ISO 23134。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址接收的绿咖啡，并声明供应商、产地、水分、脱咖啡因状态和来料质量 |
| starting_condition_role | 上游产品投入及前景质量平衡起点 |
| product_classification_scope | 可销售参考产品仅限 CPC 3.0 `23911`；普通绿咖啡是上游投入而非覆盖的销售产品 |
| recursive_input_rule | 外购 CPC 23911 中间品（如脱咖啡因绿咖啡）仅作为技术圈投入记录一次并关联上游数据集；除非场址实际实施该过程，否则不得在前景递归重建 |
| upstream_dataset_requirement | 绿咖啡、公用工程、化学品、包装和外购处理服务须关联供应商特定或代表性上游数据集，并披露地理、技术、时间和数据质量 |
| disclosure | 声明产品形态、纳入过程模块、脱咖啡因路线、直接燃料燃烧、外购公用工程、排放控制与废水处理边界、分配及排除活动 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景数据包 | 纳入报告场址内从绿咖啡接收至包装的全部实际制造操作。 | `eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279` |
| `boundary_upstream_inputs` | 外购投入 | 关联上游数据集，不得在前景重复其生产。 | `eu-pef-2021-2279` |
| `boundary_route_conditioning` | 脱咖啡因 | 仅纳入声明路线及其实物流入、回收循环、废物、废水和排放；替代路线行标记为不适用。 | `eu-jrc-fdm-bref-2019`; `shofinita-decaf-lca-2025` |
| `boundary_complete_inventory` | 水、能源、材料、废气、废水和残余物 | 每项原子交换均记录其计量或计算依据；不得使用合并的公用工程、材料、废物或排放占位。 | `eu-bat-fdm-2019-2031` |
| `boundary_packaging` | 包装 | 纳入实际包装物料清单，组件边角料与净咖啡质量分开。 | `eu-jrc-fdm-bref-2019`; `cheron-bessou-coffee-lca-2024` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `green_coffee_preparation` | 绿咖啡接收、清理、分选与拼配 | `required` | 始终 | 建立来料咖啡身份与准备后批次质量 | 每 1 kg 净参考产品 |
| `decaffeination` | 绿咖啡脱咖啡因与再干燥 | `conditional` | 场内生产脱咖啡因产品 | 采用恰好一条声明路线脱除咖啡因 | 每 1 kg 净参考产品 |
| `roasting_cooling` | 焙炒与冷却 | `conditional` | 焙炒整豆或研磨产品 | 焙炒、适用时淬冷、冷却并分离银皮 | 每 1 kg 净参考产品 |
| `grinding` | 研磨 | `conditional` | 焙炒研磨产品 | 将焙炒豆减小至声明粒度规格 | 每 1 kg 净参考产品 |
| `packing` | 包装 | `required` | 始终 | 生产可销售参考产品并记录各包装组件 | 恰好 1 kg 净参考产品 |
| `cleaning_effluent_management` | 设备清洗与场内废水管理 | `conditional` | 使用水、清洗化学品或场内废水处理 | 记录清洗资源、废水、污泥及任何直接水排放 | 每 1 kg 净参考产品 |

### 过程：绿咖啡接收、清理、分选与拼配（`green_coffee_preparation`）

#### 输入

##### 产品流

###### 绿咖啡（`input_green_coffee`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：绿咖啡 `b8869823-9c26-4580-9c45-95a626e0ca2a`
- 流属性/单位：质量 / kg
- 数量规则：记录归属于申报产品的绿咖啡净接收质量；库存变化只能按有据可查的规则调整。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_green_coffee_records`
- 来源：`un-cpc-3-2025`; `eu-jrc-fdm-bref-2019`

###### 准备工序用电（`input_electricity_preparation`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：电力
- 流属性/单位：能量 / kWh
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_green_coffee_records`
- 来源：`eu-bat-fdm-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备绿咖啡（`output_prepared_green_coffee`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：已准备绿咖啡
- 流属性/单位：质量 / kg
- 数量规则：由合格来料质量、各项分离废物、粉尘损失及库存变化计算。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_green_coffee_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

###### 分离的异物（`output_foreign_matter_waste`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：绿咖啡清理异物，废物
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_green_coffee_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 不合格绿咖啡（`output_rejected_green_coffee_waste`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：不合格绿咖啡豆，废物
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_green_coffee_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 收集的准备工序粉尘（`output_preparation_dust_waste`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：准备工序咖啡粉尘，废物
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_green_coffee_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

###### 准备工序向空气排放的颗粒物（`output_preparation_pm_air`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：颗粒物（粒径小于 10 微米），向空气排放
- 流属性/单位：质量 / kg
- 数量规则：依据对应采集协议的实测记录及第 8 节相应计算规则计算，并归一化为每 1 kg 净参考产品。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_air_emission_records`
- 来源：`eu-bat-fdm-2019-2031`

### 过程：绿咖啡脱咖啡因与再干燥（`decaffeination`）

#### 输入

##### 产品流

###### 脱咖啡因用已准备绿咖啡（`input_prepared_green_coffee_decaf`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：已准备绿咖啡
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_decaf_material_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 脱咖啡因用过程水（`input_process_water_decaf`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：过程水
- 流属性/单位：体积 / m3
- 数量规则：计量补充水与萃取水；仅在实际增湿、蒸制、水萃取、清洗或再干燥操作使用时计入。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_decaf_material_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`; `shofinita-decaf-lca-2025`

###### 脱咖啡因用蒸汽（`input_steam_decaf`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：计量增湿、汽提或再干燥使用的外购或内部转移蒸汽；不得与已分配给本过程的制汽燃料重复计算。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_decaf_material_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`; `shofinita-decaf-lca-2025`

###### 脱咖啡因用电（`input_electricity_decaf`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：电力
- 流属性/单位：能量 / kWh
- 数量规则：按所选路线分表计量萃取、回收设备、泵和再干燥用电。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_decaf_material_energy_records`
- 来源：`eu-bat-fdm-2019-2031`; `shofinita-decaf-lca-2025`

###### 脱咖啡因用外购热（`input_heat_decaf`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：外购热
- 流属性/单位：能量 / MJ
- 数量规则：计量脱咖啡因和再干燥使用的外购热；仅在热跨越场址边界时适用。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_decaf_material_energy_records`
- 来源：`eu-bat-fdm-2019-2031`

###### 脱咖啡因用天然气（`input_natural_gas_decaf`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：天然气
- 流属性/单位：能量 / MJ
- 数量规则：按声明的热值基准计量场内为脱咖啡因供热或制汽燃烧的天然气。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_decaf_material_energy_records`
- 来源：`eu-bat-fdm-2019-2031`

###### 脱咖啡因用液化石油气（`input_liquefied_petroleum_gas_decaf`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：液化石油气
- 流属性/单位：能量 / MJ
- 数量规则：按声明的热值基准计量场内为脱咖啡因供热或制汽燃烧的液化石油气。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_decaf_material_energy_records`
- 来源：`eu-bat-fdm-2019-2031`

###### 二氧化碳法脱咖啡因用液态二氧化碳（`input_liquid_carbon_dioxide`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：液态二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：扣除回收二氧化碳后计算净补充量；仅适用于声明的二氧化碳路线。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_decaf_route_agent_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 乙酸乙酯法脱咖啡因用乙酸乙酯（`input_ethyl_acetate`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：乙酸乙酯 `7b656504-e685-4170-ab6a-56f948c994ee`
- 流属性/单位：质量 / kg
- 数量规则：扣除回收库存后计算乙酸乙酯净补充量；仅适用于声明的乙酸乙酯路线。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_decaf_route_agent_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-extraction-solvents-2009-32`; `shofinita-decaf-lca-2025`

###### 二氯甲烷法脱咖啡因用二氯甲烷（`input_dichloromethane`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：二氯甲烷 `5829259b-4eae-4041-91ec-f2259b83e756`
- 流属性/单位：质量 / kg
- 数量规则：扣除回收库存后计算二氯甲烷净补充量；仅适用于声明的二氯甲烷路线。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_decaf_route_agent_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-extraction-solvents-2009-32`; `shofinita-decaf-lca-2025`

###### 水法脱咖啡因用活性炭（`input_activated_carbon`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：食品加工级活性炭
- 流属性/单位：质量 / kg
- 数量规则：记录吸附咖啡因使用的活性炭净投料；仅在声明的水法路线实际使用时适用。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_decaf_route_agent_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 咖啡油法脱咖啡因用咖啡油（`input_coffee_oil`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：咖啡油
- 流属性/单位：质量 / kg
- 数量规则：扣除回收量后计算咖啡油净补充量；仅适用于声明的咖啡油路线。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_decaf_route_agent_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 脱咖啡因绿咖啡（`output_decaffeinated_green_coffee`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：脱咖啡因绿咖啡
- 流属性/单位：质量 / kg
- 数量规则：根据路线质量平衡和实测水分计算合格再干燥产品质量。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_decaf_output_records`
- 来源：`eu-jrc-fdm-bref-2019`; `iso-20481-2008`

###### 回收咖啡因（`output_recovered_caffeine`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：回收咖啡因
- 流属性/单位：质量 / kg
- 数量规则：记录作为独立管理产品离场的回收咖啡因质量；否则计入相应废物或废水行。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_decaf_output_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

###### 废活性炭（`output_spent_activated_carbon_waste`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：脱咖啡因废活性炭，废物
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_decaf_output_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 废乙酸乙酯（`output_spent_ethyl_acetate_waste`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：废乙酸乙酯，废物
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_decaf_output_records`
- 来源：`eu-jrc-fdm-bref-2019`; `shofinita-decaf-lca-2025`

###### 废二氯甲烷（`output_spent_dichloromethane_waste`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：废二氯甲烷，废物
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_decaf_output_records`
- 来源：`eu-jrc-fdm-bref-2019`; `shofinita-decaf-lca-2025`

###### 脱咖啡因废水（`output_decaf_wastewater`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：咖啡脱咖啡因废水，废物
- 流属性/单位：体积 / m3
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_decaf_output_records`
- 来源：`eu-bat-fdm-2019-2031`

###### 脱咖啡因污泥（`output_decaf_sludge_waste`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：咖啡脱咖啡因废水处理污泥，废物
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_decaf_output_records`
- 来源：`eu-bat-fdm-2019-2031`

##### 基本流

###### 二氧化碳法脱咖啡因释放的二氧化碳（`output_decaf_carbon_dioxide_air`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：二氧化碳（化石源），向空气排放
- 流属性/单位：质量 / kg
- 数量规则：计算二氧化碳路线中未归入回收库存、产品或废物的二氧化碳库存损失。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_decaf_emission_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 向空气排放的乙酸乙酯（`output_ethyl_acetate_air`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：乙酸乙酯，向空气排放
- 流属性/单位：质量 / kg
- 数量规则：由经校验的溶剂平衡和排放测量计算乙酸乙酯路线向空气的损失。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_decaf_emission_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### 向空气排放的二氯甲烷（`output_dichloromethane_air`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：二氯甲烷，向空气排放
- 流属性/单位：质量 / kg
- 数量规则：由经校验的溶剂平衡和排放测量计算二氯甲烷路线向空气的损失。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_decaf_emission_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

### 过程：焙炒与冷却（`roasting_cooling`）

#### 输入

##### 产品流

###### 焙炒用已准备普通绿咖啡（`input_prepared_green_coffee_roasting`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：已准备绿咖啡
- 流属性/单位：质量 / kg
- 数量规则：记录投入焙炒机的已准备普通绿咖啡；脱咖啡因焙炒批次不适用。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_roasting_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 焙炒用脱咖啡因绿咖啡（`input_decaffeinated_green_coffee_roasting`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：脱咖啡因绿咖啡
- 流属性/单位：质量 / kg
- 数量规则：记录投入焙炒机的脱咖啡因绿咖啡；普通焙炒批次不适用。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_roasting_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 焙炒与冷却用电（`input_electricity_roasting`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：电力
- 流属性/单位：能量 / kWh
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_roasting_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### 焙炒淬冷水（`input_process_water_roasting`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：过程水
- 流属性/单位：体积 / m3
- 数量规则：计量喷淋淬冷水；仅在声明的焙炒机采用水淬冷时适用。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_roasting_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 焙炒用外购热（`input_heat_roasting`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：外购热
- 流属性/单位：能量 / MJ
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_roasting_energy_records`
- 来源：`eu-bat-fdm-2019-2031`

###### 焙炒用天然气（`input_natural_gas_roasting`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：天然气
- 流属性/单位：能量 / MJ
- 数量规则：按声明的热值基准计量焙炒机或专用热氧化器燃烧的天然气。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_roasting_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### 焙炒用液化石油气（`input_liquefied_petroleum_gas_roasting`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：液化石油气
- 流属性/单位：能量 / MJ
- 数量规则：按声明的热值基准计量焙炒机或专用热氧化器燃烧的液化石油气。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_roasting_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 焙炒咖啡豆（`output_roasted_coffee_beans`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：焙炒咖啡豆
- 流属性/单位：质量 / kg
- 数量规则：由实测产出、不合格品、银皮、粉尘、水分损失和库存变化计算合格冷却豆质量。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_roasting_output_records`
- 来源：`eu-jrc-fdm-bref-2019`; `iso-11817-1994`

##### 废物流

###### 咖啡银皮（`output_coffee_silverskin_waste`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：咖啡银皮，废物
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_roasting_output_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 不合格焙炒咖啡（`output_rejected_roasted_coffee_waste`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：不合格焙炒咖啡豆，废物
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_roasting_output_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

###### 咖啡焙炒产生的生物源二氧化碳（`output_roasting_biogenic_carbon_dioxide_air`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：二氧化碳（生物源），向空气排放
- 流属性/单位：质量 / kg
- 数量规则：实测或按碳平衡计算咖啡焙炒释放的二氧化碳，并与燃料燃烧排放分开。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_roasting_air_emission_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### 焙炒燃料产生的化石源二氧化碳（`output_roasting_fossil_carbon_dioxide_air`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：二氧化碳（化石源），向空气排放
- 流属性/单位：质量 / kg
- 数量规则：由每种实测直接燃料投入和有据可查的含碳量或排放因子计算；无场内化石燃料燃烧时不适用。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_roasting_air_emission_records`
- 来源：`eu-bat-fdm-2019-2031`

###### 焙炒产生的一氧化碳（`output_roasting_carbon_monoxide_air`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：一氧化碳，向空气排放
- 流属性/单位：质量 / kg
- 数量规则：依据对应采集协议的实测记录及第 8 节相应计算规则计算，并归一化为每 1 kg 净参考产品。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_roasting_air_emission_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### 焙炒产生的二氧化氮（`output_roasting_nitrogen_dioxide_air`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：二氧化氮，向空气排放
- 流属性/单位：质量 / kg
- 数量规则：记录实测二氧化氮烟气排放；若方法报告 NOx，须保留方法与换算基准，不得把合计值直接改称二氧化氮。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_roasting_air_emission_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### 焙炒产生的氨（`output_roasting_ammonia_air`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：氨，向空气排放
- 流属性/单位：质量 / kg
- 数量规则：依据对应采集协议的实测记录及第 8 节相应计算规则计算，并归一化为每 1 kg 净参考产品。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_roasting_air_emission_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### 焙炒向空气排放的颗粒物（`output_roasting_pm_air`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：颗粒物（粒径小于 10 微米），向空气排放
- 流属性/单位：质量 / kg
- 数量规则：依据对应采集协议的实测记录及第 8 节相应计算规则计算，并归一化为每 1 kg 净参考产品。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_roasting_air_emission_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

### 过程：研磨（`grinding`）

#### 输入

##### 产品流

###### 研磨用焙炒咖啡豆（`input_roasted_coffee_grinding`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：焙炒咖啡豆
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 研磨用电（`input_electricity_grinding`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：电力
- 流属性/单位：能量 / kWh
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_grinding_records`
- 来源：`eu-bat-fdm-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 焙炒研磨咖啡（`output_ground_roasted_coffee`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：焙炒研磨咖啡
- 流属性/单位：质量 / kg
- 数量规则：由实测投料、不合格品、收集粉尘、排放粉尘和库存变化计算合格研磨咖啡产出。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fdm-bref-2019`; `iso-23134-2022`

##### 废物流

###### 研磨粉尘（`output_grinding_dust_waste`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：研磨咖啡粉尘，废物
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 不合格焙炒研磨咖啡（`output_rejected_ground_coffee_waste`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：不合格焙炒研磨咖啡，废物
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

###### 研磨向空气排放的颗粒物（`output_grinding_pm_air`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：颗粒物（粒径小于 10 微米），向空气排放
- 流属性/单位：质量 / kg
- 数量规则：依据对应采集协议的实测记录及第 8 节相应计算规则计算，并归一化为每 1 kg 净参考产品。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_air_emission_records`
- 来源：`eu-bat-fdm-2019-2031`

### 过程：包装（`packing`）

#### 输入

##### 产品流

###### 包装用脱咖啡因绿咖啡（`input_decaffeinated_green_coffee_packing`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：脱咖啡因绿咖啡
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packing_records`
- 来源：`un-cpc-3-2025`; `eu-jrc-fdm-bref-2019`

###### 包装用焙炒整豆咖啡（`input_roasted_whole_bean_packing`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：焙炒咖啡豆
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packing_records`
- 来源：`un-cpc-3-2025`; `eu-jrc-fdm-bref-2019`

###### 包装用焙炒研磨咖啡（`input_ground_roasted_coffee_packing`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：焙炒研磨咖啡
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packing_records`
- 来源：`un-cpc-3-2025`; `eu-jrc-fdm-bref-2019`

###### 包装用电（`input_electricity_packing`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：电力
- 流属性/单位：能量 / kWh
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packing_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031`

###### 低密度聚乙烯包装膜（`input_ldpe_packaging_film`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：低密度聚乙烯膜
- 流属性/单位：质量 / kg
- 数量规则：由物料清单记录计算合格包装中的净组件质量，边角料另行记录；仅在实际使用时适用。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：`eu-jrc-fdm-bref-2019`; `cheron-bessou-coffee-lca-2024`

###### 铝包装箔（`input_aluminium_packaging_foil`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：铝箔
- 流属性/单位：质量 / kg
- 数量规则：由物料清单记录计算合格包装中的净组件质量，边角料另行记录；仅在实际使用时适用。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：`cheron-bessou-coffee-lca-2024`

###### 牛皮纸板箱（`input_kraft_paperboard_carton`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：牛皮纸板
- 流属性/单位：质量 / kg
- 数量规则：由物料清单记录计算合格包装中的净纸箱质量，边角料另行记录；仅在实际使用时适用。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：`cheron-bessou-coffee-lca-2024`

###### 聚丙烯排气阀（`input_polypropylene_degassing_valve`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：聚丙烯排气阀
- 流属性/单位：质量 / kg
- 数量规则：计算装入合格包装的排气阀净质量；仅在物料清单包含该组件时适用。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 木托盘（`input_wooden_pallet`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：木托盘
- 流属性/单位：质量 / kg
- 数量规则：计算一次性托盘净质量或可回用托盘的分摊损耗；仅在声明的包装配置使用托盘时适用。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：`eu-pef-2021-2279`

###### 线性低密度聚乙烯缠绕膜（`input_lldpe_stretch_film`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：线性低密度聚乙烯缠绕膜
- 流属性/单位：质量 / kg
- 数量规则：计算合格发运使用的缠绕膜净质量；仅在包装配置包含该组件时适用。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考咖啡产品（`output_reference_product`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：脱咖啡因或焙炒咖啡
- 流属性/单位：质量 / kg
- 数量规则：恰为 1 kg 合格净产品；不包含包装质量。
- 数值来源模式：固定值 (`fixed_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：方法公式 (`method_formula`)
- 采集协议：`cp_packing_records`
- 来源：`un-cpc-3-2025`; `eu-pef-2021-2279`

##### 废物流

###### 聚乙烯包装边角料（`output_polyethylene_packaging_scrap`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：聚乙烯包装边角料，废物
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_bom_records`
- 来源：`eu-bat-fdm-2019-2031`

###### 铝包装边角料（`output_aluminium_packaging_scrap`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：铝包装边角料，废物
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_bom_records`
- 来源：`eu-bat-fdm-2019-2031`

###### 纸板包装边角料（`output_paperboard_packaging_scrap`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：纸板包装边角料，废物
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_bom_records`
- 来源：`eu-bat-fdm-2019-2031`

##### 基本流

### 过程：设备清洗与场内废水管理（`cleaning_effluent_management`）

#### 输入

##### 产品流

###### 清洗水（`input_cleaning_water`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：过程水
- 流属性/单位：体积 / m3
- 数量规则：计量设备和地面清洗用水，不含脱咖啡因过程水和焙炒淬冷水。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_effluent_records`
- 来源：`eu-bat-fdm-2019-2031`

###### 废水处理用电（`input_electricity_effluent`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：电力
- 流属性/单位：能量 / kWh
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_effluent_records`
- 来源：`eu-bat-fdm-2019-2031`

###### 氢氧化钠清洗剂（`input_sodium_hydroxide_cleaning`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：氢氧化钠
- 流属性/单位：质量 / kg
- 数量规则：记录清洗使用的氢氧化钠净量；仅在场址清洗配方有记录时适用。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_effluent_records`
- 来源：`eu-bat-fdm-2019-2031`

###### 硝酸清洗剂（`input_nitric_acid_cleaning`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：硝酸
- 流属性/单位：质量 / kg
- 数量规则：记录清洗使用的硝酸净量；仅在场址清洗配方有记录时适用。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_effluent_records`
- 来源：`eu-bat-fdm-2019-2031`

##### 废物流

###### 进入场内处理的脱咖啡因废水（`input_decaf_wastewater_treatment`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：咖啡脱咖啡因废水，废物
- 流属性/单位：体积 / m3
- 数量规则：计量进入场内处理系统的脱咖啡因废水；仅在场内处理时适用。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_effluent_records`
- 来源：`eu-bat-fdm-2019-2031`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 设备清洗废水（`output_combined_process_wastewater`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：咖啡设备清洗废水，废物
- 流属性/单位：体积 / m3
- 数量规则：计量转入场内或场外处理的设备清洗废水，不含脱咖啡因废水及另行列示的直接排放。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_effluent_records`
- 来源：`eu-bat-fdm-2019-2031`

###### 废水处理污泥（`output_effluent_sludge_waste`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：咖啡加工废水处理污泥，废物
- 流属性/单位：质量 / kg
- 数量规则：按对应采集协议取得该原子交换的场址记录，并归一化为每 1 kg 净参考产品。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_effluent_records`
- 来源：`eu-bat-fdm-2019-2031`

##### 基本流

###### 排入受纳水体的处理后废水（`output_treated_wastewater_water`）

记录本卡所示单一原子交换；数量按下述规则取得，并仅在声明的产品、路线和技术条件适用时计入。

- 选定流：处理后水，向地表水排放
- 流属性/单位：体积 / m3
- 数量规则：计量直接排入受纳水体的最终出水；全部废水均转场外时不适用。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_effluent_records`
- 来源：`eu-bat-fdm-2019-2031`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用的准备、脱咖啡因、焙炒、研磨、包装、公用工程和处理 | 首先按生产线、批次、表计、运行时间或其他因果记录细分，使声明产品获得其实测份额。 | `eu-pef-2021-2279` |
| `allocation_physical_then_other` | 仍然共用的过程 | 无法细分时采用有据可查的物理因果关系；仅在不存在可辩护物理关系时才可采用经济价值等其他有据可查关系。 | `eu-pef-2021-2279` |
| `allocation_recovered_caffeine` | 作为产品离场的回收咖啡因 | 尽可能细分回收过程；否则按上述层级处理。不得默认分配零负荷，使用价格时须披露数量、价格及敏感性。 | `eu-pef-2021-2279`; `eu-jrc-fdm-bref-2019` |
| `allocation_internal_recovery` | 场内回用的溶剂、二氧化碳、咖啡油、热或水 | 场内循环仅建模一次；记录净补充投入、库存变化、废物和直接释放，不得另设产品抵扣。 | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | 银皮、不合格豆、粉尘、废介质、废水、污泥和包装边角料 | 记录处理路线。除非所选下游方法明确要求且披露全部替代假设，否则前景内不得给予避免产品抵扣。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_green_coffee_records` | `green_coffee_preparation` | 咖啡、电力、准备后产出、异物、不合格品和收集粉尘 | 地磅、批次、分表和废物记录 | 批次；供应商；产地；绿咖啡质量与水分；电力；产出；废物；期初期末库存 | 用校准秤和表计合计与生产批次核对 | kg；kWh | 每批并按月核对 | 有代表性的连续报告期，通常至少 12 个月 | 服务于声明产品的全部准备设备 | 汇总记录、扣除库存变化并按合格净产出归一化 | 校准、发票、批次单、库存记录和废物联单 |
| `cp_decaf_material_energy_records` | `decaffeination` | 咖啡、水、蒸汽、电力、外购热和各燃料 | 批次、表计、发票和库存记录 | 路线；批次；咖啡质量与水分；水；蒸汽；电力；热；每种燃料；热值基准；运行时间 | 读取路线分表，或按有据可查的因果关系分摊共用表计 | kg；m3；MJ；kWh | 每批并按月核对 | 与参考产出相同报告期 | 全部前景脱咖啡因与再干燥设备 | 按声明路线汇总、扣除库存变化并按净产出归一化 | 校准、发票、批次单和表计图 |
| `cp_decaf_route_agent_records` | `decaffeination` | 二氧化碳、乙酸乙酯、二氯甲烷、活性炭和咖啡油 | 采购、投料、回收和库存记录 | 介质身份；路线；采购；投料；回收；期初期末库存；废物 | 对所选路线逐种介质闭合库存平衡 | kg | 每批并按月闭合 | 与脱咖啡因产出相同报告期 | 仅所选路线 | 净补充量等于采购加期初库存减期末库存和有记录的输出 | 供应商规格、罐瓶记录、回收日志和盘点 |
| `cp_decaf_output_records` | `decaffeination` | 脱咖啡因咖啡、咖啡因、废介质、废水和污泥 | 秤、实验室、流量计和废物记录 | 产出质量；水分；咖啡因结果；回收咖啡因；各废介质；废水；污泥；干物质；去向 | 按路线批次核对产出和残余物 | kg；m3；实验室单位 | 每批或每次发运 | 与脱咖啡因投入相同报告期 | 所选路线及其场内处理 | 各原子产出分别汇总并按合格净产品归一化 | 试验报告、校准秤、流量计和转移单 |
| `cp_decaf_emission_records` | `decaffeination` | 路线特定二氧化碳、乙酸乙酯和二氯甲烷排放 | 溶剂或气体平衡与排放试验 | 路线；补充；回收；产品残留；废物；库存变化；排气浓度；流量；时间 | 闭合逐种介质平衡并与烟气或作业排气测试核对 | kg；浓度；体积 | 每次生产活动及法规要求频率 | 报告期有代表性的运行状态 | 所选路线全部释放点 | 将浓度与流量换算为质量并与库存损失核对 | 采样计划、实验室资质、仪器校准和平衡闭合 |
| `cp_roasting_records` | `roasting_cooling` | 绿咖啡投料和焙炒产出 | 批次和秤记录 | 批次；普通或脱咖啡因状态；绿咖啡与焙炒咖啡质量和水分；焙炒规格；库存 | 按焙炒批次核对校准秤 | kg | 每批并按月核对 | 与包装产出相同报告期 | 全部相关焙炒机与冷却器 | 汇总合格批次并按包装净产出归一化 | 批次单、秤校准和水分试验报告 |
| `cp_roasting_energy_records` | `roasting_cooling` | 电力、淬冷水、外购热、天然气和液化石油气 | 表计、发票和设备记录 | 表读数；燃料；热值；淬冷水；运行时间；热氧化器使用 | 优先用专用表计，否则按有据可查的因果运行参数分摊 | kWh；MJ；m3 | 每批或每日并按月核对 | 与焙炒产出相同报告期 | 焙炒机、冷却器、旋风器和专用控制设备 | 各原子公用工程分别汇总并按合格产出归一化 | 表计校准、发票和设备日志 |
| `cp_roasting_output_records` | `roasting_cooling` | 焙炒豆、银皮和不合格品 | 秤和废物记录 | 产出质量；水分；银皮；不合格品；去向；库存变化 | 按生产活动核对产品和残余物质量 | kg | 每次生产活动并按月核对 | 与焙炒投入相同报告期 | 全部焙炒产出处理 | 汇总各原子产出并闭合咖啡质量平衡 | 秤校准、废物联单和库存记录 |
| `cp_roasting_air_emission_records` | `roasting_cooling` | 生物源和化石源二氧化碳、一氧化碳、二氧化氮、氨及颗粒物 | 烟气试验、连续监测、燃料记录和质量平衡 | 排放源；污染物；方法；浓度；流量；时间；燃料；因子；治理状态 | 逐污染物监测，咖啡过程碳与燃料碳分开 | kg；浓度；体积；MJ | 有代表性运行状态及要求频率 | 报告期技术和控制 | 每个焙炒、冷却和热氧化器烟道 | 换算排放质量并按对应产量归一化 | 采样计划、有资质结果、校准和运行日志 |
| `cp_air_emission_records` | `green_coffee_preparation`; `grinding` | 颗粒物 | 粉尘收集平衡与排放测量 | 收集粉尘；浓度；气流；运行时间；产量 | 按设备核对收集和排放粉尘 | kg；浓度；体积 | 有代表性生产活动 | 与生产相同报告期 | 准备和研磨释放点 | 计算排放质量并按对应产出归一化 | 粉尘联单、采样报告和仪器校准 |
| `cp_grinding_records` | `grinding` | 焙炒投入、电力、研磨产出、粉尘、不合格品和粒度 | 批次、秤、分表和实验室记录 | 投入；产出；电力；粉尘；不合格品；库存变化；粒度结果 | 核对研磨批次和校准测量记录 | kg；kWh；实验室单位 | 每批并按月核对 | 与包装研磨咖啡相同报告期 | 全部相关研磨机 | 各原子流汇总并按合格包装产出归一化 | 秤和表计校准、批次单和试验报告 |
| `cp_packing_records` | `packing` | 产品投入、电力和参考产出 | 灌装、秤、分表和成品记录 | 产品形态；投入质量；包装净质量；不合格品；电力；库存 | 将法定计量或校准灌装记录与成品库存核对 | kg；kWh | 每个包装批次并按月核对 | 与全部前景模块相同报告期 | 包装声明产品的全部生产线 | 全部流归一化为恰好 1 kg 净合格咖啡 | 校准、批次放行和库存记录 |
| `cp_packaging_bom_records` | `packing` | 各包装组件和边角料 | 物料清单、采购、领用、边角料和库存记录 | 组件身份；聚合物或材料；单位质量；数量；领用；边角料；退回；库存变化 | 由经审计的组件记录计算净组件质量 | kg；个 | 每个包装规格并按月核对 | 报告期使用的规格 | 范围内初级、次级和三级包装 | 各组件分别汇总并按净咖啡产出归一化 | 批准物料清单、供应商规格、秤核查和废物联单 |
| `cp_cleaning_effluent_records` | `cleaning_effluent_management` | 清洗水、电力、各化学品、废水、污泥和直接水排放 | 表计、配方、实验室和废物记录 | 水；电力；化学品身份与质量；进水；外运废水；最终出水；污染物结果；污泥；干物质 | 核对水与物料平衡，场外废物与直接排放分开 | kg；m3；kWh；实验室单位 | 每次清洗及要求的排放监测频率 | 与生产相同报告期 | 归属于声明产品的清洗和场内处理 | 汇总原子流，按因果关系分摊共用处理并按净产出归一化 | 表计校准、清洗配方、有资质分析、许可记录和转移单 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景交换 | 归一化量 = 报告期交换量 × 1 kg / 报告期合格净咖啡产出。 | 原子交换合计；合格净产出 | 每参考流数量 | `eu-pef-2021-2279` |
| `calc_coffee_mass_balance` | 准备、脱咖啡因、焙炒、研磨和包装 | 期初咖啡库存 + 咖啡投入 = 期末库存 + 合格转移或产品 + 各咖啡物料废物 + 实测或计算的直接物料损失，全部采用声明水分基准。 | 咖啡质量；水分；库存；废物；排放 | 过程闭合及未解释差额 | `eu-jrc-fdm-bref-2019`; `cheron-bessou-coffee-lca-2024` |
| `calc_route_agent_balance` | 所选脱咖啡因介质 | 期初库存 + 采购 = 期末库存 + 内部回收库存 + 产品残留 + 外售回收 + 废物 + 直接释放。 | 逐介质库存与测量 | 净补充及路线特定损失 | `eu-jrc-fdm-bref-2019`; `shofinita-decaf-lca-2025` |
| `calc_shared_energy` | 共用表计 | 仅对未分表余额按有据可查的运行时间、吞吐量或实测负荷等因果参数分摊，并披露参数和敏感性。 | 共用表计；分表用量；因果参数 | 过程特定公用工程量 | `eu-bat-fdm-2019-2031`; `eu-pef-2021-2279` |
| `calc_stack_mass` | 各直接空气排放 | 排放质量 = 污染物浓度 × 干或湿烟气流量 × 运行时间，并保留基准状态、水分和氧校正。 | 污染物结果；气流；时间；校正 | 逐污染物排放质量 | `eu-bat-fdm-2019-2031` |
| `calc_packaging_mass` | 各包装组件 | 净组件质量 = 领用 + 期初库存 − 期末库存 − 单独称量边角料 − 有记录的退回。 | 组件领用；库存；边角料；退回 | 合格发运中的组件质量 | `eu-pef-2021-2279` |
| `calc_water_balance` | 脱咖啡因、清洗和废水处理 | 水投入 = 产品含水或蒸发 + 外运废水 + 直接排放 + 污泥含水 + 库存变化，并报告未解释余额。 | 计量水及全部水输出 | 水平衡闭合 | `eu-bat-fdm-2019-2031` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_primary_foreground` | 全部前景过程 | 质量、水、能源、化学品、包装、废物和直接排放使用场址一手记录；存在一手记录时不得以二手估算替代。 | 表计、发票、批次、实验室和废物文件 |
| `dq_representativeness` | 数据集 | 对每项重要投入和直接排放评价技术、地理、时间及精度或不确定性代表性。 | 数据质量评级和数据集元数据 |
| `dq_completeness` | 清单 | 证明每个纳入过程和原子行均已记录、计算或按路线给出不适用理由。 | 完整性矩阵及质量、介质、能源、包装和水平衡 |
| `dq_method_traceability` | 试验与计算 | 保留方法版本、样品、原始单位、换算因子、分配参数和计算工作簿或查询谱系。 | 实验室报告和可复算记录 |
| `dq_no_unsupported_ranges` | 重要清单行 | 在至少两项相互独立的原文来源支持相容边界、单位和归一化基准前，不得发布范围。 | 来源比较记录或开放的 `unresolved_range_evidence` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 严重度 | source_ids |
| --- | --- | --- | --- | --- |
| `validate_identity_scope` | 数据集身份 | 产品形态须为 CPC 23911 覆盖形态之一，且不得是速溶咖啡、提取物、调制品、饮料、代用品或普通绿咖啡。 | error | `un-cpc-3-2025` |
| `validate_reference_mass` | 参考流 | 参考产出等于 1 kg 不含包装的净咖啡，并声明全部必需限定信息。 | error | `eu-pef-2021-2279` |
| `validate_reference_uuid` | 参考流 | 在解析到精确公开天工参考产品 UUID 前，发布校验保持未决；不得使用近似流替代。 | error |  |
| `validate_route_exclusivity` | 脱咖啡因 | 纳入脱咖啡因时恰好声明一条路线；替代路线介质行不适用，溶剂、二氧化碳或水路线损失不得合并。 | error | `eu-jrc-fdm-bref-2019` |
| `validate_process_applicability` | 过程图 | 仅焙炒产品纳入焙炒，仅研磨产品纳入研磨，仅场内实际实施时纳入脱咖啡因。 | error | `un-cpc-3-2025`; `eu-jrc-fdm-bref-2019` |
| `validate_mass_balance` | 咖啡过程 | 咖啡物料平衡须在场址记录的测量不确定性内闭合；未解释差额须报告并审查。 | error | `eu-jrc-fdm-bref-2019`; `cheron-bessou-coffee-lca-2024` |
| `validate_resource_inventory` | 全部过程 | 使用的水、蒸汽、电力、外购热、每种燃料、每种脱咖啡因介质及每种包装组件须分别成行并有源记录。 | error | `eu-bat-fdm-2019-2031` |
| `validate_waste_emissions` | 全部过程 | 存在时，银皮、不合格豆、粉尘、废介质、废水、污泥、包装边角料及各直接排放须分别记录。 | error | `eu-jrc-fdm-bref-2019`; `eu-bat-fdm-2019-2031` |
| `validate_decaf_claim` | 脱咖啡因产品 | 须有与批次关联的咖啡因试验或适用的法定声明依据，且方法与结果可追溯；ISO 20481 是适用分析方法。 | error | `iso-20481-2008` |
| `validate_eu_dcm_residue` | 欧盟市场二氯甲烷路线 | 适用 Directive 2009/32/EC 时须证明焙炒咖啡二氯甲烷残留限值 2 mg/kg 及相应萃取溶剂要求；否则记录适用司法辖区。 | error | `eu-extraction-solvents-2009-32` |
| `validate_product_quality` | 焙炒与研磨产品 | 适用时声明焙炒研磨咖啡水分方法和研磨咖啡粒度方法；ISO 11817 与 ISO 23134 可作为方法标识。 | warning | `iso-11817-1994`; `iso-23134-2022` |
| `validate_data_quality` | 数据集 | 披露完整性、时间、地理、技术和精度评价及全部分配选择。 | error | `eu-pef-2021-2279` |
| `validate_ranges` | 数量范围 | 不得由单篇研究、单点、不相容基准或相等上下限添加范围。 | error |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个声明 CPC 3.0 23911 咖啡产品及路线的场址特定前景制造数据包 |
| downstream_use | 投影为过程和生命周期模型数据集，并关联绿咖啡、公用工程、化学品、包装和处理的上游数据集 |
| allowed_use | 产品形态、路线、地理、技术、期间、分配和数据质量相容时，用于产品碳足迹或 LCA |
| excluded_use | 不得通用于速溶咖啡、咖啡饮料制备、种植、鲜果初加工或未声明的脱咖啡因路线 |
| required_metadata | PCR id 与版本；产品形态；路线；咖啡因状态与试验；焙炒和研磨规格；水分基准；参考流限定信息；场址与期间；过程纳入；UUID 状态；分配；包装；上游链接 |
| required_quality_disclosure | 一手数据占比；表计与秤覆盖；质量、溶剂、能源、包装和水平衡闭合；数据质量评级；不适用行；不确定性；未解决 UUID 与范围证据状态 |
| update_trigger | 产品或路线变化；新增脱咖啡因介质；设备或控制变化；包装规格变化；重要供应商或能源变化；报告期更新；法规或分析方法变化；精确参考 UUID 可用 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | 联合国统计司，CPC 3.0 结构与解释性说明，23911 类，2025，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（2026-08-24 访问） | 类别身份与排除项 |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | 欧盟委员会联合研究中心，食品、饮料和乳品工业最佳可行技术参考文件，JRC118627，2019，DOI: 10.2760/243911，https://publications.jrc.ec.europa.eu/repository/handle/JRC118627（已核验官方本地原文） | 咖啡过程顺序、替代脱咖啡因路线、焙炒、冷却、研磨、包装、银皮和排放身份；未据此推断数量范围 |
| `eu-bat-fdm-2019-2031` | `standard` | 欧盟委员会实施决定 (EU) 2019/2031，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng（2026-08-24 访问） | 水、能源、原料、废水、废气、残余物、监测和能源管理记录 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279 环境足迹方法合并文本，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（2026-08-24 访问） | 功能单位、完整性、公司特定前景数据、数据质量和分配层级 |
| `eu-extraction-solvents-2009-32` | `standard` | Directive 2009/32/EC 萃取溶剂合并文本（2023-02-16），https://eur-lex.europa.eu/eli/dir/2009/32/2023-02-16/eng（2026-08-24 访问） | 欧盟条件下乙酸乙酯、二氧化碳与二氯甲烷用途及焙炒咖啡二氯甲烷残留要求 |
| `iso-20481-2008` | `standard` | ISO 20481:2008，咖啡及咖啡产品咖啡因 HPLC 参考测定法，https://www.iso.org/standard/34185.html（2026-08-24 访问） | 咖啡因试验方法身份与适用性 |
| `iso-11817-1994` | `standard` | ISO 11817:1994，焙炒研磨咖啡水分 Karl Fischer 参考法，https://www.iso.org/standard/20100.html（2026-08-24 访问） | 焙炒研磨咖啡水分方法身份与适用性 |
| `iso-23134-2022` | `standard` | ISO 23134:2022，研磨焙炒咖啡粒度测定，https://www.iso.org/standard/74672.html（2026-08-24 访问） | 研磨咖啡粒度方法身份与适用性 |
| `cheron-bessou-coffee-lca-2024` | `literature` | Chéron-Bessou 等，*Unravelling life cycle impacts of coffee: Why do results differ so much among studies?*，2024，DOI: 10.1016/j.spc.2024.04.005，https://researchonline.jcu.edu.au/85847/1/85847.pdf（2026-08-24 核验全文） | 功能单位限定、一手数据与质量平衡、二次加工和包装边界、变异性警示；未推断数量范围 |
| `shofinita-decaf-lca-2025` | `literature` | Shofinita 等，*Life Cycle Assessment of Decaffeinated Coffee Beans Production*，2025，DOI: 10.5614/j.eng.technol.sci.2025.57.3.3，https://jets.itb.ac.id/jets/article/download/115/182（2026-08-24 核验全文） | 乙酸乙酯与二氯甲烷路线拆解、蒸制、萃取、汽提、干燥、电力及蒸汽或热；单篇数值未用作范围 |
