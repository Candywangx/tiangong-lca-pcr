---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.apparel-and-clothing-accessories-of-plastics-incl-gloves
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 塑料服装和服饰用品（包括手套）

## 1. 范围与适用性

本 PCR 构建精确归入 CPC 28243、以塑料为定义性材料的服装和服饰用品（包括手套）从场址投入到工厂门的前景数据包。覆盖塑料薄膜/片材裁切连接路线和 PVC 相容增塑糊手套浸塑路线；每个数据集仅选择实际路线及其具体原子交换。排除皮革制品、硫化橡胶手套、普通纺织服装、鞋类，以及 CPC 28250 中毡、非织造布或经塑料/橡胶等浸渍、涂覆或层压的纺织服装。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.apparel-and-clothing-accessories-of-plastics-incl-gloves |
| classification_refs | CPC 3.0: 28243，精确 |
| covered_products | 精确归入 CPC 28243 的塑料服装和服饰用品，包括塑料手套。 |
| excluded_products | 皮革、橡胶或普通纺织制品；CPC 28250 涂覆或浸渍纺织服装；鞋类。 |
| representative_product | 已声明型号和尺寸的塑料服装、服饰用品或手套。 |
| production_route | 条件适用的薄膜/片材裁切连接路线或 PVC 增塑糊浸塑路线，以及实际整理与包装。 |
| market_state | 工厂门处已质量放行并包装的成品。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 精确归入 CPC 28243 的塑料服装或服饰用品成品。 |
| How much | 净成品 1 kg；包装单独列入清单。 |
| How well | 符合已声明型号、尺寸、组成、功能规范和质量放行准则。 |
| How long or cycle | 工厂门处一个生产批次；一次性/可重复使用状态及寿命为限定信息。 |
| reference_flow_link | 已在 state code 100 确认的 Tiangong 产品流身份。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 塑料服装和服饰用品（包括手套） `8954bc88-041d-4f58-99ce-5d0b20fc794f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CPC 28243 分类理由；产品形式、型号、尺寸和净质量；各聚合物及质量份额；每种增塑剂、稳定剂、颜料、填料和添加剂；一次性或可重复使用状态及寿命；厚度；连接和表面处理；手套有粉/无粉；部件；性能标准与测试；包装；路线；场址、地域和报告期。 |

构建前景数据包时，全部必需限定信息必须在数据集元数据、过程说明或等效字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 固定为 1 kg 净合格产品；包装质量单列。 |
| `material_mass` | 每种物料、产品和废物 | Mass | kg | 使用校准质量记录；不同物质不得合并。 |
| `electricity_energy` | 电力 | Energy | kWh | 单独记录输送电力。 |
| `thermal_energy` | 蒸汽和热水 | Energy | MJ | 蒸汽与热水分别记录。 |
| `fuel_energy` | 天然气、柴油和 LPG | Energy | MJ | 各燃料按供应商低位热值分别换算。 |
| `elementary_mass` | 每种排放物质 | Mass | kg | 不得以 VOC、NOx、SOx、COD 或 TSS 代替具体物质。 |

## 5. 系统边界

边界始于具体外购物料、水、包装和公用工程跨入报告场址，止于 1 kg 合格已包装 CPC 28243 产品。纳入实际配混、成形、转化、整理、包装、可归属场址服务及处理。外购投入上游和产品下游配送、使用与生命末期须在下游模型连接。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 经规格确认的具体外购树脂、化学品、部件、包装、水和能源载体在场址门接收。 |
| starting_condition_role | 这些投入为前景入口；上游生产和入厂运输须连接提供方数据集。 |
| product_classification_scope | 仅限 CPC 28243；CPC 28250 涂覆或浸渍纺织服装在范围外。 |
| recursive_input_rule | 为每个外购投入递归连接上游数据集；不得以集合投入替代缺失具体流。 |
| upstream_dataset_requirement | 提供方数据集匹配物料、地域、技术、时期、属性和单位。 |
| disclosure | 披露排除、截断、分配、内部回用、处理、未监测物质及未连接提供方。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `polymer_compounding_and_sheet_forming` | 聚合物配混与塑料片材成形 | conditional | 场内进行配方制备或塑料薄膜/片材成形时纳入。 | 前景生产 | 1 kg accepted intermediate |
| `pvc_glove_dip_moulding` | PVC 手套浸塑成形与热凝胶化 | conditional | 仅对采用 PVC 相容增塑糊浸渍并经烘箱凝胶化的手套纳入。 | 前景生产 | 1 kg accepted glove shell |
| `cutting_joining_and_conversion` | 裁切、连接与制品转化 | required | 纳入实际使用的裁切、热封、焊接、缝制、修边或卷边工序。 | 前景生产 | 1 kg accepted converted product |
| `wet_finishing_and_surface_treatment` | 湿法整理与表面处理 | conditional | 进行清洗、浸洗、氯化、撒粉、漂洗或相关干燥时纳入。 | 前景生产 | 1 kg accepted finished product |
| `packaging_and_site_services` | 包装与场址公用工程 | required | 纳入最终包装及可归属的公用工程、燃烧、制冷和处理活动。 | 前景生产 | 1 kg packaged reference product |

### 过程：聚合物配混与塑料片材成形 （`polymer_compounding_and_sheet_forming`）

#### 输入

##### 产品流

###### 聚氯乙烯树脂 (投入) (`pvc_resin_input`)

仅适用于 PVC 配方。记录跨入本过程的 聚氯乙烯树脂 净量。

- 选定流: Polyvinyl chloride resin
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `epo-pvc-glove-process-2020`, `us-epa-pvc-processing-1977`

###### 低密度聚乙烯树脂 (投入) (`ldpe_resin_input`)

仅适用于 LDPE 薄膜或片材产品。记录跨入本过程的 低密度聚乙烯树脂 净量。

- 选定流: Low-density polyethylene resin
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `ec-apparel-footwear-pefcr-2025`

###### 乙烯-醋酸乙烯共聚物 (投入) (`eva_resin_input`)

EVA 为已声明产品组分时适用。记录跨入本过程的 乙烯-醋酸乙烯共聚物 净量。

- 选定流: Ethylene-vinyl acetate copolymer
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `ec-apparel-footwear-pefcr-2025`

###### 热塑性聚氨酯树脂 (投入) (`tpu_resin_input`)

仅适用于 TPU 薄膜、片材或模制产品。记录跨入本过程的 热塑性聚氨酯树脂 净量。

- 选定流: Thermoplastic polyurethane resin
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `ec-apparel-footwear-pefcr-2025`

###### 邻苯二甲酸二异壬酯 (投入) (`dinp_plasticizer_input`)

仅当经核实配方使用 DINP 时适用。记录跨入本过程的 邻苯二甲酸二异壬酯 净量。

- 选定流: Diisononyl phthalate
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `eu-textiles-bat-2022`

###### 环氧大豆油 (投入) (`esbo_input`)

仅当经核实配方使用该添加剂时适用。记录跨入本过程的 环氧大豆油 净量。

- 选定流: Epoxidized soybean oil
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `eu-textiles-bat-2022`

###### 硬脂酸钙 (投入) (`calcium_stearate_input`)

仅当经核实配方明确该稳定剂时适用。记录跨入本过程的 硬脂酸钙 净量。

- 选定流: Calcium stearate
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `eu-textiles-bat-2022`

###### 硬脂酸锌 (投入) (`zinc_stearate_input`)

仅当经核实配方明确该稳定剂时适用。记录跨入本过程的 硬脂酸锌 净量。

- 选定流: Zinc stearate
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `eu-textiles-bat-2022`

###### 碳酸钙 (投入) (`calcium_carbonate_input`)

仅当作为填料有意加入时适用。记录跨入本过程的 碳酸钙 净量。

- 选定流: Calcium carbonate
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `eu-textiles-bat-2022`

###### 二氧化钛 (投入) (`titanium_dioxide_input`)

仅当作为已识别颜料或遮盖剂使用时适用。记录跨入本过程的 二氧化钛 净量。

- 选定流: Titanium dioxide
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `eu-textiles-bat-2022`

###### 炭黑 (投入) (`carbon_black_input`)

仅当用于已声明着色配方时适用。记录跨入本过程的 炭黑 净量。

- 选定流: Carbon black
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `eu-textiles-bat-2022`

###### 加氢轻质石油馏分 (投入) (`petroleum_distillate_input`)

仅当配方和 SDS 明确该稀释溶剂时适用。记录跨入本过程的 加氢轻质石油馏分 净量。

- 选定流: Hydrotreated light petroleum distillate
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `epo-pvc-glove-process-2020`, `eu-solvent-bat-2020`

###### 中压电力 (投入) (`compounding_electricity_input`)

电力用于混合、过滤、脱气、挤出或压延时适用。记录跨入本过程的 中压电力 净量。

- 选定流: Electricity, medium voltage
- 流属性/单位: Energy / kWh
- 数量规则: 分表能量或从载体特定场址总表按有记录因果关系分配的能量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_meter_records`
- 来源: `eu-textiles-bat-2022`

###### 蒸汽 (投入) (`compounding_steam_input`)

蒸汽跨入本过程时适用，并与热水分开。记录跨入本过程的 蒸汽 净量。

- 选定流: Steam
- 流属性/单位: Energy / MJ
- 数量规则: 分表能量或从载体特定场址总表按有记录因果关系分配的能量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_meter_records`
- 来源: `eu-textiles-bat-2022`

###### 热水 (投入) (`compounding_hot_water_input`)

热水跨入本过程时适用，并与蒸汽分开。记录跨入本过程的 热水 净量。

- 选定流: Hot water
- 流属性/单位: Energy / MJ
- 数量规则: 分表能量或从载体特定场址总表按有记录因果关系分配的能量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_meter_records`
- 来源: `eu-textiles-bat-2022`

##### 废物流

无预定义交换；如实际存在，须新增具体原子行。

##### 基本流

无预定义交换；如实际存在，须新增具体原子行。

#### 输出

##### 产品流

###### 制备完成的 PVC 增塑糊 (输出) (`prepared_pvc_plastisol_output`)

仅适用于 PVC 浸塑路线。记录从本过程转出的合格 制备完成的 PVC 增塑糊 数量。

- 选定流: Prepared PVC plastisol
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_intermediate_output_records`
- 来源: `epo-pvc-glove-process-2020`

###### CPC 28243 制品转化用塑料片材 (输出) (`plastic_sheet_output`)

适用于裁切连接路线；每个数据集仅声明一种聚合物身份。记录从本过程转出的合格 CPC 28243 制品转化用塑料片材 数量。

- 选定流: Plastic sheet for CPC 28243 conversion
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_intermediate_output_records`
- 来源: `us-epa-pvc-processing-1977`

##### 废物流

###### PVC 配混残余废物 (废物) (`pvc_compound_residue_waste`)

仅适用于 non-recirculated PVC residue.当 PVC 配混残余废物 离开过程且未内部回用时单独记录。

- 选定流: Waste PVC compound residue
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_records`
- 来源: `eu-textiles-bat-2022`

###### PVC 片材边角废物 (废物) (`pvc_sheet_trim_waste`)

仅适用于 PVC sheet forming only.当 PVC 片材边角废物 离开过程且未内部回用时单独记录。

- 选定流: Waste PVC sheet trim
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_records`
- 来源: `eu-textiles-bat-2022`

###### 聚乙烯片材边角废物 (废物) (`pe_sheet_trim_waste`)

仅适用于 polyethylene sheet forming only.当 聚乙烯片材边角废物 离开过程且未内部回用时单独记录。

- 选定流: Waste polyethylene sheet trim
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_records`
- 来源: `eu-textiles-bat-2022`

###### TPU 片材边角废物 (废物) (`tpu_sheet_trim_waste`)

仅适用于 TPU sheet forming only.当 TPU 片材边角废物 离开过程且未内部回用时单独记录。

- 选定流: Waste thermoplastic polyurethane sheet trim
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_records`
- 来源: `eu-textiles-bat-2022`

##### 基本流

无预定义交换；如实际存在，须新增具体原子行。

### 过程：PVC 手套浸塑成形与热凝胶化 （`pvc_glove_dip_moulding`）

#### 输入

##### 产品流

###### 制备完成的 PVC 增塑糊 (投入) (`plastisol_to_dipping_input`)

仅适用于 PVC 手套浸塑路线。记录跨入本过程的 制备完成的 PVC 增塑糊 净量。

- 选定流: Prepared PVC plastisol
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch_records`
- 来源: `epo-pvc-glove-process-2020`

###### 中压电力 (投入) (`dipping_electricity_input`)

电力用于手模输送、循环、泵、风机或脱模时，单独记录其净投入。

- 选定流: Electricity, medium voltage
- 流属性/单位: Energy / kWh
- 数量规则: 分表能量或从载体特定场址总表按有记录因果关系分配的能量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_meter_records`
- 来源: `epo-pvc-glove-process-2020`

###### 天然气 (投入) (`gelation_natural_gas_input`)

天然气为凝胶化烘箱供热时，单独记录其净投入。

- 选定流: Natural gas
- 流属性/单位: Energy / MJ
- 数量规则: 计量燃料量乘以供应商低位热值
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fuel_records`
- 来源: `us-epa-pvc-processing-1977`

###### 聚二甲基硅氧烷 (投入) (`silicone_release_agent_input`)

仅当手模或壳体使用该特定脱模剂时，单独记录其净投入。

- 选定流: Polydimethylsiloxane
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `epo-pvc-glove-process-2020`

##### 废物流

无预定义交换；如实际存在，须新增具体原子行。

##### 基本流

无预定义交换；如实际存在，须新增具体原子行。

#### 输出

##### 产品流

###### 浸塑成形 PVC 手套壳体 (输出) (`dip_moulded_glove_shell_output`)

适用于转入整理的合格凝胶化壳体。记录从本过程转出的合格 浸塑成形 PVC 手套壳体 数量。

- 选定流: Dip-moulded PVC glove shell
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_intermediate_output_records`
- 来源: `epo-pvc-glove-process-2020`

##### 废物流

###### 不合格 PVC 手套废物 (废物) (`off_spec_pvc_glove_waste`)

仅适用于 PVC 手套浸塑路线。当 不合格 PVC 手套废物 离开过程且未内部回用时单独记录。

- 选定流: Waste off-specification PVC gloves
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_records`
- 来源: `epo-pvc-glove-process-2020`

###### 废 PVC 增塑糊 (废物) (`spent_pvc_plastisol_waste`)

仅适用于 PVC 手套浸塑路线。当 废 PVC 增塑糊 离开过程且未内部回用时单独记录。

- 选定流: Waste PVC plastisol
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_records`
- 来源: `epo-pvc-glove-process-2020`

##### 基本流

###### 化石二氧化碳 (排放) (`gelation_co2_air`)

当on-site fossil fuel combustion serves gelation.将本过程释放的 化石二氧化碳 作为单独物质记录。

- 选定流: Carbon dioxide, fossil
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以同步干烟气体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `us-epa-pvc-processing-1977`, `eu-textiles-bat-2022`

###### 一氧化碳 (排放) (`gelation_co_air`)

当substance-specific monitoring identifies it.将本过程释放的 一氧化碳 作为单独物质记录。

- 选定流: Carbon monoxide
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以同步干烟气体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `us-epa-pvc-processing-1977`, `eu-textiles-bat-2022`

###### 一氧化氮 (排放) (`gelation_no_air`)

当substance-specific monitoring identifies it; keep separate from nitrogen dioxide.将本过程释放的 一氧化氮 作为单独物质记录。

- 选定流: Nitric oxide
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以同步干烟气体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `us-epa-pvc-processing-1977`, `eu-textiles-bat-2022`

###### 二氧化氮 (排放) (`gelation_no2_air`)

当substance-specific monitoring identifies it; keep separate from nitric oxide.将本过程释放的 二氧化氮 作为单独物质记录。

- 选定流: Nitrogen dioxide
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以同步干烟气体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `us-epa-pvc-processing-1977`, `eu-textiles-bat-2022`

###### 二氧化硫 (排放) (`gelation_so2_air`)

当monitoring or fuel sulfur balance identifies it.将本过程释放的 二氧化硫 作为单独物质记录。

- 选定流: Sulfur dioxide
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以同步干烟气体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `us-epa-pvc-processing-1977`, `eu-textiles-bat-2022`

###### 氯乙烯 (排放) (`vinyl_chloride_air`)

仅when PVC-heating measurements identify this substance.将本过程释放的 氯乙烯 作为单独物质记录。

- 选定流: Vinyl chloride
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以同步干烟气体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `us-epa-pvc-processing-1977`, `eu-textiles-bat-2022`

###### 邻苯二甲酸二异壬酯 (排放) (`dinp_air`)

仅for DINP formulations with substance-specific measurement.将本过程释放的 邻苯二甲酸二异壬酯 作为单独物质记录。

- 选定流: Diisononyl phthalate
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以同步干烟气体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `us-epa-pvc-processing-1977`, `eu-textiles-bat-2022`

### 过程：裁切、连接与制品转化 （`cutting_joining_and_conversion`）

#### 输入

##### 产品流

###### CPC 28243 制品转化用塑料片材 (投入) (`plastic_sheet_conversion_input`)

适用于the cut-and-join route; use one declared polymer identity per dataset.记录跨入本过程的 CPC 28243 制品转化用塑料片材 净量。

- 选定流: Plastic sheet for CPC 28243 conversion
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch_records`
- 来源: `us-epa-pvc-processing-1977`

###### 浸塑成形 PVC 手套壳体 (投入) (`glove_shell_conversion_input`)

适用于glove trimming or beading only.记录跨入本过程的 浸塑成形 PVC 手套壳体 净量。

- 选定流: Dip-moulded PVC glove shell
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch_records`
- 来源: `epo-pvc-glove-process-2020`

###### 聚氨酯胶黏剂 (投入) (`polyurethane_adhesive_input`)

仅when this purchased adhesive bonds product components.记录跨入本过程的 聚氨酯胶黏剂 净量。

- 选定流: Polyurethane adhesive
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `eu-solvent-bat-2020`

###### 乙酸乙酯 (投入) (`ethyl_acetate_input`)

仅when the recipe identifies this exact solvent.记录跨入本过程的 乙酸乙酯 净量。

- 选定流: Ethyl acetate
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `eu-solvent-bat-2020`

###### 2-丁酮 (投入) (`butanone_input`)

仅when the recipe identifies this exact solvent.记录跨入本过程的 2-丁酮 净量。

- 选定流: 2-Butanone
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `eu-solvent-bat-2020`

###### 聚酯拉链 (投入) (`polyester_zipper_input`)

仅for models containing this closure.记录跨入本过程的 聚酯拉链 净量。

- 选定流: Polyester zipper
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_component_records`
- 来源: `ec-apparel-footwear-pefcr-2025`

###### 聚丙烯钩环扣 (投入) (`polypropylene_fastener_input`)

仅for models containing this fastener.记录跨入本过程的 聚丙烯钩环扣 净量。

- 选定流: Polypropylene hook-and-loop fastener
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_component_records`
- 来源: `ec-apparel-footwear-pefcr-2025`

###### 中压电力 (投入) (`conversion_electricity_input`)

电力用于裁切、密封、焊接、缝制或修边时，单独记录其净投入。

- 选定流: Electricity, medium voltage
- 流属性/单位: Energy / kWh
- 数量规则: 分表能量或从载体特定场址总表按有记录因果关系分配的能量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_meter_records`
- 来源: `eu-textiles-bat-2022`

##### 废物流

无预定义交换；如实际存在，须新增具体原子行。

##### 基本流

无预定义交换；如实际存在，须新增具体原子行。

#### 输出

##### 产品流

###### 已转化未包装 CPC 28243 产品 (输出) (`converted_unfinished_product_output`)

适用于转入整理或包装的合格已转化产品。记录从本过程转出的合格 已转化未包装 CPC 28243 产品 数量。

- 选定流: Converted unpackaged CPC 28243 product
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_intermediate_output_records`
- 来源: `ec-apparel-footwear-pefcr-2025`

##### 废物流

###### PVC 裁切废料 (废物) (`pvc_cutting_scrap_waste`)

仅适用于所列聚合物路线。当 PVC 裁切废料 离开过程且未内部回用时单独记录。

- 选定流: Waste PVC cutting scrap
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_records`
- 来源: `ec-apparel-footwear-pefcr-2025`

###### 聚乙烯裁切废料 (废物) (`pe_cutting_scrap_waste`)

仅适用于所列聚合物路线。当 聚乙烯裁切废料 离开过程且未内部回用时单独记录。

- 选定流: Waste polyethylene cutting scrap
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_records`
- 来源: `ec-apparel-footwear-pefcr-2025`

###### EVA 裁切废料 (废物) (`eva_cutting_scrap_waste`)

仅适用于所列聚合物路线。当 EVA 裁切废料 离开过程且未内部回用时单独记录。

- 选定流: Waste ethylene-vinyl acetate cutting scrap
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_records`
- 来源: `ec-apparel-footwear-pefcr-2025`

###### TPU 裁切废料 (废物) (`tpu_cutting_scrap_waste`)

仅适用于所列聚合物路线。当 TPU 裁切废料 离开过程且未内部回用时单独记录。

- 选定流: Waste thermoplastic polyurethane cutting scrap
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_records`
- 来源: `ec-apparel-footwear-pefcr-2025`

##### 基本流

###### 乙酸乙酯 (排放) (`ethyl_acetate_air`)

仅当使用该溶剂且有监测或平衡时适用。将本过程释放的 乙酸乙酯 作为单独物质记录。

- 选定流: Ethyl acetate
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以同步干烟气体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `eu-solvent-bat-2020`

###### 2-丁酮 (排放) (`butanone_air`)

仅当使用该溶剂且有监测或平衡时适用。将本过程释放的 2-丁酮 作为单独物质记录。

- 选定流: 2-Butanone
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以同步干烟气体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `eu-solvent-bat-2020`

### 过程：湿法整理与表面处理 （`wet_finishing_and_surface_treatment`）

#### 输入

##### 产品流

###### 已转化未包装 CPC 28243 产品 (投入) (`unfinished_product_finishing_input`)

进行湿法或表面整理时适用。记录跨入本过程的 已转化未包装 CPC 28243 产品 净量。

- 选定流: Converted unpackaged CPC 28243 product
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch_records`
- 来源: `eu-textiles-bat-2022`

###### 工艺水 (投入) (`finishing_process_water_input`)

水用于浸洗、清洗、漂洗或清洁时适用。记录跨入本过程的 工艺水 净量。

- 选定流: Process water
- 流属性/单位: Mass / kg
- 数量规则: 计量进水量减去直接计量回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water_records`
- 来源: `eu-textiles-bat-2022`

###### 次氯酸钠 (投入) (`sodium_hypochlorite_input`)

仅当已声明表面处理配方使用时适用。记录跨入本过程的 次氯酸钠 净量。

- 选定流: Sodium hypochlorite
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `eu-textiles-bat-2022`

###### 硫代硫酸钠 (投入) (`sodium_thiosulfate_input`)

仅当用于淬灭余氯时适用。记录跨入本过程的 硫代硫酸钠 净量。

- 选定流: Sodium thiosulfate
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `eu-textiles-bat-2022`

###### 玉米淀粉 (投入) (`corn_starch_input`)

仅适用于有粉手套产品。记录跨入本过程的 玉米淀粉 净量。

- 选定流: Corn starch
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_chemical_batch_records`
- 来源: `epo-pvc-glove-process-2020`

###### 中压电力 (投入) (`finishing_electricity_input`)

电力用于清洗机、泵、风机、干燥机或加药时适用。记录跨入本过程的 中压电力 净量。

- 选定流: Electricity, medium voltage
- 流属性/单位: Energy / kWh
- 数量规则: 分表能量或从载体特定场址总表按有记录因果关系分配的能量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_meter_records`
- 来源: `eu-textiles-bat-2022`

###### 蒸汽 (投入) (`finishing_steam_input`)

蒸汽跨入整理过程时适用，并与热水分开。记录跨入本过程的 蒸汽 净量。

- 选定流: Steam
- 流属性/单位: Energy / MJ
- 数量规则: 分表能量或从载体特定场址总表按有记录因果关系分配的能量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_meter_records`
- 来源: `eu-textiles-bat-2022`

###### 热水 (投入) (`finishing_hot_water_input`)

热水跨入整理过程时适用，并与蒸汽分开。记录跨入本过程的 热水 净量。

- 选定流: Hot water
- 流属性/单位: Energy / MJ
- 数量规则: 分表能量或从载体特定场址总表按有记录因果关系分配的能量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_meter_records`
- 来源: `eu-textiles-bat-2022`

##### 废物流

无预定义交换；如实际存在，须新增具体原子行。

##### 基本流

无预定义交换；如实际存在，须新增具体原子行。

#### 输出

##### 产品流

###### 整理完成未包装 CPC 28243 产品 (输出) (`finished_unpacked_product_output`)

适用于转入包装的合格质量放行产品。记录从本过程转出的合格 整理完成未包装 CPC 28243 产品 数量。

- 选定流: Finished unpackaged CPC 28243 product
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_intermediate_output_records`
- 来源: `ec-apparel-footwear-pefcr-2025`

##### 废物流

###### PVC 手套浸洗废水 (废物) (`pvc_glove_leaching_wastewater`)

产生所列废物时适用。当 PVC 手套浸洗废水 离开过程且未内部回用时单独记录。

- 选定流: PVC glove leaching wastewater
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water_records`
- 来源: `eu-textiles-bat-2022`

###### 整理设备清洁废水 (废物) (`finishing_cleaning_wastewater`)

产生所列废物时适用。当 整理设备清洁废水 离开过程且未内部回用时单独记录。

- 选定流: Finishing equipment-cleaning wastewater
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water_records`
- 来源: `eu-textiles-bat-2022`

###### 塑料服饰整理废水处理污泥 (废物) (`wastewater_treatment_sludge`)

产生所列废物时适用。当 塑料服饰整理废水处理污泥 离开过程且未内部回用时单独记录。

- 选定流: Wastewater-treatment sludge from plastic apparel finishing
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water_records`
- 来源: `eu-textiles-bat-2022`

##### 基本流

###### 氯 (排放) (`chlorine_air`)

仅when chlorination monitoring identifies it.将本过程释放的 氯 作为单独物质记录。

- 选定流: Chlorine
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以同步干烟气体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `eu-textiles-bat-2022`

###### 氯化物 (排放) (`chloride_water`)

当measured in final discharged effluent.将本过程释放的 氯化物 作为单独物质记录。

- 选定流: Chloride
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以废水排放体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `eu-textiles-bat-2022`

###### 锌 (排放) (`zinc_water`)

仅for zinc-containing formulations with substance-specific analysis.将本过程释放的 锌 作为单独物质记录。

- 选定流: Zinc
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以废水排放体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `eu-textiles-bat-2022`

###### 邻苯二甲酸二异壬酯 (排放) (`dinp_water`)

仅for DINP formulations with substance-specific analysis.将本过程释放的 邻苯二甲酸二异壬酯 作为单独物质记录。

- 选定流: Diisononyl phthalate
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以废水排放体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `eu-textiles-bat-2022`

### 过程：包装与场址公用工程 （`packaging_and_site_services`）

#### 输入

##### 产品流

###### 整理完成未包装 CPC 28243 产品 (投入) (`finished_unpacked_product_input`)

适用于进入最终包装的产品。记录跨入本过程的 整理完成未包装 CPC 28243 产品 净量。

- 选定流: Finished unpackaged CPC 28243 product
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material_batch_records`
- 来源: `ec-apparel-footwear-pefcr-2025`

###### 瓦楞纸箱 (投入) (`corrugated_box_input`)

仅当包含或净消耗该具体包装部件时适用。记录跨入本过程的 瓦楞纸箱 净量。

- 选定流: Corrugated cardboard box
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_records`
- 来源: `ec-pef-recommendation-2021`

###### 纸板盒 (投入) (`paperboard_carton_input`)

仅当包含或净消耗该具体包装部件时适用。记录跨入本过程的 纸板盒 净量。

- 选定流: Paperboard carton
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_records`
- 来源: `ec-pef-recommendation-2021`

###### 聚乙烯袋 (投入) (`polyethylene_bag_input`)

仅当包含或净消耗该具体包装部件时适用。记录跨入本过程的 聚乙烯袋 净量。

- 选定流: Polyethylene bag
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_records`
- 来源: `ec-pef-recommendation-2021`

###### 纸标签 (投入) (`paper_label_input`)

仅当包含或净消耗该具体包装部件时适用。记录跨入本过程的 纸标签 净量。

- 选定流: Paper label
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_records`
- 来源: `ec-pef-recommendation-2021`

###### 木托盘 (投入) (`wood_pallet_input`)

仅当包含或净消耗该具体包装部件时适用。记录跨入本过程的 木托盘 净量。

- 选定流: Wood pallet
- 流属性/单位: Mass / kg
- 数量规则: 称量领用量减去退料、回收物料和库存增加
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_records`
- 来源: `ec-pef-recommendation-2021`

###### 中压电力 (投入) (`packaging_electricity_input`)

电力用于包装、打码、检验或可归属搬运时，单独记录其净投入。

- 选定流: Electricity, medium voltage
- 流属性/单位: Energy / kWh
- 数量规则: 分表能量或从载体特定场址总表按有记录因果关系分配的能量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_meter_records`
- 来源: `eu-textiles-bat-2022`

###### 天然气 (投入) (`site_natural_gas_input`)

该具体燃料用于可归属场址设备时适用。记录跨入本过程的 天然气 净量。

- 选定流: Natural gas
- 流属性/单位: Energy / MJ
- 数量规则: 计量燃料量乘以供应商低位热值
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fuel_records`
- 来源: `eu-textiles-bat-2022`

###### 柴油 (投入) (`site_diesel_input`)

该具体燃料用于可归属场址设备时适用。记录跨入本过程的 柴油 净量。

- 选定流: Diesel fuel
- 流属性/单位: Energy / MJ
- 数量规则: 计量燃料量乘以供应商低位热值
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fuel_records`
- 来源: `eu-textiles-bat-2022`

###### 液化石油气 (投入) (`site_lpg_input`)

该具体燃料用于可归属场址设备时适用。记录跨入本过程的 液化石油气 净量。

- 选定流: Liquefied petroleum gas
- 流属性/单位: Energy / MJ
- 数量规则: 计量燃料量乘以供应商低位热值
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fuel_records`
- 来源: `eu-textiles-bat-2022`

###### 1,1,1,2-四氟乙烷 (投入) (`r134a_makeup_input`)

仅适用于可归属设备购入或补充的 R-134a；其他制冷剂须另设行。记录跨入本过程的 1,1,1,2-四氟乙烷 净量。

- 选定流: 1,1,1,2-Tetrafluoroethane
- 流属性/单位: Mass / kg
- 数量规则: 采购和维护补充量并按库存变化修正
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_refrigerant_records`
- 来源: `ec-pef-recommendation-2021`

##### 废物流

无预定义交换；如实际存在，须新增具体原子行。

##### 基本流

无预定义交换；如实际存在，须新增具体原子行。

#### 输出

##### 产品流

###### 塑料服装和服饰用品（包括手套） (输出) (`reference_product_output`)

这是唯一的定量参考，且必须精确归入 CPC 28243。记录从本过程转出的合格 塑料服装和服饰用品（包括手套） 数量。

- 选定流: Apparel and clothing accessories of plastics (incl. gloves) `8954bc88-041d-4f58-99ce-5d0b20fc794f`
- 流属性/单位: Mass / kg
- 数量规则: 固定为 1 kg 净成品；包装单独记录
- 数值来源模式: 固定值 (`fixed_value`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 1 kg 参考产品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 身份引用 (`identity_reference`)
- 采集协议: None
- 来源:

##### 废物流

###### 瓦楞纸板废物 (废物) (`corrugated_cardboard_waste`)

该具体废物离开场址时适用。当 瓦楞纸板废物 离开过程且未内部回用时单独记录。

- 选定流: Waste corrugated cardboard
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_records`
- 来源: `eu-solvent-bat-2020`, `eu-textiles-bat-2022`

###### 聚乙烯包装薄膜废物 (废物) (`polyethylene_packaging_waste`)

该具体废物离开场址时适用。当 聚乙烯包装薄膜废物 离开过程且未内部回用时单独记录。

- 选定流: Waste polyethylene packaging film
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_records`
- 来源: `eu-solvent-bat-2020`, `eu-textiles-bat-2022`

###### 废木托盘 (废物) (`wood_pallet_waste`)

该具体废物离开场址时适用。当 废木托盘 离开过程且未内部回用时单独记录。

- 选定流: Waste wood pallet
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_records`
- 来源: `eu-solvent-bat-2020`, `eu-textiles-bat-2022`

###### 废活性炭 (废物) (`spent_activated_carbon_waste`)

该具体废物离开场址时适用。当 废活性炭 离开过程且未内部回用时单独记录。

- 选定流: Spent activated carbon
- 流属性/单位: Mass / kg
- 数量规则: 称量的外送处理质量并扣除有记录的内部回用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste_records`
- 来源: `eu-solvent-bat-2020`, `eu-textiles-bat-2022`

##### 基本流

###### 化石二氧化碳 (排放) (`site_co2_air`)

当attributable fossil-fuel combustion occurs.将本过程释放的 化石二氧化碳 作为单独物质记录。

- 选定流: Carbon dioxide, fossil
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以同步干烟气体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `eu-textiles-bat-2022`, `ec-pef-recommendation-2021`

###### 一氧化碳 (排放) (`site_co_air`)

当substance-specific monitoring identifies it.将本过程释放的 一氧化碳 作为单独物质记录。

- 选定流: Carbon monoxide
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以同步干烟气体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `eu-textiles-bat-2022`, `ec-pef-recommendation-2021`

###### 一氧化氮 (排放) (`site_no_air`)

当measured; keep separate from nitrogen dioxide.将本过程释放的 一氧化氮 作为单独物质记录。

- 选定流: Nitric oxide
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以同步干烟气体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `eu-textiles-bat-2022`, `ec-pef-recommendation-2021`

###### 二氧化氮 (排放) (`site_no2_air`)

当measured; keep separate from nitric oxide.将本过程释放的 二氧化氮 作为单独物质记录。

- 选定流: Nitrogen dioxide
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以同步干烟气体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `eu-textiles-bat-2022`, `ec-pef-recommendation-2021`

###### 二氧化硫 (排放) (`site_so2_air`)

当monitoring or fuel sulfur balance identifies it.将本过程释放的 二氧化硫 作为单独物质记录。

- 选定流: Sulfur dioxide
- 流属性/单位: Mass / kg
- 数量规则: 物质特定浓度乘以同步干烟气体积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `eu-textiles-bat-2022`, `ec-pef-recommendation-2021`

###### 1,1,1,2-四氟乙烷 (排放) (`r134a_air`)

适用于equipment-level R-134a inventory loss only.将本过程释放的 1,1,1,2-四氟乙烷 作为单独物质记录。

- 选定流: 1,1,1,2-Tetrafluoroethane
- 流属性/单位: Mass / kg
- 数量规则: 期初充注量加补充量减期末充注量和有记录回收量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg CPC 28243 成品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions_and_discharges`
- 来源: `eu-textiles-bat-2022`, `ec-pef-recommendation-2021`


## 7. 分配与共产品处理

优先采集路线、生产线、批次和产品特定记录避免分配。内部返工不作为废物输出。共享仪表按机器时间、实测产量、热需求或废水量等因果驱动因素分配；无更佳因果关系时才可使用并披露质量分配。可销售副产品单列；本前景包不对废物回收计避免负荷信用。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_batch_records` | all_applicable_production_processes | 物料和中间产品 | 批次和库存记录 | identity; quantity; lot; time; route | 按校准记录核对并保持每种流分开 | kg | 每批或每月 | 代表性报告年度 | 全部前景场址 | 按具体流汇总并归一化 | 校准、规格和核对记录 |
| `cp_chemical_batch_records` | all_applicable_production_processes | 单一化学品 | 配方、SDS、领退料、回收和库存记录 | identity; quantity; lot; time; route | 按校准记录核对并保持每种流分开 | kg | 每批或每月 | 代表性报告年度 | 全部前景场址 | 按具体流汇总并归一化 | 校准、规格和核对记录 |
| `cp_component_records` | cutting_joining_and_conversion | 单一部件 | BOM、件数或长度及单位质量试验 | identity; quantity; lot; time; route | 按校准记录核对并保持每种流分开 | kg | 每批或每月 | 代表性报告年度 | 全部前景场址 | 按具体流汇总并归一化 | 校准、规格和核对记录 |
| `cp_energy_meter_records` | all_applicable_production_processes | 电力、蒸汽和热水分别记录 | 载体特定分表或因果分配 | identity; quantity; lot; time; route | 按校准记录核对并保持每种流分开 | kWh or MJ | 每批或每月 | 代表性报告年度 | 全部前景场址 | 按具体流汇总并归一化 | 校准、规格和核对记录 |
| `cp_fuel_records` | applicable_fuel_using_processes | 天然气、柴油和 LPG 分别记录 | 仪表、发票、库存和供应商热值 | identity; quantity; lot; time; route | 按校准记录核对并保持每种流分开 | MJ | 每批或每月 | 代表性报告年度 | 全部前景场址 | 按具体流汇总并归一化 | 校准、规格和核对记录 |
| `cp_water_records` | wet_finishing_and_surface_treatment | 工艺水和具体废水 | 水表和分流向水量平衡 | identity; quantity; lot; time; route | 按校准记录核对并保持每种流分开 | kg | 每批或每月 | 代表性报告年度 | 全部前景场址 | 按具体流汇总并归一化 | 校准、规格和核对记录 |
| `cp_packaging_records` | packaging_and_site_services | 单一包装部件 | 包装 BOM、领退料和单位质量试验 | identity; quantity; lot; time; route | 按校准记录核对并保持每种流分开 | kg | 每批或每月 | 代表性报告年度 | 全部前景场址 | 按具体流汇总并归一化 | 校准、规格和核对记录 |
| `cp_intermediate_output_records` | all_applicable_production_processes | 合格中间产品和产品 | 称量单、生产计数和质量放行 | identity; quantity; lot; time; route | 按校准记录核对并保持每种流分开 | kg | 每批或每月 | 代表性报告年度 | 全部前景场址 | 按具体流汇总并归一化 | 校准、规格和核对记录 |
| `cp_waste_records` | all_applicable_production_processes | 单一废物 | 称量单、内部回用日志和处理联单 | identity; quantity; lot; time; route | 按校准记录核对并保持每种流分开 | kg | 每批或每月 | 代表性报告年度 | 全部前景场址 | 按具体流汇总并归一化 | 校准、规格和核对记录 |
| `cp_refrigerant_records` | packaging_and_site_services | R-134a | 设备台账、维护日志和钢瓶平衡 | identity; quantity; lot; time; route | 按校准记录核对并保持每种流分开 | kg | 每批或每月 | 代表性报告年度 | 全部前景场址 | 按具体流汇总并归一化 | 校准、规格和核对记录 |
| `cp_emissions_and_discharges` | applicable_emitting_processes | 单一基本物质 | 同步物质浓度与流量或物质平衡 | identity; quantity; lot; time; route | 按校准记录核对并保持每种流分开 | kg | 每批或每月 | 代表性报告年度 | 全部前景场址 | 按具体流汇总并归一化 | 校准、规格和核对记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化数量 = 可归属行数量 / CPC 28243 合格产品净质量 | 可归属数量；合格产品质量 | 每 1 kg 参考产品的数量 | `ec-pef-recommendation-2021` |
| `calc_shared_meter_allocation` | 共享载体仪表 | 分配载体 = 计量载体 × 有记录因果驱动因素 / 驱动因素总量 | 仪表；机器时间、产量或需求 | 载体特定分配能量 | `eu-textiles-bat-2022` |
| `calc_stack_substance_load` | 每种具体空气物质 | 质量 = 同步浓度 × 修正干气体积 | 浓度；气体流量；时间；水分 | 具体物质 kg | `eu-textiles-bat-2022`, `eu-solvent-bat-2020` |
| `calc_effluent_substance_load` | 每种具体水体物质 | 质量 = 同步浓度 × 排放水量 | 浓度；水量；采样代表性 | 具体物质 kg | `eu-textiles-bat-2022` |
| `calc_r134a_loss` | R-134a 排入空气 | 损失 = 期初充注量 + 补充量 − 期末充注量 − 有记录回收量 | 设备充注和维护记录 | R-134a 排放 kg | `ec-pef-recommendation-2021` |
| `calc_solvent_balance` | 每种具体溶剂 | 未回收量 = 期初 + 采购 − 期末 − 产品保留 − 回收 − 废物 | 物质特定库存、采购、产品、回收和废物 | 未以其他方式核算的物质 kg | `eu-solvent-bat-2020` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | 产品分类、型号、尺寸、聚合物组成、功能和净质量解析到同一放行销售单元。 | 规格、仪表、实验室、质量平衡和提供方审查记录 |
| `dq_temporal` | all foreground rows | 使用代表性连续 12 个月或论证较短完整生产期；分子与分母时期一致。 | 规格、仪表、实验室、质量平衡和提供方审查记录 |
| `dq_technology` | all processes | 识别成形、连接、烘箱、整理、治理和处理技术；重大差异路线分开。 | 规格、仪表、实验室、质量平衡和提供方审查记录 |
| `dq_mass_balance` | materials, product, wastes, and emissions | 闭合聚合物、溶剂、水、制冷剂和产品平衡并调查缺口。 | 规格、仪表、实验室、质量平衡和提供方审查记录 |
| `dq_atomic_identity` | all inventory rows | 每行仅保留一种具体物料、载体、废物或基本物质；未列身份须新增行。 | 规格、仪表、实验室、质量平衡和提供方审查记录 |
| `dq_provider_links` | purchased inputs | 连接精确上游提供方数据集，或披露每个未解析连接且不得用集合流替代。 | 规格、仪表、实验室、质量平衡和提供方审查记录 |

## 9. 校验规则

1. `val_reference_identity`: 参考流必须为 Product、CPC 28243、Mass、Units of mass、kg 及已确认 UUID。
2. `val_reference_amount`: 归一化后净产品输出恰为 1 kg；包装质量不含在内。
3. `val_route_atomicity`: 每张卡仅含一个具体交换，且实际路线条件成立。
4. `val_carrier_separation`: 电力、蒸汽、热水、天然气、柴油、LPG、R-134a 及每种物料、废物、排放保持分开。
5. `val_no_estimate_range`: 不得使用 AI、作者或推理估算数量范围；缺失数量保持前景记录。
6. `val_balances`: 聚合物、溶剂、水、制冷剂和产品平衡与记录闭合。
7. `val_bilingual_identity`: EN/ZH 的 process_id、direction、flow_type、row_id、顺序、受控值、source_id 和 UUID 一致。
8. `val_uuid_gate`: 非参考 UUID 仅在混合检索与 state-code-100 直读双核确认后添加。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明 CPC 28243 产品和路线的场址特定工厂门前景数据包。 |
| downstream_use | 连接精确上游提供方及下游配送、使用和生命末期，构建生命周期模型。 |
| allowed_use | 通过校验后的产品特定清单、热点分析、供应商协作和下游 LCA。 |
| excluded_use | CPC 通用默认值、功能或寿命不同产品的无依据比较、法规符合性声明或替代 CPC 28250 方法。 |
| required_metadata | 全部参考流限定信息、路线、场址、报告期、分配、截断、提供方、测量、不确定性及去向。 |
| required_quality_disclosure | 原始数据占比、仪表/实验室覆盖、平衡闭合、未解析 UUID/提供方、路线排除、分配、缺失分析物和代表性。 |
| update_trigger | 配方、功能、厚度、寿命、技术、能源、制冷剂、处理、包装、场址或时期变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 28243 精确范围及 CPC 28250 排除边界。 |
| `ec-pef-recommendation-2021` | `method_factor` | Commission Recommendation (EU) 2021/2279 on the Environmental Footprint methods, https://environment.ec.europa.eu/document/download/cb899bd7-bb06-491d-9989-c856a401fcd0_en | 生命周期方法、质量、核查、包装、能源、运输和生命末期接口。 |
| `ec-apparel-footwear-pefcr-2025` | `official_guidance` | European Commission, New EU rules for measuring environmental impact of clothes and shoes, 25 June 2025, https://environment.ec.europa.eu/news/new-eu-rules-measuring-environmental-impact-clothes-and-shoes-2025-06-25_en | 服装生命周期框架及材料中立评估。 |
| `eu-textiles-bat-2022` | `standard` | Commission Implementing Decision (EU) 2022/2508, BAT conclusions for the textiles industry, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508 | 物料、化学品、水、能源、废物、废水和排放清单规则。 |
| `eu-solvent-bat-2020` | `standard` | Commission Implementing Decision (EU) 2020/2009, BAT conclusions for surface treatment using organic solvents, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32020D2009 | 物质特定溶剂平衡、回收和排放规则。 |
| `us-epa-pvc-processing-1977` | `official_guidance` | United States Environmental Protection Agency, Vinyl Chloride Monomer Emissions from the Polyvinyl Chloride Processing Industries: Final Report, EPA-450/3-77-031, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100FY8R.TXT | PVC 薄膜、增塑糊、浸塑和排放点拆分。 |
| `epo-pvc-glove-process-2020` | `literature` | European Patent Office, EP 3081104 B1, Manufacturing process for PVC disposable gloves, 22 April 2020, https://data.epo.org/publication-server/rest/v1.0/publication-dates/20200422/patents/EP3081104NWB1/document.pdf | PVC 手套混合、浸塑、凝胶化、清洁和脱模路线证据。 |
